import { Link, useNavigate } from 'react-router-dom'
import { IoMdAdd, IoMdSearch } from 'react-icons/io'

// A functional component that renders the navigation bar
const Navbar = ({ searchTerm, setSearchTerm, user }) => {
  // Hook to navigate to different routes programmatically
  const navigate = useNavigate()

  // If the user prop is defined, render the navigation bar
  if (user) {
    return (
      // Container for the navigation bar
      <div className="flex gap-2 md:gap-5 w-full mt-5 pb-7 ">
        // Container for the search input
        <div className="flex justify-start items-center w-full px-2 rounded-md bg-white border-none outline-none focus-within:shadow-sm">
          // Search icon
          <IoMdSearch fontSize={21} className="ml-1" />
          // Search input
          <input
            type="text"
            // Update the searchTerm state when the input value changes
            onChange={(e) => setSearchTerm(e.target.value)}
            // Placeholder text for the input
            placeholder="Search"
            // Set the input value to the searchTerm state
            value={searchTerm}
            // Navigate to the search page when the input is focused
            onFocus={() => navigate('/search')}
            // Styles for the input
            className="p-2 w-full bg-white outline-none"
          />
        </div>
        // Container for the user profile link and the "create pin" button
        <div className="flex gap-3 ">
          // Link to the user's profile page
          <Link to={`user-profile/${user?._id}`} className="hidden md:block">
            // User profile image
            <img
              src={user.image}
              alt="user-pic"
              className="w-14 h-12 rounded-lg "
            />
          </Link>
        </div>
      </div>
    )
  }

  return null
}

export default Navbar
