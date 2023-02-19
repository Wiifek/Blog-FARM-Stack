import React from "react"
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai"

export const Footer = () => {
    return (
        <>
            <footer className='boxItem'>
                <div className='container flex'>
                    <p>Blog using FARM stack - Wifek Chabir</p>
                    <div className='social'>
                        <a href="https://github.com/Wiifek/Blog-FARM-Stack"><AiFillGithub className="icon" /></a>
                        <a href="https://www.linkedin.com/in/wifek-chabir/"><AiFillLinkedin className='icon' /></a>
                    </div>
                </div>
            </footer>
        </>
    )
}
