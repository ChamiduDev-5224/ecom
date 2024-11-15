"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import {urls} from './utility/info'
export default function Home() {
  const [isHovered, setIsHovered] = useState(false);
  const [hasHydrated, setHasHydrated] = useState(false);

console.log(urls);

  useEffect(() => {
    setHasHydrated(true);
  }, []);

  useEffect(() => {
    if (isHovered) {
      const timer = setTimeout(() => {
        setIsHovered(false);
      }, 1000);
      return () => clearTimeout(timer); // Clear timeout on cleanup
    }
  }, [isHovered]);

  if (!hasHydrated) {
    return null; // Prevent render until client-side hydration is complete
  }

  return (
    <div>
      <div className="bg-black">
        <p className="text-center text-sm md:text-base text-brand-font-white p-2">
          Sign up and get 20% off your first order{" "}
          <span className="font-semibold underline cursor-pointer">
            Sign Up Now
          </span>
        </p>
      </div>

      <div className="flxr p-6 justify-between">
        <div className="flxr gap-3 place-items-center">
          <Image
            src="/icons/menu.svg"
            className="pointer lg:hidden"
            width={20}
            height={20}
            alt="mobile-menuIcon"
          />
          <p className="text-black font-extrabold uppercase text-2xl ml-4">
            ecom.co
          </p>
          <span className="pointer ml-10 hidden lg:block">Shop</span>
          <Image
            src="/icons/arrowDown.svg"
            onMouseEnter={() => setIsHovered(true)}
            className="pointer hidden lg:block"
            width={16}
            height={16}
            alt="mobile-menuIcon"
          />
          {isHovered && (
            <div className="absolute bg-brand-bg-sub rounded-md w-60 delay-150 h-60 top-[90px] left-[200px] opacity-100">
              <ul>
                <li>A</li>
                <li>B</li>
                <li>C</li>
              </ul>
            </div>
          )}
          <span className="pointer hover:text-violet-300 hidden lg:block ml-2">
            On Sale
          </span>
          <span className="pointer hover:text-violet-300 hidden lg:block ml-2">
            New Arrivals
          </span>
          <span className="pointer hover:text-violet-300 hidden lg:block ml-2">
            Brands
          </span>
        </div>

        <div className="flxr gap-2 lg:pr-4">
          <div className="hidden lg:flxr bg-brand-bg-serbg text-brand-bg-sub rounded-2xl pl-4">
            <Image
              src="/icons/search.svg"
              className="pointer text-brand-bg-sub"
              width={20}
              height={20}
              alt="search-icon"
            />
            <input
              className="bg-transparent text-black border-0 pl-4 mr-5 place-items-center focus:shadow-2xl md:w-[150px] lg:w-[340px] xl:lg:w-[500px] text-sm"
              placeholder="Search For Products"
            />
          </div>
          <Image
            src="/icons/search.svg"
            className="pointer lg:hidden"
            width={20}
            height={20}
            alt="search-icon"
          />
          <Image
            src="/icons/cart.svg"
            className="pointer"
            width={20}
            height={20}
            alt="cart-icon"
          />
          <Image
            src="/icons/user.svg"
            className="pointer"
            width={20}
            height={20}
            alt="user-icon"
          />
        </div>
      </div>

      <section className="bg-brand-bg-sub h-[80.5vh] flxc lg:flxr">
        <div className="mt-16 px-10 lg:px-0">
          <p className="section-span">FIND CLOTHES</p>
          <p className="section-span">THAT MATCHES</p>
          <p className="section-span">YOUR STYLE</p>
          <p className="font-thin relative mt-4 lg:pl-16 opacity-80">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>
          <button className="bg-black text-white text-center py-2 px-10 w-full lg:w-fit rounded-3xl relative lg:ml-16 mt-4  hover:drop-shadow-2xl">
            Shop Now
          </button>
          <div className="text-black flxr justify-center lg:pl-16 gap-8 md:gap-16 lg:gap-20 my-10">
            <div className="w-28">
              <h2 className="font-bold text-4xl">200+</h2>
              <h4 className="font-thin text-xs">International Brands</h4>
            </div>

            <div>
              <h2 className="font-bold text-4xl">2,000+</h2>
              <h4 className="font-thin text-xs">High-Quality Products</h4>
            </div>

            <div>
              <h2 className="font-bold text-4xl">30,000+</h2>
              <h4 className="font-thin text-xs">Happy Customers</h4>
            </div>
          </div>
        </div>
        <div className="relative">
          <Image
            src="/icons/start-s.svg"
            className="pointer absolute top-28 left-40"
            width={30}
            height={30}
            alt="start small-icon"
          />
          <Image
            src="/icons/sectionOne.webp"
            className="pointer object-cover relative h-full object-center"
            width={1000}
            height={1000}
            alt="section-background"
          />
          <Image
            src="/icons/start-l.svg"
            className="pointer absolute top-4 left-3/4"
            width={60}
            height={40}
            alt="start large-icon"
          />
        </div>
      </section>
      {/* brands */}
      <div className=" h-[10vh] bg-black flxr justify-between lg:px-16 z-50">
        <Image
          src="/icons/brands/b2.svg"
          className="w-10 lg:w-24"
          width={100}
          height={30}
          alt="brand 2"
        />
        <Image
          src="/icons/brands/b5.svg"
          className="w-10 lg:w-24"
          width={100}
          height={30}
          alt="brand 5"
        />
        <Image
          src="/icons/brands/b1.svg"
          className="w-10 lg:w-24"
          width={100}
          height={30}
          alt="brand 1"
        />
        <Image
          src="/icons/brands/b3.svg"
          className="w-10 lg:w-24"
          width={100}
          height={30}
          alt="brand 3"
        />
        <Image
          src="/icons/brands/b4.svg"
          className="w-10 lg:w-24"
          width={100}
          height={30}
          alt="brand 4"
        />
      </div>
      {/*End brands */}

      {/* products */}
      <section className="mb-12 mt-72 md:mt-96 lg:mt-0">
        <h1 className="uppercase font-extrabold text-5xl text-center my-10">
          New Arrivals
        </h1>
        <div id="card-row" className="flxc gap-5 md:flxr justify-between px-16">
            {urls.arrivalInfo.map((val,index)=>{
              return (
                <div  key={index}>
                  <div className="arivl-card">
                      <Image
                      src={`${val.url}`}  
                      className={index==1?"w-56 my-auto mx-auto":"w-60 my-auto mx-auto"}
                      width={100}
                      height={30}
                      alt={val.alt}
                    />
                  </div>
                  <p className="text-sm font-semibold my-1">{val.name}</p>
                  <div>
                    <span className="font-bold my-1">{val.price}</span>
                    {val.isDiscount && <>
                      <span className="font-bold my-1 mx-2 text-brand-bg-main line-through">{val.oldPrice}</span>
                      <span className="bg-brand-bg-lightRed bg-opacity-40 text-brand-font-discount py-1 px-4 rounded-xl text-[10px]">{val.discount}</span>
                    </>}
                  </div>
              </div>
              )
            })}
              
        </div>
        <button className="bg-transparent rounded-full py-2 px-10 my-auto mx-auto border-2 mt-6 flxr justify-center hover:border-blue-100 hover:drop-shadow-2xl">View All
        </button>
      </section>
      {/* End products */}

          <div className="bg-brand-bg-main opacity-25 h-[2px] rounded-full mx-24"/>

      {/* products */}
      <section className="mb-12">
        <h1 className="uppercase font-extrabold text-5xl text-center my-10">
          top selling
        </h1>
        <div id="card-row" className="flxc gap-5 md:flxr justify-between px-16">

        {urls.topSaleInfo.map((val,index)=>{
              return (
                <div  key={index}>
                  <div className="arivl-card">
                      <Image
                      src={`${val.url}`}  
                      className={index==1?"w-52 my-auto mx-auto":"w-60 my-auto mx-auto"}
                      width={100}
                      height={30}
                      alt={val.alt}
                    />
                  </div>
                  <p className="text-sm font-semibold my-1">{val.name}</p>
                  <div>
                    <span className="font-bold my-1">{val.price}</span>
                    {val.isDiscount && <>
                      <span className="font-bold my-1 mx-2 text-brand-bg-main line-through">{val.oldPrice}</span>
                      <span className="bg-brand-bg-lightRed bg-opacity-40 text-brand-font-discount py-1 px-4 rounded-xl text-[10px]">{val.discount}</span>
                    </>}
                  </div>

              </div>
              )
            })}
              


          
        </div>
        <button className="bg-transparent rounded-full py-2 px-10 my-auto mx-auto border-2 mt-6 flxr justify-center hover:border-blue-100 hover:drop-shadow-2xl">View All
        </button>
      </section>
      {/* End products */}
    </div>
  );
}
