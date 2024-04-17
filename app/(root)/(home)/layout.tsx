import MobileAppBar from '@/components/shared/MobileAppBar'
import Sidebar from '@/components/shared/Sidebar'
import React from 'react'

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <main className="root">
            
            <Sidebar />
            
            <MobileAppBar />


            <div className='root-container'>
            
                <div className='wrapper -z-10'> 
                
                {children}
                </div>
            </div>
            
            
            
            
            </main>
    )
}

export default Layout