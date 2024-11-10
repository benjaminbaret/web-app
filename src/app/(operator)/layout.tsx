'use client';

import { useState, useEffect } from "react";
import AuthHeader from "@/app/components/AuthHeader"
import SideNav from "../components/SideNav"
import { cn } from '@/app/lib/utils';

export default function OperatorLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    // Function to update the state based on the window width
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 640); // Tailwind's `sm` breakpoint is 640px
    };

    // Initial check
    handleResize();

    // Event listener for window resize
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);



  const setStateSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };


  return (
    <section className="flex flex-col bg-white">
        <main className="flex flex-col flex-1">
        <AuthHeader setStateSidebar={setStateSidebar} />
        <div className="flex">
          <div className={cn(isSidebarOpen ? 'overflow-x-auto' : 'hidden sm:block', isSmallScreen ? 'w-full' : '')}>
            <SideNav isSidebarOpen={isSidebarOpen} isSmallScreen={isSmallScreen}/>
          </div>
          
          <div className={cn( (isSidebarOpen && isSmallScreen) ? 'hidden' : '')}>
            <div className="sm:h-[calc(99vh-60px)] overflow-auto ">
              <div className="w-full flex justify-center mx-auto overflow-auto h-[calc(100vh - 120px)] overflow-y-auto relative">
                <div className="w-full md:max-w-6xl">{children}</div>
              </div>
            </div>
          </div>
          </div>
        </main>
    </section>
  )
};