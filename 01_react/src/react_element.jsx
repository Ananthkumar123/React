import React from 'react'

function Reactelement() {
    const reactElement = React.createElement(
        'a',
        { href: 'https://google.com', target: '_blank' },
        'click to visit google'
    )

    return (
        <>  
             <b id="demo"> {reactElement}</b>
        </>
    )
}
export default Reactelement