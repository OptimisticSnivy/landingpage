import Link from "next/link"
import { herbert } from "../fonts"
import Bloglink from "@/components/ui/bloglink"

export default function Page() {
	return (
		<div>
			<Bloglink post="welcome.mdx" />
			<Bloglink post="test-1.mdx" />
		</div>
	)
}
