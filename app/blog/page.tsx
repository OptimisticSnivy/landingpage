import Link from "next/link"
import fs from "node:fs"
import matter from "gray-matter"
import { herbert } from "../fonts"

export default function Page() {
	const str = fs.readFileSync('/Users/anandmahamuni/workspace/landingpage/app/content/posts/welcome.mdx', 'utf8');
	const metadata = matter(str).data

	return (
		<div className="flex flex-col text-[#ebc06d] font-regular mt-10 w-2xl mx-auto">
			<Link href="/" className="hover:text-[#78997a]">
				<h1 className={`${herbert.className} text-xl`}>{metadata.title}</h1>
				<div>{metadata.date}</div>
			</Link>
		</div>
	)
}
