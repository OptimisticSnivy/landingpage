import fs from "node:fs"
import matter from "gray-matter";
import remarkGfm from 'remark-gfm'
import { herbert } from "@/app/fonts";
import Markdown from "react-markdown"

export default function Page() {
	const str = fs.readFileSync(`/Users/anandmahamuni/workspace/landingpage/app/content/posts/i-hate-vscode.md`, 'utf8');
	const markdown = matter(str).content;
	const metadata = matter(str).data;

	return (
		<div className="flex flex-col text-[#ebc06d] font-regular mt-10 w-2xl mx-auto">
			<h1 className={`${herbert.className} text-xl`}>{metadata.title}</h1>
			<div>{metadata.date}</div>
			<div className="markdown mt-5 mx-auto"><Markdown remarkPlugins={[remarkGfm]}
			>{markdown}</Markdown></div>
		</div>
	);
}
