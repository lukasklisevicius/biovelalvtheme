import { motion } from "framer-motion"
function NotFound() {

  
    return (<motion.div style={{width:'100%',height:'50vh',display:'flex',justifyContent:'center',alignItems:"center",flexDirection:'column'}}  initial={{opacity:0}}
        animate={{opacity:1,transition:{duration:0.5,delay:0.1}}}
        exit={{opacity:0,transition:{duration:0.5,delay:-0.3}}}>
        <h1>404</h1>
        <p>puslapio nera</p>
        </motion.div>
    )
  }
  
  export default NotFound