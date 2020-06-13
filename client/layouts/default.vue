<template>
	<nuxt />
</template>

<script>
export default {
	head() {
		return {
			titleTemplate: this.$t('meta.titleTemplate'),

			htmlAttrs: {
				lang: this.$i18n.locale,
			},
		};
	},
};
</script>

<style lang="scss" scoped>

</style>
