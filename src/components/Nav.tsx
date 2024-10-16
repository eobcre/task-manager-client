import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react';
import useLoginStore from '../store/useLoginStore';
import { navData, NavItemProps } from '../data/navData';

const Nav = () => {
  const [isNavOpen, setNavOpen] = useState(false);
  const { userName } = useLoginStore();
  // console.log('userName', userName);

  const navigate = useNavigate();

  // clickable area
  const handleClickNavOpen = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;
    if (target.closest('.nav-items')) {
      return;
    }
    if (e.currentTarget.classList.contains('nav-container')) {
      setNavOpen((prev) => !prev);
    }
  };

  // log out
  const handleClickLogOut = () => {
    useLoginStore.getState().UserLogout();
    navigate('/Login');
  };

  return (
    <div className={`hidden md:block nav-container sticky top-0 bg-purple duration-500 h-screen ${isNavOpen ? 'w-80' : 'w-20'}`} onClick={handleClickNavOpen}>
      <div className='flex flex-col justify-between h-full py-6'>
        <nav className='flex flex-col gap-10'>
          <Icon icon='fluent-emoji-high-contrast:raccoon' className='text-white ml-4 w-[40px] h-[40px]' />
          <div className='flex flex-col cursor-pointer'>
            {navData.map((item: NavItemProps) => (
              <NavLink key={item.id} to={item.link} className={({ isActive }) => `nav-items px-5 py-5 w-full ${isActive ? 'bg-darkPurple' : ''}`}>
                <div className='flex items-center gap-6'>
                  <Icon icon={item.iconName} className={item.style} />
                  {isNavOpen && <span className='text-white'>{item.nav}</span>}
                </div>
              </NavLink>
            ))}
          </div>
        </nav>
        <div className='nav-items flex flex-col gap-7'>
          <div className='flex items-center gap-6 ml-5'>
            <Icon icon='ph:user-bold' className='text-white w-[30px] h-[30px]' />
            {isNavOpen && <p className='text-white'>{userName}</p>}
          </div>
          <div className='nav-items flex items-center gap-6 hover:opacity-70 cursor-pointer ml-5' onClick={handleClickLogOut}>
            <Icon icon='majesticons:door-exit-line' className='text-white w-[30px] h-[30px]' />
            {isNavOpen && <p className='text-white'>Log Out</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
