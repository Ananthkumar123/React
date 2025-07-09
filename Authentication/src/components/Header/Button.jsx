import React from 'react'


//commomn button 
function Button({ children,
    type='button',
    bgColor='bg-blue-500',
    textColor = 'text-white',
    className = '',  // we can add manually so make it empty
    ...props
    }) 

{
    return (
            <button className={`px-4 py-2 ${bgColor} ${textColor} 
            ${className}`}{...props}   //we can add some other attributes
            > {children}</button>
   )
}

export default Button