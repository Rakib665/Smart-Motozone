import { async } from '@firebase/util';
import React, { useEffect } from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../../SharedPages/Loading';



const Register = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [signInWithGoogle, gUser, gLoading, gerror] = useSignInWithGoogle(auth);
    const navigate = useNavigate()

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);

    //   const [token] = useToken(user || gUser)
      
      const [updateProfile, updating, updateError] = useUpdateProfile(auth);



    
    let errorMessage;
   useEffect(()=>{
    if(user || gUser){
        navigate('/home')

    }
   },[])

    if (loading || gLoading || updating) {
        return <Loading></Loading>
    }
    if (error || gerror || updateError) {
        errorMessage = <p className='text-red-500'><span className='text-red'>{error?.message} {gerror?.message} {updateError?.message}</span></p>
    }



    //   const navigate = useNavigate()



    const onSubmit = async data => {
        // console.log(data)
       await createUserWithEmailAndPassword(data.email, data.password)
       await updateProfile({displayName: data.name})
       console.log('update successfully')
    //    console.log(data)

    };


    return (
        <div className='flex h-screen justify-center items-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-2xl font-bold">Register</h2>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        {/* for name  */}
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="input input-bordered w-full max-w-xs"
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: 'name is required'
                                    },
                                   
                                })}
                            />
                            <label className="label">
                                {errors.name?.type === 'required' && <span className="text-red-500 label-text-alt">{errors.name.message}</span>}


                            </label>
                        </div>

                        {/* for email validation */}
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="input input-bordered w-full max-w-xs"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'email is required'
                                    },
                                    pattern: {
                                        value: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
                                        message: 'provide a valid email'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.email?.type === 'required' && <span className="text-red-500 label-text-alt">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="text-red-500 label-text-alt">{errors.email.message}</span>}


                            </label>
                        </div>

                        {/* for password validation */}
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                placeholder="Your Password"
                                className="input input-bordered w-full max-w-xs"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'password is required'
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'password must be 6 characters or longer'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}


                            </label>
                        </div>
                        {errorMessage}

                        <input type="submit" className='btn w-full' value='Register' />
                    </form>
                    <p>Already create an account / <Link className='text-secondary' to='/login'>Go to Login page</Link></p>

                    <div className="divider">OR</div>
                    <button className="btn btn-outline" onClick={() => signInWithGoogle()}>Continue With Google</button>



                </div>
            </div>
        </div>
    );
};

export default Register;