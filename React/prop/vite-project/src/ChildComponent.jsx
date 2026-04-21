import React from 'react'

const ChildComponent = (props) => {
    let { uname, uage, uprofile, uskills } = props;
    props.uname = 'aakash';
    return (
        <div>
            <h1>Child Component</h1>
            <h2>Username: {uname}</h2>
            <h3>Age: {uage}</h3>
            <img src={uprofile} alt="profile" width="150" />
                {
                    uskills.map((sk, index)=>(
                      <ul  key={index}>
                        <li>{sk}</li>
                      </ul>
                    ))
                   }
        </div>      
    )
}

export default ChildComponent;