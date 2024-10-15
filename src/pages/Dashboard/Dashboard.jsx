import React from 'react'

const Dashboard = () => {
  
  return (
    <div className='flex flex-col'>
      <div className='text-2xl font-semibold'>
        Dashboard
      </div>
      <div className='mt-6 bg-[#f7d7da] text-[#85585c] rounded-sm px-2 py-1 font-medium'>
        This template is under maintenance!
      </div>
      <div className='grid grid-cols-4 justify-items-stretch gap-3'>
        {/* box 1 */}
        <div className='bg-[#e0f4fc] rounded-md my-5 shadow-md flex flex-col  justify-center h-32 p-6 text-[#155357]'>
            <div className='font-bold text-xl my-2'>
                $153.000
            </div>
            <div>
                Revenue
            </div>
        </div>
        {/* box 2 */}
        <div className='bg-[#fffac3] rounded-md my-5 shadow-md flex flex-col  justify-center h-32 p-6 text-[#e29241]'>
            <div className='font-bold text-xl my-2'>
                20
            </div>
            <div>
                Sales
            </div>
        </div>
        {/* box 3 */}
        <div className='bg-[#c0dcfc] rounded-md my-5 shadow-md flex flex-col  justify-center h-32 p-6 text-[#2c5aac]'>
            <div className='font-bold text-xl my-2'>
                20
            </div>
            <div>
                Customer
            </div>
        </div>
        {/* box 4 */}
        <div className='bg-[#ebeff2] rounded-md my-5 shadow-md flex flex-col  justify-center h-32 p-6 text-[#434660]'>
            <div className='font-bold text-xl my-2'>
                20
            </div>
            <div>
                Employee
            </div>
        </div>
      </div>

      <div className='grid grid-cols-2 justify-items-stretch gap-3'>
        <div className='bg-white rounded-md my-5 shadow-custom flex flex-col  justify-center h-24 p-6 text-[#32827a]'>
          <h2 className='font-semibold text-xl'>
            Chart Daily
          </h2>
        </div>
        <div className='bg-white rounded-md my-5 shadow-custom flex flex-col  justify-center h-24 p-6 text-[#32827a]'>
          <h2 className='font-semibold text-xl'>
            Todo List
          </h2>
        </div>
      </div>
    </div>
  )
}

export default Dashboard