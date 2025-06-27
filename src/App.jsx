import React from 'react';
import { ArrowRightLeft, Handshake, Shield } from "lucide-react";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { 
  FaPhone, 
  FaEnvelope, 
  FaMapMarkerAlt,
  FaClock,
  FaPaperPlane,
  FaUserCircle,
  FaLock
} from 'react-icons/fa';

const AlphaPro = () => {
  function NavBar() {
    return(
      <nav className='flex justify-between absolute top-0 left-0 z-50 w-full text-2xl text-white px-9 pt-12 hover:bg-black/15 hover:py-13'>
        <figure>
          <img src="../images/alphaproSmall.svg" alt="AlphaPro Logo" width={300} height={100}/>
        </figure>
        <div>
          <ul className='flex gap-10 items-center text-2xl! font-bold'>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Service</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>
    )
    
  }
  return (
    <main className="font-sans text-gray-800 w-full">
      <NavBar/>
      {/* Hero Section */}
      {/* <section 
        className="relative h-[100vh] w-full flex items-center justify-center text-center text-white bg-cover bg-center"
        style={{ backgroundImage: `linear-gradient(rgba(0, 41, 84, 0.85), rgba(0, 41, 84, 0.85)), url('../images/Growth, Coins - dreamstime_xxl_344575282.jpg')` }}
      >
        <div className="max-w-4xl px-8">
          <div className="mb-6">
            <span className="bg-[#00A3A1] text-white px-4 py-2 rounded-full text-sm font-semibold">
              NONPROFIT INSURANCE SPECIALISTS
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            THE ONLY COMMERCIAL INSURANCE BROKERAGE <span className="text-[#00A3A1]">BUILT FOR</span> AND <span className="text-[#00A3A1]">OWNED BY</span> THE NOT-FOR-PROFIT COMMUNITY
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            The only brokerage owned by and exclusively serving nonprofit organizations
          </p>
          <button className="bg-[#00A3A1] hover:bg-[#008B89] text-white font-bold py-3 px-8 rounded transition duration-300">
            Learn More
          </button>
        </div>
      </section> */}
      {/* Hero Section */}
      <section 
        id="home"
        className="relative h-[100vh] w-full flex items-center justify-center text-center text-white bg-cover bg-center overflow-hidden"
        style={{ 
          backgroundImage: `linear-gradient(135deg, rgba(0, 85, 114, 0.9) 0%, rgba(84, 23, 107, 0.85) 100%), url('../images/Growth, Coins - dreamstime_xxl_344575282.jpg')`,
          boxShadow: 'inset 0 0 0 2000px rgba(0, 41, 84, 0.3)'
        }}
      >
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-20">
            <div className="absolute top-20 left-20 w-40 h-40 bg-[#FFD700] rounded-full mix-blend-overlay filter blur-2xl"></div>
            <div className="absolute bottom-20 right-20 w-60 h-60 bg-[#00A3A1] rounded-full mix-blend-overlay filter blur-2xl"></div>
            <div className="absolute top-1/2 right-1/4 w-32 h-32 bg-[#7D3C98] rounded-full mix-blend-overlay filter blur-2xl"></div>
          </div>
        </div>

        <div className="max-w-4xl px-8 relative z-10 pt-5">
          {/* <div className="mb-6">
            <span className="bg-gradient-to-r from-[#00A3A1] to-[#008080] text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
              NONPROFIT INSURANCE SPECIALISTS
            </span>
          </div> */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            THE ONLY COMMERCIAL INSURANCE BROKERAGE <span className="text-teal-400">BUILT FOR AND OWNED </span> BY THE <span className="text-teal-400">NOT-FOR-PROFIT</span>  COMMUNITY
          </h1>
          <p className="text-2xl! md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
            The only brokerage owned by and exclusively serving non-profit organizations
          </p>
          <button className="bg-gradient-to-r from-[#00A3A1] to-[#008080] hover:from-[#008080] hover:to-[#006666] text-white font-bold py-3 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl p-4 w-[80%]">
            <span className='text-2xl'><a href="#about">Learn More</a></span>
          </button>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-[rgba(0,0,0,0.3)] to-transparent"></div>
      </section>

      {/* About Us Section*/}
      <section id="about" className="py-20 bg-gradient-to-br from-[#F5F9FF] to-[#E8F4FF]">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-8 items-stretch"> 
            <div className="lg:w-[45%] relative">
              {/* Decorative elements */}
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#7D3C98] opacity-10 rounded-full blur-xl"></div>
              <div className="absolute bottom-20 -right-6 w-32 h-32 bg-[#00A3A1] opacity-10 rounded-full blur-xl"></div>
              
              <h2 className="text-4xl font-bold text-[#002954] mb-8 relative">
                <span className="pb-2 relative">
                  ABOUT US
                  <span className="absolute bottom-0 left-0 w-24 h-1 bg-gradient-to-r from-[#00A3A1] to-[#7D3C98] rounded-full"></span>
                </span>
              </h2>
              
              <div className="space-y-8">
                <div className=" p-6 rounded-xl border-l-4 border-[#00A3A1] shadow-lg">
                  <h3 className="text-2xl font-semibold text-[#002954] mb-4">The Unitas Brokerage Foundation</h3>
                  <p className="text-gray-700">
                    Unitas Brokerage was created to build commercial insurance brokerages. Its founders Kerry Martin and Xuong Nguyen have enjoyed long and successful careers in both commercial insurance and corporate finance. Having known each other for nearly 40 years and worked directly together the last 12, they have developed a revolutionary commercial insurance brokerage model.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-white to-[#F0F9FF] p-6 rounded-xl shadow-lg border border-[#E6F0F9]">
                  <h3 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-[#00A3A1] to-[#7D3C98] bg-clip-text text-transparent">
                    The AlphaPro Difference
                  </h3>
                  <p className="text-gray-700 mb-4">
                    AlphaPro Brokerage is the only commercial insurance brokerage built for and owned by the NFP community. AlphaPro is a Joint Venture comprised of Unitas Brokerage (50%) and AlphaPro Member Partners (50%).
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="bg-gradient-to-br from-[#00A3A1] to-[#008080] text-white p-2 rounded-full mr-3 flex-shrink-0">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-gray-700">Unitas serves as the operating partner overseeing all aspects of operations</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-gradient-to-br from-[#FFD700] to-[#FFA500] text-white p-2 rounded-full mr-3 flex-shrink-0">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-gray-700">Member Partners convert operating expenses into mission-driven revenue</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-gradient-to-br from-[#7D3C98] to-[#5B2C6F] text-white p-2 rounded-full mr-3 flex-shrink-0">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-gray-700">Foundation established to provide additional support to NFP partners</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Image - wider and matched height */}
            <div className="lg:w-[55%] relative flex items-center"> {/* Increased width from 50% to 55% */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-[#FFD700] opacity-10 rounded-full blur-xl"></div>
              <div className="w-full h-full min-h-[500px] bg-gradient-to-br from-[#002954] to-[#7D3C98] rounded-2xl shadow-2xl overflow-hidden">
                <img 
                  src="../images/Puzzle - dreamstime_xxl_90972150.jpg" 
                  alt="Collaborative partnership puzzle" 
                  className="w-full h-full object-cover object-center opacity-90 mix-blend-overlay"
                />
                <div className="absolute inset-0 flex items-center justify-center p-8">
                  <div className="text-center text-white max-w-md mx-auto">
                    <h3 className="text-3xl font-bold mb-4">The Unitas Model</h3>
                    <p className="text-xl mb-6">A revolutionary approach where all stakeholders sit on the same side of the table</p>
                    <div className="flex flex-wrap justify-center gap-3">
                      <span className="bg-[#00A3A1] px-4 py-1 rounded-full text-sm font-semibold">Equity</span>
                      <span className="bg-[#FFD700] px-4 py-1 rounded-full text-sm font-semibold text-[#002954]">Collaboration</span>
                      <span className="bg-[#7D3C98] px-4 py-1 rounded-full text-sm font-semibold">Innovation</span>
                      <span className="bg-white px-4 py-1 rounded-full text-sm font-semibold text-[#002954]">Profit Sharing</span>
                      <span className="bg-[#00E5FF] px-4 py-1 rounded-full text-sm font-semibold text-[#002954]">Community</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-[#00A3A1] opacity-10 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </section>


      {/* The AlphaPro Difference Section*/}
     <section id='services' className="py-20 bg-gradient-to-br from-[#F5F9FF] to-[#E0EFF9]">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#002954] mb-4 relative inline-block">
              The <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00A3A1] to-[#008080]">AlphaPro</span> Difference
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-[#00A3A1] to-[#7D3C98] rounded-full"></span>
            </h2>
            <p className="text-xl text-[#4A5568] max-w-3xl mx-auto">
              Our unique joint venture model creates unparalleled alignment with your organization's mission
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="group relative overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-500 hover:shadow-xl hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-[#00A3A1]/5 to-[#7D3C98]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10 p-8">
                <div className="bg-gradient-to-br from-[#E6F7F7] to-[#D0F0F0] p-5 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <Handshake className="text-[#00A3A1] w-8 h-8" />
                </div>
                <h3 className="text-2xl font-semibold text-center text-[#002954] mb-4">Shared Ownership</h3>
                <p className="text-center text-gray-600">
                  SYS, owned by member partners: aligning directly with your mission and success
                </p>
                <div className="mt-6 flex justify-center">
                  <div className="w-12 h-1 bg-gradient-to-r from-[#00A3A1] to-[#7D3C98] rounded-full"></div>
                </div>
              </div>
            </div>
            
            {/* Card 2 */}
            <div className="group relative overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-500 hover:shadow-xl hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-[#00A3A1]/5 to-[#7D3C98]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10 p-8">
                <div className="bg-gradient-to-br from-[#E6F7F7] to-[#D0F0F0] p-5 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <Shield className="text-[#00A3A1] w-8 h-8" />
                </div>
                <h3 className="text-2xl font-semibold text-center text-[#002954] mb-4">Specialized Expertise</h3>
                <p className="text-center text-gray-600">
                  Deep nonprofit sector knowledge you won't find at traditional brokerages
                </p>
                <div className="mt-6 flex justify-center">
                  <div className="w-12 h-1 bg-gradient-to-r from-[#00A3A1] to-[#7D3C98] rounded-full"></div>
                </div>
              </div>
            </div>
            
            {/* Card 3 */}
            <div className="group relative overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-500 hover:shadow-xl hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-[#00A3A1]/5 to-[#7D3C98]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10 p-8">
                <div className="bg-gradient-to-br from-[#E6F7F7] to-[#D0F0F0] p-5 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <ArrowRightLeft className="text-[#00A3A1] w-8 h-8" />
                </div>
                <h3 className="text-2xl font-semibold text-center text-[#002954] mb-4">Shared Profits</h3>
                <p className="text-center text-gray-600">
                  Transform traditional insurance expenses into potential revenue streams
                </p>
                <div className="mt-6 flex justify-center">
                  <div className="w-12 h-1 bg-gradient-to-r from-[#00A3A1] to-[#7D3C98] rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute left-0 right-0 -bottom-20 h-40 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
        </div>
      </section>

      {/* Contact Section*/}
      <section id="contact" className="py-20 bg-gradient-to-br from-[#E0EFF9] to-[#F5F9FF]">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#002954] mb-4 relative inline-block">
              Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00A3A1] to-[#008080]">AlphaPro</span>
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-[#00A3A1] to-[#7D3C98] rounded-full"></span>
            </h2>
            <p className="text-xl text-[#4A5568] max-w-3xl mx-auto">
              Reach out to learn how our NFP-owned insurance solutions can support your mission
            </p>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left Column - Contact Info */}
            <div className="w-full lg:w-1/2 space-y-8">
              {/* Contact Methods Card */}
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="p-8 space-y-6">
                  <div className="flex items-start group">
                    <div className="bg-gradient-to-br from-[#E6F7F7] to-[#D0F0F0] p-4 rounded-full mr-5 transition-all duration-300 group-hover:scale-110">
                      <FaPhone className="text-[#00A3A1] text-xl" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-[#002954] mb-1">Phone</h3>
                      <p className="text-gray-700 hover:text-[#00A3A1] transition-colors">
                        <a href="tel:8005555555">(800) 555-5555</a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start group">
                    <div className="bg-gradient-to-br from-[#E6F7F7] to-[#D0F0F0] p-4 rounded-full mr-5 transition-all duration-300 group-hover:scale-110">
                      <FaEnvelope className="text-[#00A3A1] text-xl" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-[#002954] mb-1">Email</h3>
                      <p className="text-gray-700 hover:text-[#00A3A1] transition-colors">
                        <a href="mailto:email@alphapro.org">email@alphapro.org</a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start group">
                    <div className="bg-gradient-to-br from-[#E6F7F7] to-[#D0F0F0] p-4 rounded-full mr-5 transition-all duration-300 group-hover:scale-110">
                      <FaMapMarkerAlt className="text-[#00A3A1] text-xl" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-[#002954] mb-1">Headquarters</h3>
                      <p className="text-gray-700">
                        123 Partnership Way<br />
                        Suite 500<br />
                        New York, NY 10001
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start group">
                    <div className="bg-gradient-to-br from-[#E6F7F7] to-[#D0F0F0] p-4 rounded-full mr-5 transition-all duration-300 group-hover:scale-110">
                      <FaClock className="text-[#00A3A1] text-xl" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-[#002954] mb-1">Hours</h3>
                      <p className="text-gray-700">
                        Monday-Friday: 8:30AM - 6:00PM<br />
                        Saturday-Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Member Support Card */}
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="bg-gradient-to-br from-[#E6F7F7] to-[#D0F0F0] p-4 rounded-full mr-4">
                      <FaUserCircle className="text-[#00A3A1] text-xl" />
                    </div>
                    <h3 className="text-xl font-semibold text-[#002954]">Member Support</h3>
                  </div>
                  <p className="text-gray-700 mb-6">
                    Existing members can access our dedicated support portal for faster service.
                  </p>
                  <button className="flex items-center justify-center bg-gradient-to-r from-[#00A3A1] to-[#008080] hover:from-[#008080] hover:to-[#006666] text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 w-full group">
                    <FaLock className="mr-3 transition-transform duration-300 group-hover:scale-110" />
                    Member Portal Login
                  </button>
                </div>
              </div>
            </div>
            
            {/* Right Column - Contact Form */}
            <div className="w-full lg:w-1/2">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden h-full">
                <div className="p-8 h-full">
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-[#002954] mb-2">Get in Touch</h3>
                    <p className="text-lg text-gray-600">Send Us a Message</p>
                    <div className="w-16 h-1 bg-gradient-to-r from-[#00A3A1] to-[#7D3C98] rounded-full mt-3"></div>
                  </div>
                  
                  <form className="space-y-5">
                    <div>
                      <label htmlFor="name" className="block text-gray-700 mb-2 font-medium">Full Name</label>
                      <input 
                        type="text" 
                        id="name" 
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#00A3A1]/50 focus:border-[#00A3A1] transition-all duration-300"
                        placeholder="Your name"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="email" className="block text-gray-700 mb-2 font-medium">Email</label>
                        <input 
                          type="email" 
                          id="email" 
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#00A3A1]/50 focus:border-[#00A3A1] transition-all duration-300"
                          placeholder="Your email"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="phone" className="block text-gray-700 mb-2 font-medium">Phone</label>
                        <input 
                          type="tel" 
                          id="phone" 
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#00A3A1]/50 focus:border-[#00A3A1] transition-all duration-300"
                          placeholder="Your phone"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="organization" className="block text-gray-700 mb-2 font-medium">Organization</label>
                      <input 
                        type="text" 
                        id="organization" 
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#00A3A1]/50 focus:border-[#00A3A1] transition-all duration-300"
                        placeholder="Your organization"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-gray-700 mb-2 font-medium">How Can We Help?</label>
                      <textarea 
                        id="message" 
                        rows={4}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#00A3A1]/50 focus:border-[#00A3A1] transition-all duration-300"
                        placeholder="Your message"
                      ></textarea>
                    </div>
                    
                    <button 
                      type="submit" 
                      className="flex items-center justify-center bg-gradient-to-r from-[#00A3A1] to-[#008080] hover:from-[#008080] hover:to-[#006666] text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 w-full mt-6 group"
                    >
                      <FaPaperPlane className="mr-3 transition-transform duration-300 group-hover:translate-x-1" />
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      

      {/* Footer - Redesigned */}
      <footer className="py-8 bg-gray-200 text-teal-700 px-8 ">
        <div className='flex mb-6'>
          {/* Logo */}
          <article className='basis-1/4'>
          <img src="../images/alphaproLarge.svg" alt="AlphaPro Logo" width={300}/>
          </article>
          <article className='basis-1/4'>
           <h4 className='text-4xl mb-6 text-black'>Navigation</h4>
           <ul className='text-2xl'>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
             <li><a href="#contact">Contact</a></li>
           </ul>
          </article>
          {/* Location */}
          <article className='basis-1/4 text-black'>
            <h4 className='text-4xl mb-6'>Location</h4>
            <address className='text-xl'>
              One Northbrook Place <br/>
              5 Revere Drive <br/>
              Suite 200 <br/>
              Northbrook, IL  60062<br/>
            </address>
          </article>
          <article className='basis-1/4 '>
           <h4 className='text-4xl mb-6 text-black'>Contacts</h4>
           <p className='text-2xl'>info@alphaprobrokerage.com</p>
           <p className='text-2xl'>847-800-7082</p>
            <div className='flex items-center'>
              <p className='text-xl text-black'>A member of the Unitas Brokerage Group</p>
              <a href="https://www.unitasbrokerage.com/"><img src="..\images\Unitas+Brokerage+Logo.png" width={100} alt="Unitas logo" /></a>
            </div>
          </article>
        </div>
        <div className="container mx-auto px-6 text-center">
          <p>&copy; {new Date().getFullYear()} AlphaPro Brokerage. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
};

export default AlphaPro;