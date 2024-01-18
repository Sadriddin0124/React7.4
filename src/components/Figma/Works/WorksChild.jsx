import React from "react";
import { Link } from "react-router-dom";
import FB from "../../../Assets/fb.png";
import Insta from "../../../Assets/insta.png";
import Twitter from "../../../Assets/Group.png";
import Linkedin from "../../../Assets/Linkedin.png";
import Child1 from '../../../Assets/works_child1.png'
import Child2 from '../../../Assets/works_child2.png'
import Child3 from '../../../Assets/works_child3.png'
const WorksChild = () => {
  return (
    <div>
      <nav className="w-full pt-[27px] flex justify-content-end gap-[33px] pe-[60px]">
        <Link
          to="/"
          className="transition-all hover:text-[#FF6464] no-underline font-medium text-[20px] text-[#000]"
        >
          Home
        </Link>
        <Link
          to="/blog"
          className="transition-all hover:text-[#FF6464] no-underline font-medium text-[20px] text-[#000]"
        >
          Blog
        </Link>
        <Link
          to="/works"
          className=" no-underline font-medium text-[20px] text-[#FF6464]"
        >
          Works
        </Link>
        <Link className="transition-all hover:text-[#FF6464] no-underline font-medium text-[20px] text-[#000]">
          Contact
        </Link>
        <Link
          to="/auth"
          className=" transition-all hover:bg-[#21243D] no-underline font-medium text-[16px] text-[#fff] px-[24px] py-[8px] bg-[#FF6464] rounded-md"
        >
          Log in
        </Link>
      </nav>
      <header className="flex justify-center mt-[70px]">
        <div className="w-[675px]">
        <h1 className="text-[#21243D] text-[34px] font-[700] w-[500px]">Designing Dashboards with usability in mind</h1>
        <div className="flex gap-[26px] items-center">
          <div className="px-[10px] h-[25px] text-white text-[18px] font-[900] rounded-[16px] bg-[#FF6464] mt-[-10px]">
            2020
          </div>
          <p className="text-[#21243D] text-[20px]">Dashboard, User Experience Design</p>
        </div>
        <p className="w-[675px]">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
        </div>
      </header>
      <section className="flex justify-center mt-[40px] ">
        <img className="w-[675px]" src={Child1} alt="Child" />
      </section>
      <section className="flex justify-center mt-[40px]">
        <div className="w-675px]">
        <h1>Heading 1</h1>
        <h2>Heading 2</h2>
        <p className="w-[675px]">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
        </div>
        </section>
      <section className="flex justify-center mt-[40px] ">
        <img className="w-[675px]" src={Child2} alt="Child" />
      </section>
      <section className="flex justify-center mt-[40px] ">
        <img className="w-[675px]" src={Child3} alt="Child" />
      </section>
      <footer className="p-[60px] mt-[40px] flex flex-col items-center gap-[26px]">
        <div className="flex gap-[35px]">
          <img src={FB} alt="links" />
          <img src={Insta} alt="links" />
          <img src={Twitter} alt="links" />
          <img src={Linkedin} alt="links" />
        </div>
        <p className="text-[#21243D] text-[14px]">
          Copyright ©2020 All rights reserved{" "}
        </p>
      </footer>
    </div>
  );
};

export default WorksChild;
