import fs from "node:fs"
import matter from "gray-matter";
import remarkGfm from 'remark-gfm'
import { herbert } from "@/app/fonts";
import { generateSlug } from "@/components/ui/bloglink";
import Markdown from "react-markdown"
import Bloglink from "@/components/ui/bloglink"

export default function Page() {
	const str = fs.readFileSync(`/Users/anandmahamuni/workspace/landingpage/app/content/posts/welcome.md`, 'utf8');
	const markdown = matter(str).content;
	const metadata = matter(str).data;
	const slug = generateSlug(metadata.title);

	return (
		<div className="flex flex-col text-[#ebc06d] font-regular mt-10 w-2xl mx-auto">
			<h1 className={`${herbert.className} text-xl`}>{metadata.title}</h1>
			<div>{metadata.date}</div>
			<div className="markdown mt-5 mx-auto"><Markdown remarkPlugins={[remarkGfm]}
			>{markdown}</Markdown></div>
		</div>
	);
}
