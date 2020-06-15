let { argv, } = process,
	page = argv.length > 2
		? argv[2]
		: 'help';

/**
 * Display data to console.
 * @param  {...any} data Data to be displayed.
 * @returns {boolean} Always true.
 */
function echo(...data) {
	data.forEach(line => {
		console.log('' + line);
	});
	return true;
}

switch (page) {
	case 'dev':
		echo(
			' - = Dev help = - ',
			' - Environmental variables -',
			'NUXT_ENV = dev/production - Nuxt mode',
			'',
			'FRONTEND_HOST = ip/hostname - Nuxt application hostname',
			'FRONTEND_PORT = port        - Nuxt application port'
		);
		break;
	case 'help':
	default:
		echo(
			' - = Help = - ',
			'yarn run help     - this help page',
			'yarn run help:dev - dev help page',
			'',
			'yarn dev      - run development server',
			'yarn generate - generate static build',
			'yarn deploy   - deploy ./client/dist to remote gh-pages branch',
			'',
			'Take a look at dev help page, to learn about environmental variables.'
		);
		break;
}

process.exit(0);
