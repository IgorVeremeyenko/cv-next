'use client'
import Divider from "../Divider"
import Image from "next/image"
import Button from "../buttons/Button"
import me from '../../assets/me.jpg'
import PageTransition from "../animations/pageTransition"
import { Link as ScrollLink } from 'react-scroll';
export default function Main() {
    return (
        <PageTransition>
            <main className="bg-[#DADEDF]">
                <div className='flex className="w-full h-screen overflow-hidden'>
                    <div className="relative">
                        <div className="lg:w-80 shadow-xl absolute z-40 h-20 rounded-md rounded-tr-none rounded-tl-none rounded-bl-none top-0 bg-[#DADEDF] md:w-60"></div>
                        <div className="w-16 shadow-xl absolute lg:h-screen z-0 bg-amber-400 md:h-[61%]"></div>
                        <div className="w-96 shadow-xl absolute h-screen z-0 bg-amber-400 lg:w-96 2xl:top-[0%] transform skew-x-12 md:-left-28 md:top-[55%] md:w-72"></div>
                    </div>
                    <div className="overflow-hidden rounded-xl lg:min-w-[450px] max-w-[450px] m-10 z-20 shadow-xl md:min-w-[300px] md:h-fit">
                        <Image
                            priority
                            src={me}
                            alt="Picture of the author"
                            width={500}
                            height={500}
                        />

                    </div>
                    <div className='p-10 lg:mt-40 md:mt-4 md:h-screen'>
                        <div className='xl:text-6xl font-black uppercase font-roboto flex flex-col lg:text-[2rem] md:text-[1.75rem]'> 
                            <div className='flex gap-4'>
                                <Divider isActive={false} />
                                <p className='text-myYellow '> i'm ihor veremiienko.</p>
                            </div>
                            <p className='pl-14 md:pl-[2.8rem]'>software developer</p>
                        </div>
                        <div className='p-10 pl-0 flex flex-col w-4/5'>
                            <q>I am a system administrator with 5 years of experience. While learning programming languages, I found that Frontend is the most interesting for me. Now I'm looking for a job opportunity at this direction.</q>
                            <div className="pt-6 w-fit">
                                <ScrollLink
                                    activeClass="active"
                                    to="section2"
                                    spy={true}
                                    smooth={true}
                                    offset={0}
                                    duration={500}
                                >
                                    <Button
                                        text={"More About Me"}
                                        svg={<svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M6 12H18M18 12L13 7M18 12L13 17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>} />
                                </ScrollLink>
                            </div>
                        </div>

                    </div>
                </div>
            </main>
        </PageTransition>
    )
}