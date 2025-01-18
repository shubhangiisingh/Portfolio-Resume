// import React from 'react'
// import './Header.css'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import {Botton, Form, FormControl, Navbar, Nav, NavDropdown, Container } from 'react-bootstrap'
// import { Link, NavLink, withRouter } from 'react-router-dom';
// import { HomeRounded, Telegram } from '@mui/icons-material';
// import resumeData from '../utils/resumeData'
// import CustomBotton from './Button'
// import TelegramIcon from '@mui/icons-material/Telegram';
// const Header = (props) => {
//   const pathName = props?.location?.pathname;
//   return (
//     <Navbar expand="lg" sticky='top' className="header">
//      <Nav.Link as={NavLink} to='/'>
//      <Navbar.Brand className='header_home'><HomeRounded/></Navbar.Brand>
//      </Nav.Link>
//      <Navbar.Toggle  />
//      <Navbar.Collapse >
//       <Nav>
//        <Nav.Link as={NavLink} to='/' className={pathName==="/"?"header_link_active":"header_link"}>Resume</Nav.Link>
//        <Nav.Link as={NavLink} to='/Portfolio' className={pathName==="/Portfolio"?"header_link_active":"header_link"}>Portfolio</Nav.Link>
//        </Nav>
//        <div className='header_right'>
//         {Object.keys(resumeData.socials).map(key => (
//         <a href={resumeData.socials[key].link} target="_blank" >{resumeData.socials[key].icon}</a>  
//         ))}
//         <CustomBotton text={"Hire Me"} icon={<TelegramIcon/>}/>
//        </div>
       
// </Navbar.Collapse>
//   </Navbar>
//   )
// }

// export default withRouter(Header); 
import React from 'react'
import './Header.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap'
import { Link, NavLink, useLocation } from 'react-router-dom';
import { HomeRounded } from '@mui/icons-material';
import resumeData from '../utils/resumeData'
import CustomButton from './Button'
import TelegramIcon from '@mui/icons-material/Telegram';

const Header = () => {
  const location = useLocation(); // Replaces props.location
  const pathName = location.pathname;

  return (
    <Navbar expand="lg" sticky='top' className="header">
      <Nav.Link as={NavLink} to='/' className='header_navlink'>
        <Navbar.Brand className='header_home'><HomeRounded /></Navbar.Brand>
      </Nav.Link>
      <Navbar.Toggle />
      <Navbar.Collapse >
        <Nav className='header_left'>
          <Nav.Link
            as={NavLink}
            to='/'
            className={pathName === "/" ? "header_link_active" : "header_link"}
          >
            Resume
          </Nav.Link>
          <Nav.Link
            as={NavLink}
            to='/Portfolio'
            className={pathName === "/Portfolio" ? "header_link_active" : "header_link"}
          >
            Portfolio
          </Nav.Link>
        </Nav>
        <div className='header_right'>
          {Object.keys(resumeData.socials).map(key => (
            <a href={resumeData.socials[key].link} target="_blank" key={key}>
              {resumeData.socials[key].icon}
            </a>
          ))}
          <CustomButton text={"Hire Me"} icon={<TelegramIcon />} />
        </div>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Header;
