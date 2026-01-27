import React from 'react'
import Header from '../Auth/other/Header'
import CreateTask from '../Auth/other/CreateTask'

const AdminDashboard = () => {
    return (
        <div className='h-screen w-full bg-[#111] p-7'>
            {/* Header Component - Ensure your Header.js uses flex justify-between */}
            <Header />
            <CreateTask />
            
        </div>
    )
}

export default AdminDashboard