import React, { useState, useEffect } from 'react';
import img1 from 'components/images/Rectangle.png'; 
import img2 from 'components/images/Rectangle (1).png';
import img3 from 'components/images/Rectangle (2).png';
import icon1 from 'components/icons/Vector (4).png';
import icon2 from 'components/icons/Vector (5).png';
import icon3 from 'components/icons/Vector (6).png';
import MerchantCard from 'components/cards/MerchantCard';

function Merchants() {
	const [data, setData] = useState('')
	const query = `query {
		swellMainCollection {
			items {
        merchantCard1Image{
          url
        }
        merchantCard2Image {
          url
        }
        merchantCard3Image{
          url
        }
        merchantCard1Author
        merchantCard2Author
        merchantCard3Author
        merchantCard1Content
        merchantCard2Content
        merchantCard3Content
			}
		}
	}`

	async function fetchData() {
		await fetch('https://graphql.contentful.com/content/v1/spaces/anb2pwuq5256', {
			method  : 'POST',
			headers : {
				'Content-Type' : 'application/json',
				Accept         : 'application.json',
				Authorization  : 'Bearer J2ywOLo6As_Hp5PM4qbbB-wLR2tAiwCeT4pp39E0vdY'
			},
			body    : JSON.stringify({ query })
		})
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				setData(data.data.swellMainCollection.items[0]);
			});

		}

		useEffect(() => {
			fetchData();
		}, []);


	if(data){
	return (
    <div>
      <h1 class='text-center text-primary md:text-[56px] mt-[126px] mb-[81px] sm:text-2xl'>Merchants on the move</h1>
		<div class=' md:mx-[76px] flex justify-center'>
			<MerchantCard
				layout='flex flex-col bg-card1 w-1/3'
				img={data.merchantCard1Image.url}
        img_style='max-w-[357px] max-h-[357px] my-0 mx-auto pb-24'
				icon={icon1}
				text={data.merchantCard1Content}
				author={data.merchantCard1Author}
			/>
			<MerchantCard
				layout='flex flex-col-reverse bg-card2 w-1/3'
				img={data.merchantCard2Image.url}
        img_style='max-w-[357px] max-h-[357px] my-0 mx-auto pt-24'
				icon={icon2}
				text={data.merchantCard2Content}
				author={data.merchantCard2Author}
			/>
			<MerchantCard
				layout='flex flex-col bg-card3 w-1/3 pb-9'
				img={data.merchantCard3Image.url}
        img_style='max-w-[357px] max-h-[357px] my-0 mx-auto pb-24'
				icon={icon3}
				text={data.merchantCard3Content}
				author={data.merchantCard3Author}
			/>
		</div>
    </div>
	);} else {
		return <></>
	}
}

export default Merchants;
