import { Link } from "react-router-dom";
import logo from './../../public/nav-img/toyman.jpg'
import author from './../../public/nav-img/author.png'
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";


const Nav = () => {

  const {user, logOut} = useContext(AuthContext);

  const handelLogOut = () =>{
    logOut()
    .then()
    .catch(error =>{
      console.log(error);
    })
  }



  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/alltoys">All Toys</Link></li>
              {
                user &&
                <>
                  <li><Link to='/mytoys'>My Toys</Link></li>
                  <li><Link to='/addtoys'>Add a Toys</Link></li>
                </>
              }
              <li><Link to='/blogs'>Blogs</Link></li>
            </ul>
          </div>
          <img src={logo} alt="" />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/alltoys">All Toys</Link></li>
            {
                user &&
                <>
                  <li><Link to='/mytoys'>My Toys</Link></li>
                  <li><Link to='/addtoys'>Add a Toys</Link></li>
                </>
              }
            <li><Link to='/blogs'>Blogs</Link></li>
          </ul>
        </div>
        <div className="navbar-end">
          {
            user ? <Link onClick={handelLogOut} className="btn md:w-50 m-2">LogOut</Link>
              : <Link to='/login' className="btn md:w-50 m-2">Login</Link>
          }
          <img className="w-10" src={author} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Nav;