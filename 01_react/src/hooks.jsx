import { useEffect, useState } from "react";

function Hook() {

    let [counter, setcounter] = useState(10);

    let addvalue = () => {
        counter = counter + 1;
         if(counter<20){
        setcounter(counter)
        }
        else{  
            alert('reached max value')
        }
     }

    let removevalue =()=>{
        counter = counter -1 ;
        if(counter>0){
        setcounter(counter)
        }
        else{  
            alert('reached min value')
        }
    }

    const [city,setCity] =useState('guntur')

    useEffect(()=>{
        if(city=='hyderbad') setCity('hyderbad')
            else setCity('banglore')
    },[])
     
    return (
        <>

            <button className="btn btn-primary" onClick={addvalue}> add value {counter}</button>  <br />

            <button className="btn btn-primary" onClick={removevalue}> remove value {counter}</button>

            <h4> use useEffect  updated city is {city}</h4>

        </>
    )

}
export default Hook