import React from 'react'

function BackgorundColor({children}: {children: React.ReactNode}) {
  return (
    <div className='bg-whiteColor z-10 rounded-2xl shadow-[2px_3px_12px_4px_rgba(0,_0,_0,_0.20)] p-2'>
      {children}
    </div>
  )
}

export default BackgorundColor
