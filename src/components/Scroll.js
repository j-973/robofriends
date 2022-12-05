import React from 'react';

const Scroll = (props) => {
	return (
<div style={{overflow: 'scroll', border: '1px solid black', height: '800px'}}>	{/*adding css styles using double curly braces in .jsx*/}
	{props.children}
</div>
	);
};

export default Scroll;