import React from 'react';

const Card = (props) => {
    return(
        <div className="card col-md-12 text-center img-wraper" key={props.img.id}>
            <img className="card-img-top"
                src={props.img.images.downsized_medium.url}img-container
                alt={props.img.title}
            />
            <div className="card-body">
                <p className="card-text">{props.img.title}</p>
            </div>
        </div>
    )
}

export default Card;
