'use client'
import Link from 'next/link'
import { Link as ScrollLink } from 'react-scroll';
import { useState } from 'react';
export default function Page({ sendDataToParent=() => { }}) {
    const [isOpen,setIsOpen] = useState(false);
    const [closeMenu, setCloseMenu] = useState(false);
    const sendDataToParentComponent = () => {
        sendDataToParent(closeMenu);
      }
    return (
        <>
            <div className="bg-primary z-50 h-screen w-26 p-16 fixed right-0 flex items-center md:p-4 lg:p-4">
                <style jsx global>{`
                .block-btn {
                    display: flex;
                    align-items: center;
                    column-gap: 2px;
                }
                .block-btn.active {
                    color: white;
                }
                .block-btn.active button {
                    background-color: #B76526;
                }
                `}</style>
                <ul className='flex flex-col gap-4'>
                    <li>
                        <div>
                            <ScrollLink
                                activeClass="active"
                                to="section1"
                                spy={true}
                                smooth={true}
                                offset={0} // Вы можете настроить смещение, чтобы учесть фиксированную навигацию, если есть
                                duration={500}
                                className="block-btn"
                                onClick={sendDataToParentComponent}

                            >
                                <button className='hover:bg-opposite hover:text-black h-10 w-10 flex justify-center items-center rounded-full'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                                    </svg>
                                </button>
                                <p className='bg-inherit xl:hidden'>Main</p>                     
                            </ScrollLink>
                        </div>
                    </li>
                    <li>
                        <ScrollLink
                            activeClass="active"
                            to="section2"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={500}
                            className="block-btn"
                            onClick={sendDataToParentComponent}
                        >
                            <button className='hover:bg-opposite hover:text-black h-10 w-10 flex justify-center items-center rounded-full'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                                </svg>

                            </button>
                            <p className='bg-inherit xl:hidden'>About me</p>
                        </ScrollLink>
                    </li>
                    <li>
                        <ScrollLink
                            activeClass="active"
                            to="section3"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={500}
                            className="block-btn"
                            onClick={sendDataToParentComponent}
                        >
                            <button className='hover:bg-opposite hover:text-black h-10 w-10 flex justify-center items-center rounded-full'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
                                </svg>

                            </button>
                            <p className='bg-inherit xl:hidden'>Portfolio</p>
                        </ScrollLink>
                    </li>
                    <li>
                        <ScrollLink
                            activeClass="active"
                            to="section4"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={500}
                            className="block-btn"
                            onClick={sendDataToParentComponent}
                        >
                            <button className='hover:bg-opposite hover:text-black h-10 w-10 flex justify-center items-center rounded-full'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 9v.906a2.25 2.25 0 01-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 001.183 1.981l6.478 3.488m8.839 2.51l-4.66-2.51m0 0l-1.023-.55a2.25 2.25 0 00-2.134 0l-1.022.55m0 0l-4.661 2.51m16.5 1.615a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V8.844a2.25 2.25 0 011.183-1.98l7.5-4.04a2.25 2.25 0 012.134 0l7.5 4.04a2.25 2.25 0 011.183 1.98V19.5z" />
                                </svg>
                            </button>
                            <p className='bg-inherit xl:hidden'>Contacts</p>
                        </ScrollLink>
                    </li>
                </ul>
            </div>
        </>
    )
}