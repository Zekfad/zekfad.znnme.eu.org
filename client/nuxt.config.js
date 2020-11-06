import Sass from 'sass';


const capitalize = name => {
	name = name.toLowerCase().split('');
	name[0] = name[0].toUpperCase();
	return name.join('');
};

export default async () => {
	let Fiber = void 0;
	try {
		Fiber = await import('fibers');
	} catch (error) {
		Fiber = void 0;
	}

	return {
		globalName: 'App',
		globals   : {
			id            : globalName => `${globalName.toLowerCase()}`,
			nuxt          : globalName => `$${globalName.toLowerCase()}`,
			context       : globalName => `${globalName.toUpperCase()}`,
			pluginPrefix  : globalName => globalName,
			readyCallback : globalName => `on${capitalize(globalName)}Ready`,
			loadedCallback: globalName => `on${capitalize(globalName)}Loaded`,
		},
		router: {
			linkActiveClass     : 'link__active',
			linkExactActiveClass: 'link__active-exact',
			linkPrefetchedClass : 'link__prefetched',
		},
		loading         : false,
		loadingIndicator: false,

		head: {
			titleTemplate: '%s - Yaroslav Vorobev',

			meta: [
				{ charset: 'utf-8', },
				{ name: 'viewport', content: 'width=device-width, initial-scale=1', },
				{ hid: 'description', name: 'description', content: 'Zekfad\'s landing website.', },
			],
			htmlAttrs: {
				lang: 'en',
			},
		},
		server: {
			port: process.env.FRONTEND_PORT || 3000,
			host: process.env.FRONTEND_HOST || '0.0.0.0',
		},
		generate: {
			fallback: '404.html',
			dir     : 'dist',
		},
		target  : 'static',
		srcDir  : '',
		buildDir: '../dist',
		modern  : 'client',
		build   : {
			extend(config, ctx) {
				if (ctx.isDev) {
					config.devtool = ctx.isClient
						? 'source-map'
						: 'inline-source-map';
				}
				config.output.jsonpFunction = 'jsonp';
			},
			babel: {
				presets({ envName, }) {
					const envTargets = {
						client: { browsers: [ '>0.25%, not dead', ], },
						server: { node: 'current', },
						modern: { browsers: [ '>0.25%, not ie 11, not op_mini all, not dead', ], },
					};
					return [
						[
							'@nuxt/babel-preset-app',
							{
								targets : envTargets[envName],
								corejs  : { version: 3, },
								bugfixes: true,
							},
						],
					];
				},
				plugins: [
					'@babel/plugin-proposal-class-properties',
					'@babel/plugin-proposal-nullish-coalescing-operator',
					'@babel/plugin-proposal-optional-chaining',
				],
			},
			publicPath: '/z-app/',
			extractCSS: !(/^dev.*/).test(process.env.NODE_ENV && process.env.NODE_ENV.toLowerCase()),
			loaders   : {
				scss: {
					implementation: Sass,
					sassOptions   : {
						...typeof Fiber === 'undefined'
							? { fiber: Fiber, }
							: {},
					},
				},
			},
			quiet: false,
		},
		plugins: [
			'~/plugins/vue-window-size',
			'~/plugins/vue-clipboard2',
			'~/plugins/v-twemoji',
			'~/plugins/v-cjk',
		],
		modules: [
			'@nuxtjs/style-resources',
			'nuxt-i18n',
			'vue-scrollto/nuxt',
		],
		buildModules: [
			'@nuxtjs/composition-api',
			'@nuxtjs/fontawesome',
		],
		i18n: {
			defaultLocale: 'en',
			vueI18n      : { fallbackLocale: 'en', },
			vueI18nLoader: true,
			lazy         : true,
			langDir      : 'lang/',
			locales      : [
				{
					code: 'en',
					iso : 'en-US',
					file: 'en.js',
				},
				{
					code: 'ru',
					iso : 'ru-RU',
					file: 'ru.js',
				},
			],
		},
		styleResources: {
			scss: [ '~/assets/scss/imports/_all.scss', ],
		},
		fontawesome: {
			component: 'Fa',
			suffix   : true,

			addCss: false,

			useLayers    : false,
			useLayersText: false,

			icons: {
				solid  : [],
				regular: [],
				light  : [],
				duotone: [],
				brands : [],
			},
		},
	};
};