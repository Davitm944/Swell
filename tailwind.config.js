module.exports = {
	content : [ './src/**/*.{html,js}' ],
	theme   : {
		extend  : {
			colors     : {
				primary    : '#180330',
				secondary  : '#550088',
				background : '#e5e5e5',
				card1      : '#FFDDDD',
				card2      : '#FFFADD',
				card3      : '#BFEDE5'
			},
			fontFamily : {
				roboto : "'Roboto', sans-serif"
			}
		},
		screens : {
			xs : '123px',
			sm : '640px',
			md : '768px',
			lg : '1024px',
			xl : '1280px'
		}
	},
	plugins : []
};
