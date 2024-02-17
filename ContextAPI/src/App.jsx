import { useState } from 'react'
import './App.css'
import { ThemeProvider } from './context/Theem'
import { useEffect } from 'react'
import ThemeBtn from './Components/ThemeBtn'
import Card from './Components/Card'

function App() {
  const [themMode, setThemMode] = useState('light')

  const lightTheme = ()=>{
    setThemMode('light')
  }

  const darkTheme = ()=>{
    setThemMode('dark')
  }


  // actual change in them 
  useEffect(()=>{
    document.querySelector('html').classList.remove('light','darak')
    document.querySelector('html').classList.add(themMode)
  },[themMode])

  return (
    <ThemeProvider value={{themMode, darkTheme, lightTheme}}>
      <div className="card" style={{width: "18rem"}}>
        <ThemeBtn/>
        <Card/>
     </div>
    </ThemeProvider>
  )
}

export default App
