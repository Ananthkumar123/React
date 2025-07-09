import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
 import App from './App.jsx'
import Reactelement from './react_element.jsx'
import Hook from './hooks.jsx'
import Ak from './props.jsx'
import Bgchanger from './bgchanger.jsx'
import Forms from './forms.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App />
    <Reactelement/>
    <Hook/>
    <Ak myobj ='this is obj it is used in jsx'/>
    <Bgchanger/> */}
    <Forms/>
  </StrictMode>,
)
