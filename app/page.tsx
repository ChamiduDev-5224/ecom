"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { urls } from "./utility/info";
import Rates from "./componentes/Rates";
export default function Home() {
  const [isHovered, setIsHovered] = useState(false);
  const [hasHydrated, setHasHydrated] = useState(false);
  const [firstCursol, setFirstCoursel] = useState<number>(0);
  const [lastCursol, setLastCoursel] = useState<number>(0);

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

  const courselBack = () => {
    setLastCoursel(lastCursol - 1);
    setFirstCoursel(firstCursol + 8);

    // document.getElementById(`${firstCursol}cursel`)?.setAttribute('hidden',true)
    // document.getElementById(`${lastCursol}cursel`)?.setAttribute('hidden',false)
  };
  const courselForward = () => {
    setLastCoursel(lastCursol + 1);
    setFirstCoursel(firstCursol - 8);
    // document.getElementById(`${firstCursol}cursel`)?.setAttribute('hidden',true)
    // document.getElementById(`${lastCursol}cursel`)?.setAttribute('hidden',false)
  };

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
            ECOM.CO
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
              <h2 className="font-bold text-3xl lg:text-4xl">200+</h2>
              <h4 className="font-thin text-xs">International Brands</h4>
            </div>

            <div>
              <h2 className="font-bold text-3xl lg:text-4xl">2,000+</h2>
              <h4 className="font-thin text-xs">High-Quality Products</h4>
            </div>

            <div>
              <h2 className="font-bold text-3xl lg:text-4xl">30,000+</h2>
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
            priority
            alt="section-background"
          />
          <Image
            src="/icons/start-l.svg"
            className="pointer absolute top-4 left-3/4"
            width={60}
            height={40}
            priority
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
          priority
        />
        <Image
          src="/icons/brands/b5.svg"
          className="w-10 lg:w-24"
          width={100}
          height={30}
          alt="brand 5"
          priority
        />
        <Image
          src="/icons/brands/b1.svg"
          className="w-10 lg:w-24"
          width={100}
          height={30}
          alt="brand 1"
          priority
        />
        <Image
          src="/icons/brands/b3.svg"
          className="w-10 lg:w-24"
          width={100}
          height={30}
          alt="brand 3"
          priority
        />
        <Image
          src="/icons/brands/b4.svg"
          className="w-10 lg:w-24"
          width={100}
          height={30}
          alt="brand 4"
          priority
        />
      </div>
      {/*End brands */}

      {/* products */}
      <section className="mb-12 mt-72 md:mt-96 lg:mt-0">
        <h1 className="uppercase font-extrabold text-5xl text-center my-10">
          New Arrivals
        </h1>
        <div id="card-row" className="flxc gap-5 md:flxr justify-between px-16">
          {urls.arrivalInfo.map((val, index) => {
            return (
              <div key={index}>
                <div className="arivl-card">
                  <Image
                    src={`${val.url}`}
                    className={
                      index == 1
                        ? "w-56 my-auto mx-auto"
                        : "w-60 my-auto mx-auto"
                    }
                    width={100}
                    height={30}
                    alt={val.alt}
                    priority
                  />
                </div>
                <p className="text-sm font-semibold my-1">{val.name}</p>
                <div>
                  <span className="font-bold my-1">{val.price}</span>
                  {val.isDiscount && (
                    <>
                      <span className="font-bold my-1 mx-2 text-brand-bg-main line-through">
                        {val.oldPrice}
                      </span>
                      <span className="bg-brand-bg-lightRed bg-opacity-40 text-brand-font-discount py-1 px-4 rounded-xl text-[10px]">
                        {val.discount}
                      </span>
                    </>
                  )}
                </div>
              </div>
            );
          })}
        </div>
        <button className="bg-transparent rounded-full py-2 px-10 my-auto mx-auto border-2 mt-6 flxr justify-center hover:border-blue-100 hover:drop-shadow-2xl">
          View All
        </button>
      </section>
      {/* End products */}

      <div className="bg-brand-bg-main opacity-25 h-[2px] rounded-full mx-24" />

      {/* products */}
      <section className="mb-12">
        <h1 className="uppercase font-extrabold text-5xl text-center my-10">
          top selling
        </h1>
        <div id="card-row" className="flxc gap-5 md:flxr justify-between px-16">
          {urls.topSaleInfo.map((val, index) => {
            return (
              <div key={index}>
                <div className="arivl-card">
                  <Image
                    src={`${val.url}`}
                    className={
                      index == 1
                        ? "w-52 my-auto mx-auto"
                        : "w-60 my-auto mx-auto"
                    }
                    width={100}
                    height={30}
                    alt={val.alt}
                    priority
                  />
                </div>
                <p className="text-sm font-semibold my-1">{val.name}</p>
                <div>
                  <span className="font-bold my-1">{val.price}</span>
                  {val.isDiscount && (
                    <>
                      <span className="font-bold my-1 mx-2 text-brand-bg-main line-through">
                        {val.oldPrice}
                      </span>
                      <span className="bg-brand-bg-lightRed bg-opacity-40 text-brand-font-discount py-1 px-4 rounded-xl text-[10px]">
                        {val.discount}
                      </span>
                    </>
                  )}
                </div>
              </div>
            );
          })}
        </div>
        <button className="bg-transparent rounded-full py-2 px-10 my-auto mx-auto border-2 mt-6 flxr justify-center hover:border-blue-100 hover:drop-shadow-2xl">
          View All
        </button>
      </section>
      {/* End products */}

      {/* Browse By products */}
      <div className="rounded-xl bg-brand-bg-main my-20 mx-12 lg:mx-24 bg-opacity-30">
        <h1 className="uppercase font-extrabold text-center pt-12  text-4xl lg:text-5xl">
          BROWSE BY dress STYLE
        </h1>

        <div className="flxc lg:flxr gap-3 px-10 pt-10">
          <Image
            src={`${urls.browseDress[0].url}`}
            className="rounded-xl w-full lg:w-[50%] object-cover hover:scale-105 cursor-pointer duration-1000"
            width={100}
            height={30}
            alt={urls.browseDress[0].alt}
            priority
          />
          <Image
            src={`${urls.browseDress[2].url}`}
            className="rounded-xl w-full lg:w-[60%] object-cover hover:scale-105 cursor-pointer duration-1000"
            width={100}
            height={30}
            alt={urls.browseDress[2].alt}
            priority
          />
        </div>

        <div className="flxc lg:flxr gap-3 px-10 pt-3 pb-10">
          <Image
            src={`${urls.browseDress[1].url}`}
            className="rounded-xl w-full lg:w-[60%] object-cover hover:scale-105 cursor-pointer duration-1000"
            width={100}
            height={30}
            title="ad"
            alt={urls.browseDress[1].alt}
            priority
          />
          <Image
            src={`${urls.browseDress[3].url}`}
            className="rounded-xl w-full object-cover hover:scale-105 cursor-pointer duration-1000"
            width={100}
            height={30}
            alt={urls.browseDress[3].alt}
            priority
          />
        </div>
      </div>
      {/* End Browse By products */}

      {/* Happy Customers */}
      <section>
        <div className="flxc md:flxr justify-between px-10 md:px-14 lg:px-20">
          <p className="text-5xl font-extrabold">OUR HAPPY CUSTOMERS</p>
          <div id="arrowIcons" className="flxr gap-2">
            <Image
              src="/icons/arrow-l.svg"
              className="cursor-pointer hidden md:block active:border-2"
              width={24}
              height={24}
              alt="Arrow Left"
              onClick={courselBack}
              priority
            />
            <Image
              src="/icons/arrow-r.svg"
              className="cursor-pointer hidden md:block active:border-2"
              width={24}
              height={24}
              alt="Arrow Right"
              onClick={courselForward}
              priority
            />
          </div>
        </div>
        <div className="flxc lg:flxr gap-4 m-10">
          {urls.cutomerFeedback.map((val, index) => {
            return (
              <div
                key={index}
                className={`border-2 rounded-lg px-2 py-5 translate-effect`}
                id={`${index}cursel`}
              >
                <Rates rate={val.rate} />
                <div className="flxr gap-2 mt-2">
                  <span className="font-extrabold">{val.name}</span>
                  <Image
                    src="/icons/correct.svg"
                    className="cursor-pointer"
                    width={16}
                    height={16}
                    alt="correct"
                    priority
                  />
                </div>
                <p className="opacity-50">{val.feedback}</p>
              </div>
            );
          })}
        </div>
      </section>
      {/* End Happy Customers */}


    <div className="bg-gray-100 pt-10">
      {/* Newsletter Section */}
      <div className="bg-black text-white py-10 px-6 text-center">
        <h2 className="text-3xl font-bold">
          STAY UP TO DATE ABOUT OUR LATEST OFFERS
        </h2>
        <div className="flex justify-center mt-4">
          <input
            type="email"
            placeholder="Enter your email address"
            className="w-1/2 max-w-md px-4 py-2 rounded-l-full text-gray-700 focus:outline-none"
          />
          <button className="bg-white text-black px-6 py-2 rounded-r-full font-semibold">
            Subscribe to Newsletter
          </button>
        </div>
      </div>

      {/* Footer Content */}
      <div className="container mx-auto px-6 py-10">
        <div className="flex flex-wrap justify-between">
          {/* Logo and Description */}
          <div className="w-full sm:w-1/2 md:w-1/4 mb-6">
            <h3 className="text-2xl font-bold">ECOM.CO</h3>
            <p className="text-gray-600 mt-2">
              We have clothes that suit your style and which you are proud to wear.
              From women to men 
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-500"><i className="fab fa-twitter"></i></a>
              <a href="#" className="text-gray-500"><i className="fab fa-facebook"></i></a>
              <a href="#" className="text-gray-500"><i className="fab fa-instagram"></i></a>
              <a href="#" className="text-gray-500"><i className="fab fa-pinterest"></i></a>
            </div>
          </div>

          {/* Links Section */}
          <div className="w-full sm:w-1/2 md:w-1/4 mb-6 ">
            <h4 className="text-lg font-bold mb-4">COMPANY</h4>
            <ul className="text-gray-600 space-y-2">
              <li><a href="#">About</a></li>
              <li><a href="#">Features</a></li>
              <li><a href="#">Works</a></li>
              <li><a href="#">Career</a></li>
            </ul>
          </div>

          <div className="w-full sm:w-1/2 md:w-1/4 mb-6">
            <h4 className="text-lg font-bold mb-4">HELP</h4>
            <ul className="text-gray-600 space-y-2">
              <li><a href="#">Customer Support</a></li>
              <li><a href="#">Delivery Details</a></li>
              <li><a href="#">Terms & Conditions</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
          </div>

          <div className="w-full sm:w-1/2 md:w-1/4 mb-6">
            <h4 className="text-lg font-bold mb-4">FAQ</h4>
            <ul className="text-gray-600 space-y-2">
              <li><a href="#">Account</a></li>
              <li><a href="#">Manage Deliveries</a></li>
              <li><a href="#">Orders</a></li>
              <li><a href="#">Payments</a></li>
            </ul>
          </div>

          <div className="w-full sm:w-1/2 md:w-1/4 mb-6">
            <h4 className="text-lg font-bold mb-4">RESOURCES</h4>
            <ul className="text-gray-600 space-y-2">
              <li><a href="#">Free eBooks</a></li>
              <li><a href="#">Development Tutorial</a></li>
              <li><a href="#">How-to Blog</a></li>
              <li><a href="#">YouTube Playlist</a></li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-10 border-t pt-6 flxc md:flxr justify-between items-center text-gray-500 text-sm">
          <p>ECOM.CO © 2000-2023, All Rights Reserved</p>
          <div className="flex">
            <Image priority src="/icons/cards/visa.svg" className="w-24 md:w-60 lg:w-80" alt="Visa" width={80} height={80} />
            <Image priority src="/icons/cards/master.svg" className="w-24 md:w-60 lg:w-80" alt="MasterCard" width={80} height={80} />
            <Image priority src="/icons/cards/paypal.svg" className="w-24 md:w-60 lg:w-80" alt="PayPal" width={80} height={80} />
            <Image priority src="/icons/cards/apple.svg" className="w-24 md:w-60 lg:w-80" alt="Apple Pay" width={80} height={80} />
            <Image priority src="/icons/cards/google.svg" className="w-24 md:w-60 lg:w-80" alt="Google Pay" width={80} height={80} />
          </div>
        </div>
      </div>
    </div>

    </div>
  );
}
