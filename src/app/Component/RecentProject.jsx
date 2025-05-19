import  Image  from 'next/image';
import projectImg from '@/../public/nav/project (1).png';
import projectImg2 from '@/../public/nav/project (2).png';
import projectImg3 from '@/../public/nav/project (3).png';

export default function RecentProject() {
  return (
    <>
        <section className="py-5 bg-[#1E293B]">
              <div className="container">
                    <h2 className="font-bold text-[48px] text-white my-4">Recent <span className="text-blue-400">Projects</span></h2>
                  <div className="row">
                      <div className="col-lg-12">
                              

                <div className="text-white flex flex-col lg:flex-row items-center bg-[rgba(30,41,59,0.4)]    rounded-[20px] p-6 lg:p-[30px] shadow-lg mt-5">
                             <Image src={projectImg3} alt="project" className="w-full max-w-[300px] h-auto object-contain" />

                         <div className="mt-4 lg:mt-0 lg:ml-6 w-full">
                           <div className="flex flex-wrap items-center gap-2  justify-center lg:justify-start">
                             <h3 className="font-medium text-2xl sm:text-[30px] text-[#f8fafc] tracking-wide"> Project1 </h3>

                             <span className="w-fit px-4 py-1 rounded-[10px] bg-[linear-gradient(180deg,rgba(16,185,129,0.2)_0%,rgba(190,242,100,0.2)_100%)] font-bold text-xs sm:text-[12px] text-[#10B981] hover:cursor-pointer">Web Design</span>
                          </div>

                           <p className="m-0 font-normal text-base sm:text-[17px] text-[#cbd5e1] mt-2  justify-center lg:justify-start"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum.</p>
                            <p className="m-0 font-normal text-base sm:text-[17px] text-[#cbd5e1] mt-2  justify-center lg:justify-start">Nunc non posuere consectetur, justo erat semper enim, non hendrerit dui odio id enim.</p>
                       </div>
                     </div>

                      </div>

                      <div className="col-lg-12">

                        <div className="text-white flex flex-col lg:flex-row items-center bg-[rgba(30,41,59,0.4)] rounded-[20px] p-6 lg:p-[30px] shadow-lg mt-5">
                             <Image src={projectImg2} alt="project" className="w-full max-w-[300px] h-auto object-contain" />

                         <div className="mt-4 lg:mt-0 lg:ml-6 w-full">
                           <div className="flex flex-wrap items-center gap-2  justify-center lg:justify-start">
                             <h3 className="font-medium text-2xl sm:text-[30px] text-[#f8fafc] tracking-wide"> Project2 </h3>

                             <span className="w-fit px-4 py-1 rounded-[10px] bg-[linear-gradient(180deg,rgba(220,38,38,0.2)_0%,rgba(249,115,22,0.2)_100%)] font-bold text-xs sm:text-[12px] text-[#DC2626] hover:cursor-pointer">Next.js</span>
                          </div>

                           <p className="m-0 font-normal text-base sm:text-[17px] text-[#cbd5e1] mt-2  justify-center lg:justify-start"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum.</p>
                            <p className="m-0 font-normal text-base sm:text-[17px] text-[#cbd5e1] mt-2  justify-center lg:justify-start">Nunc non posuere consectetur, justo erat semper enim, non hendrerit dui odio id enim.</p>
                       </div>
                       
                     </div>

                      </div>

                      <div className="col-lg-12">
                          
                               <div className="text-white flex flex-col lg:flex-row items-center bg-[rgba(30,41,59,0.4)] rounded-[20px] p-6 lg:p-[30px] shadow-lg mt-5">
                             <Image src={projectImg} alt="project" className="w-full max-w-[300px] h-auto object-contain" />

                         <div className="mt-4 lg:mt-0 lg:ml-6 w-full">
                           <div className="flex flex-wrap items-center gap-2  justify-center lg:justify-start">
                             <h3 className="font-medium text-2xl sm:text-[30px] text-[#f8fafc] tracking-wide"> Project3 </h3>

                             <span className="w-fit px-4 py-1 rounded-[10px] bg-[linear-gradient(180deg,rgba(124,58,237,0.2)_0%,rgba(96,165,250,0.2)_100%)] font-bold text-xs sm:text-[12px] text-[#60A5FA] hover:cursor-pointer">Awesome feature</span>
                          </div>

                           <p className="m-0 font-normal text-base sm:text-[17px] text-[#cbd5e1] mt-2  justify-center lg:justify-start"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum.</p>
                            <p className="m-0 font-normal text-base sm:text-[17px] text-[#cbd5e1] mt-2  justify-center lg:justify-start">Nunc non posuere consectetur, justo erat semper enim, non hendrerit dui odio id enim.</p>
                       </div>
                       
                     </div>

                      </div>
                  </div>
              </div>
        </section>
    </>
  );
}