import React from 'react'
import Link from "next/link";
import Image from 'next/image';

export default function Home() {
  return (
  
    <div className="flex justify-between max-w-[90%] mx-auto my-20 ">


        <div className="w-1/2 my-auto">
            <h1 className='font-cinzel uppercase text-[2.7rem] mb-3 text-primary' >Landacrafts </h1>
            <h1 className='font-cinzel uppercase text-[2.7rem] mb-3 text-primary'>Where Art Meets Hearts</h1>
            <p className='my-10 text-Gray'>A streamlined platform for marketing verified handcrafts using NFT and AR.</p>
            <div className="flex">
                <Link href={'/'} className=" bg-Gray-Tint1 m-2 py-2 px-4 flex rounded-xl ">
                    <div className='relative w-[40px] h-[40px]'>
                        <Image 
                            src={'/icons/google-play-icon.png'}
                            alt="logo"
                            layout='fill'
                        />
                    </div>
                    <div className='px-5'>
                        <p className=''>Get it on</p>
                        <p className=' font-semibold pr-4'>Google Play</p>
                    </div>
                </Link>
                <Link href={'/'} className=" bg-Gray-Tint1 m-2 py-2 px-4 flex rounded-xl ">
                    <div className='relative w-[42px] h-[42px]'>
                        <Image    
                            src={'/images/icons/apple-store-icon.png'}
                            alt="logo"
                            layout='fill'
                        />
                    </div>
                    <div className='px-5'>
                        <p className=' '>Download on the</p>
                        <p className=' font-semibold'>Apple Store</p>
                    </div>
                </Link>
            </div>
        </div>

        <div className=" rounded-[18rem] overflow-hidden relative w-[628px] h-[414px]" >
            <Image
                className='object-cover' 
                src={'/images/baner/haeder-image.png'}
                alt="logo"
                layout='fill'
            />
        </div>
    </div>  

  )
}
