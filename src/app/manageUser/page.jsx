'use client';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import Link from 'next/link';

const ManageUsers = () => {

    const [userList, setUserList] = useState([]);

    const fetchUsers = async () => {
        const res = await fetch('http://localhost:5000/user/getall');
        console.log(res.status);

        const data = await res.json();
        console.table(data);
        setUserList(data);
    }

    useEffect(() => {
        fetchUsers();
    }, [])

    const deleteUser = async (id) => {
        const res = await fetch(`http://localhost:5000/user/delete/${id}`,{
            method:'DELETE'
        })
        console.log(res.status);
        if(res.status===200){
            toast.success('user Deleted Successfully')
            fetchUsers();
        }
    }

    return (
        <div className='pt-5'>

            <h3 className='text-center fw-bold'>Manage Users</h3>

            <div className='container'>

                <table className='table '>

                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Created At</th>
                            <th colSpan={2} className=''>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            userList.map((user) => {
                                return <tr key={user._id}>
                                    <td>{user._id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{new Date(user.createdAt).toDateString()}</td>
                                    <td>
                                        <Link href={`/update-user/${user._id}`} className='btn btn-primary'>Edit</Link>
                                    </td>
                                    <td>
                                        <button onClick={()=>{deleteUser(user._id)}} className='btn btn-danger'>Delete</button>
                                    </td>
                                </tr>
                            })
                        }
                    </tbody>

                </table>

            </div>

        </div>
    )
}

export default ManageUsers;