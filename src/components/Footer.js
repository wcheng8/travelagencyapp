import React from 'react'
import { pageLinks, socialLinks } from '../data'
import { PageLinks } from './PageLinks'
export const Footer = () => {
  return (
    <footer className="section footer">
    <PageLinks parentClass='footer-links' itemClass='footer-link'/>
    <ul className="footer-icons">
    {socialLinks.map((social)=>{
      const {id, href, icon} = social
      return (
        <li>
        <a href={href} target="_blank" className="footer-icon"
          ><i className={icon}></i></a>
      </li>
      )
    })}
    </ul>
    <p className="copyright">
      copyright &copy; Backroads travel tours company
      <span id="date"></span> all rights reserved
    </p>
  </footer>
  )
}
