import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Charity() {
  return (
    <div className="flex justify-between items-center my-56 max-w-[90%] mx-auto ">

        <div className="w-[23%]">
            <h1 className="font-cinzel uppercase text-[2rem] mb-8 text-primary">Landacraft and Charity</h1>
            <p className=" text-Gray-Shade3 mb-10">Handicraft has the distinction of working with numerous charities to sell and offer their creative items.</p>
            <Link className="border border-primary rounded-full p-2 px-4 text-primary hover:text-primary-Shade3 hover:border-primary-Shade3" href={'/'} >See More</Link>
        </div>

        <div className=" group relative w-[302px] h-[325px] overflow-hidden rounded-2xl ">
            <Image
                className=" top-2 bottom-0 hover:scale-125 transition-all "
                src={'/images/charity/charity3.png'}
                alt="logo"
                layout='fill'
            />
            <div className="w-10/12 text-center absolute bottom-6 right-0 left-0 mx-auto  backdrop-blur-xl py-3  bg-[#ffffffc2] group-hover:bg-primary group-hover:text-white rounded-md transition-all">
                <p className=" font-bold pb-2">Name Of The Handicraft</p>
                <p className="">Ahmad Gouse</p>
            </div>
        </div>

        <div className=" group relative w-[302px] h-[325px] overflow-hidden rounded-2xl">
            <Image
                className="top-2 w-full bottom-0 hover:scale-125 transition-all"
                src={'/images/charity/charity2.png'}
                alt="logo"
                layout='fill'
            />
            <div className="  w-10/12 text-center absolute bottom-6 right-0 left-0 mx-auto  backdrop-blur-xl py-3  bg-[#ffffffc2] rounded-md transition-all group-hover:bg-primary group-hover:text-white">
                <p className=" font-bold pb-2">Name Of The Handicraft</p>
                <p className="">Ahmad Gouse</p>
            </div>
        </div>

        <div className="group relative w-[302px] h-[325px] overflow-hidden rounded-2xl">
            <Image
                className="top-2 w-full bottom-0 hover:scale-125 transition-all"
                src={'/images/charity/charity1.png'}
                alt="logo"
                layout='fill'
            />
            <div className=" w-10/12 text-center absolute bottom-6 right-0 left-0 mx-auto  backdrop-blur-xl py-3  bg-[#ffffffc2] group-hover:bg-primary group-hover:text-white rounded-md transition-all">
                <p className=" font-bold pb-2">Name Of The Handicraft</p>
                <p className=" ">Ahmad Gouse</p>
            </div>
        </div>
    </div>
  )
}
