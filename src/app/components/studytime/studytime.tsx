"use client"

import {useState} from 'react'
import Link from 'next/link'
import {usePathname} from 'next/navigation'

export interface Time {
    isTimeActive: boolean;
    minutes: number;
}



export default function Studytime() {

    const [activeTime, setActiveTime] = useState(0);

    const pathname = usePathname()



    return(
        <div className="text-black text-7xl grid grid-cols-1 grid-rows-4 py-6 gap-9">
                <div className=" justify-center flex col-start-1 col-span-1 row-start-1 row-span-1">
                    <p className="hover:bg-red-300 border-4 rounded-xl border-zinc-950"><Link href={pathname + '/problems'}>15 min </Link></p>
                </div>
                <div className=" justify-center flex col-start-1 col-span-1 row-start-2 row-span-1">
                    <p className="hover:bg-red-300 border-4 rounded-xl border-zinc-950"><Link href={pathname + '/problems'}>30 min </Link></p>
                </div>
                <div className=" justify-center flex col-start-1 col-span-1 row-start-3 row-span-1">
                    <p className="hover:bg-red-300 border-4 rounded-xl border-zinc-950"><Link href={pathname + '/problems'}>60 min </Link></p>
                </div>
                <div className=" justify-center flex col-start-1 col-span-1 row-start-4 row-span-1">
                    <p className="hover:bg-red-300 border-4 rounded-xl border-zinc-950"><Link href={pathname + '/problems'}>120 min </Link></p>
                </div>

        </div>


    )
}