import postImg from '@/../public/nav/post (1).png';
import postImg2 from '@/../public/nav/post (2).png';
import postImg3 from '@/../public/nav/post (3).png';
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import Image from 'next/image'; 
export default function Post() {
    return (
        <>
          
          <section className='py-4 bg-[#1E293B]'>
               <div className="container">
                    
                     <div className='d-flex justify-content-between align-items-center'>
                         <h2 className='className="font-bold text-[48px] text-white my-4"'>Latest <span className=" text-blue-400">Posts </span> </h2>

                           <div className='d-flex align-items-center hover:cursor-pointer' >
                            <span className='font-bold text-[20px] text-[#f8fafc]'>View all Posts</span>
                            <span className='text-white text-2xl ms-2'><FaRegArrowAltCircleRight /></span>
                           </div>
                     </div>
                      
                 <div className="row">
                       <div className="col-lg-4 col-md-6 col-sm-12">
                           
                      <div className="shadow-lg text-white bg-[rgba(30,41,59,0.4)] rounded-[20px] mt-5 flex flex-col items-center overflow-hidden">
                         <Image src={postImg3} alt="post image" className="w-full h-auto object-cover" />

                            <div className="p-3 text-center">
                                 <h4 className="font-bold text-2xl sm:text-[24px] text-[#f8fafc]">Lorem ipsum dolor</h4>
                             <span className="block font-normal text-sm sm:text-[15px] text-[#9ca3af] mt-1">April 24, 2022 — 5 min read</span>
                             <p className="font-bold text-base sm:text-[20px] text-[#f8fafc] mt-0"> Nunc non posuere consectetur, justo erat semper enim, non hendrerit dui odio id enim.</p>
                            </div>
                          </div>
6
                       </div>

                       <div className="col-lg-4 col-md-6 col-sm-12">

                            <div className="shadow-lg text-white bg-[rgba(30,41,59,0.4)] rounded-[20px] mt-5 flex flex-col items-center overflow-hidden">
                         <Image src={postImg2} alt="post image" className="w-full h-auto object-cover" />

                            <div className="p-3 text-center">
                                 <h4 className="font-bold text-2xl sm:text-[24px] text-[#f8fafc]">Lorem ipsum dolor</h4>
                             <span className="block font-normal text-sm sm:text-[15px] text-[#9ca3af] mt-1">April 24, 2022 — 5 min read</span>
                             <p className="font-bold text-base sm:text-[20px] text-[#f8fafc] mt-0"> Nunc non posuere consectetur, justo erat semper enim, non hendrerit dui odio id enim.</p>
                            </div>
                          </div>

                       </div>
                       <div className="col-lg-4 col-md-6 col-sm-12">
                            
                            <div className="shadow-lg text-white bg-[rgba(30,41,59,0.4)] rounded-[20px] mt-5 flex flex-col items-center overflow-hidden">
                         <Image src={postImg} alt="post image" className="w-full h-auto object-cover" />

                            <div className="p-3 text-center">
                                 <h4 className="font-bold text-2xl sm:text-[24px] text-[#f8fafc]">Lorem ipsum dolor</h4>
                             <span className="block font-normal text-sm sm:text-[15px] text-[#9ca3af] mt-1">April 24, 2022 — 5 min read</span>
                             <p className="font-bold text-base sm:text-[20px] text-[#f8fafc] mt-0"> Nunc non posuere consectetur, justo erat semper enim, non hendrerit dui odio id enim.</p>
                            </div>
                          </div>

                       </div>
                 </div>
               </div>
          </section>
        
        </>
    );
    }