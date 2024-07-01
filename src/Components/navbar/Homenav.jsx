import { Link } from "react-router-dom"
import { useState } from "react";

const Homenav = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleLinkClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };
  return (
    <div className="flex items-center justify-around p-4 bg-white w-full h-[94px] gap-0 border border-[#131313]">
      <img src="images/Navlogo.png" alt="" className='' />
      <div className="h-[50px] w-[272px] border rounded flex items-center justify-center">
        <input type="text" placeholder="search here..." className="h-[40px]"/>
        <i className="bi bi-search w-[35px] h-[35px] bg-mainColor cursor-pointer text-white text-center ml-[5px] rounded pt-[5px] "></i>
      </div>
      <div className="w-[381px] h-[28px] flex items-center justify-between ">
        <Link className="hover:text-mainColor">Earn</Link>
        <Link className="hover:text-mainColor">Bookings</Link>
        <Link className="hover:text-mainColor">Inbox</Link>
        <Link className="hover:text-mainColor">Become a Host</Link>
      </div>
      <div className="h-auto">
      <Link>
        <i
          className={`bi bi-globe mr-[30px] h-[30px] p-[10px] w-[25px] cursor-pointer ${
            activeIndex === 0 ? 'bg-mainColor text-white rounded-full' : ''
          }`}
          onClick={() => handleLinkClick(0)}
        ></i>
      </Link>
      <Link>
        <i
          className={`bi bi-bell mr-[30px] h-[30px] p-[10px] w-[25px] cursor-pointer ${
            activeIndex === 1 ? 'bg-mainColor text-white rounded-full' : ''
          }`}
          onClick={() => handleLinkClick(1)}
        ></i>
      </Link>
      <Link>
        <i
          className={`bi bi-person mr-[30px] p-[10px] cursor-pointer ${
            activeIndex === 2 ? 'bg-mainColor text-white rounded-full' : ''
          }`}
          onClick={() => handleLinkClick(2)}
        ></i>
      </Link>
    </div>
    </div>
  )
}

export default Homenav