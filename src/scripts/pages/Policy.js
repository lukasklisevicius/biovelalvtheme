import { motion } from "framer-motion"
import parse from 'html-react-parser'
function Policy(props) {
    // console.log(props.content)
  
    return (<motion.div style={{width:'100%',display:'flex',justifyContent:'center',alignItems:"center",flexDirection:'column',padding:'5% 0'}}  initial={{opacity:0}}
        animate={{opacity:1,transition:{duration:0.5,delay:0.1}}}
        exit={{opacity:0,transition:{duration:0.5,delay:-0.3}}}>
            <div style={{maxWidth:'1600px',fontFamily:'Montserrat, Sans-serif',padding:'0 10%'}}>
            {parse(props.content.content)}
            </div>
        </motion.div>
    )
  }
  
  export default Policy 