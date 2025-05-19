export default function Subcribe() {
    return (
        <section  className='py-5 bg-[#1E293B] w-full h-screen flex items-center justify-center'>
            <div className="container">
                
               
                   
                    <h2 className="font-medium text-[48px] text-white tracking-wide font-sans text-center">Subscribe to my <span className="text-blue-600">Newsletters </span></h2>
                    <p className="font-normal text-[20px] text-[#cbd5e1] font-sans text-center py-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus malesuada nisi tellus, non imperdiet nisi tempor at.</p>

                   <ul className="font-normal text-[20px] text-[#cbd5e1] font-sans text-center my-5">
                     <li>Lorem ipsum dolor sit amet</li>
                    <li>Lorem ipsum </li>
                    <li>Lorem ipsum dolor sit</li>
                   </ul>

    
                    <div className="relative w-full max-w-[700px] mx-auto">
                         <input 
                         type="text"
                         placeholder="Enter your email"
                         className="w-full h-[70px] rounded-[30px] bg-[#393f48] placeholder:font-normal placeholder:text-[20px] placeholder:text-[#cbd5e1] text-white px-6 pr-[180px] outline-none shadow-md" />
                      <button
                      style={{ borderRadius: "30px" }}
                      className="absolute top-1/2 right-4 -translate-y-1/2 h-[46px] px-6 font-bold text-[20px] text-[#1e293b] bg-gradient-to-r from-cyan-400 to-blue-500 hover:opacity-90 transition w-[140px] sm:w-[164px] font-sans">Subscribe</button>
                      </div>

            
            
            </div>
        </section>
    )
}