"use client"  
import React, {useState} from "react";
import Image from 'next/image';
import navImg from '@/../public/nav/Starter.png';

// react icons
import {IoIosSearch} from "react-icons/io";
import { CiMenuFries } from 'react-icons/ci';

export default function Navber() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
   
  return (
      <> 
       <section className=" py-3 bg-[#1E293B]"> 
                 <nav className="flex items-center justify-between w-full relative container">

            {/* logo */}
            <Image src={navImg} alt="logo" className="w-[170px]"/>

            {/* nav menus */}
            <ul className="items-center gap-[28px] text-[1rem] text-white md:flex hidden ms-auto">  
                <li className="hover:border-b-[#3B9DF8] border-b-[2px] border-transparent transition-all duration-500 cursor-pointer hover:text-[#3B9DF8] capitalize font-bold text-2xl text-slat">blog</li>
                <li className="hover:border-b-[#3B9DF8] border-b-[2px] border-transparent transition-all duration-500 cursor-pointer hover:text-[#3B9DF8] capitalize font-bold text-2xl text-slat">Newsletter
                </li>
                <li className="hover:border-b-[#3B9DF8] border-b-[2px] border-transparent transition-all duration-500 cursor-pointer hover:text-[#3B9DF8] capitalize font-bold text-2xl text-slat">Twitter</li>
            </ul>
             
              <div>
                  <CiMenuFries
                    className="text-[1.6rem] text-[#424242] cursor-pointer md:hidden flex"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}/>
              </div>
            {/* mobile sidebar */}
            <aside
                className={` ${isMenuOpen ? "translate-y-0 opacity-100 z-20" : "translate-y-[200px] opacity-0 z-[-1]"} md:hidden bg-[#3B9DF8] p-4 text-center absolute top-[60px] right-0 w-full sm:w-[300px] rounded-md transition-all duration-300`}>

                <div className="w-full relative mb-5">
                    <input
                        className="py-1.5 pr-4 pl-12 w-full rounded-full outline-none focus:border-[#3B9DF8]"
                        placeholder="Search..."/>
                    <IoIosSearch
                        className="absolute top-[9px] left-5 text-[#424242] text-[1.3rem]"/>
                </div>

                <ul className="items-center gap-[20px] text-[1rem] text-white flex flex-col">
                    <li className="hover:border-b-[#3B9DF8] border-b-[2px] border-transparent transition-all duration-500 cursor-pointer capitalize">home</li>
                    <li className="hover:border-b-[#3B9DF8] border-b-[2px] border-transparent transition-all duration-500 cursor-poin ter capitalize">about
                        us
                    </li>
                    <li className="hover:border-b-[#3B9DF8] border-b-[2px] border-transparent transition-all duration-500 cursor-pointer capitalize">services</li>
                </ul>

            </aside>

        </nav>
        </section>      
      </>
  );
}