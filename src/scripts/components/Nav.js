import React, { useState, useRef } from "react"
import { Link, useMatch, useResolvedPath } from "react-router-dom"
import '../../styles/nav.scss'

import {ReactComponent as BurgerSvg} from '../../icons/menu-hamburger-white.svg'
import {ReactComponent as XSvg} from '../../icons/x-white.svg'

import { useScrollPosition } from "./useScrollPosition"

function Nav(props) {

    const scrollPosition = useScrollPosition()
    const navRef = useRef()

    const [isOpen,setIsOpen] = useState(false)
    // console.log(ttt,inView)
    const handleClick=()=>{
        // console.log(navRef)
        if(!isOpen){
            navRef.current.classList.add('open')
            setIsOpen(true) 
        }
        if(isOpen){
            navRef.current.classList.remove('open')
            setIsOpen(false)
        }
    }

    const handleNavLinkClick=()=>{
        if(isOpen){
            navRef.current.classList.remove('open')
            setIsOpen(false)
        }
    }
    const handleClickScroll = () => {
        const element = document.getElementById('contacts');
        if (element) {
          // 👇 Will scroll smoothly to the top of the next section
          element.scrollIntoView({ behavior: 'smooth' });
        }
      };


  return (
    <nav   ref={navRef}>
        <div className="max-width">
        <button onClick={handleClick}>{isOpen?<XSvg />:<BurgerSvg /> }</button>
        <Link  className={`homelink`} to='/wordpress/'><img className={`${scrollPosition > 0?'nav-active':''}`} src={props.content.homePage.logo.mediaItemUrl}></img></Link>
        <div className="con">
        <ul onClick={handleNavLinkClick} className="links">
        <CustomLink to={`/wordpress/`}>{props.pages.edges[3].node.title}</CustomLink>
        <CustomLink  to={`/wordpress/${props.pages.edges[2].node.slug}`}>{props.pages.edges[2].node.title}</CustomLink>
        <CustomLink to={`/wordpress/${props.pages.edges[1].node.slug}`}>{props.pages.edges[1].node.title}</CustomLink>
        <li onClick={handleClickScroll}> {props.pages.edges[0].node.title}</li>
        </ul>
        <ul className="social">
            <li ><a href={props.content.homePage.facebookUrl} rel="noreferrer" target="_blank"><img src="http://biovelalvdev.puslapiai.lt/wp-content/uploads/2023/06/facebook.png"></img><img src="http://biovelalvdev.puslapiai.lt/wp-content/uploads/2023/06/facebook-gold.png"></img></a></li>
            <li><a href={props.content.homePage.instagramUrl} rel="noreferrer" target="_blank"><img src="http://biovelalvdev.puslapiai.lt/wp-content/uploads/2023/06/Instagram.png"></img><img src="http://biovelalvdev.puslapiai.lt/wp-content/uploads/2023/06/instagram-gold.png"></img></a></li>
            <li><a href={props.content.homePage.youtubeUrl} rel="noreferrer" target="_blank"><img src="http://biovelalvdev.puslapiai.lt/wp-content/uploads/2023/06/youtube.png"></img><img src="http://biovelalvdev.puslapiai.lt/wp-content/uploads/2023/06/youtube-gold.png"></img></a></li> 
        </ul>
        </div>
        </div>
    </nav>
  )
}

export default Nav

const CustomLink = ({to,children, ...props})=>{
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({path: resolvedPath.pathname, end: true})
    return(
    <li className={isActive? 'active': ''}>
        <Link to={to}>{children}</Link>
    </li>
    )
}