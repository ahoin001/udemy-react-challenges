import React from 'react';


const userInput = (props) => {

       // Second Way to add CSS inline in react
        const style = {

            padding: '8px',
            border: '1px solid',
            width: '15em'
        }
 
        return (

            <div style={style}>

                <input 
                type="text" 
                onChange={props.nameChange} 
                // Value we want when page loads
                value={props.currentName} />

            </div>

        )

} 
export default userInput;

 
