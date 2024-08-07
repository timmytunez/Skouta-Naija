import { Link } from "react-router-dom"
import { useState } from "react";


const Sidebar = () => {
    const [activeLink, setActiveLink] = useState(null);

    const handleLinkClick = (linkName) => {
        setActiveLink(linkName);
    };
    return (
        <div className="w-[241px] hidden h-auto pb-[200px] border sm:flex flex-col items-center bg-[#F8F8F8]">
            <div className="mt-[40px] flex flex-col items-center">
                <img src="images/profile.png" alt="" />
                <p className="text-[18px] mt-[10px] text-center font-[500]">Hilary Stone</p>
            </div>
            <div className="w-[218px] h-auto mt-[20px] ml-10">
                <Link
                    className={`flex mt-[30px] items-center ${activeLink === 'profile' ? 'text-mainColor' : ''}`}
                    onClick={() => handleLinkClick('profile')}
                    to='/Profile'
                >
                    <i className={`bi bi-person text-[15px] ${activeLink === 'profile' ? 'text-mainColor' : ''}`}></i>
                    <p className="ml-[15px]">Profile</p>
                </Link>
                <Link
                    to='/Security'
                    className={`flex mt-[30px] items-center ${activeLink === 'login' ? 'text-mainColor' : ''}`}
                    onClick={() => handleLinkClick('login')}
                >
                    <i className={`bi bi-lock text-[15px] ${activeLink === 'login' ? 'text-mainColor' : ''}`}></i>
                    <p className="ml-[15px]">Login & Security</p>
                </Link>
                <Link
                    to='/Payment'
                    className={`flex mt-[30px] items-center ${activeLink === 'payments' ? 'text-mainColor' : ''}`}
                    onClick={() => handleLinkClick('payments')}
                >
                    <i className={`bi bi-credit-card text-[15px] ${activeLink === 'payments' ? 'text-mainColor' : ''}`}></i>
                    <p className="ml-[15px]">Payments</p>
                </Link>
                <Link
                    to='/Notification'
                    className={`flex mt-[30px] items-center ${activeLink === 'notifications' ? 'text-mainColor' : ''}`}
                    onClick={() => handleLinkClick('notifications')}
                >
                    <i className={`bi bi-bell text-[15px] ${activeLink === 'notifications' ? 'text-mainColor' : ''}`}></i>
                    <p className="ml-[15px]">Notifications</p>
                </Link>
            </div>
        </div>

    )
}

export default Sidebar