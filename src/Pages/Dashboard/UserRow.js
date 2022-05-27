import React from 'react';
import { toast } from 'react-toastify';

const UserRow = ({user}) => {
    const makeAdmin = () => {
        fetch(`http://localhost:5000/user/admin/${user?.email}`, {
          method: 'PUT',
          headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
          }
        })
          .then(res => {
            if (res.status === 403) {
              toast.error('failed to make an admin')
            }
            return res.json()
          })
          .then(data => {
            if (data.modifiedCount > 0) {
              toast.success('successfully made an admin')
            }
    
          })
      }
    return (
        <tr>
        <td>{user.email}</td>
        <td><button onClick={()=>makeAdmin()}  class="btn btn-xs">Make Admin</button></td>
    </tr>
    );
};

export default UserRow;