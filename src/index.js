import React from 'react'
import ReactDom from 'react-dom'
import {createRoot} from 'react-dom/client'
const container = document.getElementById('app')
const root = createRoot(container)

function getButtonText() {
    return 'Hi there!'
}

const App = () => {

    return (
        <div>
            <label htmlFor="name" className="label" > enter e-mail </label>
            <input id="name" type="text" />
            <button style={{backgroundColor: 'red', color: 'white'}} >
                { getButtonText() }
            </button>
        </div>
    )
}

root.render(<App tab="home" />)