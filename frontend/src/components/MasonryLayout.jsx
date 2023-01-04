import Masonry from 'react-masonry-css'
import Pin from './Pin'

// An object that maps screen widths (in pixels) to the number of columns to show
const breakpointObj = {
  default: 4, // default number of columns
  3000: 6, // number of columns for screens wider than 3000 pixels
  2000: 5, // number of columns for screens between 2000 and 2999 pixels
  1200: 3, // number of columns for screens between 1200 and 1999 pixels
  1000: 2, // number of columns for screens between 1000 and 1199 pixels
  500: 1, // number of columns for screens narrower than 1000 pixels
}

// A functional component that renders a Masonry layout using the react-masonry-css library
const MasonryLayout = ({ pins }) => {
  // Render the Masonry layout using the breakpointObj to determine the number of columns
  return (
    <Masonry className="flex animate-slide-fwd" breakpointCols={breakpointObj}>
      // Map over the pins array and render a Pin component for each item
      {pins?.map((pin) => (
        // Use the pin._id as the key and pass the pin object as a prop to the Pin component
        <Pin key={pin._id} pin={pin} className="w-max" />
      ))}
    </Masonry>
  )
}

export default MasonryLayout
