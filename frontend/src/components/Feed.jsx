import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

// Import the client for making API requests to the server
import { client } from '../client'
// Import the queries for fetching data from the server
import { feedQuery, searchQuery } from '../utils/data'
// Import the MasonryLayout component for displaying the pins in a grid
import MasonryLayout from './MasonryLayout'
// Import the Spinner component for displaying a loading spinner
import Spinner from './Spinner'

const Feed = () => {
  // Use useState hook to manage the state of the pins data
  const [pins, setPins] = useState()
  // Use useState hook to manage the state of the loading state
  const [loading, setLoading] = useState(false)

  // Use useParams hook to get the categoryId from the URL parameters
  const { categoryId } = useParams()

  // Use useEffect hook to fetch data from the server when the categoryId changes
  useEffect(() => {
    if (categoryId) {
      // Set loading to true to show the loading spinner
      setLoading(true)
      // Get the search query for the given categoryId
      const query = searchQuery(categoryId)
      // Fetch the data from the server using the search query
      client.fetch(query).then((data) => {
        // Set the data to the state
        setPins(data)
        // Set loading to false to hide the loading spinner
        setLoading(false)
      })
    } else {
      // Set loading to true to show the loading spinner
      setLoading(true)
      // Fetch the data from the server using the feed query
      client.fetch(feedQuery).then((data) => {
        // Set the data to the state
        setPins(data)
        // Set loading to false to hide the loading spinner
        setLoading(false)
      })
    }
  }, [categoryId])

  // Set the ideaName to the categoryId if it exists, otherwise set it to 'new'
  const ideaName = categoryId || 'new'

  if (loading) {
    // Show the loading spinner while the data is being fetched
    return <Spinner message={`We are adding ${ideaName} ideas to your feed!`} />
  }
  // Render the MasonryLayout component with the pins data if it exists
  return <div>{pins && <MasonryLayout pins={pins} />}</div>
}

export default Feed
