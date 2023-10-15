'use client'
import { useState } from 'react';
import PageTransition from '../animations/pageTransition';
import Image from 'next/image';
import myImage from '../../assets/diploma.png'
import myImage2 from '../../assets/diploma2.png'
import minimus from '../../assets/minimus.png'
import minimus2 from '../../assets/minimus2.png'
import example from '../../assets/example.png'
import example2 from '../../assets/example2.png'
import example3 from '../../assets/example3.png'
import example4 from '../../assets/example4.png'
import Link from 'next/link';

export default function Tabs() {
    const [activeTab,setActiveTab] = useState(1);
    const [fullscreenImage,setFullscreenImage] = useState(null);

    const openFullscreen = (imageSrc) => {
        setFullscreenImage(imageSrc);
    };

    const closeFullscreen = () => {
        setFullscreenImage(null);
    };

    const handleTabClick = (tabNumber) => {
        setActiveTab(tabNumber);
    };

    return (
        <div className='flex flex-col items-center p-10'>
            <div className="flex space-x-4">
                <button
                    className={`px-4 py-2 focus:outline-none ${activeTab === 1 ? 'text-opposite' : 'text-borders'}`}
                    onClick={() => handleTabClick(1)}
                >
                    WEB DEVELOPMENT
                </button>
                <button
                    disabled
                    className={`px-4 py-2 focus:outline-none ${activeTab === 2 ? 'text-opposite' : 'text-borders'}`}
                    onClick={() => handleTabClick(2)}
                >
                    NETWORK
                </button>
                <button
                    disabled
                    className={`px-4 py-2 focus:outline-none ${activeTab === 3 ? 'text-opposite' : 'text-borders'}`}
                    onClick={() => handleTabClick(3)}
                >
                    MOCKUP
                </button>
            </div>
            <div className="mt-4">
                {activeTab === 1 &&
                    <>
                        <PageTransition>
                            <div className="grid grid-cols-3 gap-4">
                                <div className="col-span-1">
                                    <button>
                                        <Image src={example4} width={300} height={300} alt='main screen of the programm' className='transition ease-in-out delay-150 hover:scale-105' />
                                    </button>
                                    <div className='flex items-center'>
                                        <p>Links:</p>
                                        <div className='flex flex-row'>
                                            <Link href="https://igorveremeyenko.github.io/" target='_blank' className="transition ease-in-out delay-150   hover:scale-110 hover:bg-opposite duration-300 rounded-md pl-2 pr-2">
                                                <i>Realtime</i>
                                            </Link>
                                            <Link href="https://github.com/IgorVeremeyenko/stage1-tasks-momentum/tree/master" target='_blank' className="transition ease-in-out delay-150   hover:scale-110 hover:bg-borders duration-300 rounded-md pl-2 pr-2">
                                                <i>GitHub</i>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-span-1">
                                    <button>
                                        <Image src={minimus2} width={300} height={300} alt='main screen of the programm' className='transition ease-in-out delay-150 hover:scale-105' />
                                    </button>
                                    <div className='flex items-center'>
                                        <p>GitHub link:</p>
                                        <div className='flex flex-row'>
                                            <Link href="https://github.com/IgorVeremeyenko/Minimus" target='_blank' className="transition ease-in-out delay-150 hover:scale-110 hover:bg-opposite duration-300 rounded-md pl-2 pr-2">
                                                <i>Frontend</i>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-span-1">
                                    <button>
                                        <Image src={example} width={300} height={150} alt='main screen of the programm' className='transition ease-in-out delay-150 hover:scale-105' />
                                    </button>
                                    <div className='flex items-center'>
                                        {/* <p>GitHub links:</p>
                                        <div className='flex flex-row'>
                                            <Link href="https://github.com/IgorVeremeyenko/front-barbershop" target='_blank' className="transition ease-in-out delay-150   hover:scale-110 hover:bg-opposite duration-300 rounded-md pl-2 pr-2">
                                                <i>Frontend</i>
                                            </Link>                                          
                                            <Link href="https://github.com/IgorVeremeyenko/API-BARBERSHOP" target='_blank' className="transition ease-in-out delay-150   hover:scale-110 hover:bg-slate-500 duration-300 rounded-md pl-2 pr-2">
                                                <i>Backend</i>
                                            </Link>                                           
                                        </div> */}
                                    </div>
                                </div>
                                <div className="col-span-1">
                                    <button>
                                        <Image src={example2} width={300} height={300} alt='main screen of the programm' className='transition ease-in-out delay-150 hover:scale-105' />
                                    </button>
                                    {/* <div className='flex items-center'>
                                        <p>GitHub links:</p>
                                        <div className='flex flex-row'>
                                            <Link href="https://github.com/IgorVeremeyenko/front-barbershop" target='_blank' className="transition ease-in-out delay-150   hover:scale-110 hover:bg-opposite duration-300 rounded-md pl-2 pr-2">
                                                <i>Frontend</i>
                                            </Link>
                                            <Link href="https://github.com/IgorVeremeyenko/API-BARBERSHOP" target='_blank' className="transition ease-in-out delay-150   hover:scale-110 hover:bg-slate-500 duration-300 rounded-md pl-2 pr-2">
                                                <i>Backend</i>
                                            </Link>
                                        </div>
                                    </div> */}
                                </div>
                                <div className="col-span-1">
                                    <button>
                                        <Image src={myImage2} width={300} height={300} alt='main screen of the programm' className='transition ease-in-out delay-150 hover:scale-105' />
                                    </button>
                                    <div className='flex items-center'>
                                        <p>GitHub links:</p>
                                        <div className='flex flex-row'>
                                            <Link href="https://github.com/IgorVeremeyenko/front-barbershop" target='_blank' className="transition ease-in-out delay-150   hover:scale-110 hover:bg-opposite duration-300 rounded-md pl-2 pr-2">
                                                <i>Frontend</i>
                                            </Link>
                                            <Link href="https://github.com/IgorVeremeyenko/API-BARBERSHOP" target='_blank' className="transition ease-in-out delay-150   hover:scale-110 hover:bg-borders duration-300 rounded-md pl-2 pr-2">
                                                <i>Backend</i>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </PageTransition>
                    </>

                }
                {activeTab === 2 && <div>Содержимое вкладки 2</div>}
                {activeTab === 3 && <div>Содержимое вкладки 3</div>}
            </div>
        </div>
    );
}
