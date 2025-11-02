import { herbert } from "../fonts"
import Welcome from "./../content/posts/welcome.mdx"

export default function Page() {
	return (
		<div className="prose flex flex-col text-[#ebc06d] font-regular mt-10 w-2xl mx-auto">
			<Welcome />
			{/* <h1 className={`${herbert.className} text-4xl`}> Coming Soon! </h1> */}
		</div>
	)
}
