"use client";

import React from 'react'
import { Button } from "@/components/ui/button"

import {
  Sheet,
  SheetContent,
  
  SheetTrigger,
} from "@/components/ui/sheet"
import Link from 'next/link'
import Image from 'next/image'
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import { navLinks } from '@/constants'
import { usePathname } from 'next/navigation'


const MobileAppBar = () => {
  const pathname = usePathname();

  return (
    <header className='header fixed top-0 right-0 py-5 px-5 '>
    
      <nav className='flex gap-2 items-center lg:hidden'>
        <SignedIn>|
          
          <UserButton afterSignOutUrl='/' />
          
          <Sheet>

            <SheetTrigger className='text-white'>
              <button
                className='shimmer-button h-8 w-8 text-white'>
                <Image src="/assets/icons/icons/menu.svg" alt="menu" width={18} height={18} style={{ filter: 'invert(50%)' }} className='cursor-pointer text-white'/>
              </button>
            </SheetTrigger>

            <SheetContent className='gradient-background-b sheet-content sm:w-64'>

              <>
              <Image src="/duno_text_logo.png" alt="logo" width={190} height={80}/>
              <ul className='header-nav_elements'>
              {navLinks.map((link) => {
                const isActive = link.route === pathname
                return (
                  <li key={link.route} className={`${isActive && 'sheet-gradient-selected-item text-white'}  p-18 flex whitespace-nowrap text-slate-900`}>

                    <Link className='sidebar-link' href={link.route}>
                      <Image 
                        src={link.icon}
                        alt="logo"
                        width={18}
                        height={18}
                        className={`${isActive && 'brightness-200'}`}
                      />
                      {link.label}
                    </Link>
                      
                  </li>
                )
              })}
              </ul>
                
              </>

            </SheetContent>

          </Sheet>
          
          

        </SignedIn>
        <SignedOut>
              <Button asChild className='shimmer-button'><Link href="/sign-in">Shad Button</Link></Button>
          <button className="shimmer-button">
          <Link href="/sign-in">Shimmer</Link>
        </button>
         
          </SignedOut>
      </nav>
    </header>
  )
}

export default MobileAppBar