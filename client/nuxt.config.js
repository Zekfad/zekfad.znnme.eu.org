import Sass from 'sass';
import Fiber from 'fibers';
import SassPackageImporter from 'node-sass-package-importer';

export default {
	globalName: 'App',
	globals   : {
		id     : 'app',
		nuxt   : '$app',
		context: 'APP',
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
	export: {
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
				'@babel/plugin-proposal-optional-chaining',
				'@babel/plugin-proposal-nullish-coalescing-operator',
			],
		},
		publicPath: '/z-app/',
		extractCSS: !(/^dev.*/).test(process.env.NODE_ENV && process.env.NODE_ENV.toLowerCase()),
		loaders   : {
			scss: {
				implementation: Sass,
				sassOptions   : {
					fiber   : Fiber,
					importer: SassPackageImporter,
				},
			},
		},
		quiet: false,
	},
	plugins: [
		'~/plugins/vue-window-size',
		'~/plugins/vue-clipboard2',
		'~/plugins/v-tooltip.js',
		'~/plugins/v-twemoji.js',
		'~/plugins/v-cjk.js',
	],
	modules: [
		'@nuxtjs/style-resources',
		'nuxt-i18n',
		'vue-scrollto/nuxt',
	],
	buildModules: [ '@nuxtjs/fontawesome', ],

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
