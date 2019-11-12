import React from 'react';

const Card = ({id,name,email}) =>{
    return(
        <div className="tc bw2 shadow-5 bg-light-green dib br3 pa3 ma2 grow">
            <img src={`https://robohash.org/${id}?size=200x200`} alt="Robotos"/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;