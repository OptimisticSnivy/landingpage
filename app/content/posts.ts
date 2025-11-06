import matter from "gray-matter"
import path from "node:path"
import { readdirSync, readFileSync } from "node:fs"

export function getPosts(): any {
	let allMetadata: any = {};
	let root = path.join(process.cwd(), "app/content/posts/")
	console.log(root);
	const postFiles = readdirSync(root);
	for (let i in postFiles) {
		const str = readFileSync(`${root}/${postFiles[i]}`, 'utf8');
		const metadata = matter(str).data;
		metadata.content = matter(str).content;
		allMetadata[metadata.slug] = metadata;
	}
	return allMetadata;
}
console.log(getPosts());
