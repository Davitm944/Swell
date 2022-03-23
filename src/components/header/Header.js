import React from 'react';
import logo from 'components/icons/Vector (14).png';
import Link from 'react-scroll/modules/components/Link';

function Header() {
	return (
		<header>
			<div class='flex justify-evenly  align-middle flex-wrap'>
				<div class='mt-4'>
					<img src={logo} alt='logo' class='cursor-pointer' />
				</div>

				<nav class='font-roboto pt-5 '>
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
