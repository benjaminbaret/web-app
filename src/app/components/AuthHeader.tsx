'use client';

import Image from 'next/image';
import Sidebar from './SideNav';
import React, { useState } from "react";

interface AuthHeaderProps {
  setStateSidebar: () => void;
}

const AuthHeader: React.FC<AuthHeaderProps> = ({ setStateSidebar }) => {

  return (
    <div>
      <header className="flex items-center justify-between px-4 py-2 bg-[#F5F5F5] text-white shadow-md">
        {/* Center Image */}
        <div className="flex justify-center flex-grow">
          <Image
            src="/walltech-logo-black.svg" // Update to your actual logo path
            alt="Logo"
            width={200}
            height={50}
            className="object-contain"
          />
        </div>

        <div>
        <button onClick={setStateSidebar} className="relative group block sm:hidden">
          <div className="relative flex flex-col overflow-hidden items-center justify-center rounded-full w-[50px] h-[50px]">

            <div className="flex flex-col justify-between w-[20px] h-[20px] transform">
              <div className="bg-black mb-1.5 h-[2px] w-7"></div>
              <div className="bg-black mb-1.5 h-[2px] w-7 rounded"></div>
              <div className="bg-black h-[2px] w-7"></div>
            </div>
          </div>
        </button>
      </div>

      </header>
  </div>
  );
}

export default AuthHeader;