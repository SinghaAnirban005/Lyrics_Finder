import { useState, useEffect } from 'react'
import './App.css'

function App() {
 
  const [song, setSong] = useState(" ")
  const [singer, setSinger] = useState(" ")
  const [lyrics, setLyrics] = useState("")

  // api ---> api.lyrics.ovh/v1/${singer}/${song}
   const api = `api.lyrics.ovh/v1/${singer}/${song}`

  //  useEffect({
  //     handleSubmit
  //  }, [])

  const handleSubmit = () => {

    if(singer == "" || song == ""){
      setLyrics(" ")
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
   

  useEffect(() => {
    handleSubmit()
  }, [song, singer])
  
  // const handleSong = () => {
  //   setSong(song)
  // }


  // const handleSinger = () => {
  //   setSinger(singer)
  // }

  return (
   
   <div className='root'>
    <div className='d1'>

      <h1 className='h1'>LYRICS FINDER APP</h1>

      <div className='d2'>
        <label>
          Enter name of Song {}
        </label>
      <input type="text" value={song} onChange={(e) => setSong(e.target.value)} placeholder='Enter name of Song' className='inp1' />
      </div>

      <div className='d3'>
        
      <label>
          Enter name of Singer {}
        </label>
      <input type="text" value={singer} onChange={(e) => setSinger(e.target.value)} placeholder='Enter name of singer' className='inp2' />
      </div>

      <div className='d4'>
        <button onClick={handleSubmit} className='btn' >
          FIND
        </button>
      </div>


      <div className='d5'>
        <h2>Lyrics</h2>
        <pre>
          {lyrics}
        </pre>
      </div>

    </div>
   </div>
  )
}


export default App
