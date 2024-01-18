import React from 'react'
import { Link } from 'react-router-dom'
import Dashboards from "../../../Assets/dashboards.png";
import Portraits from "../../../Assets/portraits.png";
import Malayalam from "../../../Assets/malayalam.png";
import Components from '../../../Assets/Components.png'
import FB from "../../../Assets/fb.png";
import Insta from "../../../Assets/insta.png";
import Twitter from "../../../Assets/Group.png";
import Linkedin from "../../../Assets/Linkedin.png";
const Works = () => {
  return (
    <div>
        <nav className="w-full pt-[27px] flex justify-content-end gap-[33px] pe-[60px]">
        <Link to='/' className="transition-all hover:text-[#FF6464] no-underline font-medium text-[20px] text-[#000]">
          Home
        </Link>
        <Link to='/blog' className="transition-all hover:text-[#FF6464] no-underline font-medium text-[20px] text-[#000]">
          Blog
        </Link>
        <Link to='/works' className=" no-underline font-medium text-[20px] text-[#FF6464]">
          Works
        </Link>
        <Link className="transition-all hover:text-[#FF6464] no-underline font-medium text-[20px] text-[#000]">
          Contact
        </Link>
        <Link to='/auth' className=" transition-all hover:bg-[#21243D] no-underline font-medium text-[16px] text-[#fff] px-[24px] py-[8px] bg-[#FF6464] rounded-md">
          Log in
        </Link>
      </nav>
      <header className="  flex flex-col gap-[40px] items-center">
        <h5 className='w-[858px]'>Featured works</h5>
        <Link to='/works_child' className="no-underline flex items-center gap-[20px] h-[180px] border-solid border-b-2 w-[858px] pb-[42px]">
          <div>
            <img src={Dashboards} alt="dashboard" />
          </div>
          <div className="w-[600px] flex flex-col justify-between h-[180px]">
            <h1 className="font-[700] text-[30px] text-[#21243D]">
              Designing Dashboards
            </h1>
            <div className="flex gap-[26px] items-center">
              <div className="px-[10px] h-[25px] text-white text-[18px] font-[900] rounded-[16px] bg-[#142850] mt-[-10px]">
                2020
              </div>
              <p className="text-[#8695A4] text-[20px]">Dashboard</p>
            </div>
            <p className='text-[#000]'>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
          </div>
        </Link>
        <Link to='/works_child' className=" no-underline flex items-center gap-[20px] h-[180px] border-solid border-b-2 pb-[42px] w-[858px]">
          <div>
            <img src={Portraits} alt="dashboard" />
          </div>
          <div className="w-[600px] flex flex-col justify-between h-[180px]">
            <h1 className="font-[700] text-[30px] text-[#21243D]">
              Vibrant Portraits of 2020
            </h1>
            <div className="flex gap-[26px] items-center">
              <div className="px-[10px] h-[25px] text-white text-[18px] font-[900] rounded-[16px] bg-[#142850] mt-[-10px]">
                2018
              </div>
              <p className="text-[#8695A4] text-[20px]">Illustration</p>
            </div>
            <p className='text-[#000]'>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
          </div>
        </Link>
        <Link to='/works_child' className="no-underline flex items-center gap-[20px] h-[180px] border-solid border-b-2 w-[858px] pb-[42px]">
          <div>
            <img src={Malayalam} alt="dashboard" />
          </div>
          <div className="w-[600px] flex flex-col justify-between h-[180px]">
            <h1 className="font-[700] text-[30px] text-[#21243D]">
              36 Days of Malayalam type
            </h1>
            <div className="flex gap-[26px] items-center">
              <div className="px-[10px] h-[25px] text-white text-[18px] font-[900] rounded-[16px] bg-[#142850] mt-[-10px]">
                2018
              </div>
              <p className="text-[#8695A4] text-[20px]">Typography</p>
            </div>
            <p className='text-[#000]'>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
          </div>
        </Link>
        <Link to='/works_child' className="no-underline flex items-center gap-[20px] h-[180px] border-solid border-b-2 w-[858px] pb-[42px]">
          <div>
            <img src={Components} alt="dashboard" />
          </div>
          <div className="w-[600px] flex flex-col justify-between h-[180px]">
            <h1 className="font-[700] text-[30px] text-[#21243D]">
              Components
            </h1>
            <div className="flex gap-[26px] items-center">
              <div className="px-[10px] h-[25px] text-white text-[18px] font-[900] rounded-[16px] bg-[#142850] mt-[-10px]">
                2018
              </div>
              <p className="text-[#8695A4] text-[20px]">Components, Design</p>
            </div>
            <p className='text-[#000]'>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
          </div>
        </Link>
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

export default Works
