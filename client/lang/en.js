import socialLinks from './socialLinks';

export default {
	meta: {
		titleTemplate: '%s - Yaroslav Vorobev',
	},
	pages: {
		error: {
			meta: {
				title      : 'Error',
				description: 'Error page.',
			},
			errors: {
				404: {
					title      : 'Page not found',
					description: 'Page you requested doesn\'t exist.',
				},
				unknown: {
					title      : 'An error occurred.',
					description: 'Looks like this is the problem on our side, you can report us about this.',
				},
			},
			goBack: 'Go back',
		},
		home: {
			meta: {
				title      : 'Homepage',
				description: 'Zekfad\'s landing website homepage.',
			},
		},
	},
	tooltips: {
		click: {
			copy: 'Copy',
			open: 'Open',
		},
		copied   : 'Copied',
		copyError: 'Can\'t copy!',
	},
	socialLinks,
};
