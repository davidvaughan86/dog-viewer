import React from 'react'


export default function DogContainer (props) { 
    return (
        <div>
            <ul>
                <li>
                    <img src ={props.url} alt = ""/>
                </li>
            </ul>
        </div>
    )
}
