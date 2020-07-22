<template>
	<SocialBlock
		v-tooltip="{ content: $t('tooltips.click.open'), }"
		:icon="icon"
		:text="text"
		@click="openLink" />
</template>

<script>
import SocialBlock from './SocialBlock';

export default {
	components: {
		SocialBlock,
	},
	props: {
		icon: { type: Object, default: ()=>({}), },
		url : { type: String, default: '', },
		text: { type: String, default: '', },
	},
	methods: {
		openLink() {
			let { url, } = this;
			if (url)
				window.open(url, '_blank');
		},
	},
};
</script>
