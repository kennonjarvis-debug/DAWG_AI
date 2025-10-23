<script lang="ts">
/**
 * DAWG AI - Marketing Landing Page
 * Full marketing site with hero, features, pricing, and CTA sections
 */

import { goto } from '$app/navigation';

function handleGetStarted() {
	goto('/daw');
}

function handleLogin() {
	goto('/daw');
}

function handleDemo() {
	goto('/daw');
}
</script>

<svelte:head>
	<title>DAWG AI - Create Music Like a Professional Producer</title>
	<meta name="description" content="AI-powered music production. Comp, pitch correct, mix, and master your tracks with AI in seconds." />
</svelte:head>

<!-- Navigation -->
<nav class="fixed top-0 left-0 right-0 z-50 glass border-b border-white/10">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="flex items-center justify-between h-16">
			<div class="flex items-center gap-2">
				<div class="text-2xl font-bold bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent">
					DAWG AI
				</div>
			</div>
			<div class="flex items-center gap-6">
				<a href="#features" class="text-white/70 hover:text-white transition">Features</a>
				<a href="#pricing" class="text-white/70 hover:text-white transition">Pricing</a>
				<button on:click={handleLogin} class="text-white/70 hover:text-white transition">Login</button>
				<button on:click={handleGetStarted} class="bg-accent-primary hover:bg-accent-primary/90 text-white px-6 py-2 rounded-lg transition">
					Get Started
				</button>
			</div>
		</div>
	</div>
</nav>

<!-- Hero Section -->
<section class="min-h-screen flex items-center justify-center pt-16 px-4">
	<div class="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
		<div>
			<div class="inline-flex items-center gap-2 glass-purple px-4 py-2 rounded-full mb-6">
				<div class="w-2 h-2 rounded-full bg-accent-primary animate-pulse"></div>
				<span class="text-sm">AI-Powered Music Production</span>
			</div>

			<h1 class="text-5xl md:text-6xl font-bold mb-6">
				Create Music Like a <span class="bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent">Professional Producer</span>
			</h1>

			<p class="text-xl text-white/70 mb-8">
				DAWG AI brings studio-quality production to everyone. Comp, pitch correct, mix, and master your tracks with AI in seconds.
			</p>

			<div class="flex flex-wrap gap-4 mb-8">
				<button on:click={handleDemo} class="bg-accent-primary hover:bg-accent-primary/90 text-white px-8 py-4 rounded-lg flex items-center gap-2 transition">
					Try Free Demo
					<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
					</svg>
				</button>
				<button on:click={() => document.querySelector('#pricing')?.scrollIntoView({behavior: 'smooth'})} class="glass hover:glass-strong px-8 py-4 rounded-lg transition">
					View Pricing
				</button>
			</div>

			<div class="flex flex-wrap gap-6 text-sm text-white/60">
				<div class="flex items-center gap-2">
					<svg class="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
					</svg>
					No credit card required
				</div>
				<div class="flex items-center gap-2">
					<svg class="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
					</svg>
					Free forever plan
				</div>
				<div class="flex items-center gap-2">
					<svg class="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
					</svg>
					Cancel anytime
				</div>
			</div>
		</div>

		<div class="glass rounded-2xl p-8 aspect-video flex items-center justify-center">
			<div class="text-center">
				<div class="text-6xl mb-4">🎵</div>
				<p class="text-white/60">LIVE DEMO</p>
			</div>
		</div>
	</div>
</section>

