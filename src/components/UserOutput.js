import React from 'react';


export default class UserInput extends React.Component{


    render(){

        return(

            <div>

                <p> Hello there my name is {this.props.userName}</p>
                <p> I'm learning to use {this.props.code} library</p>


            </div>

        )

    }

}