import JobImage from '../jobImage'
export default function Education() {
    return (
        <div className='flex flex-col items-center p-8 gap-8'>
            <div className="text text-xl uppercase font-medium p-10"><p>experiance & education</p></div>
            <div className="grid grid-cols-2 gap-4">
                <div className="col-span-1 row-span-2 max-w-xl">
                    <div>
                        <JobImage />
                        <div className="border-l-2 border-[#F5BF02] ml-[1.2rem] pl-6 -mt-[2.4rem]">
                            <div className="bg-slate-400 w-fit rounded-full p-1 m-2 text-xs"><p>2017-2022</p></div>

                            <div className="text uppercase m-2">
                                <div className="flex flex-row gap-1 md:w-min">
                                    <p className="font-semibold">Software Engineer</p>
                                    <p>-</p>
                                    <p>nibulon</p>
                                </div>
                                <i className="text-xs">ukraine</i>
                            </div>
                            <p className="text-sm m-2">Installation of operating system and application updates for the
                                smooth operation of the company departments.</p>
                        </div>
                    </div>
                </div>
                <div className="col-span-1 row-span-2 max-w-xl">
                    <div>
                        <JobImage job={false} />
                        <div className="border-l-2 border-[#F5BF02] ml-[1.2rem] pl-6 -mt-[2.4rem]">
                            <div className="bg-slate-400 w-fit rounded-full p-1 m-2 text-xs"><p>2022</p></div>

                            <div className="text uppercase m-2">
                                <div className="flex flex-row gap-1 md:w-min">
                                    <p className="font-semibold">Software Developer degree</p>
                                    <p>-</p>
                                    <p>it academy step</p>
                                </div>
                                <i className="text-xs">ukraine</i>
                            </div>
                            <p className="text-sm m-2">Extensive study of programming languages such as JavaScript,
                                C#. And Frameworks: React, Angular.</p>
                        </div>
                    </div>
                </div>
                <div className="col-span-1 max-w-xl">
                    <div>
                        <JobImage />
                        <div className="border-l-2 border-[#F5BF02] ml-[1.2rem] pl-6 -mt-[2.4rem]">
                            <div className="bg-slate-400 w-fit rounded-full p-1 m-2 text-xs"><p>2014-2017</p></div>
                            <div className="text uppercase m-2">
                                <div className="flex flex-row gap-1 md:w-min">
                                    <p className="font-semibold">electrician</p>
                                    <p>-</p>
                                    <p>agrofusion</p>
                                </div>
                                <i className="text-xs">ukraine</i>
                            </div>
                            <p className="text-sm m-2">Diagnosis and Troubleshooting: Determine causes of 
                            electrical system problems and resolve them, including replacement or repair of components.</p>
                        </div>
                    </div>
                </div>
                <div className="col-span-1 max-w-xl">
                    <div>
                        <JobImage job={false} />
                        <div className="border-l-2 border-[#F5BF02] ml-[1.2rem] pl-6 -mt-[2.4rem]">
                            <div className="bg-slate-400 w-fit rounded-full p-1 m-2 text-xs"><p>2014</p></div>

                            <div className="text uppercase m-2">
                                <div className="flex flex-row gap-1 md:w-min">
                                    <p className="font-semibold">specialist degree</p>
                                    <p>-</p>
                                    <p>kherson university</p>
                                </div>
                                <i className="text-xs">ukraine</i>
                            </div>
                            <p className="text-sm m-2">Obtained complete higher education of spaciality "Alternative and renewable sources of energy" and obtained
                                qualification of specialist in Alternative and renewable sources of energy.</p>
                        </div>
                    </div>
                </div>
                <div className="col-span-1"></div>
                <div className="col-span-1 max-w-xl">
                    <div>
                        <JobImage job={false} />
                        <div className="border-l-2 border-[#F5BF02] ml-[1.2rem] pl-6 -mt-[2.4rem]">
                            <div className="bg-slate-400 w-fit rounded-full p-1 m-2 text-xs"><p>2013</p></div>

                            <div className="text uppercase m-2">
                                <div className="flex flex-row gap-1 md:w-min">
                                    <p className="font-semibold">barchelor degree</p>
                                    <p>-</p>
                                    <p>kherson university</p>
                                </div>
                                <i className="text-xs">ukraine</i>
                            </div>
                            <p className="text-sm m-2">Obtained higher education in the field of "Electrical Engineering and Electrotechnology" and received
                                the qualification of Bachelor of Electrical Engineering and Electrotechnology.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}