<template>
	<div v-cjk.cached class="social-links">
		<ul class="social-links__list">
			<li v-for="({ icon, title, link, tag }, index) in links"
				:key="index"
				class="social-links__link"
				:title="title">
				<SocialLink v-if="link"
					:icon="icon"
					:url="link.url"
					:text="link.text" />
				<SocialTag v-else-if="tag"
					:icon="icon"
					:tag="tag.tag"
					:discriminator="tag.discriminator" />
			</li>
		</ul>
	</div>
</template>

<script>
import {
	faBattleNet,
	faDiscord,
	faGithub,
	faSteam,
	faTelegram,
	faVk,
} from '@fortawesome/free-brands-svg-icons';
import {
	faEnvelope,
} from '@fortawesome/free-solid-svg-icons';
import SocialLink from './SocialLink';
import SocialTag from './SocialTag';

export default {
	components: {
		SocialLink,
		SocialTag,
	},
	data() {
		return {
			links: [
				{
					icon : faGithub,
					title: this.$t('socialLinks.github.title'),
					link : {
						url : this.$t('socialLinks.github.url'),
						text: this.$t('socialLinks.github.text'),
					},
				},
				{
					icon : faTelegram,
					title: this.$t('socialLinks.telegram.title'),
					link : {
						url : this.$t('socialLinks.telegram.url'),
						text: this.$t('socialLinks.telegram.text'),
					},
				},
				{
					icon : faDiscord,
					title: this.$t('socialLinks.discord.title'),
					tag  : {
						tag          : this.$t('socialLinks.discord.tag'),
						discriminator: this.$t('socialLinks.discord.discriminator'),
					},
				},
				{
					icon : faEnvelope,
					title: this.$t('socialLinks.email.title'),
					link : {
						url : this.$t('socialLinks.email.url'),
						text: this.$t('socialLinks.email.text'),
					},
				},
				{
					icon : faSteam,
					title: this.$t('socialLinks.steam.title'),
					link : {
						url : this.$t('socialLinks.steam.url'),
						text: this.$t('socialLinks.steam.text'),
					},
				},
				{
					icon : faBattleNet,
					title: this.$t('socialLinks.battleNet.title'),
					tag  : {
						tag          : this.$t('socialLinks.battleNet.tag'),
						discriminator: this.$t('socialLinks.battleNet.discriminator'),
					},
				},
				{
					icon : faVk,
					title: this.$t('socialLinks.vk.title'),
					link : {
						url : this.$t('socialLinks.vk.url'),
						text: this.$t('socialLinks.vk.text'),
					},
				},
			],
		};
	},
};
</script>

<style lang="scss" scoped>
.social-links {
	$root: &;

	@include center;

	&__list {
		@include flex(
			$justify-content: center,
			$align-items: center,
			$flex-wrap: wrap,
		);

		max-width: 200px * 4;

		&,
		#{$root}__link {
			@include normalize(true);
		}

		#{$root}__link {
			@include center;
			margin: 5px;
			flex-basis: 20%;
		}
	}
}
</style>
