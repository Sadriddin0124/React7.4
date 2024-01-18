import React from "react";
import { Link } from "react-router-dom";
import HeaderImg from "../../../Assets/header-img.png";
import Dashboards from "../../../Assets/dashboards.png";
import Portraits from "../../../Assets/portraits.png";
import Malayalam from "../../../Assets/malayalam.png";
import FB from "../../../Assets/fb.png";
import Insta from "../../../Assets/insta.png";
import Twitter from "../../../Assets/Group.png";
import Linkedin from "../../../Assets/Linkedin.png";
const Home = () => {
  return (
    <div>
      <nav className="w-full pt-[27px] flex justify-content-end gap-[33px] pe-[60px]">
        <Link to='/' className=" no-underline font-medium text-[20px] text-[#FF6464]">
          Home
        </Link>
        <Link to='/blog' className="transition-all hover:text-[#FF6464] no-underline font-medium text-[20px] text-[#000]">
          Blog
        </Link>
        <Link to='/works' className=" transition-all hover:text-[#FF6464] no-underline font-medium text-[20px] text-[#000]">
          Works
        </Link>
        <Link className="transition-all hover:text-[#FF6464] no-underline font-medium text-[20px] text-[#000]">
          Contact
        </Link>
        <Link to='/auth' className=" transition-all hover:bg-[#21243D] no-underline font-medium text-[16px] text-[#fff] px-[24px] py-[8px] bg-[#FF6464] rounded-md">
          Log in
        </Link>
      </nav>
      <header className="pt-[140px] pb-[71px] ps-4 pe-4 w-full flex gap-[115px] justify-center">
        <div className=" max-w-[500px] flex flex-col gap-[40px] items-start">
          <h1 className="text-[#21243D] text-[44px] font-bold">
            Hi, I am John, Creative Technologist
          </h1>
          <p className="text-[#21243D]">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
          <button className="pt-[9px] px-[20px] pb-[17px] bg-[#FF6464] text-white rounded-[2px]">
            Download Resume
          </button>
        </div>
        <div>
          <img src={HeaderImg} alt="Headerimg" />
        </div>
      </header>
      <section className="w-full pt-[30px] flex justify-center items-center bg-[#EDF7FA] py-10">
        <div className="h-[396px]">
          <div className="flex w-full justify-between">
            <h5 className="text-[22px] font-normal">Recent posts</h5>
            <p className="text-[#00A8CC] text-[16px]">View all</p>
          </div>
          <div className="flex gap-5">
            <div className="w-[418px] h-[290px] flex justify-between flex-col bg-white p-[24px]">
              <h1 className="text-[26px] font-[700]">
                Making a design system from scratch
              </h1>
              <p className="text-[18px]">12 Feb 2020 | Design Pattern</p>
              <p className="text-[16px]">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
            </div>
            <div className="w-[418px] h-[290px] flex justify-between flex-col bg-white p-[24px]">
              <h1 className="text-[26px] font-[700]">
                Creating pixel perfect icons in Figma
              </h1>
              <p className="text-[18px]">12 Feb 2020 | Figma, Icon Design</p>
              <p className="text-[16px]">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="items-center pt-6 flex flex-col gap-[40px]">
        <h5 className="  w-[858px]">Featured works</h5>
        <div className="flex items-center gap-[20px] h-[180px] border-solid border-b-2 w-[858px] pb-[42px]">
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
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-[20px] h-[180px] border-solid border-b-2 pb-[42px] w-[858px]">
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
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-[20px] h-[180px] border-solid border-b-2 w-[858px] pb-[42px]">
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
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
          </div>
        </div>
      </section>
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
  );
};

export default Home;
