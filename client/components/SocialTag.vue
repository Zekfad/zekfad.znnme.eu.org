<template>
	<SocialBlock
		v-tooltip="{
			content: tooltipText,
			hideOnTargetClick: false,
			trigger: 'manual',
			show: isTooltipShown,
			classes: tooltipClass,
		}"
		:icon="icon"
		:text="tag + '#' + discriminator"
		@click="copyTag"
		@mouseenter.native="mouseEnter"
		@mouseleave.native="mouseLeave" />
</template>

<script>
import SocialBlock from './SocialBlock';

export default {
	components: {
		SocialBlock,
	},
	props: {
		icon: { type: Object, default: ()=>({}), },

		tag          : { type: String, default: '', },
		discriminator: { type: String, default: '', },
	},
	data() {
		let normalTooltip = this.$t('tooltips.click.copy');

		return {
			normalTooltip,
			tooltipText: normalTooltip,

			timeout: {
				restoreTooltip: null,
				hideTooltip   : null,
			},

			isTooltipShown: false,
			tooltipClass  : null,
		};
	},
	computed: {
		fullTag() {
			let { tag, discriminator, } = this;
			return tag && discriminator
				? `${tag}#${discriminator}`
				: null;
		},
	},
	methods: {
		async copyTag() {
			let { fullTag, } = this;
			if (fullTag) {
				try {
					await this.$copyText(fullTag);
					this.tooltipText = this.$t('tooltips.copied');
					this.tooltipClass = 'green';
				} catch (error) {
					this.tooltipText = this.$t('tooltips.copyError');
					this.tooltipClass = 'red';
				}
				this.delayHideTooltip(1000);
			}
		},
		delayHideTooltip(ms) {
			let { timeout, } = this;
			if (timeout.hideTooltip)
				clearTimeout(timeout.hideTooltip);
			if (timeout.restoreTooltip)
				clearTimeout(timeout.restoreTooltip);
			if (ms >= 0) {
				timeout.hideTooltip = setTimeout(
					this.hideTooltip,
					ms < 150
						? 0
						: ms - 150
				);
				timeout.restoreTooltip = setTimeout(this.restoreTooltipText, ms);
			}
		},
		restoreTooltipText() {
			this.tooltipText = this.normalTooltip;
			this.timeout.restoreTooltip = null;
			this.tooltipClass = null;
		},
		hideTooltip() {
			this.isTooltipShown = false;
			this.timeout.hideTooltip = null;
		},
		mouseEnter() {
			this.delayHideTooltip(-1);
			this.restoreTooltipText();
			this.isTooltipShown = true;
		},
		mouseLeave() {
			this.delayHideTooltip(150);
			this.isTooltipShown = false;
		},
	},
};
</script>
