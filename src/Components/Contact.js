import React from 'react'

export default function Contact() {
  return (
    <div className='h-full bg-black text-white flex flex-col justify-start items-center w-full gap-10 p-[50px] relative'>
      <div className=" flex gap-[20px]">
      <div><h1 className="text-[50px] underline">linkedin.</h1></div>
      <div><h1 className="text-[50px] underline">twitter.</h1></div>
      <div><h1 className="text-[50px] underline">email.</h1></div>
      </div>
      <div className="flex flex-col items-center justify-center gap-10">
        <div className="flex items-center justify-center text-white md:flex-row gap-10 md:gap-[48px] text-gray-900 text-[16px] md:text-[18px] font-bold leading-normal text-white">
				<p className="text-white">Conditions of Use</p>
				<p className="text-white">Privacy & Policy</p>
				<p className="text-white">Press Room</p>
			</div>
			<div className="flex flex-col font-normal  text-white text-[14px] md:text-[18px]">
				&copy; 2023 Haggai Gisore
			</div>
      </div>
    </div>
  )
}
