import Link from "next/link"

export default function Nav() {
	return (
		<div className="text-[#ebc06d] font-regular text-lg w-2xl mx-auto">
			<div className="flex flex-row mt-[150px] text-[20px]">
				<div className="flex flex-row">
					<h1 className="mr-3"><Link className="hover:text-[#7f91b2]" href="/">home</Link></h1>
					<h1 className="mr-3"><Link className="hover:text-[#7f91b2]" href="/blog">blog</Link></h1>
					<h1 className="mr-3"><Link className="hover:text-[#7f91b2]" href="/contact">contact</Link></h1>
				</div>
			</div>
		</div>
	);
}
