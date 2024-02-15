import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import ContentWrapper from '../contentWrapper';
import logo from "../../assets/movieMorphx-logo.svg"
import { HiOutlineSearch } from "react-icons/hi";
import { SlMenu } from "react-icons/sl";
import { VscChromeClose } from "react-icons/vsc";
import "./style.scss";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [show, setShow] = useState("top");
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [query, setQuery] = useState("");
  const [showSearch, setShowSearch] = useState("");
  return (
    <>
      <header>
        <ContentWrapper>
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          {/* <ul className="menuItems">
            <li className="menuItem">Movies</li>
            <li className="menuItem">TV Shows</li>
            <li className="menuItem">
              <HiOutlineSearch/>
            </li>
          </ul> */}
        </ContentWrapper>
      </header>
    </>
  )
}

export default Header
