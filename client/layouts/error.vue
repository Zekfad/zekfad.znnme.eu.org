<template>
	<div class="error">
		<h1 class="error__title">
			{{ 404 === error.statusCode
				? $t('pages.error.errors.404.title')
				: $t('pages.error.errors.unknown.title') }}
		</h1>
		<p class="error__description">
			{{ 404 === error.statusCode
				? $t('pages.error.errors.404.description')
				: $t('pages.error.errors.unknown.description') }}
		</p>
		<I18nLink :to="pathBack" class="error__go-back-button">
			{{ $t('pages.error.goBack') }}
		</I18nLink>
	</div>
</template>

<script>
import I18nLink from '~/components/I18nLink';

export default {
	components: {
		I18nLink,
	},
	props: {
		error: {
			type   : null,
			default: {},
		},
	},
	computed: {
		pathBack() {
			let { $routerHistory, } = this,
				path;

			if (!$routerHistory || !$routerHistory.hasPrevious())
				path = '/';

			return path || $routerHistory.previous().path;
		},
	},
	head() {
		return {
			title: 404 === this.error.statusCode
				? this.$t('pages.error.errors.404.title')
				: this.$t('pages.error.errors.unknown.title'),
		};
	},
};
</script>

<style lang="scss" scoped>

</style>
