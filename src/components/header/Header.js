import React from 'react';
import logo from 'components/icons/Vector (14).png';

function Header() {
	return (
		<header >
			<div class='flex justify-evenly  align-middle flex-wrap'> 
        <div class='mt-4'>
          <img src={logo} alt="logo" />
        </div>

        <nav class='font-roboto pt-5 '>
          <a href='/' class='nav_link'>Why Swell?</a>
          <a href='/' class='nav_link'>Features</a>
          <a href='/' class='nav_link'>Pricing</a>
          <a href='/'>Resources</a>
        </nav>

        <div class='font-roboto pt-5'>
          <a href='/' class='leading-7 text-primary'>Start free trial</a>
          <a href='/' class='ml-10  px-5 py-2 leading-7 text-primary border-2 border-solid border-purple-900 rounded'>Log in</a>
        </div>
			</div>
		</header>
	);
}

export default Header;
