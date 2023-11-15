<script lang="ts">
    import { getGitlabfile } from "./proje.ts";
    import { marked } from 'marked'
    import { closeAllModals } from 'svelte-modals' 
    export let isOpen
    export let pro
    let proje = ""
    getGitlabfile(pro.id,pro.default_branch,"README.md").then((data) => {
        proje = data.replace("","");
    }).catch(()=>
        {proje = `# File not found`}
    )
    function formatDate(dateStr: string): string {
        const date = new Date(dateStr);
        return `${new Intl.DateTimeFormat('en-US', { month: 'short' }).format(date)}, ${date.getDate()} - ${date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;
    }
    function toWebsite(url:string) {
		window.parent.open(url,"_blank")
  	}
  </script>
  
  {#if isOpen}
    <div role="dialog" class="z-30 fixed top-0 bottom-0 left-0 right-0 flex justify-center items-center pointer-events-none">
      <div class=" max-h-[35rem] w-screen  rounded-xl border-2 border-Mauve bg-Base flex flex-col justify-between pointer-events-auto">
        <div class="flex flex-row p-2">
            <div class="overflow-auto rounded-l-lg bg-Mantle border-y-4 border-l-4 p-4 w-8/12 max-h-[34rem]">
                <markdown>
                    {@html marked(proje)}
                </markdown>
            </div>
            <div class="h-full w-4 bg-Surface2"></div>
            <div class=" justify-between flex flex-col">
                <div>
                    <h1 class="text-2xl font-bold text-Lavender p-2">{pro.name}</h1>
                    <div class="flex flex-row">
                        <p class=" text-Text bg-Surface0 p-1 rounded-l-lg">Time: </p>
                        <p class=" text-Crust font-bold bg-Overlay0 p-1 rounded-r-lg">{formatDate(pro.last_activity_at)}</p>
                    </div>
                </div>
                <div class="mt-4 flex justify-between gap-2">    
                    <button class="p-2 m-2 text-Red font-bold text-xl border-Overlay0 bg-Surface0 border-4 rounded-3xl" on:click={closeAllModals}>Close</button>							
                    <button class="p-2 m-2 text-Green font-bold text-xl border-Overlay0 bg-Surface0 border-4 rounded-3xl" on:click={toWebsite(pro.web_url)}>Go to project</button>	
                </div>
            </div>
        </div>
      </div>
    </div>
  {/if}