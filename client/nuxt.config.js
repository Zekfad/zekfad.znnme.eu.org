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
		},
		publicPath: '/z-app/',
		extractCSS: true,
		loaders   : {
			scss: {
				implementation: Sass,
				sassOptions   : {
					fiber   : Fiber,
					importer: SassPackageImporter,
				},
			},
		},
	},
	plugins: [ '~/plugins/vue-window-size', ],
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
		scss: [
			'~/assets/scss/mixins/_all.scss',
			'~/assets/scss/constants/_all.scss',
			'~/assets/scss/fonts/_all.scss',
		],
	},
	fontawesome: {
		icons: {
			solid  : [],
			regular: [],
			light  : [],
			duotone: [],
			brands : [],
		},
	},
};
