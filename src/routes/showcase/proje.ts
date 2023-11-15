const accessToken: string = 'glpat-8oq9Lx3zcPqVtGdTq5Ui';
const userId: string = '5789071';

export async function getGitlabGroup():Promise<any>
	{
		try {
			const group = await fetch(`https://gitlab.com/api/v4/groups?access_token=${accessToken}`);
			if (group.ok) {
				return await group.json();
			}
		}
		catch (er) {
			console.log(er);
		}
	}

export async function getGitlabProje(id: number): Promise<any> {
	try {
		const proje = await fetch(`https://gitlab.com/api/v4/groups/${id}/projects?access_token=${accessToken}`);
		if (proje.ok) {
			const projectsData = await proje.json();
			projects[0].repo.push(...projectsData);
		}
	} catch (er) {
			console.log(er);
	}
}

export async function getGitlabfile(id:string, brench:string, file:string):Promise<string> {
	try {
		const proje = await fetch(`https://gitlab.com/api/v4/projects/${id}/repository/files/${file}/raw?ref=${brench}`);
		if (proje.ok) {
			const data = await proje.text();
  			return data;
		}
	} catch (er) {
			console.log(er);
			const data = await "# File not found"
			return data;
	} 
}

export async function getGitlabGroupsAndProjects(): Promise<void> {
  const groups = await getGitlabGroup();
	projects[0].repo = [];
	for (let i = 0; i < groups.length; i++) {
    await getGitlabProje(groups[i].id);
  }
	projects[0].isLoad = true;
}

export async function getGithubProje() {
	try {
		const username: string = "Pometcan";
		const response = await fetch(`https://api.github.com/users/${username}/repos?per_page=400`);
		const data: Repo[] = await response.json() as unknown as Repo[];

		if (response.ok)
		{
			projects[1].repo = data;
			projects[1].isLoad = true;
		}
	} catch (error) {
		console.log(error);
	}
}
/*
export async function getItchIO() {
	try {
		const apiKey = "L2JLhabmABhczxApiFh2EJrFC6kIhatSMTQH2qhH"
		const data = await fetch(`https://itch.io/api/1/${apiKey}/my-games?access_token=${apiKey}`,{headers: {'Access-Control-Allow-Origin':apiKey}});
		projects[3].repo = data;
		projects[3].isLoad = true;
	} catch (error) {
		console.log(error);
	}
}*/

export let projects = [
	{
		repoName:'GITLAB',
		icon: 'fa-brands fa-gitlab',
		repoColor: 'text-Peach',
		repoBgColor: 'bg-Surface1',
		repo: <any>[],
		isLoad: false,
		click: false
	},
	{
		repoName: 'GITHUB',
		icon: 'fa-brands fa-github',
		repoColor: 'text-Subtext0',
		repoBgColor: 'bg-Surface0',
		repo: <any>[],
		isLoad: false,
		click: false
	},
	/*{
		repoName: 'ARTSTAION',
		icon: 'fa-brands fa-artstation',
		repoColor: 'text-Sapphire',
		repoBgColor: 'bg-Surface1',
		repo: <any>[],
		isLoad: false,
		click: false
	},
	{
		repoName: 'ITCH-IO',
		icon: 'fa-brands fa-itch-io',
		repoColor: 'text-Red',
		repoBgColor: 'bg-Surface1',
		repo: <any>[],
		isLoad: false,
		click: false
	}*/
]
