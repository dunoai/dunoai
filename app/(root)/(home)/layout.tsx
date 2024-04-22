import MobileAppBar from '@/components/shared/MobileAppBar'
import Sidebar from '@/components/shared/Sidebar'
import { BackgroundGradientAnimation } from '@/components/ui/background-gradient-animation'
import React from 'react'
import { Providers } from '../providers'

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <Providers>
            <BackgroundGradientAnimation>
            <main className="root">
            
            
            <Sidebar />
            
            <MobileAppBar />


            <div className='root-container'>
            
                <div className='wrapper -z-10'> 
                
                {children}
                </div>
            </div>
            
            
            
            
            </main>
            </BackgroundGradientAnimation>
        </Providers>
        
        
    )
}

export default Layout