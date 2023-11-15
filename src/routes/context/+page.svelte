<script lang="ts">
    let isgmail = true;
	let iswhatsapp = false;
	let to = ""
    let title = ""
    let text = ""

  const sendEmail = async () => {
    const response = await fetch('/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ to, title, text }),
    });

    if (response.ok) {
      alert('E-posta başarıyla gönderildi.');
    } else {
      alert('E-posta gönderme hatası.');
    }
  };
</script>

<div>
	<div>
		<div class="list-inside text-center">
			<button on:click={()=>iswhatsapp = !iswhatsapp} class="hover:list-outside hover:inline-block hover:text-lg text-Text w-full hover:bg-Base bg-Crust p-4"> <i class="fa-solid fa-phone" /> +90 553 054 54 24</button>
			{#if iswhatsapp === true}
				<div class="p-4 bg-Mantle space-y-3">
					<a href="https://wa.link/9ld3lf" class="text-Text hover:line-clamp-2 text-lg font-bold"><i class="fa-brands fa-whatsapp text-2xl text-Green/50" /> +90 553 054 54 24</a>
					<img src="/imgs/whatsapp.png" on:click={()=>window.open("https://wa.link/9ld3lf","_blank")} class="rounded-xl border-8 cursor-pointer  border-Green/50 w-1/3 h-1/3 mx-auto" alt="wp">
				</div>
			{/if}
			<div class="w-full bg-Crust/20 h-2"></div>
			<p class="hover:list-outside hover:inline-block text-Text w-full bg-Crust p-4"> <i class="fa-regular fa-map" /> Istanbul / Turkiye</p>
			<div class="w-full bg-Crust/20 h-2"></div>
			<button on:click={() => isgmail = !isgmail} class="hover:list-outside hover:inline-block hover:text-lg text-Text w-full hover:bg-Base bg-Crust p-4"> <i class="fa-regular fa-envelope" /> Pometcan@gmail.com</button>
			{#if isgmail === true}
					<form class="w-full h-full bg-Mantle p-8 space-b-4 overflow-hidden flex-col">
							<div class="text-left space-y-1">
									<p class="text-Peach text-base p-4">Your Name :</p>
									<input bind:value={title} class="p-2 form-input w-full rounded-xl focus-within:outline-none focus-within:text-lg hover:text-lg duration-300 bg-Surface0 text-Text border-2 border-Peach" id="emailName" placeholder="Your Name">
							</div>
							<div class="text-left space-y-1">
									<p class="text-Peach text-base p-4">Your Email :</p>
									<input bind:value={to} class="p-2 hover:text-lg w-full rounded-xl focus-within:outline-none focus-within:text-lg form-input duration-300 bg-Surface0 text-Text border-2 border-Peach" id="email" name="email" required placeholder="Name@Email.com">
							</div>
							<div class="text-left space-y-2 flex-col">
								<p class="text-Peach text-base p-4">Your Message :</p>
								<div class="border-Peach rounded-lg rounded-b-none border-2 text-xl">
									<div class="rounded-lg text-Text flex flex-rows space-x-2 p-3 py-1">
										<div class=" bg-Mantle text-Text rounded-lg text-lg">
											<button class="hover:bg-Surface0 p-2 rounded-xl"><i class="w-5 h-5 fa-solid fa-paperclip rotate-45" /></button>
											<button class="hover:bg-Surface0 p-2 rounded-xl"><i class="w-5 h-5 fa-solid fa-location-dot" /></button>
											<button class="hover:bg-Surface0 p-2 rounded-xl"><i class="w-5 h-5 fa-regular fa-image" /></button>
										</div>
										<h1 class=" bg-Mantle text-Text rounded-lg text-4xl">|</h1>
										<div class=" bg-Mantle text-Text rounded-lg text-lg">
											<button class="hover:bg-Surface0 p-2 rounded-xl"><i class="w-5 h-5 fa-solid fa-code" /></button>
											<button class="hover:bg-Surface0 p-2 rounded-xl"><i class="w-5 h-5 fa-solid fa-face-smile" /></button>
										</div>
									</div>
								</div>
							</div>
							<textarea  bind:value={text} id="editor" rows="8" class="border-Peach border-2 border-t-0 w-full hover:text-lg duration-300 focus-within:text-lg mb-4 form-textarea focus-within:outline-none rounded-lg rounded-t-none bg-Surface0 text-Text min-h-[5rem]" placeholder="Write a Message"></textarea>
							<div>
								<!--button on:click={()=>sendMail(to,title,text)} class=" text-Mauve border-y-2 w-full hover:bg-Mauve hover:border-y-2 hover:border-Lavender hover:text-Crust rounded-lg hover:rounded-2xl hover:text-sm duration-700 transition text-base p-4 font-bold">Send Me Message</button-->
							</div>
					</form>
			{/if}
		</div>
	</div>
</div>
