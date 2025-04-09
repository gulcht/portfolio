"use client";

import { motion } from "framer-motion";
import { IconType } from "react-icons";
import {
    AiOutlineKubernetes,
    AiFillGithub,
} from "react-icons/ai";
import {
    SiExpress,
    SiSpring,
    SiKong,
    SiActix,
    SiApachekafka,
    SiTailwindcss,
    SiMysql,
    SiMongodb,
} from "react-icons/si";
import { FaGitlab, FaAws, FaDocker } from "react-icons/fa";
import { DiMsqlServer } from "react-icons/di";
import {
    FaGolang,
    FaPython,
    FaRust,
    FaJava,
    FaNodeJs,
    FaReact,
    FaAngular,
} from "react-icons/fa6";
import { TbBrandNextjs } from "react-icons/tb";
import { BiLogoPostgresql } from "react-icons/bi";

interface Item {
    name: string;
    icon: IconType;
}

const tools: Item[] = [
    { name: "Git", icon: AiFillGithub },
    { name: "Docker", icon: FaDocker },
    { name: "AWS", icon: FaAws },
    { name: "CI/CD", icon: FaGitlab },
    { name: "Kafka", icon: SiApachekafka },
    { name: "Kong", icon: SiKong },
    { name: "React", icon: FaReact },
    { name: "Next.js", icon: TbBrandNextjs },
    { name: "Tailwind", icon: SiTailwindcss },
    { name: "Angular", icon: FaAngular },
    { name: "PostgreSQL", icon: BiLogoPostgresql },
    { name: "MySQL", icon: SiMysql },
    { name: "MongoDB", icon: SiMongodb },
    { name: "MSSQL", icon: DiMsqlServer },
];

export const LogoAnimation = () => {
    const duplicatedTools = [...tools, ...tools];

    return (
        <div className="w-full overflow-hidden border-black ">
            <motion.div
                className="flex gap-10 flex-nowrap py-6"
                initial={{ x: 0 }}
                animate={{ x: `-${tools.length * 128}px` }}
                transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: "linear",
                }}
            >
                {duplicatedTools.map((tool, index) => {
                    const Icon = tool.icon;
                    return (
                        <div
                            key={`${tool.name}-${index}`}
                            className="flex flex-col items-center justify-center min-w-24"
                        >
                            <motion.div
                                className="text-5xl text-gray-600 cursor-pointer hover:text-black"
                                whileHover={{ scale: 1.2, rotate: 5 }}
                                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                            >
                                <Icon />
                            </motion.div>
                        </div>
                    );
                })}
            </motion.div>
        </div>
    );
};

