<script lang="ts">
	import { skill } from "./skills";
	function NoTrue(tr: boolean, i: number) {
		skill[i].click = !tr;
	}
	function NoTrue2(tr: boolean, i: number, j: number) {
		skill[i].sk[j].click = !tr;
	}
  </script>

  <div class="rounded-3xl w-full text-center text-Text bg-auto bg-Mantle select-none overflow-hidden overflow-y-auto">
	  <article class="p-4 text-sm text-left space-y-3">
		  <p class="text-center text-lg">Hello</p>
		  <p>Software and game programming, 3D modelling, and science are some of the greatest passions of my life.  With my ability to learn and grasp things quickly with ease, I acquire the required knowledge and skills to be successful in this field.</p>
		  <p>Besides that, I always aim to achieve the best results by performing my work neatly and professionally.  Also, honesty is quite important for me, and it is an essential value for me to be building good relations with others.</p>
		  <p>With the mentioned experiences, knowledge, and skills of mine on my résumé, I think that I'm suitable for the job of my dreams.  I'd be delighted to hear from you if you think you have an open position for me.</p>
		  <div class="flex justify-between">
		  <p class="text-left">Best regards,</p>
		  <a href="cv.pdf" class="text-right text-Mauve text-lg hover:underline hover:decoration-Flamingo">PDF Download</a>
		  </div>
	  </article>
	  <canvas class="w-full bg-Overlay0 h-1 mb-2" />
	  <div>
		  {#each skill as sk, i}
			  <div
				  class="flex flex-col text-center text-lg text-Mauve transition duration-100 hover:text-Lavender"
			  >
				  <button on:click={() => NoTrue(sk.click, i)}>{sk.name}</button>
				  <canvas class="self-center w-40 h-0.5 rounded-full bg-Surface0 mx-2 mt-0.5 mb-4 transition duration-100" />
			  </div>
			  {#if skill[i].click === true}
				  <div class="flex flex-wrap justify-evenly mb-4">
					  {#each sk.sk as skillName, j}
						  <div
							  class="overflow-hidden mt-2 mx-2 w-1/4 bg-Surface0 text-Blue rounded-xl h-min"
						  >
							  <button
								  class="transition duration-100 hover:text-Pink overflow-hidden"
								  on:click={() => NoTrue2(skillName.click, i, j)}
							  >
								  {skillName.skillName}
							  </button>
							  <div class="h-1 bg-Surface2">
								  <div class="h-1 bg-Sky" style="width: {skillName.lvl * 10}%;"></div>
							  </div>
							  {#if skillName.click === true}
								  {#each skillName.skills as skills}
									  <div class="flex flex-col">
										  <canvas class="self-center w-full h-0.5 rounded-full bg-Surface2" />
										  <p class="text-Green overflow-hidden">
											  {skills}
										  </p>
									  </div>
								  {/each}
							  {/if}
						  </div>
					  {/each}
				  </div>
			  {/if}
			  <canvas class="w-full bg-Overlay0 h-1 mb-2" />
		  {/each}
	  </div>
  </div>
