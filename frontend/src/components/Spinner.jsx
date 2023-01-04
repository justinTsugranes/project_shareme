import { Circles } from 'react-loader-spinner'

// The Spinner component displays a loading spinner with a message
const Spinner = ({ message }) => {
  return (
    // Wrapper element to center the spinner and message
    <div className="flex flex-col justify-center items-center w-full h-full">
      // Display the loading spinner
      <Circles
        color="#00BFFF"
        ariaLabel="circles-loading"
        height={50}
        width={200}
        className="m-5"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
      // Display the loading message
      <p className="text-lg text-center px-2">{message}</p>
    </div>
  )
}

export default Spinner
