"use client"


import StackIcon from "@/components/StackIcon";
import {LogoAnimation} from "@/components/LogoAnimation"
import StackList from "@/components/StackIcon";

export const Stack = () => {
    return (
        <>
            <section id="skills" className="py-20 bg-gray-50 border-t-2 border-black">
                <div className="">
                    <h2 className="text-2xl md:text-3xl font-mono text-center mb-12 text-black">My Tech Stack</h2>
                        {/* <div className="p-6 border-2 border-black bg-white"> 
                            
                        </div> */}
                        <StackList/>
                        <LogoAnimation/>
                </div>
            </section>
        </>
    )
}