/**
 * This is the quick help file.
 * Web app source is located at `/client/`.
 */

let { argv, } = process,
	page = argv.length > 2
		? argv[2]
		: 'all';

function getHelpPage(page) {
	switch (page) {
		case 'vars':
			return `
- = Environmental variables help = -
NUXT_ENV = dev/production - Nuxt application mode.

FRONTEND_HOST = ip/hostname - Nuxt application hostname.
FRONTEND_PORT = port        - Nuxt application port.
`.trim();
		case 'commands':
			return `
- = Commands help = - ',
yarn run help      - get all help pages.
yarn help:commands - get commands help page.
yarn help:vars     - get environmental variables help page.

yarn lint     - run eslint for project files.

yarn dev      - run development server with hot reload.
yarn build    - create static build for static generation.
yarn generate - generate static files for deployment.
yarn start    - serve generated static build.

yarn analyze  - create analyze build.
yarn deploy   - deploy ./client/dist to remote gh-pages branch.
`.trim();
		case 'all':
		default:
			return `
${getHelpPage('commands')}

${getHelpPage('vars')}
`.trim();
	}
}

console.log(getHelpPage(page));

process.exit(0);
