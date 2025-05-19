export default function Newsletter() {
    return (
        <section  className='py-5 bg-[#1E293B]'>
            <div className="container">
                  <div className="row justify-center align-items-center">
               <div className="col-lg-6">
                   
                    <h2 className="font-medium text-[48px] text-white tracking-wide font-sans">Subscribe to my <br/> <span className="text-blue-600">Newsletters </span></h2>
                    <p className="font-normal text-[20px] text-[#cbd5e1] font-sans">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus malesuada nisi tellus, non imperdiet nisi tempor at.</p>
               </div>
               <div className="col-lg-6">
                    <div className="relative w-full max-w-[522px] mx-auto">
                         <input 
                         type="text"
                         placeholder="Enter your email"
                         className="w-full h-[70px] rounded-[30px] bg-[#393f48] placeholder:font-normal placeholder:text-[20px] placeholder:text-[#cbd5e1] text-white px-6 pr-[180px] outline-none shadow-md" />
                      <button
                      style={{ borderRadius: "30px" }}
                      className="absolute top-1/2 right-4 -translate-y-1/2 h-[46px] px-6 font-bold text-[20px] text-[#1e293b] bg-gradient-to-r from-cyan-400 to-blue-500 hover:opacity-90 transition w-[140px] sm:w-[164px] font-sans">Subscribe</button>
                      </div>

                </div>
                </div>
            </div>
        </section>
    )
}