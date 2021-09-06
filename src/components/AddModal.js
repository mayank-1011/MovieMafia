import React, { useState } from "react";
import axios from 'axios';
import './AddModal.css'

const AddModal = (props) => {

    const [title, setTitle] = useState();
    const [rating, setRating] = useState();
    const [imageURL,setImage] = useState("");
    const [selectedFile, setFile] = useState(null)

    //creating url for the uploaded image
    const onFileChange = event => {
        // Update the state
        if (event.target.files && event.target.files[0]) {
            let img = event.target.files[0];
            setFile(URL.createObjectURL(img)
            );
        }
    };
    const onTitleChangeHandler = (event) => {
        setTitle(event.target.value);
    }

    const onRatingChangeHandler = (event) => {
        setRating(event.target.value);
    }

    const onURLchangeHandler = (event)=>{
        setImage(event.target.value)
    }

    const formSubmitHandler = (event) => {
        event.preventDefault();
        const movieDetails = {
            title: title,
            ratings: rating,
            imageURL: selectedFile == null ? imageURL : selectedFile,
            id: Math.random().toString(),
        }
        props.onSubmitHandler(movieDetails)

    }

    return (
        <div className="modal_head">
            <div className="form_head">
                <h2 style={{fontFamily: " Kaisei HarunoUmi, serif"}}>Add Movie</h2>
                <form onSubmit={formSubmitHandler}>
                    <input type="text" placeholder="Movie Name" required onChange={onTitleChangeHandler}></input>

                    <input type="number" placeholder="Rating" max="5" min="1" onChange={onRatingChangeHandler} required></input>
                    <br></br>
                    <div className="getImage">
                        <input type="text" placeholder="Image Url" onChange={onURLchangeHandler}></input>

                        <hr></hr>

                        <div className="uploadImage">
                            <input type="file" onChange={onFileChange} />
                        </div>
                    </div>
                    <br></br>
                    <button type="submit">Add </button>
                </form>

            </div>

        </div>


    )
}

export default AddModal