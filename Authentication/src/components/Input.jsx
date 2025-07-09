
import React, { useId } from 'react'

  function Input(
    {
        label,
        type = 'text',
        className = "",
        ...props
    }, ref) {
    const id = useId()
    return (
        <div className='w-full'>
            {label && <label className='block mb-1' htmlFor={id}>{label}</label>}
            <input type={type}
            className={`px-3 py-1 text-black outline-none border border-emerald-800 w-full${className}`} 
            ref={ref} //  when user pass data sends to parent component updates state
            {...props}
            id={id}/>
        </div>
    )
}
 export default  React.forwardRef(Input)