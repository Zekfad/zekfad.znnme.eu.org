<template>
	<div class="error-info">
		<h1 class="error-info__title">
			{{ title }}
		</h1>
		<p class="error-info__description">
			{{ description }}
		</p>
	</div>
</template>

<script>
export default {
	props: {
		title: {
			type   : String,
			default: function () {
				return this.$t('pages.error.errors.unknown.title');
			},
		},
		description: {
			type   : String,
			default: function () {
				return this.$t('pages.error.errors.unknown.description');
			},
		},
	},
};
</script>
