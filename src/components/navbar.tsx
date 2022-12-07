import React, { useState } from "react";

// ICONS
import * as FaIcons from "react-icons/fa"; //Now i get access to all the icons
import * as AiIcons from "react-icons/ai";
import { SearchOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import { IconContext } from "react-icons";
import { BsFilm } from 'react-icons/bs'
// ROUTING

import { Link } from "react-router-dom";

// DATA FILE
import { SidebarData } from "./SlidebarData";

// STYLES
import "./Navbar.css";

export default function Navbar() {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    return (
        <>
            <IconContext.Provider value={{ color: "#FFF" }}>
                {/* All the icons now are white */}
                <div className="navbar">
                    <Link to="#" className="menu-bars">
                        <div className="menu">

                            <FaIcons.FaBars onClick={showSidebar} style={{ color: '#231F20', height: '18px', alignItems: 'center' }} />
                        </div>
                    </Link>
                    <Input style={{ width: '254px', marginLeft: '10px' }} size="large" placeholder="Что ищете?" prefix={< SearchOutlined style={{ marginLeft: '0' }} />} />
                    <div className="filmIcon">
                        <BsFilm style={{ color: '#40A7E3', marginTop: '8px' }} />
                    </div>
                </div>
                <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
                    <ul className="nav-menu-items" onClick={showSidebar}>
                        <li className="navbar-toggle">
                            <Link to="#" className="menu-bars">
                                <h5>← Меню</h5>
                            </Link>
                        </li>

                        {SidebarData.map((item, index) => {
                            return (
                                <li key={index} className={item.cName}>
                                    <Link to={item.path}>
                                        {/* {item.icon} */}
                                        <span>{item.title}</span>
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
            </IconContext.Provider>
        </>
    );
}
