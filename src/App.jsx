import { useState, useEffect } from 'react'
import './App.css'

function App() {
 
  const [song, setSong] = useState(" ")
  const [singer, setSinger] = useState(" ")
  const [lyrics, setLyrics] = useState("")
  const [error, setError] = useState("")

  // api ---> api.lyrics.ovh/v1/${singer}/${song}

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
   
   <div className='flex justify-center bg-slate-900 min-h-[100vh] '>
    <div className='flex-col mt-[2em]'>

      <div className='flex justify-center'>
          <h1 className='font-bold text-3xl text-white'>🎸 MUSIX MATCH 🎶</h1>
      </div>


<div className='flex mt-[2em] justify-between items-center w-[80em] px-4'>

  <div className='flex-col mt-[2em]'>

  <div className='flex justify-center items-center'>

  <label className='text-white mr-4'>
    Enter name of Song 
  </label>
<input type="text" value={song} onChange={(e) => setSong(e.target.value)} placeholder='Enter name of Song' className='ml-2 border-none rounded-xl h-10' />
</div>

<div className='flex justify-center mt-4 items-center'>
  
<label className='text-white mr-4'>
    Enter name of Singer 
  </label>
<input type="text" value={singer} onChange={(e) => setSinger(e.target.value)} placeholder='Enter name of singer' className='flex border-none rounded-xl h-10' />
</div>
<div className='flex mt-6'>
    
    <div class="relative inline-flex group " onClick={handleSubmit}>
        <div
            class="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt">
        </div>
        <a href="#" title="Get quote now"
            class="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
            role="button"> Find
        </a>
    </div>

</div>

</div>


<div className='flex-col h-[30em] w-[40em] bg-slate-800 overflow-x-auto overflow-y-auto rounded-xl'>
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
