import React from 'react'

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <main className="onboarding">{children}</main>
    )
}

export default Layout