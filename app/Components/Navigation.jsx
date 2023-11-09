'use client'
import { useState } from "react"
import Image from "next/image"

const Navigation = () => {

  const [windowPostion, setWindowPosition] = useState(false)

  document.addEventListener('scroll', () => {
    if(window.scrollY > 80) {
      setWindowPosition(true)
    } else {
      setWindowPosition(false)
    }
  })


  return (
    <div className={`flex items-center justify-around py-6 fixed top-0 left-0 right-0 z-50 ${windowPostion ? 'bg-DarkGrey' : 'bg-transparent'} `}>
      <Image className=" w-24" src={require('@/app/images/r2logo.png')} alt="Logo" />
      <ul className="text-white flex items-center gap-x-8">
        <li className="cursor-pointer">Features</li>
        <li className="cursor-pointer">Our Story</li>
        <li className="bg-BabyBlue py-2 px-10 rounded-full text-black transition-all cursor-pointer hover:bg-white">Sign Up</li>
      </ul>
    </div>
  )
}

export default Navigation