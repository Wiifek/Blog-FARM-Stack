import React from "react"
import { Link } from "react-router-dom"
import "./header.css"

export const Header = () => {
    window.addEventListener("scroll", function () {
        const header = this.document.querySelector(".header")
        header.classList.toggle("active", this.window.scrollY > 100)
    })
    return (
        <>
            <header className="header">
                <a href="#" className="logo">
                    <img src="https://www.elyadata.com/assets/elyadatalogo.svg" />
                </a>
                <ul className="navigation">
                    <li>
                        <Link to='/'>
                            <button>
                                Blogs
                            </button>
                        </Link>
                    </li>
                    <li>
                        <Link to='/add-blog'>
                            <button>
                                Create Post
                            </button>
                        </Link>
                    </li>
                </ul>
            </header>

        </>
    )
}