import React from 'react'
import {FaSearch, FaMoon} from "react-icons/fa";



export default function Navbar() {
  return (
    <div>
      <div>  
        <div>  
            <h1>
                Where in the World?
            </h1>
        </div>
        <div className='text-xs'>
                <FaMoon />
        </div>
        </div>


        <div>

            <div>
                <FaSearch/>
                <input type='text' placeholder='Search for a Country...' ></input>
            </div>

            <div>
                <select>
                    <option  > Filter by Region (default) </option>
                </select>
            </div>

        </div>
    </div>
  )
}
