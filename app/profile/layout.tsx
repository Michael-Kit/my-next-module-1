import React from 'react'

const Profilelayout = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  return (
    <div>
      ProfileLayout 
      {children}
    </div>
  )
}

export default Profilelayout
