import React from 'react';
import icon1 from 'components/icons/Vector (8).png';
import icon2 from 'components/icons/Vector (9).png';
import icon3 from 'components/icons/Vector (10).png';
import icon4 from 'components/icons/Vector (13).png';

function Footer() {
	return (
		<footer class='mt-24 max-w-7xl'>
			<div class='flex justify-around  sm:mb-44 mb-4 items-center'>
				<div>
					<img src={icon1} alt='icon' />
				</div>
				<div>
					<img src={icon2} alt='icon' />
				</div>
				<div>
					<img src={icon3} alt='icon' />
				</div>
			</div>

			<div class='sm:flex sm:justify-evenly flex-wrap sm:p-0 px-5 hidden'>
				<ul>
					<li>
						<img src={icon4} alt='icon' class='mb-5' />
					</li>
					<li>
						<a href='/'>Twitter</a>
					</li>
					<li>
						<a href='/'>LinkedIn</a>
					</li>
				</ul>
				<ul>
					<li>
						<a href='/'>Product</a>
					</li>
					<li>
						<a href='/'>Why Swell?</a>
					</li>
					<li>
						<a href='/'>Features</a>
					</li>
					<li>
						<a href='/'>Pricing</a>
					</li>
					<li>
						<a href='/'>Changelog</a>
					</li>
				</ul>
				<ul>
					<li>
						<a href='/'>Company</a>
					</li>
					<li>
						<a href='/'>Enterprise</a>
					</li>
					<li>
						<a href='/'>Case Studies</a>
					</li>
					<li>
						<a href='/'>Partners</a>
					</li>
					<li>
						<a href='/'>Experts</a>
					</li>
					<li>
						<a href='/'>About us</a>
					</li>
				</ul>
				<ul>
					<li>
						<a href='/'>Compare</a>
					</li>
					<li>
						<a href='/'>Shopify</a>
					</li>
					<li>
						<a href='/'>Magento</a>
					</li>
					<li>
						<a href='/'>Headless vs Monolithic</a>
					</li>
				</ul>
				<ul>
					<li>
						<a href='/'>Questions?</a>
					</li>
					<li>
						<a href='/'>FAQs</a>
					</li>
					<li>
						<a href='/'>Support</a>
					</li>
					<li>
						<a href='/'>Help Center</a>
					</li>
					<li>
						<a href='/'>API docs</a>
					</li>
				</ul>
			</div>
			<div class='flex justify-around mt-20'>
				<a href='/' class='sm:text-base text-sm '>© 2021. Swell. Made worldwide.</a>
				<a href='/' class='sm:text-base text-sm sm:px-0 px-3'>Privacy Policy  Terms of Service</a>
				<a href='/' class='sm:text-base text-sm '>All Systems Operational</a>
			</div>
		</footer>
	);
}

export default Footer;
