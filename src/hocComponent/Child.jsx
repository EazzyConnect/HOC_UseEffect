import React from 'react'

const Child = ({ level, name }) => {
    return (
        <>
            <p>This is Child component</p>
            <p>My name is {name}, a {level}</p>
        </>
    )
}

export default Child