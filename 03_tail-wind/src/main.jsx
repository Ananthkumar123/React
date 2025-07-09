import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Password from '../password_generator.jsx'
import Pass from './projects.jsx'
 
createRoot(document.getElementById('root')).render(
  
    // <App />,
    // <Password/>,
    <Pass/>
   ,
)
