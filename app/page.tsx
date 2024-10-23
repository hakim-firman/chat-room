import { Button } from '@/components/ui/button'
import React from 'react'

const page = () => {
  return (
    <div className='max-w-3xl mx-auto md:py-10 h-screen'>
      <div className="h-full border rounded-md">
        <div className="h-20 ">
          <div className='p-5 border-b flex justify-between items-center'>
            <div>
              <h1 className='textxl font-bold'>Chat Room</h1>
              <div className='flex items-center gap-1'>
                <div className="h-4 w-4 bg-green-500 rounded-full animate-pulse">

                </div>
                <h1 className='text-sm text-gray-200'>2 Online</h1>
              </div>
            </div>
            <div>
              <Button >Login</Button>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default page