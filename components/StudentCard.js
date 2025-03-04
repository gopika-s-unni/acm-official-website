import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion"

export default function StudentCard(props) {
    const { image, name, position, instagram, linkedin, github } = props;
    const[hover,setHover]=useState(false);

    return (
        <AnimatePresence>
            <motion.div animate={{height: hover ? 260 : 240, scale: hover ? 1.1 : 1}} className="w-72 h-fit flex pb-6 justify-start items-center flex-col bg-slate-800 rounded-lg mt-24 hover:" onMouseEnter={()=>{setHover(true)}} onMouseLeave={()=>{setHover(false)}}>
            <Image src={image} alt="faculty" className="mt-[-100px] rounded-lg" />
            <p className="text-white text-xl mt-3">{name}</p>
            <p className="text-slate-400 text-lg">{position}</p>
            <AnimatePresence>{hover ? <motion.div className="text-white mt-3 flex"><button className="active:scale-90 transition duration-150"><a href={instagram} target="_blank" rel="noreferrer"><Image className="h-8 w-8 mr-3" src='/instagram.png' width={25} height={25} alt="Instgram"/></a></button><button className="active:scale-90 transition duration-150"><a href={linkedin} target="_blank" rel="noreferrer"><Image className="h-8 w-8 mr-3 rounded-lg" src='/linkedin.png' width={25} height={25} alt="linkedIn"/></a></button><button className="active:scale-90 transition duration-150"><a href={github} target="_blank" rel="noreferrer"><Image className="h-8 w-8 rounded-lg" src='/github.png' width={25} height={25} alt="linkedIn"/></a></button></motion.div> :<></>}</AnimatePresence>
        </motion.div>
        </AnimatePresence>
    );
}
