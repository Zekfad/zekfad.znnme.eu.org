import Vue from 'vue';
import twemoji from 'twemoji';

function applyTwemojiOnElement(element) {
	return element.innerHTML = twemoji.parse(element.innerHTML);
}

Vue.directive('twemoji', {
	inserted(element) {
		applyTwemojiOnElement(element);
	},
	componentUpdated(element) {
		applyTwemojiOnElement(element);
	},
});