<!-- Features Section -->
<section id="features" class="py-24 px-4">
	<div class="max-w-7xl mx-auto">
		<div class="text-center mb-16">
			<div class="inline-flex items-center gap-2 glass-purple px-4 py-2 rounded-full mb-4">
				<div class="w-2 h-2 rounded-full bg-accent-primary"></div>
				<span class="text-sm">Powered by AI</span>
			</div>
			<h2 class="text-4xl font-bold mb-4">Studio-Quality Tools</h2>
			<p class="text-xl text-white/70">Everything you need to produce professional music, powered by cutting-edge AI</p>
		</div>

		<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
			<div class="glass hover:glass-strong rounded-2xl p-8 transition">
				<div class="w-16 h-16 rounded-xl bg-accent-primary/20 flex items-center justify-center mb-6">
					<span class="text-3xl">🎤</span>
				</div>
				<h3 class="text-2xl font-bold mb-3">Auto-Comp</h3>
				<p class="text-white/60">AI analyzes multiple vocal takes and creates the perfect comp automatically</p>
			</div>

			<div class="glass hover:glass-strong rounded-2xl p-8 transition">
				<div class="w-16 h-16 rounded-xl bg-accent-primary/20 flex items-center justify-center mb-6">
					<span class="text-3xl">🎹</span>
				</div>
				<h3 class="text-2xl font-bold mb-3">Auto-Pitch</h3>
				<p class="text-white/60">AI delivers natural-sounding pitch correction that preserves emotion and feel</p>
			</div>

			<div class="glass hover:glass-strong rounded-2xl p-8 transition">
				<div class="w-16 h-16 rounded-xl bg-accent-primary/20 flex items-center justify-center mb-6">
					<span class="text-3xl">⏱️</span>
				</div>
				<h3 class="text-2xl font-bold mb-3">Auto-Align</h3>
				<p class="text-white/60">AI performs perfect timing alignment while preserving natural groove and feel</p>
			</div>

			<div class="glass hover:glass-strong rounded-2xl p-8 transition">
				<div class="w-16 h-16 rounded-xl bg-accent-primary/20 flex items-center justify-center mb-6">
					<span class="text-3xl">🎚️</span>
				</div>
				<h3 class="text-2xl font-bold mb-3">Auto-Mix</h3>
				<p class="text-white/60">AI provides professional mixing with genre-aware balancing and effects</p>
			</div>

			<div class="glass hover:glass-strong rounded-2xl p-8 transition">
				<div class="w-16 h-16 rounded-xl bg-accent-primary/20 flex items-center justify-center mb-6">
					<span class="text-3xl">🎧</span>
				</div>
				<h3 class="text-2xl font-bold mb-3">Auto-Master</h3>
				<p class="text-white/60">AI delivers radio-ready mastering with loudness and clarity</p>
			</div>

			<div class="glass hover:glass-strong rounded-2xl p-8 transition">
				<div class="w-16 h-16 rounded-xl bg-accent-primary/20 flex items-center justify-center mb-6">
					<span class="text-3xl">🎼</span>
				</div>
				<h3 class="text-2xl font-bold mb-3">AI Music Gen</h3>
				<p class="text-white/60">AI generates chords, melodies, and full arrangements</p>
			</div>
		</div>
	</div>
</section>

