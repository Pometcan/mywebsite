<div class="flex justify-center items-center h-screen w-screen">
	<div class="box-content shadow-lg shadow-Surface0/40 p-2 mx-12 inset-0 boder-4 bg-Base rounded-3xl place-content-center">
		<div class="flex duration-150 max-h-[40rem] md:max-w-[50rem] lg:max-w-[60rem] xl:max-w-[70rem] 2xl:max-w-[90rem] h-screen w-screen">
			<div class="flex w-3/12 p-4">
				<div class="select-none text-center space-y-2 p-3 place-content-center">
					<img src="/imgs/pp.jpg" alt="Mehmetcan Polat" class="mx-auto shadow-lg shadow-Surface0 border-2 border-Surface1 rounded-2xl nbrightness-90 contrast-125 drop-shadow-lg">
					<div class="space-y-2 place-content-center pt-8">
						<h1 class="font-mono text-lg text-Mauve">Mehmetcan Polat</h1>
						<h1 class="font-mono text-base text-Sapphire">(Pometcan)</h1>
						<p class="text-sm text-Rosewater">Developer & 3D Artist</p>
						<div>
							<a href="https://gitlab.com/Pometcan"><i class="text-4xl text-Peach hover:text-Peach/80 fa-brands fa-gitlab"></i></a>
							<a href="https://github.com/Pometcan"><i class="text-4xl text-Subtext1 hover:text-Subtext1/80 fa-brands fa-github"></i></a>
							<a href="https://www.artstation.com/canpolat9"><i class="text-4xl text-Sapphire hover:text-Sapphire/80 fa-brands fa-artstation"></i></a>
							<a href="https://www.linkedin.com/in/mehmetcan-polat-45bbb6194/"><i class="text-4xl text-Blue hover:text-Blue/80 fa-brands fa-linkedin"></i></a>
							<a href="https://pometcan.itch.io/"><i class="text-4xl text-Red hover:text-Red/80 fa-brands fa-itch-io"></i></a>
						</div>
					</div>
				</div>
			</div>
			<div class="flex w-9/12 border-x-2  border-Surface0 p-4 rounded-3xl">
				<div class="w-full overflow-hidden overflow-y-auto shadow-lg border-2 rounded-3xl bg-Mantle/70">
					<slot/>
				</div>
			</div>
			<div class="flex flex-col justify-between">
				<div class="flex flex-col text-center">
					<div class="border-b-2 border-Surface0 hover:bg-Surface0 transition rounded-tr-2xl flex flex-row">
						<a href="/" class="m-2 stroke-2 hover:stroke-1 text-3xl text-Lavender fa-regular fa-user pl-1 pt-2 pb-2 hover:text-Flamingo"> </a>
					</div>
					<div class="border-b-2 border-Surface0 hover:bg-Surface0 transition">
						<a href="/showcase" class="m-2 text-3xl text-Lavender fa-solid fa-images showcase pt-2 pb-2 hover:text-Flamingo"> </a>
					</div>
					<div class="border-b-2 border-Surface0 hover:bg-Surface0 transition">
						<a href="/context" class="m-2 text-3xl text-Lavender fa-solid fa-address-book context pt-2 pb-2 hover:text-Flamingo"> </a>
					</div>
				</div>
				<div class="flex flex-col-reverse text-center">
					<div class="border-t-2 border-Surface0 hover:bg-Surface0 transition rounded-br-2xl">
						<a href="/blog" class="m-2 text-3xl text-Lavender fa-solid fa-rss context pt-2 pb-2 hover:text-Flamingo"> </a>
					</div>
					<div class="border-t-2 border-Surface0 hover:bg-Surface0 transition">
						<a href="/coming-soon" class="m-2 text-3xl text-Lavender fa-solid fa-gamepad context pt-2 pb-2 hover:text-Flamingo"> </a>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<script lang="ts">
  import "../app.css";
</script>
