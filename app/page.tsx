import Image from "next/image";
import { Fragment } from "react";

export default function Home() {
  return (
   <>
      <div className="bg-black">
        <p className="text-center text-sm md:text-base text-brand-font-white p-2">Sign up and get 20% off to your first order <span className="font-semibold underline cursor-pointer">Sign Up Now</span></p>
      </div>
      
      <div className="flx p-6 justify-between">
          <div className="flx gap-3 place-items-center">
            <Image src="/icons/menu.svg" className="pointer md:hidden" width={20} height={20} alt="mobile-menuIcon"/>
            <p className="text-black font-extrabold uppercase text-2xl ml-4">shop.co</p>
            <span className="pointer hover:text-violet-300 ml-10">Shop</span>
            <Image src="/icons/arrowDown.svg" className="pointer" width={16} height={16} alt="mobile-menuIcon"/>

            <span className="pointer hover:text-violet-300 ml-2">On Sale</span>
            <span className="pointer hover:text-violet-300 ml-2">New Arrivals</span>
            <span className="pointer hover:text-violet-300 ml-2">Brands</span>
          </div>
          <div className="flx gap-2">
            <input className="bg-brand-bg-serbg border-0 rounded-lg pl-4 text-sm" placeholder="Search For Products"/>
            <Image src="/icons/search.svg" className="pointer md:hidden" width={20} height={20} alt="mobile-menuIcon"/>
            <Image src="/icons/cart.svg" className="pointer" width={20} height={20} alt="mobile-menuIcon"/>
            <Image src="/icons/user.svg" className="pointer" width={20} height={20} alt="mobile-menuIcon"/>
          </div>
      </div>
   </>
  );
}
