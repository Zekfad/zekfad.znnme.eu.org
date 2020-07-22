<template>
	<div class="social-block" @click="click">
		<div class="social-block__icon-container">
			<fa-icon :icon="icon" class="social-block__icon" />
		</div>
		<div class="social-block__text-container">
			<span class="social-block__text">{{ text }}</span>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		icon: { type: Object, default: ()=>({}), },
		text: { type: String, default: '', },
	},
	methods: {
		click() {
			this.$emit('click');
		},
	},
};
</script>

<style lang="scss" scoped>
.social-block {
	$hover: null; &:hover { $hover: &; }

	cursor: pointer;

	position: relative;

	overflow: hidden;

	width: 185px; // 150px;
	height: 75px;

	padding: 1px;

	border: 1px solid $color-gray;
	border-radius: 5px;

	&__icon-container,
	&__text-container {
		@include center(true);

		position: absolute;

		width: 100%;
		height: 100%;

		transition: top 0.25s ease;
	}

	&__icon-container {
		top: 0%;

		@at-root #{$hover} & {
			top: -100%;
		}
	}

	&__text-container {
		top: 100%;

		@at-root #{$hover} & {
			top: 0%;
		}
	}

	&__icon {
		height: 75%;
	}

	&__text {
		font-size: 18px;
	}
}
</style>
