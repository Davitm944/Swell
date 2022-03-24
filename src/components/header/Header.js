import React, { useState, useEffect } from 'react';
import logo from 'components/icons/Vector (14).png';
import Link from 'react-scroll/modules/components/Link';
import { useWindowWidth } from '@react-hook/window-size';

function Header() {
	const [ navStyle, setNavStyle ] = useState('');
	const [ ddStyle, setddStyle ] = useState('hidden');
	const [ iconStyle, SetIconStyle ] = useState('');

	const onMobile = () => {
		if (ddStyle === 'hidden') {
			setddStyle('block absolute');
			setNavStyle('flex flex-col relative top-[55px] right-11 shadow-xl py-6 bg-gray-100 rounded');
			SetIconStyle('rotate-90 duration-500');
		} else {
			setddStyle('hidden');
			setNavStyle('');
			SetIconStyle('duration-500');
		}
	};

	return (
		<header>
			<div class='flex justify-evenly  align-middle flex-wrap md:flex-nowrap'>
				<div class='mt-4'>
					<img src={logo} alt='logo' class='cursor-pointer' />
				</div>
				<span class={`sm:hidden block mt-5 ${iconStyle}`} onClick={onMobile}>
					→
				</span>

				<div class={`sm:block ${ddStyle} `}>
					<nav class={`sm:font-roboto sm:pt-5 sm:block sm:static sm:top-0 sm:left-0 ${navStyle}`}>
						<Link to='whySwell' smooth={true} duration={1000} class='nav_link'>
							Why Swell?
						</Link>
						<Link to='features' smooth={true} duration={1000} class='nav_link'>
							Features
						</Link>
						<Link to='compare' smooth={true} duration={1000} class='nav_link'>
							Pricing
						</Link>
						<Link to='merchants' smooth={true} duration={1000} class='nav_link'>
							Resources
						</Link>
					</nav>
				</div>

				<div class='font-roboto pt-5'>
					<a href='/' class='leading-7 text-primary'>
						Start free trial
					</a>
					<a href='/' class='ml-10  px-5 py-2 leading-7 text-primary border-2 border-solid border-purple-900 rounded'>
						Log in
					</a>
				</div>
			</div>
		</header>
	);
}

export default Header;
