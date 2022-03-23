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

function App() {
	return (
		<div class='bg-gradient-to-b from-background to-white '>
			<Header />
			<Intro />
			<div id='whySwell'>
			<Card
				img={card1}
				title='Made for growth'
				text='Until now, brands looking to stand out have been using a patchwork of apps for legacy platforms or building from scratch. Swell enables you to create sophisticated solutions faster, without having to think about infrastructure or maintenance.'
				link='Read the case studies'
				layout='flex justify-evenly mb-36 mt-12 md: flex-wrap'
				img_layout='w-full h-auto mix-blend-darken'
			/>
			<Card
				img={card2}
				title='Commerce without compromise'
				text='Free your storefront from your backend. With headless themes and extensive options for modelling products, you can offer unique customer experiences anywhere.'
				link='Tell me more'
				layout='flex flex-row-reverse justify-evenly md: flex-wrap'
				img_layout='w-full h-auto mix-blend-darken relative bottom-8'
			/>
			</div>
			<Features/>
			<Compare/>
			<Merchants/>
			<Footer/>
		</div>
	);
}


export default App;
