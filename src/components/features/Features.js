import React from 'react';
import img from 'components/images/image 4.png';
import icon from 'components/icons/check.png';

function Features() {
	return (
		<div class='mx-20'>
			<h1 class='text-[56px] max-w-[695px] mb-14'>More of what you need, out of the box</h1>
			<div>
				<div class='absolute z-10'>
					<ul>
						<li class='list_item'>
							<img src={icon} alt='icon' class='check_icon'/>Native subscriptions
						</li>
						<li class='list_item'>
							<img src={icon} alt='icon' class='check_icon' /> Custom content models
						</li>
						<li class='list_item'>
							<img src={icon} alt='icon' class='check_icon' />1,000+ variants per product
						</li>
						<li class='list_item'>
							<img src={icon} alt='icon' class='check_icon' /> B2B wholesale features
						</li>
						<li class='list_item'>
							<img src={icon} alt='icon' class='check_icon' /> Checkout API
						</li>
					</ul>
					<a href='/' class='link'>
						Explore all features
					</a>
				</div>
				<div>
					<img src={img} alt='img' class='my-0 mx-auto relative' />
				</div>
			</div>
		</div>
	);
}

export default Features;
