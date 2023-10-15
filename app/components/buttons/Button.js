'use client'
import Link from "next/link"
import { Spinner } from "@chakra-ui/react"
import { useState } from "react";
export default function Button({ text,svg,type = 'button',onClick = () => {}}) {
    return (
        <button type={type} onClick={onClick} className='text uppercase border-[3px] focus:ring-2 border-opposite flex justify-around overflow-hidden items-center hover:bg-opposite text-black font-bold py-2 px-4 rounded-full w-56 h-16'>
            {text}

            <div className="focus:ring-2 rounded-full bg-opposite mr-[-25px] w-16 h-16 flex items-center justify-center">
                {svg}
            </div>
        </button>

    )
}
