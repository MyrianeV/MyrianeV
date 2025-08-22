import { useEffect, useState } from 'react' 
import './App.css'
import './index.css'

export default function App() {
  const [msg, setMsg] = useState('loading...')

  useEffect(() => {
    fetch('/api')                // note: relative path so Vite proxy kicks in
      .then(r => r.text())
      .then(text => {
        console.log(text)        // should log: "Hello from Node backend!"
        setMsg(text)
      })
      .catch(err => {
        console.error(err)
        setMsg('error (check console)')
      })
  }, [])

  return (
    <div className="min-h-screen flex items-center justify-center">
      <h1 className="text-3xl font-bold underline">{msg}</h1>
    </div>
  )
}

