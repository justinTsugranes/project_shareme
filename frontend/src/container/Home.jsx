import { useEffect, useRef, useState } from 'react'
import { AiFillCloseCircle } from 'react-icons/ai'
import { HiMenu } from 'react-icons/hi'
import { Link, Route, Routes } from 'react-router-dom'

import logo from '../assets/logo.png'
import { client } from '../client'
import { Sidebar, UserProfile } from '../components'
import { userQuery } from '../utils/data'
import { fetchUser } from '../utils/fetchUser'
import Pins from './Pins'

const Home = () => {
  // Use state hook to toggle the sidebar
  const [toggleSidebar, setToggleSidebar] = useState(false)
  // Use state hook to store the current user data
  const [user, setUser] = useState()
  // Use ref hook to store a reference to the DOM element to allow scroll to top functionality
  const scrollRef = useRef(null)

  // Fetch the current user's data using the fetchUser utility function
  const userInfo = fetchUser()

  // Use effect hook to fetch the current user's data using the Sanity client
  useEffect(() => {
    // Construct the user query using the userQuery utility function and the current user's googleId
    const query = userQuery(userInfo?.googleId)
    // Fetch the current user's data using the Sanity client
    client.fetch(query).then((data) => {
      setUser(data[0])
    })
  }, [userInfo?.googleId])

  // Use effect hook to scroll to top of page when the component is rendered
  useEffect(() => {
    scrollRef.current.scrollTo(0, 0)
  })

  return (
    <div className="flex bg-gray-50 md:flex-row flex-col h-screen transition-height duration-75 ease-out">
      <div className="hidden md:flex h-screen flex-initial">
        {/* Render the Sidebar component and pass in the current user data as props */}
        <Sidebar user={user && user} />
      </div>
      <div className="flex md:hidden flex-row">
        {/* Header for the mobile version of the app */}
        <div className="p-2 w-full flex flex-row justify-between items-center shadow-md">
          {/* Render the HiMenu icon and toggle the sidebar when clicked */}
          <HiMenu
            fontSize={40}
            className="cursor-pointer"
            onClick={() => setToggleSidebar(true)}
          />
          {/* Render the logo and navigate to the homepage when clicked */}
          <Link to="/">
            <img src={logo} alt="logo" className="w-28" />
          </Link>
          {/* Render the current user's profile picture and navigate to their profile page when clicked */}
          <Link to={`user-profile/${user?._id}`}>
            <img
              src={user?.image}
              alt="user-pic"
              className="w-9 h-9 rounded-full "
            />
          </Link>
        </div>
        {toggleSidebar && (
          <div className="fixed w-4/5 bg-white h-screen overflow-y-auto shadow-md z-10 animate-slide-in">
            <div className="absolute w-full flex justify-end items-center p-2">
              <AiFillCloseCircle
                fontSize={30}
                className="cursor-pointer"
                onClick={() => setToggleSidebar(false)}
              />
            </div>
            <Sidebar closeToggle={setToggleSidebar} user={user && user} />
          </div>
        )}
      </div>
      <div className="pb-2 flex-1 h-screen overflow-y-scroll" ref={scrollRef}>
        <Routes>
          <Route path="/user-profile/:userId" element={<UserProfile />} />
          <Route path="/*" element={<Pins user={user && user} />} />
        </Routes>
      </div>
    </div>
  )
}

export default Home
