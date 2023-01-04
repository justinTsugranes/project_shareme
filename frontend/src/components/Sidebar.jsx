// Importing necessary components and libraries
import { NavLink, Link } from 'react-router-dom'
import { RiHomeFill } from 'react-icons/ri'
import { IoIosArrowForward } from 'react-icons/io'

import logo from '../assets/logo.png'

// Styles for inactive and active NavLinks
const isNotActiveStyle =
  'flex itesm-center px-5 gap-3 text-gray-500 hover:text-black transition-all duration-200 ease-in-out capitalize'
const isActiveStyle =
  'flex itesm-center px-5 gap-3 font-extrabold border-r-2 border-black transition-all duration-200 ease-in-out capitalize'

// Array of categories to be displayed in the sidebar
const categories = [
  {
    name: 'Animals',
  },
  {
    name: 'Wallpapers',
  },
  {
    name: 'Photography',
  },
  {
    name: 'Gaming',
  },
  {
    name: 'Coding',
  },
]

// The Sidebar component is a functional component that displays the sidebar on the homepage
// It receives a user object and a closeToggle function as props
const Sidebar = ({ user, closeToggle }) => {
  // Helper function to close the sidebar when a NavLink is clicked
  const handleCloseSidebar = () => {
    if (closeToggle) closeToggle(false)
  }

  return (
    <div className="flex flex-col justify-between bg-white h-full overflow-y-scroll min-w-210 hide-scrollbar">
      {/* The top section of the sidebar */}
      <div className="flex flex-col">
        {/* Link to homepage */}
        <Link to="/" className="flex px-5 gap-2 my-6 pt-1 w-190 items-center">
          <img
            src={logo}
            alt="logo"
            className="w-full"
            onClick={handleCloseSidebar}
          />
        </Link>
        {/* List of categories */}
        <div className="flex flex-col gap-5">
          {/* Home NavLink */}
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? isActiveStyle : isNotActiveStyle
            }
            onClick={handleCloseSidebar}
          >
            <RiHomeFill />
            Home
          </NavLink>
          {/* Heading for categories */}
          <h3 className="mt-2 px-5 text-base 2xl:text-xl">
            Discover Categories
          </h3>
          {/* NavLinks for categories */}
          {categories.slice(0, categories.length - 1).map((category) => (
            <NavLink
              to={`/category/${category.name}`}
              className={({ isActive }) =>
                isActive ? isActiveStyle : isNotActiveStyle
              }
              onClick={handleCloseSidebar}
              key={category.name}
            >
              {category.name}
            </NavLink>
          ))}
        </div>
      </div>

      {/* check if user exists */}
      {user && (
        <Link
          to={`user-profile/${user._id}`}
          className="flex my-5 mb-3 gap-2 p-2 items-center bg-white rounded-lg shadow-lg mx-3"
          onClick={handleCloseSidebar}
        >
          <img
            src={user.image}
            alt="user-profile"
            className="w-10 h-10 rounded-full"
          />
          <p>{user.userName}</p>
          <IoIosArrowForward />
        </Link>
      )}
    </div>
  )
}

export default Sidebar
