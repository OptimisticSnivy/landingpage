import Link from "next/link"
import fs from "node:fs"
import matter from "gray-matter"
import { herbert } from "../../app/fonts"

export function generateSlug(title: string) {
	const slug = title
		.toLowerCase()             // Convert to lowercase
		.replace(/[^\w\s-]/g, '')  // Remove non-word characters except spaces and hyphens
		.trim()                    // Trim spaces
		.replace(/\s+/g, '-')      // Replace spaces with hyphens
		.slice(0, 50);             // Limit to 50 characters
	return slug;
}
export default function Bloglink({ post }: { post: string }) {
	const str = fs.readFileSync(`/Users/anandmahamuni/workspace/landingpage/app/content/posts/${post}`, 'utf8');
	const metadata = matter(str).data;
	const slug = generateSlug(metadata.title);

	return (
		<div className="flex flex-col text-[#ebc06d] font-regular mt-10 w-2xl mx-auto">
			<Link href={`/blog/${slug}`} className="hover:text-[#78997a]">
				<h1 className={`${herbert.className} text-xl`}>{metadata.title}</h1>
				<div>{metadata.date}</div>
			</Link>
		</div>
	);
}
