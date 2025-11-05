import matter from "gray-matter"
import { readdirSync, readFileSync } from "node:fs"

export function getPosts(): any {
	let allMetadata: any = {};
	let root = `/users/anandmahamuni/workspace/landingpage/app/content/posts/`
	const postFiles = readdirSync(root);
	for (let i in postFiles) {
		const str = readFileSync(`${root}/${postFiles[i]}`, 'utf8');
		const metadata = matter(str).data;
		metadata.content = matter(str).content;
		allMetadata[metadata.slug] = metadata;
	}
	return allMetadata;
}
