<template>
	<div class="error">
		<ErrorInfo
			v-if="404 === error.statusCode"
			class="error__info error__info--404"
			:title="$t('pages.error.errors.404.title')"
			:description="$t('pages.error.errors.404.description')" />
		<ErrorInfo v-else class="error__info error__info--unknown" />
		<I18nLink :to="pathBack" class="error__go-back-button">
			{{ $t('pages.error.goBack') }}
		</I18nLink>
	</div>
</template>

<script>
import ErrorInfo from '~/components/ErrorInfo';
import I18nLink from '~/components/I18nLink';

export default {
	components: {
		ErrorInfo,
		I18nLink,
	},
	props: {
		error: {
			type   : null,
			default: {},
		},
	},
	head() {
		return {
			title: 404 === this.error.statusCode
				? this.$t('pages.error.errors.404.title')
				: this.$t('pages.error.errors.unknown.title'),
		};
	},
	computed: {
		pathBack() {
			let { $routerHistory, } = this,
				path;

			if (!($routerHistory && $routerHistory.hasPrevious()))
				path = '/';

			return path || $routerHistory.previous().path;
		},
	},
};
</script>

<style lang="scss" scoped>

</style>
