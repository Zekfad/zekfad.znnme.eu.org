import twemoji from 'twemoji';
import Vue from 'vue';


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
