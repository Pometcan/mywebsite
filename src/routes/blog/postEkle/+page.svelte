<script lang="ts">
    import { Label, Video,Button, Input, Textarea, Toolbar, ToolbarGroup, ToolbarButton, Dropdown, DropdownItem } from 'flowbite-svelte';
    import { marked } from 'marked'
    let markdown = ``
    let title = ""
    let mode = ""
    let titleVisual = ""
    let cbName = "Select Mode"
    async function addPosta()
    {
        let stuff = {
            slug: title.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, ''),
            title: title,
            mode: mode,
            titleVisual: titleVisual,
            text: markdown
        }
    }
</script>

<div class="">
        <div class="p-4">
            {#if  mode == "img"}
            <div>
                <img src={ titleVisual} alt="" class="p-4 h-auto max-w-full rounded-lg" />
            </div>
            {:else if  mode == "video"}
            <div>
                <Video src={ titleVisual} controls class="w-full max-w-full h-auto rounded-lg p-4 border border-gray-200 dark:border-gray-700" trackSrc="header_video.mp4" />
            </div>
            {:else if  mode == "youtube"}
            <div>
                <iframe class="w-full max-w-full h-48 p-4" src={ titleVisual} title="" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div> 
            {/if}
        <div class="flex flex-row justify-between p-2 ">
            <h1 class=" text-Peach text-lg text-left">{ title}</h1>
            <h1 class=" bg-Mauve text-left p-1 rounded-lg">{ new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long',day: 'numeric'})}</h1>
        </div>
    </div>
    <div class=" bg-Surface2 h-1 w-full"></div>
    <div class="p-4">
    <markdown >
        {@html marked(markdown)}
    </markdown>
    </div>
    <div class=" bg-Surface2 h-1 w-full"></div>
    <form class="w-full h-full bg-Mantle text-center p-4 pt-1 space-b-4 overflow-hidden flex-col">
        <div class="text-left space-y-1">
            <div>
                <Label class="text-Peach text-base p-4">Post :</Label>
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
                    <Textarea bind:value={markdown} id="Text" rows="8" class="hover:text-lg duration-300 focus-within:text-lg mb-4 form-textarea focus-within:outline-none rounded-lg bg-Surface0 text-Text border-none min-h-[5rem]" placeholder="Write a Message"></Textarea>
                </div>
            </div>
            <div>
                <Label class="text-Peach text-base p-4">Title :</Label>
                <Input bind:value={title} class="p-2 form-input focus-within:outline-none focus-within:text-lg hover:text-lg duration-300 bg-Surface0 text-Text border-2 border-Peach" id="Title" placeholder="Your Name"></Input>
            </div>
            <div>
                <Label class="text-Peach text-base p-4">Mode :</Label>
                <Button class="p-2 w-full focus-within:outline-none rounded-lg focus-within:text-lg hover:text-lg duration-300 bg-Surface0 text-Text border-2 border-Peach" id="Mode">{cbName}</Button>
                <Dropdown class="text-center flex flex-row justify-between max-w-full rounded-lg bg-Surface0 text-Text border-2 border-Peach">
                  <DropdownItem class="w-full" on:click={()=>{mode = "img"; cbName = "Image"}}>Image</DropdownItem>
                  <DropdownItem class="w-full" on:click={()=>{mode = "video"; cbName = "Video"}}>Video</DropdownItem>
                  <DropdownItem class="w-full"  on:click={()=>{mode = "youtube"; cbName = "Youtube"}}>Youtube</DropdownItem>
                </Dropdown>
            </div>
            <div>
                <Label class="text-Peach text-base p-4">Title Visual :</Label>
                <div class="flex flex-row space-x-1">
                    <Input bind:value={titleVisual} class="p-2 form-input focus-within:outline-none focus-within:text-lg hover:text-lg duration-300 bg-Surface0 text-Text border-2 border-Peach" id="TitleVisual" placeholder="Your Name"></Input>
                    <button class="focus-within:outline-none rounded-lg focus-within:text-lg hover:text-lg duration-300 bg-Surface0 text-Text border-2 border-Peach"><i class="p-2 fa-solid fa-download"></i></button>
                </div>
            </div>
            <div class="mt-2 text-center">
                <button class=" text-Mauve hover:bg-Mauve hover:text-Crust rounded-lg hover:rounded-2xl hover:text-sm duration-700 transition text-base p-1 font-bold">Send Post</button>
            </div>
        </div>
    </form> 
</div>
