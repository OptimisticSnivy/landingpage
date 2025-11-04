import { herbert } from "@/app/fonts";
import Bloglink from "@/components/ui/bloglink"

export default function Page() {
	return (
		<div className="flex flex-col text-[#ebc06d] font-regular w-2xl mx-auto">
			<Bloglink post='welcome.mdx' />
			<p>		</p>
		</div >
	);
}
