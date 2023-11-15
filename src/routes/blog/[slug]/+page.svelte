<script lang="ts">
	import { Video, Label, Input, Textarea, Toolbar, ToolbarGroup, ToolbarButton } from 'flowbite-svelte';
    import { marked } from 'marked'
    export let data;
    const dateOption = {day: 'numeric', month: 'long', year:'numeric'};
    async function addmsn()
    {
	    const name = document.querySelector<HTMLInputElement>("#commentName");
	    const text = document.querySelector<HTMLInputElement>("#commentText");
        const stuff={slug:data.slug,name:name,text:text}
    }
</script>

<div>
    <div>
        {#each data.postPage as { date, text, title, mode, titleVisual } }
        <div class="p-4">
            {#if  mode == "img"}
                <div>
                    <img src={ titleVisual} alt="" class="p-4 h-auto max-w-full rounded-lg" />
                </div>
            {:else if  mode == "video"}
                <div>
                    <Video src={ titleVisual} autoplay controls class="w-full max-w-full h-auto rounded-lg p-4 border border-gray-200 dark:border-gray-700" trackSrc="header_video.mp4" />
                </div>
            {:else if  mode == "youtube"}
                <div>
                    <iframe class="w-full max-w-full rounded-lg h-48 p-4" src={ titleVisual} title="" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div> 
            {/if}
            <div class="flex flex-row justify-between p-2 border-b-2 border-Surface1">
                <h1 class=" text-Peach text-lg text-left">{ title}</h1>
                <h1 class=" bg-Mauve text-left p-1 rounded-lg">{ date.toLocaleString('en-US', dateOption)}</h1>
            </div>
            <markdown >
                {@html marked(text)}
            </markdown>
        </div>
        <div class=" bg-Surface2 h-1 w-full"></div>
        <div class="p-3">
            <h1 class=" text-Sapphire text-lg font-bold">Comments :</h1>
            {#each  data.postComment as {cname, cdate, ctext}}
                <div class="bolder-y-2 border-Rosewater  rounded-lg">
                    <div class="flex flex-row justify-between p-2 pb-0 mt-4">
                        <h2 class="text-Green font-bold text-base">{cname}</h2>
                        <h2 class=" bg-Rosewater p-1 rounded-lg text-xs">{ cdate.toLocaleString('en-US', dateOption)}</h2>
                    </div>
                    <div class="prose prose-slate p-2 px-5 text-Text text-sm ">
                        <markdown >
                            {@html marked(ctext)}
                        </markdown>
                    </div>
                </div>
            {/each}
        </div>
        <div class=" bg-Surface2 h-1 w-full"></div>
        <!--form class="w-full h-full bg-Mantle text-center p-4 pt-1 space-b-4 overflow-hidden flex-col">
            <div class="text-left space-y-1">
                <Label class="text-Peach text-base p-4">Your Name :</Label>
                <Input class="p-2 form-input focus-within:outline-none focus-within:text-lg hover:text-lg duration-300 bg-Surface0 text-Text border-2 border-Peach" id="commentName" placeholder="Your Name"></Input>
            </div>
            <div class="text-left space-y-1">
                <Label class="text-Peach text-base p-4">Your Commit :</Label>
                <div class="border-Peach rounded-lg border-2">
                    <Toolbar slot="header" class=" bg-Mantle text-Text rounded-lg" embedded>
                        <ToolbarGroup>
                            <ToolbarButton name="Attach file"><i class="w-5 h-5 fa-solid fa-paperclip rotate-45" /></ToolbarButton>
                            <ToolbarButton name="Embed map"><i class="w-5 h-5 fa-solid fa-location-dot" /></ToolbarButton>
                            <ToolbarButton name="Upload image"><i class="w-5 h-5 fa-regular fa-image" /></ToolbarButton>
                        </ToolbarGroup>
                        <ToolbarGroup>
                            <ToolbarButton name="Format code"><i class="w-5 h-5 fa-solid fa-code" /></ToolbarButton>
                            <ToolbarButton name="Add emoji"><i class="w-5 h-5 fa-solid fa-face-smile" /></ToolbarButton>
                        </ToolbarGroup>
                        <ToolbarButton name="send" slot="end"><i class="w-5 h-5 fa-regular fa-paper-plane rotate-45" /></ToolbarButton>
                    </Toolbar>
                    <Textarea  id="commentText" rows="8" class="hover:text-lg duration-300 focus-within:text-lg mb-4 form-textarea focus-within:outline-none rounded-lg bg-Surface0 text-Text border-none min-h-[5rem]" placeholder="Write a Message"></Textarea>
                </div>
            </div>
            <div class="mt-2">
            </div>
        </form--> 
        {/each}
    </div>
</div>
