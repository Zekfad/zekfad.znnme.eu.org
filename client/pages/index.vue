<template>
	<HelloWorld />
</template>

<script>
import HelloWorld from '~/components/HelloWorld';


export default {
	components: {
		HelloWorld,
	},
	head() {
		return {
			title: this.$t('pages.home.meta.title'),
			meta : [ { hid: 'description', name: 'description', content: this.$t('pages.home.meta.description'), }, ],
		};
	},
};
</script>
