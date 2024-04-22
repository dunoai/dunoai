import { BackgroundGradientAnimation } from '@/components/ui/background-gradient-animation'
import React from 'react'


const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        
        <main className="landing-page">
           {children}
                
               
            </main>
            
    )
}

export default Layout