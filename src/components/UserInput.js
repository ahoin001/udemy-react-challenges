import React from 'react';


export default class UserInput extends React.Component{


    render(){

        return(

            <div>

                <input type="text" onChange={this.props.nameChange}/>

            </div>

        )

    }

}