'use client'
import { useEffect,useState,useRef } from 'react';
import Sidebar from './sidebar';

import { Button,Drawer } from 'antd';

const Hamburger = () => {
  const [isOpen,setIsOpen] = useState(true);
  const menuRef = useRef(null);
  const [open,setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };


  // Обработчик события для закрытия меню при клике вне меню
  const handleOutsideClick = (e) => {

    if(menuRef.current && !menuRef.current.contains(e.target)) {
      setIsOpen(true);
    }
  };

  // Добавление обработчика события при монтировании компонента
  useEffect(() => {
    document.addEventListener('click',handleOutsideClick);
    // Очистка обработчика при размонтировании компонента
    return () => {
      document.removeEventListener('click',handleOutsideClick);
    };
  },[]);
  // Функция для обработки данных из дочернего компонента
  const handleChildData = (data) => {
    setOpen(data);
  }


  return (
    <>
      <div className='md:hidden sm:hidden lg:hidden xl:block'>
        <Sidebar />
      </div>
      <div className={`menu xl:hidden fixed z-50 -right-6 h-full bg-borders w-48 transition-transform transform ease-in-out duration-300 ${isOpen ? 'translate-x-28 transition-background bg-inherit duration-300' : '-translate-x-8 transition-background bg-borders duration-300'}`}>
        <button className={`block p-4 focus:outline-none bg-opposite ${!open ? 'rounded-bl-3xl' : 'rounded-br-3xl'} `} type="primary" onClick={showDrawer}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
        </button>
        
        
        <Drawer title="Menu" placement="right" width={150} onClose={onClose} open={open}>
          <div className='h-full w-fit'>
            <Sidebar sendDataToParent={handleChildData} />

          </div>
        </Drawer>
      </div>
      {/* <div ref={menuRef} className={`menu xl:hidden fixed z-50 -right-6 h-full bg-gray-500 w-48 transition-transform transform ease-in-out duration-300 ${isOpen ? 'translate-x-28 transition-background bg-inherit duration-300' : '-translate-x-8 transition-background bg-gray-500 duration-300'}`}>
      <button
        className={`block p-4 focus:outline-none bg-opposite ${isOpen ? 'rounded-bl-3xl' : 'rounded-br-3xl'} `}
        onClick={toggleSidebar}
      >
        {isOpen ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg> : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
        }
      </button>
      <div className='h-full w-fit'>
        <Sidebar sendDataToParent={handleChildData} />

      </div>
    </div> */}
    </>
  );
};

export default Hamburger;
