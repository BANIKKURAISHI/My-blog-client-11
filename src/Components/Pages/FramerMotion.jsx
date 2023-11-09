import { motion } from "framer-motion";
import { useState } from "react";

const FramerMotion = () => {
    const[card,setCard]=useState(false)
    return (
     <div className="shadow-2xl rounded-xl bg-white" style={{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        //background:"#5C6BC0",
        height:"30vh"
     }}>
    <motion.div style={{
        background:"#fff",
        padding:"2rem 2rem",
        borderRadius:"8px",
        boxShadow:"0 10px rgba(0, 0, 0 ,0.2"
    }}
    whileHover={{
        scale:1.1
    }}
   transition={{
    layout:{
        duration:2 ,
        type:"spring"
    }
   }}
   layout
   onClick={()=>setCard(!card)}
    >
   <motion.h3 className="text-center" >SURPRISE</motion.h3>
   {card && (
    <motion.p style={{
        width:"670px",
            
    }}
        initial={{opacity:0}}
        animate={{opacity:1}}
        >
   <img src="https://i.ibb.co/gDLRGd3/feat-30d48d6e-7b84-4dfe-bf22-6306f8a2d403.jpg" alt=""  />
    </motion.p>
   )}
    </motion.div>
     </div>
    );
};

export default FramerMotion;

