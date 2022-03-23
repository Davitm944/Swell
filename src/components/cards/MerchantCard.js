import React from 'react';

function MerchantCard(props) {
	return (
		<div class={props.layout}>
			<div class={props.img_style}>
				<img src={props.img} alt='img' class='w-full h-full'/>
			</div>
			<div class='max-w-[210px] mx-auto my-0 text-center'>
				<div class='pl-7'>
					<img src={props.icon} alt='logo'/>
				</div>
				<p class='py-7 text-xl leading-8 text-center'>{props.text}</p>
				<span class='text-base'>{props.author}</span>
			</div>
		</div>
	);
}

export default MerchantCard;
