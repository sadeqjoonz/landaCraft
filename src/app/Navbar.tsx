import Link from "next/link";
import Image from "next/image";
import Bag from "../../public/icons/Bag";

export default function Navbar() {


  const navbarItems = ["Category" , "Best Seller" , "New Arivall" , "Featured On Sale" , "Contact Us"]

  return (
       <nav className="flex justify-between items-center max-w-[90%] mx-auto my-5">
            <div className=" relative w-[67px] h-[72px]">
                <Image
                    className='object-cover' 
                    src={'/images/navbar/navbar-logo.png'}
                    alt="logo"
                    layout='fill'
                />
            </div>
        
            <div className="flex justify-between items-center">
                {navbarItems.map((e, index) => (
                    <Link href={'/'} className="px-5 transition-all hover:text-primary-Shade1" key={index}>{e}</Link>
                ))}
            </div>

            <div className="flex items-center">
                <Link className="px-5 hover:text-primary-Shade1 transition-all" href={"/"}>Sign In</Link>
                <Link className="px-5 hover:bg-primary-Shade3 transition-all bg-primary rounded-full py-2 text-white mr-5" href={"/"}>Join Now</Link>
                <Link href={'/'}><Bag/></Link>
            </div>
        </nav>
  );
}
