import { useState, useEffect } from 'react'
import './App.css'

function App() {
 
  const [song, setSong] = useState(" ")
  const [singer, setSinger] = useState(" ")
  const [lyrics, setLyrics] = useState("")
  const [error, setError] = useState("")

  // API ---> api.lyrics.ovh/v1/${singer}/${song}

  const handleSubmit = () => {
  try {
        
    if(!singer || !song){
      alert("Please enter the name of sing and singer !!")
      setSinger("")
      setSong("")
    }

    else{
      fetch(`https://api.lyrics.ovh/v1/${singer}/${song}`).then(
        res => {
          return res.json()
        }
      ).then(
        res => {
          setLyrics(res.lyrics)
        }
      )
    }
      } 
    
      catch (error) {
        console.error(error)
        setError(error.message)
        throw new Error("API ENDPOINT ERROR", error.message)
      }

    }

  return (
   
   <div className='flex justify-center  bg-slate-900 h-[100vh] w-[100vw]'>
    <div className='flex-col mt-[4vmax]'>

      <div className='flex justify-center px-[2vw]'>
          <h1 className='font-bold text-[8vmin] text-white '>🎸 MUSIX MATCH 🎶</h1>
      </div>


<div className='flex flex-wrap justify-center mt-[2em] lg:mt-[4em] md:mt-[3em] sm:mt-[2em]  items-center w-[100vw] px-[4vw] md:flex-wrap sm:flex-wrap lg:flex sm:justify-center md:justify-center lg:justify-between xl:justify-between'>

  <div className='flex-col mt-[4vmax] sm:mt-[3vw] md:mt-[4vw] lg:mt-[4vw] mr-[2vw]'>

  <div className='flex mb-[1vw] flex-wrap justify-center items-center sm:flex-wrap md:flex-wrap lg:flex xl:flex'>

  <label className='text-white mr-[4vw]'>
    Enter name of Song 
  </label>
<input type="text" value={song} onChange={(e) => setSong(e.target.value)} placeholder='Enter name of Song' className='ml-2 border-none rounded-xl h-[4vw] w-[12em]' />
</div>

<div className='flex mb-[3vw] flex-wrap justify-center items-center sm:flex-wrap md:flex-wrap lg:flex xl:flex'>
  
<label className='text-white mr-[4vw]'>
    Enter name of Singer 
  </label>
<input type="text" value={singer} onChange={(e) => setSinger(e.target.value)} placeholder='Enter name of singer' className='flex border-none rounded-xl h-[4vw] w-[12em]' />
</div>
<div className='flex mt-[2vw] justify-center sm:justify-center md:justify-center lg:justify-start xl:justify-start'>
    
    <div class="relative inline-flex group" onClick={handleSubmit}>
        <div
            class="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt">
        </div>
        <a href="#" title="Get quote now"
            class="relative inline-flex items-center justify-center px-[3vw] py-[2vmin] text-lg font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-lg sm:rounded-lg md:rounded-xl lg:rounded-xl xl:rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
            role="button"> <span className='text-sm sm:text-md md:text-lg lg:text-xl xl:text-xl'>Find</span>
        </a>
    </div>

</div>

</div>


<div className='flex-col h-[50vh] w-[90vw] sm:w-[90vw] md:w-[90vw] lg:w-[50vw] xl:w-[50vw] bg-slate-800 overflow-x-auto overflow-y-auto rounded-xl mt-[8vmax]'>
  <h2 className='flex justify-center text-white text-3xl mt-4'>
    Lyrics
  </h2>
  <pre className='text-white mt-4 w-[40em] overflow-x-auto flex justify-center font-mono p-4'>
    {error && (
      <div className='flex justify-center text-red text-xl'>
        {error}
      </div>
    )}
    {lyrics}
  </pre>
</div>

</div>


    </div>
  </div>
  )
}


export default App
