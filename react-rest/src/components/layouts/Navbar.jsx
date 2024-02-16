// import "./navbar.css"

// function Navbar() {

//   return (
//     <div className="navbar" >
//       <div className="navitem"> <Link className="a"  to="/"><i class="fa fa-fw fa-home"></i>Home</Link></div>
//      <div className="navitem">  {!user._id && <Link className="a" style={{float:"right"}}  to="/login"><i className="fa fa-fw fa-user"></i>Login</Link>}</div>
//      <div className="navitem">
//      {!user._id && <Link style={{float:"right"}}  className="a"  to="/register"> <i className="fa fa-fw fa-user"></i>Regiter</Link>}
//       </div>
//       <div className="navitem">
//       {user._id && <Link className="a"  to="/profile"><i className="fa fa-fw fa-user"></i>Profile</Link>}</div>

//       <div className="navitem">{user._id && <a className="a" onClick={() => {
//         logout(); setUser({})
//       }}>Logout</a>} </div>

// {/* <div class="navbar">
//   <a class="active" href="#"><i className="fa fa-fw fa-home"></i> Home</a>
//   <a href="#"><i class="fa fa-fw fa-search"></i> Search</a>
//   <a href="#"><i class="fa fa-fw fa-envelope"></i> Contact</a>
//   <a href="#"><i class="fa fa-fw fa-user"></i> Login</a>
// </div> */}
//     </div>
//   )
// }

// export default Navbar

import { Link } from "react-router-dom";
import { useUser } from "../../stores/userStore";

import { logout } from "../../service/auth.service";

import { useState, useEffect } from "react";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
  Card,
} from "@material-tailwind/react";

export default function StickyNavbar() {
  const [openNav, setOpenNav] = useState(false);
  const [user, setUser] = useUser((state) => [state.user, state.setUser]);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link className="a" to="/">
        Home
        </Link>
      </Typography>
      {/* <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          Account
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          Blocks
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          Docs
        </a>
      </Typography> */}
    </ul>
  );

  return (
    <Navbar className="sticky top-0 z-10  max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4 opacity-80">
      <div className="flex items-center justify-between text-blue-gray-900">
      <Link to="/">
        <Typography
        
          className="mr-4 cursor-pointer py-1.5 font-medium"
        >DVLYX  
        </Typography></Link> 
        <div className="flex items-center gap-4">
          <div className="mr-4 hidden lg:block">{navList}</div>
          <div className="flex items-center gap-x-1">
            {!user._id && (
              <Button
                variant="text"
                size="sm"
                className="hidden lg:inline-block"
              >
                <span>
                  {" "}
                  <Link className="a" style={{ float: "right" }} to="/login">
                    Login
                  </Link>
                </span>
              </Button>
            )}
            {/* {!user._id && (
              <Button
                variant="gradient"
                size="sm"
                className="hidden lg:inline-block"
              >
                <span>
                  {" "}
                  <Link style={{ float: "right" }} className="a" to="/register">
                    Regiter
                  </Link>
                </span>
              </Button>
            )} */}
            {user._id && (
              <Button
                variant="gradient"
                size="sm"
                className="hidden lg:inline-block"
                onClick={() => {
                  logout();
                  setUser({});
                }}
              >
                <span>
                  {" "}
                  <a
                    className="a"
                  
                  ></a>
                </span>{" "}
                Logout
              </Button>
            )}
          </div>
          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </IconButton>
        </div>
      </div>
      <Collapse open={openNav}>
        {navList}
        <div className="flex items-center gap-x-1">
    
          {!user._id && (   <Button fullWidth variant="gradient" size="sm" className="">
            <span>
              {" "}
              <Link className="a text-center"  to="/login">
                  Login
                </Link>
           
            </span>
          </Button>   )}
        </div>
      </Collapse>
    </Navbar>
  );
}
