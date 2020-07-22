<template>
	<ul class="social-links">
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
</template>

<script>
import {
	faBattleNet,
	faDiscord,
	faGithub,
	faTelegram,
	faVk,
} from '@fortawesome/free-brands-svg-icons';
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
					icon : faBattleNet,
					title: this.$t('socialLinks.battleNet.title'),
					tag  : {
						tag          : this.$t('socialLinks.battleNet.tag'),
						discriminator: this.$t('socialLinks.battleNet.discriminator'),
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
ul, li {
	@include normalize(true);
}

.social-links {
	@include flex(
		$justify-content: center,
		$flex-wrap: wrap
	);

	&__link {
		margin: 5px;
	}
}
</style>
