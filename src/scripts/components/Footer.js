// import {useState} from 'react'
import React, { useState, useEffect } from "react"
import '../../styles/footer.scss'
import {ReactComponent as FbSvg} from '../../icons/fb_icon.svg'
import {ReactComponent as InsSvg} from '../../icons/ins_icon.svg'
import {ReactComponent as YouSvg} from '../../icons/you_icon.svg'
import { Link, useMatch, useResolvedPath } from "react-router-dom"
// import { Link, useMatch, useResolvedPath } from "react-router-dom"
function Footer(props) {

    return (
        
        <footer id='contacts'>
            <div className="max">
            <div className='con '>
            <div className='left'>
                <h1>Contact us</h1>
                <br></br>
                <p><b>{props.content.footer.contacts.header}</b></p>
                <p><b>{props.content.footer.contacts.line1.input1}</b>{props.content.footer.contacts.line1.input2}</p>
                <p><b>{props.content.footer.contacts.line2.input1}</b>{props.content.footer.contacts.line2.input2}</p>
                <p><b>{props.content.footer.contacts.line3.input1}</b>{props.content.footer.contacts.line3.input2}</p>
                <p><b>{props.content.footer.contacts.line4.input1}</b><a href={`tel:${props.content.footer.contacts.line4.input2}`}>{props.content.footer.contacts.line4.input2}</a></p>
                <p><b>{props.content.footer.contacts.line5.input1}</b><a href={`email:${props.content.footer.contacts.line5.input2}`}>{props.content.footer.contacts.line5.input2}</a></p>
                <p><b>{props.content.footer.contacts.line6.input1}</b>{props.content.footer.contacts.line6.input2}</p>
                <p><b>{props.content.footer.contacts.line7.input1}</b>{props.content.footer.contacts.line7.input2}</p> 
            </div>
            <div className='right'>
            <h1>Navigation</h1>
                <br></br>

            <Link to='/wordpress/'>{props.pages.edges[3].node.title}</Link>
            <Link to={`/wordpress/${props.pages.edges[1].node.slug}`}>{props.pages.edges[1].node.title}</Link>
            <Link to={`/wordpress/${props.pages.edges[2].node.slug}`}>{props.pages.edges[2].node.title}</Link>
            <Link to={`/wordpress/privacy-policy`}>Privātuma politika</Link>
            <br></br>
            <ul className="social">
            <li ><a href={props.content.homePage.facebookUrl} rel="noreferrer" target="_blank"><img src="http://biovelalvdev.puslapiai.lt/wp-content/uploads/2023/06/facebook.png"></img><img src="http://biovelalvdev.puslapiai.lt/wp-content/uploads/2023/06/facebook-gold.png"></img></a></li>
            <li><a href={props.content.homePage.instagramUrl} rel="noreferrer" target="_blank"><img src="http://biovelalvdev.puslapiai.lt/wp-content/uploads/2023/06/Instagram.png"></img><img src="http://biovelalvdev.puslapiai.lt/wp-content/uploads/2023/06/instagram-gold.png"></img></a></li>
            <li><a href={props.content.homePage.youtubeUrl} rel="noreferrer" target="_blank"><img src="http://biovelalvdev.puslapiai.lt/wp-content/uploads/2023/06/youtube.png"></img><img src="http://biovelalvdev.puslapiai.lt/wp-content/uploads/2023/06/youtube-gold.png"></img></a></li> 

        </ul>
            {/* <a href={`/wordpress/`}>{props.pages.edges[0].node.title}</a> */}
            </div>
            </div>
            <div className='copy'><p>&copy; {props.content.footer.credits}</p></div>
            </div>
        </footer>
    )
  }
  
  export default Footer