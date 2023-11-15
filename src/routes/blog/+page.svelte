<script>
    import { Video} from 'flowbite-svelte';
    import { marked } from 'marked'
	export let data;
</script>

<div>
    <div>
        {#each data.blogPage as { slug, title,date, mode, text, titleVisual }}
            <div class="p-4 text-Lavender text-lg font-bold">
                {#if mode == "img"}
                    <div>
                        <img src={titleVisual} alt="" class="p-4 pb-1 h-auto max-w-full rounded-lg" />
                    </div>
                {:else if mode == "video"}
                    <div>
                        <Video src={titleVisual} autoplay controls class="w-full max-w-full  pb-1 h-auto rounded-lg p-4 border border-gray-200 dark:border-gray-700" trackSrc="header_video.mp4" />
                    </div>
                {:else if mode == "youtube"}
                    <div>
                        <iframe class="w-full pb-1 rounded-lg max-w-full h-48 p-4" src={titleVisual} title="P.A.R.T.Y. - Official Animated Music Video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div> 
                {/if}
                <div class="flex flex-row justify-between p-2 border-b-2 border-Surface1">
                    <h1 class=" text-Peach text-lg text-left"><a href="/blog/{slug}">{title}</a></h1>
                    <h1 class=" bg-Mauve text-left text-xs  text-Mantle p-1 rounded-lg">{ date}</h1>
                </div>
                <div class="MyMarkdown rose prose-slate p-1 text-Text text-sm">
                <markdown >
                    {@html marked(text)}
                </markdown>
                </div>
            </div>
            <div class=" h-1 w-full bg-Overlay1"></div>
	    {/each}
    </div>
</div>