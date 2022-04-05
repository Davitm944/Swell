import { useEffect, useState } from 'react';
import Header from 'components/header/Header';
import Intro from 'components/intro/Intro';
import Card from 'components/cards/Card';
import './App.css';
import card1 from 'components/images/image 1.png';
import card2 from 'components/images/image 3.png';
import Features from 'components/features/Features';
import Compare from 'components/compare/Compare';
import Merchants from 'components/merchants/Merchants';
import Footer from 'components/footer/Footer';
import axios from 'axios';

function App() {
	const [ data, setData ] = useState('');
	const query = `query {
		swellMainCollection {
			items {
				card1Title
				card1Content
				card1Link
        card1Image {
          url
        }
        card2Image {
          url
        }
				card2Title
				card2Content
				card2Link
        features
			}
		}
	}`;

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
		// await axios({
		// 	url     : 'https://graphql.contentful.com/content/v1/spaces/anb2pwuq5256',
		// 	method  : 'POST',
		// 	headers : {
		// 		'Content-Type' : 'application/json',
		// 		Accept         : 'application.json',
		// 		Authorization  : 'Bearer J2ywOLo6As_Hp5PM4qbbB-wLR2tAiwCeT4pp39E0vdY'
		// 	},
		// 	data: {
		// 		query: query
		// 	}
		// }).then(response => setData(response.data.data.swellMainCollection.items[0]));
	}

	useEffect(() => {
		fetchData();
	}, []);

	if (data) {
		return (
			<div class='bg-gradient-to-b from-background to-white '>
				<Header />
				<Intro />
				<div id='whySwell'>
					<Card
						img={data.card1Image.url}
						title={data.card1Title}
						text={data.card1Content}
						link={data.card1Link}
						layout='flex justify-evenly mb-36 mt-12 md: flex-wrap'
						img_layout='w-full h-auto mix-blend-darken'
					/>
					<Card
						img={data.card2Image.url}
						title={data.card2Title}
						text={data.card2Content}
						link={data.card2Link}
						layout='flex flex-row-reverse justify-evenly md: flex-wrap'
						img_layout='w-full h-auto mix-blend-darken relative bottom-8'
					/>
				</div>
				<Features features={data.features} />
				<Compare />
				<Merchants/>
				<Footer />
			</div>
		);
	} else {
		return <></>;
	}
}

export default App;
