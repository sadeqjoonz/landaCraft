import React from 'react'
import Image from 'next/image'
export default function Arrival() {
  return (

    <div className='bg-primary-Tint3'>
        <div className='max-w-[90%] mx-auto flex justify-between'>
            <h3>New Arrival</h3>
            <p>See All</p>
        </div>
        <div className="flex justify-between max-w-[90%] mx-auto">


            <div className="bg-white w-[23%] rounded-[22px]">
                <div className='mx-auto my-2 relative w-[286px] h-[256px]'>
                    <Image
                        className=' object-cover rounded-[20px]'
                        src={'/images/arrival/arrival4.jpg'}
                        alt="logo"
                        layout='fill'
                    />
                </div>
                <div className='px-6 py-2'>
                    <h4 className=' font-bold '>Name Of The Handicarft</h4>
                    <p className="py-2">Randy Bator</p>
                    <div className="py-2 flex justify-between items-center">
                        <span className="font-bold">$ 6500</span>
                        <span className="py-[6px] px-[13px] rounded-lg bg-primary text-xl text-white">+</span>
                    </div>
                </div>
            </div>


        </div>
    </div>
  )
}
