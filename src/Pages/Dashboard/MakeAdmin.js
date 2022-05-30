import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../../SharedPages/Loading';
import UserRow from './UserRow';


const MakeAdmin = () => {
    const {data: users,isLoading,refetch} = useQuery('users',()=> fetch('https://rocky-bayou-52722.herokuapp.com/users',{
        method:'GET',
        headers: {
          authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
      }).then(res => res.json()))
      if(isLoading){
          return <Loading></Loading>
      }
    
    return (
        <div>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th>User Email</th>
                            <th>Make Admin</th>
                        </tr>
                    </thead>
                    <tbody>
                       {
                           users.map(user => <UserRow
                           key={user._id}
                           user={user}
                           refetch = {refetch}
                           ></UserRow> )
                       }
                       
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MakeAdmin;