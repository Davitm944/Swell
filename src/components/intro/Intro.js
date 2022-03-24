import React from 'react';
import img from 'components/images/image 2.png';

function Intro() {
	return (
		<div class='flex text-center justify-center mt-44'>
			<div class='text-center'>
				<div class='max-w-2xl mx-auto my-0'>
					<h1 class='md:text-8xl	text-primary font-roboto text-5xl'>Sell creatiely</h1>
					<p class='text-2xl mt-9 font-roboto leading-10'>
						Swell is the most powerful{' '}
						<a href='/' class='text-secondary'>
							{' '}
							headless ecommerce platform{' '}
						</a>
						for modern brands, startups, and agencies.
					</p>
					<div class='mt-10'>
						<input type='text' placeholder='Enter your email' class='border-2 border-solid border-purple-900 rounded py-3 px-2  h-10 sm:w-64	' />
						<button class='bg-gradient-to-r from-purple-500 to-purple-900 py-2 px-6 rounded-r-lg -ml-0.5 text-white font-roboto'>Start free trial</button>
					</div>
				</div>
				<div>
					<img src={img} alt='cover' />
				</div>
			</div>
		</div>
	);
}

export default Intro;
