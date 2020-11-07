<template>
	<button ref="button"
		:class="{
			button: true,
			active: isActive,
		}"
		tabindex="0"
		@click="onClick"
		@keyup="onKeyUp"
		@mouseout="unfocus">
		<div class="button__fx">
			<div class="button__lt-to-rb"></div>
			<div class="button__lb-to-rt"></div>
		</div>
		<div class="button__container">
			<div class="button__content">
				<slot>
					<span>{{ text }}</span>
				</slot>
			</div>
		</div>
	</button>
</template>

<script>
import { ref, } from '@nuxtjs/composition-api';
import debounce from 'lodash/debounce';


export default {
	props: {
		text: {
			type   : String,
			default: '',
		},
	},
	setup() {
		const
			isActive = ref(false),
			button = ref(null);

		return {
			isActive,
			button,
		};
	},
	data() {
		const fxAnimationTime = 0.28 * 1000;

		return {
			onClick: debounce(this._onClick, fxAnimationTime, {
				leading : true,
				trailing: false,
				maxWait : fxAnimationTime,
			}),
			onAnimationDone: debounce(this._onAnimationDone, fxAnimationTime),
		};
	},
	methods: {
		_onClick() {
			this.isActive = true;
			console.log('test');
			this.onAnimationDone();
		},
		_onAnimationDone() {
			this.isActive = false;
			console.log('done');
		},
		onKeyUp(event) {
			if (event.keyCode === 13) {
				event.preventDefault();
				this.onClick();
			}
		},
		unfocus() {
			this.button?.blur?.();
		},
	},
};
</script>

<style lang="scss" scoped>
.button {
	$button: &;
	$hover: null; &:hover { $hover: &; }
	// $active: null; &:active { $active: &; }
	$active: null; &.active { $active: &; }
	$focus: null; &:focus { $focus: &; }
	// $active: null; @at-root #{$focus} { $active: &; }
	$height: 80px;
	$width: 260px;
	$fx-animation-time: 0.28s; // WARNING: Remember to sync with JS.
	$click-animation-time: 1.1s;
	position: relative;
	@include normalize;
	background: none;
	font: unset;
	color: unset;
	border: none;
	cursor: pointer;
	// max-height: $height;
	// max-width: $width;

	&,
	&__container,
	&__fx {
		height: $height; // 100%;
		width: $width; // 100%;
		box-sizing: border-box;
	}

	&__fx {
		// $fx-animation-time: 0.28s; // 0.28s
		$x: 52; // 52
		$y: 20; // 20
		$angle: convert-angle(atan($y/$x), deg); // 21deg
		$length: #{sqrt(pow($x,2) + pow($y,2))}px; // 55.7
		$x: #{$x}px;
		$y: #{$y}px;
		position: relative;


		&:after {
			content: '';
			position: absolute;
			display: flex;
			align-self: center;
			width: 0;
			left: 0;
			opacity: 0;
			height: 100%;
			background-color: $color-light;

			#{$active} & {
				animation: button__click $fx-animation-time;
			}

			@keyframes button__click {
				0% {
					width: 0;
					left: 50%;
					opacity: 0;
				}
				25% {
					width: 25%;
					left: 37.5%;
					opacity: 1;
				}
				50% {
					opacity: 1;
				}
				90% {
					width: 100%;
					left: 0;
				}
				100% {
					width: 100%;
					opacity: 0;
				}
			}
		}

		#{$button}__lt-to-rb:before,
		#{$button}__lt-to-rb:after,
		#{$button}__lb-to-rt:before,
		#{$button}__lb-to-rt:after {
			content: '';
			position: absolute;
			height: 1px;
			background-color: $color-primary-accent-light;
			opacity: 0;
		}

		// Left top to right bottom
		#{$button}__lt-to-rb {
			&:before {
				// left: -$x;
				// top: -$y;
				width: 0;
				transform-origin: 0% 0%;
				transform: rotate($angle);

				#{$active} & {
					animation: button__lt $fx-animation-time;
				}

				@keyframes button__lt {
					0% {
						left: $x;
						top: $y;
						width: 0;
						opacity: 0;
					}
					25% {
						opacity: 1;
					}
					50% {
						left: -$x;
						top: -$y;
						width: $length;
					}
					90% {
						left: -$x;
						top: -$y;
						width: 4px;
						opacity: 1;
					}
					100% {
						width: 0;
						opacity: 0;
					}
				}
			}

			&:after{
				// right: -$x;
				// bottom: -$y;
				width: $length;
				transform-origin: 100% 100%;
				transform: rotate($angle);

				#{$active} & {
					animation: button__rb $fx-animation-time;
				}

				@keyframes button__rb {
					0% {
						right: $x;
						bottom: $y;
						width: 0;
						opacity: 0;
					}
					25% {
						opacity: 1;
					}
					50% {
						right: -$x;
						bottom: -$y;
						width: $length;
					}
					90% {
						right: -$x;
						bottom: -$y;
						width: 4px;
						opacity: 1;
					}
					100% {
						width: 0;
						opacity: 0;
					}
				}
			}
		}

		// Left bottom to right top
		#{$button}__lb-to-rt {
			&:before {
				// left: -$x;
				// bottom: -$y;
				width: 0;
				transform-origin: 0% 0%;
				transform: rotate(-$angle);

				#{$active} & {
					animation: button__lb $fx-animation-time;
				}

				@keyframes button__lb {
					0% {
						left: $x;
						bottom: $y;
						width: 0;
						opacity: 0;
					}
					25% {
						opacity: 1;
					}
					50% {
						left: -$x;
						bottom: -$y;
						width: $length;
					}
					90% {
						left: -$x;
						bottom: -$y;
						width: 4px;
						opacity: 1;
					}
					100% {
						width: 0;
						opacity: 0;
					}
				}
			}

			&:after{
				// right: -$x;
				// top: -$y;
				width: $length;
				transform-origin: 100% 100%;
				transform: rotate(-$angle);

				#{$active} & {
					animation: button__rt $fx-animation-time;
				}

				@keyframes button__rt {
					0% {
						right: $x;
						top: $y;
						width: 0;
						opacity: 0;
					}
					25% {
						opacity: 1;
					}
					50% {
						right: -$x;
						top: -$y;
						width: $length;
					}
					90% {
						right: -$x;
						top: -$y;
						width: 4px;
						opacity: 1;
					}
					100% {
						width: 0;
						opacity: 0;
					}
				}
			}
		}
	}

	&__container {
		position: absolute;
		display: flex;
		align-items: center;
		justify-content: center;
		top: 0;
		border: solid 1px $color-primary-accent;
		background-color: $color-secondary-accent;
		transition: border-color 0.25s, background-color 0.25s;

		#{$hover} &,
		#{$active} &,
		#{$focus} & {
			background-color: $color-secondary-accent-light;
			border-color: $color-primary-accent-light;
		}

		&:before {
			content: '';
			position: absolute;
			height: 100%;
			width: 100%;
			opacity: 0;
			padding: 2px;
			box-shadow: 0 0 0.5px 0px $color-primary-accent-light, inset 0 0 3px 0px $color-primary-accent-light;

			#{$hover} & {
				animation: button__outline $click-animation-time infinite;
			}

			@keyframes button__outline {
				0% {
					opacity: 0;
					padding: 1px;
				}
				30% {
					opacity: 1;
				}
				60%, 100% {
					opacity: 0;
					padding: 5.5px;
				}
			}
		}
	}

	&__content {
		color: $color-text-accent;
	}
}
</style>
