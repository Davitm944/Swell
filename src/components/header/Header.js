import React, { useState } from 'react';
import logo from 'components/icons/Vector (14).png';
import Link from 'react-scroll/modules/components/Link';

function Header() {
	const [ navStyle, setNavStyle ] = useState('xs:opacity-0');
	const [ ddStyle, setddStyle ] = useState('flex absolute invisible');
	const [ iconStyle, SetIconStyle ] = useState('');

	const onMobile = () => {
		if (ddStyle === 'flex absolute invisible') {
			setddStyle('block absolute visible');
			setNavStyle(
				'xs:flex xs:flex-col xs:relative xs:top-[55px] xs:right-11 xs:shadow-xl xs:py-6 xs:bg-gray-200 xs:rounded xs:opacity-100' 
			);
			SetIconStyle('rotate-90 duration-500');
		} else {
			setddStyle('flex absolute invisible');
			setNavStyle('xs:opacity-0');
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

				<div class={`sm:flex sm:relative sm:visible xs:${ddStyle}`}>
					<nav
						class={`sm:font-roboto sm:pt-5 sm:block sm:static sm:top-0 sm:left-0 sm:shadow-none sm:bg-transparent transition ease-linear duration-500  sm:opacity-100 ${navStyle}`}>
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
