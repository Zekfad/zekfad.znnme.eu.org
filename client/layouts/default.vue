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
$sans-serif: 'DejaVu Sans Condensed', sans-serif;

html,
body {
	@include normalize;
	font-family: $sans-serif;
}

.math {
	font-family: 'DejaVu Math TeX Gyre', $sans-serif;
}

.cjk {
	font-family: $sans-serif, 'Noto Sans CJK JP', 'MS PGothic';
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
