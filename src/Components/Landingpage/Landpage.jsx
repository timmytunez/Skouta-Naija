import CarouselComponent from '../Carousel/CarouselComponent'
import './Landpage.css'
import Marquee from 'react-fast-marquee'

const Landpage = () => {
  return (
    <div className="landing-page">
      {/* Discover section */}
      <div className="Discover">
        <h1 className="Discover-header">
          Discover Unique Film Locations for Your Movie Production
        </h1>
        <p className="Discover-text">
          Find the perfect backdrop for your film or TV project with our extensive collection of unique and diverse locations. From historic buildings to breathtaking landscapes, we have it all.
        </p>
        <div className='Discover-search'>
          <div className='input-box'>
            <input type="text" className='search-input' placeholder='Enter Location' />
            <input type="text" className='search-input' placeholder='What are you planning?' />
            <input type="text" className='search-input' placeholder='Enter Start Date' />
            <input type="text" className='search-input' placeholder='Enter End Date' />
          </div>
          <button>
            <i className="bi bi-search"></i> Search
          </button>
        </div>
      </div>
      {/* Discover section done */}

      {/* Marquee section start */}
      <div className='marque-section'>
        <h3 className='margue-shot'>Recently Shot With Us</h3>
        <Marquee className='scroll-page'>
          <div className='Brand-logo'>
            <img src="images/disney_logo.svg.png" alt="brand" />
          </div>
          <div className='Brand-logo'>
            <img src="images/ebonylife_studios_logo.png.png" alt="brand" />
          </div>
          <div className='Brand-logo'>
            <img src="images/filmancc_logo.png.png" alt="brand" />
          </div>
          <div className='Brand-logo'>
            <img src="images/Logo.png.png" alt="brand" />
          </div>
          <div className='Brand-logo'>
            <img src="images/netflix_logo.svg.png" alt="brand" />
          </div>
          <div className='Brand-logo'>
            <img src="images/nollywood_gists_logo.png.png" alt="brand" />
          </div>
          <div className='Brand-logo'>
            <img src="images/tecnomobile_logo.svg.png" alt="brand" />
          </div>
        </Marquee>
      </div>
      {/* Marquee section ends */}

      {/* Find space starts */}
      <div className='find-space'>
        <CarouselComponent />
      </div>
      {/* Find space ends */}
      {/* Created by skoukar */}
      <div className='created'>
        <div className='created-text'>
          <h1 className='created-header'>Created With Skoutar</h1>
          <p className='created-p'>Better Locations, Endless Possibilities</p>
        </div>
        <div className='Created-b'>
          <div>
            <div className='Created-offer'>
              <h4 className='offer-h'>Discover Amazing Film Locations</h4>
              <p className='offer-p'>Our advanced search filters allow you to find the perfect film location for your next project. Explore verified locations with ease and read user reviews to make informed decisions.</p>
            </div>
            <div className='Created-offer'>
              <h4 className='offer-h'>Verified Locations</h4>
              <p className='offer-p'>We ensure that all our film locations are verified to meet the highest standards. You can trust that the locations listed on our platform are reliable and suitable for your needs.</p>
            </div>
            <div className='Created-offer'>
              <h4 className='offer-h'>User Reviews</h4>
              <p className='offer-p'>Read honest and unbiased reviews from other filmmakers who have used our platform. Their experiences will help you make the right choice for your film production.</p>
            </div>
          </div>
          <img src="images/created.png" alt="" className='created-img' />
        </div>

      </div>
      {/* How skoutar works */}
      <div className='how-section'>
        <h1 className='how-section1-h'>How Skouta Works</h1>
        <p className='how-section1-p'>We love production and are committed to simplifying it, starting with film locations. Skouta’s marketplace connects thousands of producers and agencies with spaces to create commercials, films, and branded content throughout Nigeria.</p>
        <div className='how-section2'>
          <div className='section2-text'>
            <div className='how-text'>
              <img src="images/howicon1.png" alt="" className='section2-icon' />
              <div  className='how-text2'>
                <h4 className='section2-h'>High Quality Listing</h4>
                <p className='section2-p'>Detailed descriptions, professional photos and virtual tours. From a fully-equipped studio to a seaside mansion or abandoned warehouse, you can find your perfect fit.</p>
              </div>
            </div>
            <hr className='how-hr'/>
            <div className='how-text'>
              <img src="images/howicon2.png" alt="" className='section2-icon' />
              <div className='how-text2'> 
                <h4 className='section2-h'>Secure Payment System</h4>
                <p className='section2-p'>With our clear rates and no hidden charges, you will know what you are paying for, right from booking, streamlined online transactions for location fees and permits.</p>
              </div>
            </div> 
            <hr className='how-hr'/>
            <div className='how-text'>
              <img src="images/howicon3.png" alt="" className='section2-icon' />
              <div  className='how-text2'>
                <h4 className='section2-h'>Availability Calendar</h4>
                <p className='section2-p'>Real-time availability for booking. Emergencies happen. Book locations and anything you need for any event or production with ease.</p>
              </div></div>
          </div>
          <img src="images/how (2).png" alt="" className='section2-img' />
        </div>
      </div>
    </div>
  )
}

export default Landpage