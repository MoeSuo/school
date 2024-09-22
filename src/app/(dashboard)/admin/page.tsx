import UserCard from '@/components/UserCard'
import React from 'react'

const AdminPage = () => {
  return (
    <div className='flex gap-7 p-7 flex-col md:flex-row'>
      {/* left side div */}
      <div className='w-full md:w-2/3'>
    {/* USER CARD */}
      <div className='flex justify-between gap-3 flex-wrap'>
      <UserCard type='student' />
      <UserCard type='teacher' />
      <UserCard type='parent' />
      <UserCard type='staff' />
      </div>
      </div>
        {/* right side div */}
      <div className='w-full md:w-1/3 bg-sky-100 '>
        right side div
      </div>
        
    </div>
  )
}

export default AdminPage