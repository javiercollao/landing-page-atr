import counter from './assets/js/counter.js'
import { timeLine } from './assets/js/parallax.js'

const counterHTML = document.getElementById("counter")
counter(counterHTML)

gsap.utils.toArray(".parallax").forEach(layer => {
	const depth = layer.dataset.depth;
	const movement = -(layer.offsetHeight * depth)
	timeLine.to(layer, {y: movement, ease: "none"}, 0)
});