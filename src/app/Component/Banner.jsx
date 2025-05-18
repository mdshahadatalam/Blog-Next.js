 import man from '@/../public/nav/Western.png';
import Image from 'next/image';
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa6";
export default function Banner() {
  return (
    <>
      <section className='py-4 bg-[#1E293B]'>
  <div className="container">
    <div className="row justify-center align-items-center flex-column-reverse flex-md-row">
      {/* Text Section */}
      <div className="col-12 col-md-6 text-center text-md-start">
        <h1 className="text-3xl sm:text-4xl font-bold text-white bg-clip-text bg-gradient-to-l from-cyan-400 to-sky-500">
          Hi there, I’m <span className='text-transparent hover:cursor-pointer'>Ixartz</span>👋
        </h1>
        <p className="text-[18px] sm:text-[20px] font-medium text-white bg-clip-text bg-gradient-to-l from-cyan-400 to-sky-500 mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus malesuada nisi tellus, non imperdiet nisi tempor at. Lorem ipsum dolor sit amet, <span className='text-transparent hover:cursor-pointer'>consectetur</span> adipiscing elit, sed do eiusmod tempor incididunt ut labore et <span className='text-transparent hover:cursor-pointer'>dolore</span>.
        </p>
      </div>

      {/* Image Section */}
      <div className="col-12 col-md-6 mb-4 mb-md-0">
        <div className='d-flex justify-center'>
          <Image src={man} alt="Banner Image" className="img-fluid" />
        </div>
      </div>
    </div>

    {/* Social Icons */}
    <div className='d-flex  gap-3 flex-wrap  justify-center lg:justify-start'>
      <span className='w-[45px] h-[45px] sm:w-[50px] sm:h-[50px] justify-center d-flex align-items-center bg-[#3daff5] rounded-full text-2xl sm:text-3xl text-white hover:cursor-pointer hover:scale-110 transition duration-300'>
        <FaTwitter />
      </span>
      <span className='w-[45px] h-[45px] sm:w-[50px] sm:h-[50px] justify-center d-flex align-items-center bg-[#004DAE] rounded-full text-2xl sm:text-3xl text-white hover:cursor-pointer hover:scale-110 transition duration-300'>
        <FaFacebookF />
      </span>
      <span className='w-[45px] h-[45px] sm:w-[50px] sm:h-[50px] justify-center d-flex align-items-center bg-[#004DAE] rounded-full text-2xl sm:text-3xl text-white hover:cursor-pointer hover:scale-110 transition duration-300'>
        <FaLinkedinIn />
      </span>
      <span className='w-[45px] h-[45px] sm:w-[50px] sm:h-[50px] justify-center d-flex align-items-center bg-[#9B0000] rounded-full text-2xl sm:text-3xl text-white hover:cursor-pointer hover:scale-110 transition duration-300'>
        <FaYoutube />
      </span>
    </div>
  </div>
</section>

    </>
  );
}