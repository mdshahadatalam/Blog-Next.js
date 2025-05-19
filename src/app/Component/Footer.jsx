import { FiGithub } from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa6";
import { CiTwitter } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
export default function Footer() {
    return (
       <>
         <section className="py-4 bg-[#1E293B]">
  <hr className="border-white mb-4" />
  <div className="container mx-auto px-4">
    <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
      <span className="font-medium text-[18px] text-slate-300 font-sans">
        © Copyright 2022 by Ixartz’s blog. Built with ♥ by CreativeDesignsGuru
      </span>

      <div className="flex gap-4 justify-center md:justify-end">
        <a className="text-white text-2xl" href=""><FiGithub /></a>
        <a className="text-white text-2xl" href=""><FaFacebookF /></a>
        <a className="text-white text-2xl" href=""><CiTwitter /></a>
        <a className="text-white text-2xl" href=""><CiLinkedin /></a>
      </div>
    </div>
  </div>
</section>

       </>
    )
}