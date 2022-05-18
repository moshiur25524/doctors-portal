import React, { useEffect } from 'react';
import auth from '../../firebase.init';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import Loading from '../Shared/Loading';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { async } from '@firebase/util';
import useToken from '../../Hooks/useToken';

const Login = () => {

    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || "/";

    const { register, formState: { errors }, handleSubmit } = useForm();
    


    const onSubmit = data => {
        console.log(data)
        signInWithEmailAndPassword(data.email, data.password)
    };
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);

    const [token] = useToken(user || gUser)
    
    const [sendPasswordResetEmail, sending, ReError] = useSendPasswordResetEmail(
        auth
    );

    useEffect(() => {
        if (token) {
            navigate(from, { replace: true });
        }
    }, [token, from, navigate])

    const handleResetPassword = async (event) => {
        const email = event.target.email.value
        await sendPasswordResetEmail(email)
    }

    let signInError;
    if (loading || gLoading) {
        return <Loading></Loading>
    }
    if (error) {
        signInError = <p className='text-red-500'><small>{error?.message || gError?.message}</small></p>
    }

    if (user || gUser) {
        navigate(from, { replace: true })
    }

    return (
        <div className='flex justify-center items-center h-screen'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h1 className='text-center text-2xl font-bold'>Login</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                name='email'
                                placeholder="Your Email"
                                className="input input-bordered w-full max-w-xs"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Email is Required'
                                    },
                                    pattern: {
                                        value: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
                                        message: 'Invalid Email Field' // JS only: <p>error message</p> TS only support string
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}

                            </label>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                name='password'
                                placeholder="Your password"
                                className="input input-bordered w-full max-w-xs"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'Password is Required'
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'Must be 6 characters or longer' // JS only: <p>error message</p> TS only support string
                                    }
                                })}
                            />
                            <p>Forget passwod ? <span className='text-primary' onClick={handleResetPassword}>Reset password</span></p>
                            <label className="label">
                                {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                            </label>
                        </div>
                        {signInError}
                        <input className='btn w-full max-w-xs' type="submit" value='LOGIN' />
                        <p>New to Doctors Portal ? <Link className='text-secondary' to='/signup'>Create new Account</Link></p>
                    </form>
                    <div className="divider">OR</div>
                    <button className="btn btn-outline btn-info" onClick={() => signInWithGoogle()}>Continue With Google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;