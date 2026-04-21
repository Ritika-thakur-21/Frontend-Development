// !-- can only have one default export 
// !-- can give any name of default export when importing in the app file

import React from 'react'
import { Fragment } from 'react'

const Footer = () => {
    return (
        <d1>Hellow footer </d1>
    )
}

export default Footer

// !--  named footer 
// !-- fragment doesnt cap extra node 

export let EndFooter = () => {
    return (
        <Fragment>
            <h1> Hey im inside a fragment called universeee</h1>
        </Fragment>
    )
}

export let EndFooter1 = () => {
    return (
        <React.Fragment>
            <h1> Hey im inside a fragment endfooter1</h1>
        </React.Fragment>
    )
}


export let EndFooter2 = () => {
    let username = "Nox"
    return (
        <>
            <h1 className='' style={{backgroundColor: 'red',color: 'yellow'}}> Hey im inside a fragment emptyyy. My name is {username} {10+20}</h1>

            <form action="">
              <label htmlFor=""></label>
            </form>
        </>
    )
}