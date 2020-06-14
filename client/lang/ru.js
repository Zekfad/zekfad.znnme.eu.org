export default {
	meta: {
		titleTemplate: '%s - Ярослав Воробьев',
	},
	pages: {
		error: {
			meta: {
				title      : 'Ошибка',
				description: 'Страница ошибки.',
			},
			errors: {
				404: {
					title      : 'Страница не найдена',
					description: 'Запрашиваемая страница не существует.',
				},
				unknown: {
					title      : 'Произошла ошибка',
					description: 'Скорее всего это проблема на нашей стороне, вы можете сообщить нам об этой ошибке.',
				},
			},
			goBack: 'Вернуться',
		},
		home: {
			meta: {
				title      : 'Главная',
				description: 'Главная страница личного веб сайта Ярослава Воробьева.',
			},
		},
	},
	helloWorld: 'Привет мир!',
};
