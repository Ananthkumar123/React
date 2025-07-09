
 function customRender(reactElement,container){

     domElement = document.createElement(reactElement.type)


     for (let prop in reactElement.props) {  
            
          domElement.innerHTML = reactElement.Children
            domElement.setAttribute(prop, reactElement.props[prop])
            }
            container.appendChild(domElement)
        }



const reactElement = {
    type: 'a',
    props: {
        href: 'https/:google.com',
        target: 'blank'
    },
    Children: 'click me to visit goggle '
}

const mainContainer = document.getElementById('root')

customRender(reactElement, mainContainer)