<!-- Pricing Section -->
<section id="pricing" class="py-24 px-4">
	<div class="max-w-7xl mx-auto">
		<div class="text-center mb-16">
			<h2 class="text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
			<p class="text-xl text-white/70">Choose the perfect plan for your music production needs</p>
		</div>

		<div class="grid md:grid-cols-3 gap-8">
			<!-- Free Plan -->
			<div class="glass rounded-2xl p-8">
				<h3 class="text-2xl font-bold mb-2">FREE</h3>
				<p class="text-white/60 mb-6">Perfect for getting started</p>
				<div class="mb-6">
					<span class="text-5xl font-bold">$0</span>
					<span class="text-white/60">/forever</span>
				</div>
				<ul class="space-y-4 mb-8">
					<li class="flex items-center gap-3">
						<svg class="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
						</svg>
						<span>Auto-Align AI feature</span>
					</li>
					<li class="flex items-center gap-3">
						<svg class="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
						</svg>
						<span>25 operations per day</span>
					</li>
					<li class="flex items-center gap-3">
						<svg class="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
						</svg>
						<span>3 projects</span>
					</li>
					<li class="flex items-center gap-3">
						<svg class="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
						</svg>
						<span>Basic vocal coach</span>
					</li>
					<li class="flex items-center gap-3">
						<svg class="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
						</svg>
						<span>Community support</span>
					</li>
				</ul>
				<button on:click={handleDemo} class="w-full glass-strong hover:glass-purple py-3 rounded-lg transition">
					Try Free Demo
				</button>
			</div>

			<!-- Pro Plan -->
			<div class="glass-purple rounded-2xl p-8 relative">
				<div class="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent-primary text-white text-sm px-4 py-1 rounded-full">
					Most Popular
				</div>
				<h3 class="text-2xl font-bold mb-2">PRO</h3>
				<p class="text-white/60 mb-6">For serious music producers</p>
				<div class="mb-6">
					<span class="text-5xl font-bold">$19.99</span>
					<span class="text-white/60">/month</span>
				</div>
				<ul class="space-y-4 mb-8">
					<li class="flex items-center gap-3">
						<svg class="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
						</svg>
						<span>All AI features</span>
					</li>
					<li class="flex items-center gap-3">
						<svg class="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
						</svg>
						<span>500 operations per day</span>
					</li>
					<li class="flex items-center gap-3">
						<svg class="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
						</svg>
						<span>Unlimited projects</span>
					</li>
					<li class="flex items-center gap-3">
						<svg class="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
						</svg>
						<span>Advanced vocal coach</span>
					</li>
					<li class="flex items-center gap-3">
						<svg class="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
						</svg>
						<span>AI Producer assistant</span>
					</li>
					<li class="flex items-center gap-3">
						<svg class="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
						</svg>
						<span>Priority support</span>
					</li>
				</ul>
				<button on:click={handleGetStarted} class="w-full bg-accent-primary hover:bg-accent-primary/90 py-3 rounded-lg transition">
					Start Free Trial
				</button>
			</div>

			<!-- Studio Plan -->
			<div class="glass rounded-2xl p-8">
				<h3 class="text-2xl font-bold mb-2">STUDIO</h3>
				<p class="text-white/60 mb-6">Professional studios & teams</p>
				<div class="mb-6">
					<span class="text-5xl font-bold">$49.99</span>
					<span class="text-white/60">/month</span>
				</div>
				<ul class="space-y-4 mb-8">
					<li class="flex items-center gap-3">
						<svg class="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
						</svg>
						<span>Everything in Pro</span>
					</li>
					<li class="flex items-center gap-3">
						<svg class="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
						</svg>
						<span>2000 operations per day</span>
					</li>
					<li class="flex items-center gap-3">
						<svg class="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
						</svg>
						<span>Team collaboration</span>
					</li>
					<li class="flex items-center gap-3">
						<svg class="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
						</svg>
						<span>Custom AI models</span>
					</li>
					<li class="flex items-center gap-3">
						<svg class="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
						</svg>
						<span>Dedicated support</span>
					</li>
					<li class="flex items-center gap-3">
						<svg class="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
						</svg>
						<span>Early access to features</span>
					</li>
				</ul>
				<button on:click={handleGetStarted} class="w-full glass-strong hover:glass-purple py-3 rounded-lg transition">
					Contact Sales
				</button>
			</div>
		</div>
	</div>
</section>

<!-- CTA Section -->
<section class="py-24 px-4">
	<div class="max-w-4xl mx-auto text-center glass-purple rounded-2xl p-12">
		<h2 class="text-4xl font-bold mb-4">Ready to Create Amazing Music?</h2>
		<p class="text-xl text-white/70 mb-8">Join other users using DAWG AI to make professional tracks</p>
		<button on:click={handleGetStarted} class="bg-accent-primary hover:bg-accent-primary/90 text-white px-8 py-4 rounded-lg flex items-center gap-2 mx-auto transition">
			Get Started Free
			<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
			</svg>
		</button>
	</div>
</section>

<!-- Footer -->
<footer class="border-t border-white/10 py-12 px-4">
	<div class="max-w-7xl mx-auto">
		<div class="grid md:grid-cols-3 gap-12 mb-8">
			<div>
				<div class="text-2xl font-bold bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent mb-4">
					DAWG AI
				</div>
				<p class="text-white/60">
					Professional music production powered by AI. Create, mix, and master studio-quality tracks in minutes.
				</p>
			</div>

			<div>
				<h4 class="font-bold mb-4">Product</h4>
				<ul class="space-y-2 text-white/60">
					<li><a href="#features" class="hover:text-white transition">Features</a></li>
					<li><a href="#pricing" class="hover:text-white transition">Pricing</a></li>
					<li><button on:click={handleGetStarted} class="hover:text-white transition">Sign Up</button></li>
				</ul>
			</div>

			<div>
				<h4 class="font-bold mb-4">Company</h4>
				<ul class="space-y-2 text-white/60">
					<li><a href="#" class="hover:text-white transition">About</a></li>
					<li><a href="#" class="hover:text-white transition">Blog</a></li>
					<li><a href="#" class="hover:text-white transition">Contact</a></li>
				</ul>
			</div>
		</div>

		<div class="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
			<p class="text-white/40 text-sm">© 2025 DAWG AI. All rights reserved.</p>
			<div class="flex gap-6 text-sm text-white/40">
				<a href="#" class="hover:text-white transition">Privacy Policy</a>
				<a href="#" class="hover:text-white transition">Terms of Service</a>
			</div>
		</div>
	</div>
</footer>
