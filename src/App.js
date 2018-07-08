import React, { Component } from 'react';
import './App.css';
import Picture from "./Picture";


class App extends Component {

    constructor(props){
        super(props);

        const storagePictures = JSON.parse(sessionStorage.getItem('pictures'));
        console.log(storagePictures);
        this.state = {
            file: false,
            picturesArr: storagePictures || []
        }
    }

    handleChange(files){
        this.setState((prevState)=>({
            file: URL.createObjectURL(files[0]),
            picturesArr: prevState.picturesArr.concat(URL.createObjectURL(files[0]))
        }));
        sessionStorage.setItem('pictures', JSON.stringify(this.state.picturesArr.concat(URL.createObjectURL(files[0]))));
    }



    render ()
    {
        const pictures = this.state.picturesArr;

        return(
            <div className='App'>
                <input className='addPicture' type="file" onChange={ (e) => this.handleChange(e.target.files) } />
                {pictures.map((image,idx)=>(
                    <div className='image' key={idx}><Picture newPicture={image}/></div>
                    )
                )}
            </div>
        )
    }
}

export default App;
