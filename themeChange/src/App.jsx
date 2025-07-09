
import UsercontextProvide from './context/UsercontextProvide'
import Login from './Components/Login'
import Profile from './Components/Profile'
import { useEffect, useState } from 'react'
import ThemeBtn from './ThemeComponents/ThemeBtn'
import Card from './ThemeComponents/Card'
import usetheme, { ThemeProvider } from './context/Theme'

function App() {

  const [themeMode, setThemeMode] = useState('light')
  const lightTheme = () => {
    setThemeMode('light')
  }
  const darkTheme = () => {
    setThemeMode('dark')
  }
  // actual change in theme 

  useEffect(() => {
    document.querySelector('html').classList.remove('light', 'dark')

    document.querySelector('html').classList.add(themeMode)
  }, [themeMode])
  return (
    <>
      {/* <UsercontextProvide>
      <h1>this context api </h1>
      <Login />
      <Profile />
    </UsercontextProvide> */}

      <ThemeProvider value={{themeMode,lightTheme,darkTheme}}>
        <div className="flex flex-wrap min-h-screen items-center">
          <div className="w-full">
            <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
              <ThemeBtn />
            </div>

            <div className="w-full max-w-sm mx-auto">
              <Card />
            </div>
          </div>
        </div>
      
      </ThemeProvider>
    </>
  )
}

export default App
