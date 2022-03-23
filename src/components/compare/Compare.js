import React from 'react';
import check from 'components/icons/check2.png'
import icon1 from 'components/icons/icon1.png'
import icon2 from 'components/icons/icon2.png'
import icon3 from 'components/icons/icon3.png'
import icon4 from 'components/icons/icon4.png'


function Compare() {
	return (
		<div class='bg-gradient-to-b from-purple-300 to-white rounded mx-[76px] pt-[55px]'>
			<h1 class='text-4xl max-w-[555px] text-center mt-[55px] mb-[70px] mx-auto font-semibold'>How does Swell compare to other enterprise platforms?</h1>

      <div class='mx-auto my-0 '>
          <table class='my-0 mx-auto'>
            <tr>
              <th class='p-2'></th>
              <th class='pl-2'><img src={icon1} alt='icon'/></th>
              <th class='pl-2'><img src={icon2} alt='icon'/></th>
              <th class='pl-2'><img src={icon3} alt='icon'/></th>
              <th class='pl-2'><img src={icon4} alt='icon'/></th>
            </tr>
            <tr>
              <th>API access to everything</th>
              <th><img src={check} alt='icon'/></th>
              <th>—</th>
              <th>—</th>
              <th>—</th>
            </tr>
            <tr>
              <th>Headless storefront themes</th>
              <th><img src={check} alt='icon'/></th>
              <th>—</th>
              <th>—</th>
              <th>—</th>
            </tr>
            <tr>
              <th>Unlimited product attributes and options</th>
              <th><img src={check} alt='icon'/></th>
              <th>—</th>
              <th>—</th>
              <th><img src={check} alt='icon'/></th>
            </tr>
            <tr>
              <th>Native subscriptions</th>
              <th><img src={check} alt='icon'/></th>
              <th>—</th>
              <th>—</th>
              <th>—</th>
            </tr>
            <tr>
              <th>Transaction fees on external payment gateways</th>
              <th>0%</th>
              <th>2%</th>
              <th>0%</th>
              <th>0%</th>
            </tr>
            <div class='pl-[30px]'>
            <p class='text-primary'>Last reviewed Oct 2020. <a href='/' class='text-secondary'>Report an error</a></p>
          </div>
          </table>
    <div class='text-center mt-14'>
      <a href='/' class='link'>Compare all features</a>
    </div>
      </div>

		</div>
	);
}

export default Compare;
