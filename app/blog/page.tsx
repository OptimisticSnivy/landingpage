import Link from "next/link"
import { herbert } from "../fonts"
import Bloglink from "@/components/ui/bloglink"

export default function Page() {
	return (
		<div>
			<Bloglink post="welcome.md" />
			<Bloglink post="test-1.md" />
		</div>
	)
}
