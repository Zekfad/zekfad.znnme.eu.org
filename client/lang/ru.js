import socialLinks from './socialLinks';
import { cloneDeep, merge, } from 'lodash';

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
	tooltips: {
		click: {
			copy: 'Скопировать',
			open: 'Открыть',
		},
		copied   : 'Скопировано!',
		copyError: 'Ошибка при копировании!',
	},
	socialLinks: merge(cloneDeep(socialLinks), {
		battleNet: {
			title: 'Личный аккаунт Battle.net',
		},
		discord: {
			title: 'Личный аккаунт Discord',
		},
		github: {
			title: 'Личный аккаунт GitHub',
		},
		telegram: {
			title: 'Личный аккаунт Telegram',
		},
		vk: {
			title: 'Личный аккаунт ВКонтакте',
			text : 'ВКонтакте',
		},
	}),
};
