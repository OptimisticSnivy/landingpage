import fs from "node:fs"
import matter from "gray-matter";
import remarkGfm from 'remark-gfm'
import Markdown from "react-markdown"
import { herbert } from "@/app/fonts";
import { getPosts } from "@/app/content/posts";

export default async function Page({ params, }: { params: Promise<{ slug: string }> }) {
	const allPostsData = getPosts();
	const { slug } = await params;
	const post = allPostsData[slug];

	return (
		<div className="flex flex-col text-[#ebc06d] font-regular mt-10 w-2xl mx-auto">
			<h1 className={`${herbert.className} text-xl`}>{post.title}</h1>
			<div>{post.date}</div>
			<div className="markdown mt-5 mx-auto"><Markdown remarkPlugins={[remarkGfm]}
			>{post.content}</Markdown></div>
		</div>
	);
}
