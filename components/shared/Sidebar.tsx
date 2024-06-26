"use client";

import { navLinks } from '@/constants'
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'
import { Button } from '../ui/button';
import { MoonIcon, SunIcon } from '@radix-ui/react-icons';
import ThemeSwitch from '../ui/ThemeSwitch';


const Sidebar = () => {
  
  const pathname = usePathname();

  

  return (
    <aside className='sidebar'>
      <div className='flex size-full flex-col gap-4 pt-20'>
        
        <nav className='sidebar-nav'>
          <SignedIn>
          <ul className='sidebar-nav_elements'>
              {navLinks.slice(0, 8).map((link) => {
                const isActive = link.route === pathname
                return (
                  <li key={link.route} className={`sidebar-nav_element pl-4 pr-4 group
                  ${ isActive ? 'gradient-selected-item text-white' : 'text-gray-100'} `}>

                    <Link className='sidebar-link' href={link.route}>
                      <Image 
                        src={link.icon}
                        alt="logo"
                        width={23}
                        height={23}
                        className={`${isActive && 'brightness-200'}`}
                      />
                      {link.label}
                    </Link>
                      
                  </li>
                )
              })}
              </ul>
              <ul className='sidebar-nav_elements p-5'>
                
                  <ThemeSwitch></ThemeSwitch>
                
              </ul>
            
          </SignedIn>
          
        </nav>
      </div>
    </aside>
  )
}

export default Sidebar

