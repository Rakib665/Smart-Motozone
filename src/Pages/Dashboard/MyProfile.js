import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const MyProfile = () => {
  const [user] = useAuthState(auth)
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) =>{
    const profile = {
      name: data.name,
      email: data.email,
      education:data.education,
      phoneNum: data.phone,
      address: data.address,
      linkdin: data.linkdin
    }
    fetch('https://rocky-bayou-52722.herokuapp.com/profile', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(profile)
    })
    .then(res => res.json())
    .then(data => {
      toast.success('successfully add profile in database')
    })
  }

  return (
    <div class="hero min-h-screen" >
+
      <div class="hero-overlay bg-base-200">
      <h2 className='text-4xl uppercase font-bold text-gray-600 mt-2 mb-0.5 text-center'>My Profile!</h2>

      </div>
      <div class="hero-content text-center w-full">
        <div class="max-w-md">
         <form onSubmit={handleSubmit(onSubmit)}>

         <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input

                        type="text"readOnly defaultValue={user.displayName} placeholder="name"
                        {...register("name")}
                        class="input input-bordered w-full " />


                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input
                        type="email" readOnly defaultValue={user.email} placeholder="email"
                        {...register("email")}
                        class="input input-bordered w-full max-w-xs" />

                    <label className="label">
                        <span className="label-text">Education</span>
                    </label>
                    <input
                        type="text"  placeholder="education"
                        {...register("education")}
                        class="input input-bordered w-full max-w-xs" />

                    <label className="label">
                        <span className="label-text">Address</span>
                    </label>
                    <input
                        type="text" placeholder="address"
                        {...register("address")}
                        class="input input-bordered w-full max-w-xs" />
                    <label className="label">
                        <span className="label-text">Phone Number</span>
                    </label>
                    <input
                        type="text" placeholder="phone"
                        {...register("phone")}
                        class="input input-bordered w-full max-w-xs" />
                    <label className="label">
                        <span className="label-text">Linkdin Profile</span>
                    </label>
                    <input
                        type="text" placeholder="linkdin"
                        {...register("linkdin")}
                        class="input input-bordered w-full max-w-xs" />

                        <input type="submit" className='btn btn-primary mt-2' value='Submit' />


         </form>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;