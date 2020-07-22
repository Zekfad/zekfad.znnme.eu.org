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

<style lang="scss">
html,
body {
	@include normalize;
	font-family: 'DejaVu Sans Condensed', 'DejaVu Math TeX Gyre', 'Noto Sans CJK JP', sans-serif, 'MS PGothic';
}

.svg-inline--fa {
	display: inline-block;
}

img.emoji {
	height: 1em;
	width: 1em;
	margin: 0 .05em 0 .1em;
	vertical-align: -0.15em;
}
</style>
