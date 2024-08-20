tailwind.config = {
	theme: {
	  extend: {
		colors: {
		  'overlay': 'rgb(0 0 0 / 62%)',
		},
        maxWidth: {
            'container': '1320px',
        },
        fontFamily: {
            'fontfamily': ['Inter'],
        },
        backgroundImage: {
            'bannerimage': "url('./images/banner.jpg')",
        },
        fontSize: {
            'bannertext': '75px',
        },
        lineHeight: {
            'lineheight': '85px',
          }
	  }
	}
  }