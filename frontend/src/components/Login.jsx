import { useNavigate } from 'react-router-dom'
import { FcGoogle } from 'react-icons/fc'
import shareVideo from '../assets/share.mp4'
import logo from '../assets/logowhite.png'
import GoogleLogin from 'react-google-login'

const Login = () => {
  const onSuccess = (res) => {
    console.log('success:', res)
    localStorage.setItem('user', JSON.stringify(res.profileObj))

    const { name, googleId, imageUrl } = res.profileObj

    // new sanity doc per user schema
    const doc = {
      _id: googleId,
      _type: 'user',
      userName: name,
      image: imageUrl,
    }
  }

  const onFailure = (err) => {
    console.log('failed:', err)
  }

  return (
    <div className='flex justify-start items-center flex-col h-screen'>
      <div className='relative w-full h-full'>
        {/* vid */}
        <video
          src={shareVideo}
          type='video/mp4'
          Loop
          controls={false}
          muted
          autoPlay
          className='w-full h-full object-cover'
        />
        {/* logo */}
        <div className='absolute flex flex-col justify-center items-center top-0 right-0 left-0 bottom-0 bg-blackOverlay'>
          <div className='p-5'>
            <img src={logo} width='130px' alt='logo' />
          </div>
          {/* login */}
          <div className='shadow-2xl'>
            <GoogleLogin
              clientId={process.env.REACT_APP_GOOGLE_API_TOKEN}
              render={(renderProps) => (
                <button
                  type='button'
                  onClick={renderProps.onClick}
                  disabled={renderProps.disabled}
                  className='bg-mainColor flex justify-center items-center p-3 rounded-lg cursor-pointer outline-none'
                >
                  <FcGoogle className='mr-4' buttonText='Sign in with Google' />{' '}
                  Sign in with google
                </button>
              )}
              onSuccess={onSuccess}
              onFailure={onFailure}
              cookiePolicy='single_host_origin'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
