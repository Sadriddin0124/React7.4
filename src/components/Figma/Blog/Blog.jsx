import React from 'react'
import FB from "../../../Assets/fb.png";
import Insta from "../../../Assets/insta.png";
import Twitter from "../../../Assets/Group.png";
import Linkedin from "../../../Assets/Linkedin.png";
import { Link } from 'react-router-dom';
const Blog = () => {
  return (
    <div>
        <nav className="w-full pt-[27px] flex justify-content-end gap-[33px] pe-[60px]">
        <Link to='/'  className="transition-all hover:text-[#FF6464] no-underline font-medium text-[20px] text-[#000]">
          Home
        </Link>
        <Link to='/blog'  className=" no-underline font-medium text-[20px] text-[#FF6464]">
          Blog
        </Link>
        <Link to='/works' className=" transition-all hover:text-[#FF6464] no-underline font-medium text-[20px] text-[#000]">
          Works
        </Link>
        <Link className=" transition-all hover:text-[#FF6464] no-underline font-medium text-[20px] text-[#000]">
          Contact
        </Link>
        <Link to='/auth' className=" transition-all hover:bg-[#21243D] no-underline font-medium text-[16px] text-[#fff] px-[24px] py-[8px] bg-[#FF6464] rounded-md">
          Log in
        </Link>
      </nav>
      <header className='flex flex-col items-center gap-[55px] mt-[60px]'>
        <h1 className='w-[680px]'>Blog</h1>
        <div className="flex items-center gap-[20px] h-[180px] border-solid border-b-2 w-[680px] pb-[42px]">
          <div className="w-[672px] flex flex-col justify-between h-[180px]">
            <h1 className="font-[500] text-[30px] text-[#21243D]">
            UI Interactions of the week
            </h1>
            <div className="flex gap-[26px]">
              <h5 className='text-[#21243D]'>12 Feb 2019</h5>
              <span>|</span>
              <p className="text-[#8695A4] text-[20px] mt-[-3px]">Express, Handlebars</p>
            </div>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-[20px] h-[180px] border-solid border-b-2 w-[680px] pb-[42px]">
          <div className="w-[672px] flex flex-col justify-between h-[180px]">
            <h1 className="font-[500] text-[30px] text-[#21243D]">
            UI Interactions of the week
            </h1>
            <div className="flex gap-[26px]">
              <h5 className='text-[#21243D]'>12 Feb 2019</h5>
              <span>|</span>
              <p className="text-[#8695A4] text-[20px] mt-[-3px]">Express, Handlebars</p>
            </div>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-[20px] h-[180px] border-solid border-b-2 w-[680px] pb-[42px]">
          <div className="w-[672px] flex flex-col justify-between h-[180px]">
            <h1 className="font-[500] text-[30px] text-[#21243D]">
            UI Interactions of the week
            </h1>
            <div className="flex gap-[26px]">
              <h5 className='text-[#21243D]'>12 Feb 2019</h5>
              <span>|</span>
              <p className="text-[#8695A4] text-[20px] mt-[-3px]">Express, Handlebars</p>
            </div>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-[20px] h-[180px] border-solid border-b-2 w-[680px] pb-[42px]">
          <div className="w-[672px] flex flex-col justify-between h-[180px]">
            <h1 className="font-[500] text-[30px] text-[#21243D]">
            UI Interactions of the week
            </h1>
            <div className="flex gap-[26px]">
              <h5 className='text-[#21243D]'>12 Feb 2019</h5>
              <span>|</span>
              <p className="text-[#8695A4] text-[20px] mt-[-3px]">Express, Handlebars</p>
            </div>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-[20px] h-[180px] border-solid border-b-2 w-[680px] pb-[42px]">
          <div className="w-[672px] flex flex-col justify-between h-[180px]">
            <h1 className="font-[500] text-[30px] text-[#21243D]">
            UI Interactions of the week
            </h1>
            <div className="flex gap-[26px]">
              <h5 className='text-[#21243D]'>12 Feb 2019</h5>
              <span>|</span>
              <p className="text-[#8695A4] text-[20px] mt-[-3px]">Express, Handlebars</p>
            </div>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
          </div>
        </div>
      </header>
      <footer className="p-[60px] mt-[40px] flex flex-col items-center gap-[26px]">
        <div className="flex gap-[35px]">
          <img src={FB} alt="links" />
          <img src={Insta} alt="links" />
          <img src={Twitter} alt="links" />
          <img src={Linkedin} alt="links" />
        </div>
        <p className="text-[#21243D] text-[14px]">Copyright ©2020 All rights reserved </p>
      </footer>
    </div>
  )
}

export default Blog
