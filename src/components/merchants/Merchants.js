import React from 'react';
import img1 from 'components/images/Rectangle.png';
import img2 from 'components/images/Rectangle (1).png';
import img3 from 'components/images/Rectangle (2).png';
import icon1 from 'components/icons/Vector (4).png';
import icon2 from 'components/icons/Vector (5).png';
import icon3 from 'components/icons/Vector (6).png';
import MerchantCard from 'components/cards/MerchantCard';

function Merchants() {
	return (
    <div>
      <h1 class='text-center text-primary text-[56px] mt-[126px] mb-[81px]'>Merchants on the move</h1>
		<div class=' md:mx-[76px] flex justify-center'>
			<MerchantCard
				layout='flex flex-col bg-card1 w-1/3'
				img={img1}
        img_style='max-w-[357px] max-h-[357px] my-0 mx-auto pb-24'
				icon={icon1}
				text='A modern and elegant website, designed by BCMH'
				author='Soon the Sun'
			/>
			<MerchantCard
				layout='flex flex-col-reverse bg-card2 w-1/3'
				img={img2}
        img_style='max-w-[357px] max-h-[357px] my-0 mx-auto pt-24'

				icon={icon2}
				text='“Swell has been like a spring for Spinn, allowing us to efficiently grow and scale.”'
				author='Roderick de Rode Spinn Coffee'
			/>
			<MerchantCard
				layout='flex flex-col bg-card3 w-1/3 pb-9'
				img={img3}
        img_style='max-w-[357px] max-h-[357px] my-0 mx-auto pb-24'
				icon={icon3}
				text='“Magento is expensive. Shopify is limiting. Moltin isn’t there yet. There are a lot of options but none of them are great.”'
				author='Ryan Bonifacino Great Heights'
			/>
		</div>
    </div>
	);
}

export default Merchants;
