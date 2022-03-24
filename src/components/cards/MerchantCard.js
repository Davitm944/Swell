import React from 'react';

function MerchantCard(props) {
	return (
		<div class={props.layout} id='merchants'>
			<div class={props.img_style}>
				<img src={props.img} alt='img' class='w-full h-full' />
			</div>
			<div class='max-w-[210px] mx-auto my-0 text-center'>
				<div class='pl-7'>
					<img src={props.icon} alt='logo' />
				</div>
				<p class='md:py-7 md:text-xl md:leading-8 md:text-center sm:text-base sm:p-5'>{props.text}</p>
				<span class='text-base'>{props.author}</span>
			</div>
		</div>
	);
}

export default MerchantCard;
