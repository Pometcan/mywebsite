<script lang="ts">
	import { projects,getGitlabGroupsAndProjects, getGithubProje,getGitlabProje /*, getArtstation, getItchIO*/ } from "./proje.ts";
	import { Modals, closeModal, openModal, modals } from 'svelte-modals'
	import codeModal from './codeModal.svelte'
	function codeOpen(pro:any) {
		openModal(codeModal, { 
			pro: pro,
			onOpenAnother: () => {
				codeOpen()
			}
		})
	}
	getGitlabGroupsAndProjects();
	getGithubProje();
	console.log(projects);
	//getArtstation();
	//getItchIO();
	function NoTrue(tr: boolean, i: number) {
		projects[i].click = !tr;
	}
	function toWebsite(url:string) {
		window.parent.open(url,"_blank")
  	}
</script>

<Modals>
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div slot="backdrop" class="backdrop" on:click={closeModal}/>
</Modals>


<div class="rounded-3xl w-full overflow-hidden">
	<div class=" rounded-none text-center bg-auto bg-Mantle">
		<div class="flex flex-col">
			{#each projects as proje, i}
				<button on:click={()=>NoTrue(proje.click,i)} class="{proje.repoColor} text-left bg-Mantle hover:bg-Crust p-2">{proje.repoName} <i class="{proje.icon}" /></button>
			<div class="h-full w-full bg-Base  overflow-x-auto verflow-y-none snap-x overflow-hidden">
				<div class="flex">
				{#if proje.click === true}
					{#if proje.isLoad === true}
						{#if proje.repoName === "GITLAB"}
							{#each proje.repo as pro}
								<div class="flex-none overflow-hidden justify-center">
									<button on:click={()=>codeOpen(pro)} on:contextmenu={()=>toWebsite(pro.web_url)} class="flex flex-col transition-all duration-200 text-center {proje.repoColor} {proje.repoBgColor} rounded-lg shadow drop-shadow-lg shadow-Surface0 m-2 p-2 h-32 w-32 snap-center">
										<p>{pro.name}</p>
										{#if pro.avatar_url === null}
											<i class="p-3 text-2xl {proje.icon}"></i>
										{:else}
											<img class="object-scale-down" src={pro.avatar_url}>
										{/if}
										<p>{pro.namespace.name}</p>
									</button>
								</div>
							{/each}
						{:else if proje.repoName === "GITHUB"}
							{#each proje.repo as pro}
								<div class="flex-col">
									<div class="flex-none">
										<div class="hover:h-44 hover:w-44 transition-all duration-200 text-center {proje.repoColor} flex-none {proje.repoBgColor} rounded-lg shadow drop-shadow-lg shadow-Surface0 m-2 p-2 h-32 w-32 snap-center">
											{pro.name}
										</div>
									</div>
								</div>
							{/each}
						{/if}
					{:else}
						<img src={"loading.svg"} class="flex content-center p-4">
					{/if}
				{/if}
				</div>
			</div>
			{/each}
		</div>
	</div>
</div>