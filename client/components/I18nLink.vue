<template>
	<nuxt-link :to="localePath(to)" v-bind="attrs">
		<slot></slot>
	</nuxt-link>
</template>

<script>
export default {
	props: {
		to: {
			type   : String,
			default: '/',
		},
	},
	setup(props, { attrs, }) {
		delete attrs.to;

		return {
			attrs,
		};
	},
};
</script>
