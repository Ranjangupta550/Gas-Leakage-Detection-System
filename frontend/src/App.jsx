import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='w-screen h-screen border-4 flex item-center justify-center bg-gray-900'>
        <div className='text-white w-full h-full text-4xl flex items-center justify-center font-bold border border-white'>Gas Leak Project</div>
      </div>
    </>
  )
}

export default App
