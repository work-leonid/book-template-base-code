module.exports = {
  content: [
    './src/**/*.{html,md,liquid,erb,serb}',
    './frontend/javascript/**/*.js',
  ],
  theme: {
    extend: {
	  fontFamily: {
		'header': ['IBM Plex Mono', 'monospace'],
		'base': ['IBM Plex Sans', 'sans-serif']
	  },
	  backgroundImage: {
		'topography': "url('/images/bg.png')"
	  }
	},
  },
  plugins: [],
}
