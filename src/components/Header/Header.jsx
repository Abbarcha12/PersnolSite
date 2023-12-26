"use client"
import { Navbar } from "flowbite-react";
import Link from "next/link";
const Header = () => {
  return (
    <>
      <Navbar fluid={true} className="  bg-transparent	container mx-auto p-4">
        <Navbar.Brand href='https://flowbite.com/'>
        <div class="loader"></div>
          <span className='self-center mt-3 whitespace-nowrap text-xl font-semibold text-[#ffff]'>
            Frontend Developer
          </span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="mt-5">
          <Navbar.Link href='/' className="text-[#ffff] hover:text-[#ff3838] active:text-[#ff3838] focus:text-[#ff3838] " >
            Home
          </Navbar.Link>
          <Navbar.Link href='/' className="text-[#ffff] hover:text-[#ff3838] active:text-[#ff3838] focus:text-[#ff3838]">Skills</Navbar.Link>
          <Navbar.Link href='/' className="text-[#ffff] hover:text-[#ff3838] active:text-[#ff3838] focus:text-[#ff3838]">Projects</Navbar.Link>
          <Navbar.Link href='/' className="text-[#ffff] hover:text-[#ff3838] active:text-[#ff3838] focus:text-[#ff3838]">Testimonials</Navbar.Link>
          <Navbar.Link href='/' className="text-[#ffff] hover:text-[#ff3838] active:text-[#ff3838] focus:text-[#ff3838]">Contact</Navbar.Link>
          <Link href='/' className="text-[#ffff] bg-[#ff3838] pt-2 pb-2 pl-3 pr-3 rounded-lg ">Resume</Link>

        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Header;
