import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import {
  Navbar,
  Feed,
  /* PinDetail,  */ CreatePin,
  Search,
} from '../components'

// Pins component to display the pins and allow for searching and creating new pins
const Pins = ({ user }) => {
  // State to store the search term entered by the user
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <div className="px-2 md:px-5">
      <div className="bg-gray-50">
        {/* // Rendering the Navbar component with the search term and setSearchTerm function as props, */}
        {/* // as well as the current user */}
        <Navbar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          user={user && user}
        />
      </div>
      <div className="h-full">
        {/* // Using the Routes component to handle the routing for the different pages in the Pins component */}
        <Routes>
          {/*  // Rendering the Feed component when the route is '/' or '/category/:categoryId' */}
          <Route path="/" element={<Feed />} />
          <Route path="/category/:categoryId" element={<Feed />} />
          {/* <Route
            path="/pin-detail/:pinId"
            element={<PinDetail user={user && user} />}
          /> */}
          {/* // Rendering the CreatePin component when the route is '/create-pin' and passing the current user as a prop */}
          <Route
            path="/create-pin"
            element={<CreatePin user={user && user} />}
          />
          {/* // Rendering the Search component when the route is '/search' and passing the searchTerm and setSearchTerm functions as props */}
          <Route
            path="/search"
            element={
              <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            }
          />
        </Routes>
      </div>
    </div>
  )
}

export default Pins
