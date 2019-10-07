import React from 'react';


export default class UserInput extends React.Component {

    render() {

        // Second Way to add CSS inline in react
        const style = {

            padding: '8px',
            border: '1px solid',
            width: '15em'
        }

        return (

            <div style={style}>

                <input type="text" onChange={this.props.nameChange} />

            </div>

        )

    }

}