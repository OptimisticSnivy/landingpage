import Link from "next/link"
import { herbert } from "../fonts"
import { getPosts } from "../content/posts"

export default function Page() {
	const allPostsData: any = Object.values(getPosts());

	return (
		<div className="flex flex-col text-[#ebc06d] font-regular mt-10 w-2xl mx-auto">
			<ul>
				{allPostsData.map((post) => (
					<li className="mt-3" key={post.slug}>
						<Link href={`/blog/${post.slug}`} className="hover:text-[#78997a]">
							<h1 className={`${herbert.className} text-xl`}>{post.title}</h1>
							<div>{post.date}</div>
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
}
