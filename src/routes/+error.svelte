<script>
	import { page } from '$app/stores';
	const funError404en = [
		"Oops! Looks like you've ventured into the digital Bermuda Triangle. Our page seems to be vacationing there too!",
		"Page not found. It's as if a unicorn ate this page for breakfast!",
		"The page vanished quicker than ice cream on a hot summer day. Maybe it's off cooling down somewhere?",
		"WHOOPSIE-DAISY! This page seems to have done a disappearing act. Must be practicing for a magic show!",
		"Looks like you've discovered a black hole in the internet universe. Our page took an unexpected vacation there!",
		"Oh no! The page you're looking for is playing hide and seek. It's clearly a hide-and-seek champion.",
		"Someone must have put this page on a coffee break. We're searching for it with a magnifying glass and a cup of espresso.",
		"Looks like the page decided to take a spontaneous sabbatical. It's currently on a beach somewhere, sipping digital piña coladas.",
		"Our hamster fell off the wheel and took the page with it. We're teaching it acrobatics before it brings the page back.",
		"Ever seen a digital page wearing camouflage? Neither have we! That's why it's hiding in plain sight, also known as 404-land.",
		"The page took a wrong turn at the digital crossroads. We've sent a GPS signal, but it's probably busy taking selfies.",
		"This page is on a temporary vacation, sipping virtual lemonade and soaking up some pixelated sun. It'll be back soon!",
	];

	let funSelect = funError404en[Math.floor(Math.random() * funError404en.length)]
</script>

<object type="image/svg+xml" data="https://cdn.svgator.com/images/2022/01/404-svg-animation.svg" alt="Kitty Yarn Play 404 SVG animation example" class="w-full h-full"></object>

<!--div class="space-y-8 text-center p-8 m-8 z-20 relative">
	<h1 class="text-Flamingo text-5xl">{$page.status} {$page.error.message}</h1>
	<p class="text-2xl text-Pink">{funSelect}</p>
</div-->
