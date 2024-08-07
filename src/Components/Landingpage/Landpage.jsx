import { useState } from 'react';
import CarouselComponent from '../Carousel/CarouselComponent'
import Marquee from 'react-fast-marquee'

const Landpage = () => {
  const [open, setOpen] = useState(false);

  const toggleDropdown = () => {
    setOpen(!open);
  };
  return (
    <div className="landing-page w-full">
      {/* Discover section */}
      <div className="Discover w-full h-[957px] relative bg-banner bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center">
        <h1 className="text-white text-[28px] w-[350px] sm:w-[702px] h-[192px] sm:text-6xl font-bold text-center absolute top-[77px] sm:top-[150px] sm:leading-[96px] animate-fadeInUp">
          Discover Unique Film Locations for Your Movie Production
        </h1>
        <p className="sm:w-[750px] sm:h-[108px] text-center absolute sm:top-[487px] top-[220px] mt-[px] text-[15px] w-[330px] text-white sm:text-xl font-normal leading-7 sm:leading-9 animate-fadeInUpDelay">
          Find the perfect backdrop for your film or TV project with our extensive collection of unique and diverse locations. From historic buildings to breathtaking landscapes, we have it all.
        </p>
        <div className='w-full h-[400px] sm:w-[1153px] sm:h-[120px] sm:flex justify-between items-center rounded-lg absolute top-[440px] sm:top-[739px] text-center animate-fadeInUpDelay p-4 bg-white'>
          <div className='x1:flex w-full flex-col items-center sm:justify-center'>
            <input type="text" className='w-[300px] p-[5px] m-[10px] h-[50px] sm:w-56 sm:h-16 sm:py-4 sm:px-10 rounded-md border border-purple-600 sm:ml-2' placeholder='Enter Location' />
            <input type="text" className='w-[300px] p-[5px] m-[10px] h-[50px] sm:w-56 sm:h-16 sm:py-4 sm:px-10 rounded-md border border-purple-600 sm:ml-2' placeholder='What are you planning?' />
            <input type="text" className='w-[300px] p-[5px] m-[10px] h-[50px] sm:w-56 sm:h-16 sm:py-4 sm:px-10 rounded-md border border-purple-600 sm:ml-2' placeholder='Enter Start Date' />
            <input type="text" className='w-[300px] p-[5px] m-[10px] h-[50px] sm:w-56 sm:h-16 sm:py-4 sm:px-10 rounded-md border border-purple-600 sm:ml-2' placeholder='Enter End Date' />
          </div>
          <button className='sm:w-32 sm:h-16 p-3 sm:p-5 gap-3 rounded-lg text-white bg-purple-600 border-0'>
            <i className="bi bi-search"></i> Search
          </button>
        </div>
      </div>
      {/* Discover section done */}
      {/* Marquee section start */}
      <div className='h-[113] w-full sm:w-full p-10 bg-gray-100 flex flex-col items-center mt-32'>
        <h3 className='text-[20px] sm:text-lg font-medium text-gray-600 mb-5 animate-fadeInUp animate-fadeInUpDelay'>Recently Shot With Us</h3>
        <Marquee className='flex justify-between items-center w-full '>
          <div className=' '>
            <img src="images/disney_logo.svg.png" alt="brand" className='w-[122px] h-[24px] x1:w-40 x1:m-8 ml-[50px]' />
          </div>
          <div className=' sm:w-40 sm:m-8'>
            <img src="images/ebonylife_studios_logo.png.png" alt="brand" className='w-[122px] h-[24px] x1:w-40 x1:m-8 ml-[50px]' />
          </div>
          <div className=' sm:w-40 sm:m-8'>
            <img src="images/filmancc_logo.png.png" alt="brand" className='w-[122px] h-[24px] x1:w-40 x1:m-8 ml-[50px]' />
          </div>
          <div className=' sm:w-40 sm:m-8'>
            <img src="images/Logo.png.png" alt="brand" className='w-[122px] h-[24px] sm:w-40 x1:m-8 x1-[50px] ml-[50px]' />
          </div>
          <div className=' sm:w-40 sm:m-8'>
            <img src="images/netflix_logo.svg.png" alt="brand" className='w-[122px] h-[24px] x1:w-40 xl:m-8 x1-[50px] ml-[50px]' />
          </div>
          <div className=' sm:w-40 sm:m-8'>
            <img src="images/nollywood_gists_logo.png.png" alt="brand" className='w-[122px] h-[24px] x1:w-40 x1:m-8 x1-[50px] ml-[50px]' />
          </div>
          <div className='sm:w-40 sm:m-8'>
            <img src="images/tecnomobile_logo.svg.png" alt="brand" className='w-[122px] h-[24px] x1:w-40 x1:m-8 x1-[5px] ml-[50px]' />
          </div>
        </Marquee>
      </div>
      {/* Marquee section ends */}

      {/* Find space starts */}
      <div className='w-full p-10 text-center bg-white mt-10'>
        <CarouselComponent />
      </div>
      {/* Find space ends */}
      {/* Created by skoukar */}
      <div className='w-full py-24 bg-white mt-10'>
        <div className='text-center mb-10'>
          <h1 className='text-[28px] sm:text-[60px] font-bold leading-6 text-gray-900'>Created With Skoutar</h1>
          <p className='text-[18px] mt-[10px] sm:text-base font-normal leading-6 text-gray-600 mx-auto sm:mt-10'>Better Locations, Endless Possibilities</p>
        </div>
        <div className='flex items-center justify-center w-full sm:mt-[50px]'>
          <div className='flex flex-col items-center justify-center'>
            <div className='max-w-2xl mx-auto mt-5 text-left'>
              <h4 className='text-[20px] w-[170px] sm:w-auto sm:text-2xl font-bold leading-6 text-gray-900 transition-colors duration-300 hover:text-indigo-600 cursor-pointer'>Discover Amazing Film Locations</h4>
              <p className='text-[16px] sm:text-base leading-normal text-gray-700 mt-2 w-[170px] sm:w-[500px]'>Our advanced search filters allow you to find the perfect film location for your next project. Explore verified locations with ease and read user reviews to make informed decisions.</p>
            </div>
            <div className='max-w-2xl mx-auto mt-10 text-left'>
              <h4 className='text-[20px] w-[170px] sm:w-auto sm:text-2xl font-bold leading-6 text-gray-900 transition-colors duration-300 hover:text-indigo-600 cursor-pointer'>Verified Locations</h4>
              <p className='text-[16px] sm:text-base leading-normal text-gray-700 mt-2 w-[170px] sm:w-[500px]'>We ensure that all our film locations are verified to meet the highest standards. You can trust that the locations listed on our platform are reliable and suitable for your needs.</p>
            </div>
            <div className='max-w-2xl mx-auto mt-10 text-left'>
              <h4 className='text-[20px] w-[170px] sm:w-auto sm:text-2xl font-bold leading-6 text-gray-900 transition-colors duration-300 hover:text-indigo-600 cursor-pointer'>User Reviews</h4>
              <p className='text-[16px] sm:text-base leading-normal text-gray-700 mt-2 w-[170px] sm:w-[500px]'>Read honest and unbiased reviews from other filmmakers who have used our platform. Their experiences will help you make the right choice for your film production.</p>
            </div>
          </div>
          <img src="images/created.png" alt="" className="w-[190px] h-[908px] sm:w-[600px] sm:h-[500px] rounded-lg" />
        </div>

      </div>
      {/* How skoutar works */}
      <div className="w-full bg-white flex flex-col items-center">
        <h1 className="text-4xl md:text-6xl font-bold leading-48 text-center text-[#0E0E0E]">How Skouta Works</h1>
        <p className="w-90% md:w-[870px] h-[160px] text-sm md:text-base font-normal leading-30 text-center">
          We love production and are committed to simplifying it, starting with film locations. Skouta’s marketplace connects thousands of producers and agencies with spaces to create commercials, films, and branded content throughout Nigeria.
        </p>
        <div className="relative flex items-center justify-between ml-[20%]">
            <div className="absolute mt-[100px] top-[50px] md:right-[500px] w-[60%] sm:w-[672px] md:w-[594px] bg-gray-100 rounded-lg shadow-[0px 2px 2px rgba(34,34,34,0.14)] -translate-y-20">
              <div className="static w-[594px] p-[10px] md:mt-[70px] flex">
                <img src="images/howicon1.png" alt="" className="w-7 h-7 md:w-[64px] md:h-[64px] text-[#6B6B6B] mt-[50px]" />
                <div className="ml-[20px] w-[490px] h-[174px]">
                  <h4 className="text-lg md:text-2xl font-bold md:leading-[42px] text-left text-[#6200EE]">High Quality Listing</h4>
                  <p className="text-sm leading-30 mt-[5px]">Detailed descriptions, professional photos and virtual tours. From a fully-equipped studio to a seaside mansion or abandoned warehouse, you can find your perfect fit.</p>
                </div>
              </div>
              <hr className="w-[594px] ml-[39px] border border-[#BABABA]" />
              <div className="flex w-[594px] p-[10px] md:mt-[70px]">
                <img src="images/howicon2.png" alt="" className="w-7 h-7 md:w-[64px] md:h-[64px] text-[#6B6B6B] mt-[50px]" />
                <div className="ml-[20px] w-[490px] h-[174px]">
                  <h4 className="text-lg md:text-2xl font-bold md:leading-[42px] text-left text-[#6200EE]">Secure Payment System</h4>
                  <p className="text-sm leading-30 mt-[5px]">With our clear rates and no hidden charges, you will know what you are paying for, right from booking, streamlined online transactions for location fees and permits.</p>
                </div>
              </div>
              <hr className="w-[594px] ml-[39px] border border-[#BABABA]" />
              <div className="flex w-[594px] sm:ml-[15px] p-[10px] md:mt-[70px]">
                <img src="images/howicon3.png" alt="" className="w-7 h-7 md:w-[64px] md:h-[64px] text-[#6B6B6B] mt-[50px]" />
                <div className="ml-[20px] w-[490px] h-[174px]">
                  <h4 className="text-lg md:text-2xl font-bold md:leading-[42px] text-left text-[#6200EE]">Availability Calendar</h4>
                  <p className="text-sm leading-30 mt-[5px]">Real-time availability for booking. Emergencies happen. Book locations and anything you need for any event or production with ease.</p>
                </div>
              </div>
          </div>
          <img src="images/how (2).png" alt="" className="rlative w-[60%] sm:w-[845px] h-[944px] rounded-[8px]" />
        </div>
      </div>

        {/* list your space */}
        <div className='w-full h-auto py-15 bg-white md:mt-10 mt-[80px] rounded-[8px] md:flex items-center justify-center'>
        <div className='md:w-[600px] md:h-[728px] flex flex-col items-center h-[468px] w-[90%] ml-[5%] rounded-[8px] bg-white shadow-[0_2px_2px_2px_#22222214] md:m-[50px]'>
          <img src="images/list-space.png" alt="" className='md:w-[600px] w-[396px] h-[250px] md:h-[382px]' />
          <p className='md:w-[560px] w-[320px] h-auto m-[20px] text-[13px] md:ml-5 text-lg font-normal text-left text-[#222222]'>Sign up and earn money when you list your space on Skouta. The most recognised brands are filming now, be a part of their production! </p>
          <button className='md:w-[228px] w-[50%] h-[48px] md:h-[64px] md:p-[10px] p-[5px] rounded-lg text-[#F8F8F8] bg-[#6200EE] border border-solid ml-5 md:mt-10 transition duration-600 hover:bg-[#290064]'> <span>List Your Space</span></button>
        </div>
        <div className='md:w-[600px] md:h-[728px] flex flex-col mt-10 items-center h-[468px] w-[90%] ml-[5%] rounded-[8px] bg-white shadow-[0_2px_2px_2px_#22222214] md:m-[50px]'>
          <img src="images/list-space2.png" alt="" className='md:w-[600px] w-[396px] h-[250px] md:h-[382px]' />
          <p className='md:w-[560px] w-[320px] h-auto m-[20px] text-[13px] md:ml-5 text-lg font-normal text-left text-[#222222]'>We connect you with the best locations well suited to your project and your selected preference. Tell us what you’re looking for, we’re here to help!</p>
          <button className='md:w-[228px] w-[50%] h-[48px] md:h-[64px] md:p-[10px] p-[5px] rounded-lg text-[#F8F8F8] bg-[#6200EE] border border-solid ml-5 md:mt-10 transition duration-600 hover:bg-[#290064]'><span>Get Started</span></button>
        </div>
      </div>
        {/* Covered section */}
        <div className='w-full md:h-[370px] h-[217px] px-6 sm:px-24 md:px-40 lg:px-56 pt-6 md:mt-[40px] mt-[80px] bg-gray-200'>
          <div className='w-[90%] h-[80%] md:mt-10 sm:mt-16 flex items-center justify-around'>
            <img src="images/Green.png" className='md:h-[200px] md:w-[200px] w-[48px] h-[48px] ' alt="" />
            <div className='pl-[8px] md:ml-[80px] '>
              <h1 className='text-4xl sm:text-5xl md:text-6xl text-[20px] font-bold leading-tight text-gray-900'>We have you covered </h1>
              <p className='md:w-[800px] w-[314px] md:mt-4 h-84 text-[13px] leading-5 md:text-lg font-normal md:leading-7 text-gray-700'>Select from our protection packages with damage protection, liability insurance, and even cancellation protection.</p>
            </div>
          </div>
        </div>
        {/* costumer reviws */}
        <div className='w-full md:h-[892px] h-[836px] md:mt-[180px] mt-[120px] bg-purple-100 flex flex-col items-center justify-center'>
          <div className="md:w-[838px] w-[90%] flex flex-col items-center">
            <h1 className='w-[90%] md:h-[auto] h-auto  md:text-5xl text-[25px] font-bold leading-6 md:leading-10 tracking-wide text-center text-gray-800'>What our customers have to say about us</h1>
            <p className='md:w-[700px] w-[90%] md:mt-4 mt-3 text-[13px] text-center font-normal md:leading-10 text-gray-700'>Customer testimonials and reviews that validate the best quality locations providing social proof to potential clients.</p>
          </div>
          <div className='w-[100%] h-auto mt-[30px] md:flex items-center justify-center'>
            <div className='md:w-[400px] w-[95%] ml-[10px] h-auto md:h-[300px] p-[32px] bg-purple-600 md:ml-5'>
              <p className=' md:w-[362px] w-[300px] h-auto text-[12px] md:text-base font-normal leading-30 text-left'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros </p>
              <div className='md:w-[293px] w-[170px] h-[px] md:h-[78px] flex m-[10px] md:mt-[45px]'>
                <img src="images/user.png" alt="" className='md:w-[64px] w-[28px] h-[28px] md:h-[64px] border-[2px] border-white bg-white md:p-[10px] rounded-full mt-[10px]' />
                <div className='w-[400px] ml-5 md:h-[78px] md:my-[12px]'>
                  <h4 className='w-[200px] h-auto text-2xl font-semibold text-[15px] leading-36 text-gray-900'>John Smith</h4>
                  <p className='md:text-base text-[12px] font-normal leading-30text-left'>Creative Director Netflix</p>
                </div>
              </div>
            </div>
            <div className='md:w-[400px] w-[95%] ml-[10px] h-auto md:h-[300px] mt-[10px] p-[32px] bg-purple-600 md:ml-5'>
              <p className='md:w-[362px] m-[10px] max-w-[300px] h-auto text-[12px] md:text-base font-normal leading-30 text-left'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p>
              <div className='md:w-[293px] w-[170px] h-[px] md:h-[78px] flex m-[10px] md:mt-[45px]'>
                <img src="images/user.png" alt="" className='md:w-[64px] w-[28px] h-[28px] md:h-[64px] border-[2px] border-white bg-white md:p-[10px] rounded-full mt-[10px]' />
                <div className='w-[400px] ml-5 md:h-[78px] md:my-[12px]'>
                  <h4 className='w-[200px] h-auto text-2xl font-semibold text-[15px] leading-36 text-gray-900'>Funke Akindele</h4>
                  <p className='md:text-base text-[12px] font-normal leading-30text-left'>Prime Video</p>
                </div>
              </div>
            </div>
            <div className='md:w-[400px] w-[95%] ml-[10px] h-[auto] mt-[10px] md:h-[300px] p-[32px] bg-purple-600 md:ml-5'>
              <p className='md:w-[362px] w-[300px] h-auto text-[12px] md:text-base font-normal leading-30 text-left'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros </p>
              <div className='md:w-[293px] w-[170px] h-[px] md:h-[78px] flex m-[10px] md:mt-[45px]'>
                <img src="images/user.png" alt="" className='md:w-[64px] w-[28px] h-[28px] md:h-[64px] border-[2px] border-white bg-white md:p-[10px] rounded-full mt-[10px]' />
                <div className='w-[400px] ml-5 md:h-[78px] md:my-[12px]'>
                  <h4 className='w-[200px] h-auto text-2xl font-semibold text-[15px] leading-36 text-gray-900'>Natalie Adeniyi</h4>
                  <p className='md:text-base text-[12px] font-normal leading-30text-left'>Sourcing Director EbonyLifeTV</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Question */}
        <div className='w-full h-[1044px] mt-[180px] bg-[#F8F8F8] flex flex-col items-center'>
          <div className='w-[838px] h-[262px] mt-[64px]'>
            <div>
            </div>
            <h1 className='w-[838px] h-[192px] text-[60px] font-bold leading-[90px] tracking-[0.02em] text-center'>Frequently Asked Questions (FAQs)</h1>
            <p className='w-full h-[42px] text-[25px] font-normal leading-[42px] text-center text-[#4E4E4E] mt-[10px]'>Any questions? We got you.</p>
          </div>
          <div className='w-4/5 flex items-center justify-between'>
          <div className='flex flex-col items-center justify-around'>
          <div className="cursor-pointer w-[600px] bg-white p-4 my-2 shadow-md rounded-md">
            <p className="text-lg font-medium text-[#1F1F1F]">How do I list my space on Skouta?<i onClick={toggleDropdown} className="bi bi-chevron-down ml-[200px]"></i>
            </p>
            {open && (
              <div className="mt-2 text-sm w-[600px] text-[#1F1F1F]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque corporis quam quisquam mollitia iusto fuga! Excepturi quidem dicta vero doloremque!
              </div>
            )}
          </div>
          <div className="cursor-pointer w-[600px] bg-white p-4 my-2 shadow-md rounded-md">
            <p className="text-lg font-medium text-[#1F1F1F]">How do I list my space on Skouta?<i onClick={toggleDropdown} className="bi bi-chevron-down ml-[200px]"></i>
            </p>
            {open && (
              <div className="mt-2 text-sm w-[600px] text-[#1F1F1F]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque corporis quam quisquam mollitia iusto fuga! Excepturi quidem dicta vero doloremque!
              </div>
            )}
          </div>
          <div className="cursor-pointer w-[600px] bg-white p-4 my-2 shadow-md rounded-md">
            <p className="text-lg font-medium text-[#1F1F1F]">How do I list my space on Skouta?<i onClick={toggleDropdown} className="bi bi-chevron-down ml-[200px]"></i>
            </p>
            {open && (
              <div className="mt-2 text-sm w-[600px] text-[#1F1F1F]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque corporis quam quisquam mollitia iusto fuga! Excepturi quidem dicta vero doloremque!
              </div>
            )}
          </div>
          <div className="cursor-pointer w-[600px] bg-white p-4 my-2 shadow-md rounded-md">
            <p className="text-lg font-medium text-[#1F1F1F]">How do I list my space on Skouta?<i onClick={toggleDropdown} className="bi bi-chevron-down ml-[200px]"></i>
            </p>
            {open && (
              <div className="mt-2 text-sm w-[600px] text-[#1F1F1F]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque corporis quam quisquam mollitia iusto fuga! Excepturi quidem dicta vero doloremque!
              </div>
            )}
          </div>
          </div>

            <div className='w-[400px] h-[500px] top-[386px] left-[949px] bg-white p-[21px] flex flex-col items-center'>
              <img src="images/message.png" alt="" className='w-[100px] h-[100px]' />
              <h4 className='w-[350px] text-[28px] font-bold leading-[px] text-center mt-[40px]'>Do you have more questions?</h4>
              <p className='w-[351px] mt-[40px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in </p>
              <button className='w-[228px] mt-[40px] h-auto p-[20px_8px] gap-[8px] rounded-[8px] bg-[#6200EE] text-white'>Shoot a direct mail</button>
            </div>
          </div>
        </div>
        {/* Stay Update */}
        <div className='bg-white w-full xl:h-[500px] p-[3%] justify-center xl:flex xl:items-center xl:justify-center '>
            <div className='updated-A xl:w-[586px] h-auto xl:mr-[40px]'>
              <h4 className='xl:w-[586px] w-[400px] text-[16px] xl:text-[40px] font-bold leading-5 xl:leading-[60px] text-left'>Stay Updated with Skouta’s Newsletter</h4>
              <p className='xl:w-[586px] w-[360px] xl:mt-[0] mt-3 text-[#4E4E4E] text-[14px] xl:text-[20px] font-normal leading-6 xl:leading-[36px] text-left'>Find Your Perfect Film Location. Discover unique and stunning film locations for your next project</p>
            </div>
            <div className='w-[639px] xl:ml-[40px]'>
              <p className='xl:w-[586px] w-[340px] xl:mt-[0] mt-3 text-[14px] xl:text-[20px] xl:font-normal leading-6 xl:leading-[36px] text-left'>Subscribe to our newsletter for the latest updates, special offers, and to join us on our journey.</p>
              <div className='form-input w-[388px] xl:w-[639px] h-[64px] relative mt-[20px] rounded-[8px]'>
                <input type="text" placeholder='Your Email Address' className='w-[310px] xl:w-[411px] h-[48px] xl:h-auto p-[22px_256px_18px_16px] rounded-[8px] bg-[#E2E2E2]' />
                <button className='xl:w-[228px] xl:mt-[00] mt-[20px] p-3 h-auto xl:p-[20px_8px] gap-[8px] rounded-[8px] bg-[#6200EE] text-white'>Subcribe</button>
                <p className='xl:w-[586px] w-[340px] xl:mt-[0] mt-3 text-[14px] xl:text-[20px] xl:font-normal leading-6 xl:leading-[36px] text-left'>By subscribing, you agree to our Terms and Conditions.</p>
              </div>
            </div>
        </div>
      </div>
      )  
}

      export default Landpage
