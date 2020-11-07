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
$sans-serif: Helvetica, 'DejaVu Sans Condensed', sans-serif;

html,
body {
	@include normalize;
	font-family: $sans-serif;
	background-color: $color-dark;
	color: $color-text-accent;
}

:focus {
	outline: unset;
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

a {
	color: $color-link;

	&:hover {
		color: $color-link-light;
	}
}

</style>
