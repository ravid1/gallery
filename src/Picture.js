import React, { Component } from 'react';
import './App.css';


class Picture extends Component {

    constructor(props){
        super(props);

        console.log(this.props.newPicture);
    }


    render (){
        return(
            <img className='picture' src={this.props.newPicture} alt='no'/>
        )
    }
}

export default Picture;
