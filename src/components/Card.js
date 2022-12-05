import React from 'react';

const Card = ({ name, email, id }) => {
	return (
		<div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
			<img alt='a robot' src={`https://robohash.org/${id}?200x200`}/> {/*using with properties/props allows robots on each card to be randomized */} 
			<div>
				<h2>{name}</h2>
				<p>{email}</p>
			</div>
		</div>
	);
}

export default Card;