import { useState } from "react";

import { NavLink, useLocation } from "react-router";
import { HiOutlineBars3 } from "react-icons/hi2";
import { IoClose } from "react-icons/io5";

import {
    FaGoogle,
    FaSearch,
    FaAngleDown
} from "react-icons/fa";

import {
    SiOrcid,
    SiResearchgate,
} from "react-icons/si";

import { IoChevronDownOutline } from "react-icons/io5";

import "./Header.scss";

export default function Header() {

    const [open, setOpen] = useState(false);

    const location = useLocation();

    const navItems = [
        { "to": "/home", "label": "TRANG CHỦ" },
        { "to": "/about", "label": "GIỚI THIỆU" },
        { "to": "/research", "label": `NGHIÊN CỨU`, "icon": <FaAngleDown /> },
        { "to": "/publications", "label": "CÔNG TRÌNH" },
        { "to": "/methods", "label": "PHƯƠNG PHÁP NGHIÊN CỨU" },
        { "to": "/academic", "label": "HƯỚNG DẪN HỌC THUẬT" },
        { "to": "/speaker", "label": "DIỄN GIẢ" },
        { "to": "/legal", "label": "BÌNH LUẬN PHÁP LÝ" },
        { "to": "/inspiration", "label": "TRUYỀN CẢM HỨNG" },
        { "to": "/media", "label": "MEDIA" },
        { "to": "/contact", "label": "LIÊN HỆ" }
    ]


    return (
        <div className="header-wrapper">

            <header className="header">

                <div className="header-logo">
                    <div className="logo">
                        PH
                    </div>
                </div>

                <div className="mobile-menu-box">
                    <button
                        className="mobile-menu-btn"
                        onClick={() => setOpen(true)}
                    >
                        <HiOutlineBars3 />
                    </button>
                </div>

                <div className="header-right">

                    <div className="header-top">

                        <a href="/">
                            <FaGoogle />
                            <span>Google Scholar</span>
                        </a>

                        <a href="/">
                            <SiOrcid />
                            <span>ORCID</span>
                        </a>

                        <a href="/">
                            <SiResearchgate />
                            <span>ResearchGate</span>
                        </a>

                        <button>
                            <FaSearch />
                        </button>

                    </div>

                    <nav className="header-nav">
                        {
                            navItems.map(({ to, label, icon }) => <NavLink key={to} to={to}>{label} {icon}</NavLink>)
                        }
                    </nav>

                </div>

                <div className={`mobile-nav-overlay ${open ? "show" : ""}`}
                    onClick={() => setOpen(false)}
                >

                    <aside
                        className={`mobile-nav ${open ? "show" : ""}`}
                        onClick={(e) => e.stopPropagation()}
                    >

                        <div className="mobile-nav-header">

                            <div className="header-logo">
                                <div className="logo">
                                    PH
                                </div>
                            </div>

                            <button onClick={() => setOpen(false)}>
                                <IoClose />
                            </button>

                        </div>

                        <div className="mobile-social">

                            <a href="/">
                                <FaGoogle />
                                Google Scholar
                            </a>

                            <a href="/">
                                <SiOrcid />
                                ORCID
                            </a>

                            <a href="/">
                                <SiResearchgate />
                                ResearchGate
                            </a>

                        </div>

                        <nav>

                            {navItems.map(({ to, label, icon }) => (

                                <NavLink
                                    key={to}
                                    to={to}
                                    onClick={() => setOpen(false)}
                                >

                                    {label}

                                    {icon}

                                </NavLink>

                            ))}

                        </nav>

                    </aside>

                </div>

            </header>
        </div>

    );

}