import { motion } from 'framer-motion';
import { IconType } from "react-icons";
import { FaGolang, FaPython, FaRust, FaJava, FaNodeJs, FaReact, FaAngular } from "react-icons/fa6";

interface Item {
  name: string;
  icon: IconType;
}

const programmingLanguages: Item[] = [
  { name: "Java", icon: FaJava },
  { name: "Python", icon: FaPython },
  { name: "Rust", icon: FaRust },
  { name: "Node.js", icon: FaNodeJs },
  // { name: "Go", icon: FaGolang },
];

function StackIcon({ name, icon: Icon }: Item) {
  const iconVariants = {
    initial: { scale: 1, rotate: 0 },
    hover: {
      scale: 1.15,
      rotate: [0, -10, 10, -5, 5, 0],
      transition: {
        rotate: {
          duration: 0.5,
          ease: "easeInOut"
        },
        scale: {
          duration: 0.2,
          ease: "easeOut"
        }
      }
    }
  };

  return (
    <motion.div
      className="flex flex-col items-center cursor-pointer"
      initial="initial"
      whileHover="hover"
      whileTap={{ scale: 0.9 }}
    >
      <motion.div
        className="text-7xl text-gray-800 hover:text-black"
        variants={iconVariants}
      >
        <Icon />
      </motion.div>
      <span className="text-sm mt-1">{name}</span>
    </motion.div>
  );
}

export default function StackList() {
  return (
    <div className="flex flex-wrap justify-center items-center gap-12 p-4">
      {programmingLanguages.map((lang) => (
        <StackIcon key={lang.name} name={lang.name} icon={lang.icon} />
      ))}
    </div>
  );
}
