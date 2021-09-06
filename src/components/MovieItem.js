import React from 'react'
import './Movieitem.css'

const stars = [
    {id:1},
    {id:2},
    {id:3},
    {id:4},
    {id:5},

]

const MovieItem = (props) => {
 

    //printing rating as stars
    const star_child = stars.map((star,index)=>{
        if(index<props.ratings)
            return <i key={star.id} className="fas fa-star orange"></i>
        else
            return <i key={star.id} className="fas fa-star gray"></i>    
    })

    return (

                <div className="col-12 col-sm-3   mt-2 singleItem">
                    <div className="image">
                        <img className="d-block w-100" style={{objectFit:"fill"}}src={props.imageUrl} alt="Not Available"></img>
                    </div>
                    <div className="description row ">
                        <p className="col-md-6">{props.title}</p>
                        <p className="col-md-6">{star_child}</p>
                    </div>
                </div>
    )

}

export default MovieItem