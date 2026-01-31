import React from 'react'
// Sahi paths yahan hain
import Header from '../Auth/other/Header';
import CreateTask from '../Auth/other/CreateTask';
import AllTask from '../Auth/other/AllTask';

const AdminDashboard = (props) => {
    return (
        <div className='h-screen w-full bg-[#111] p-10'>
            {/* Logout ke liye changeUser pass karna zaroori hai */}
            <Header changeUser={props.changeUser} data={props.data} />
            <CreateTask />
            <AllTask />
        </div>
    )
}

export default AdminDashboard