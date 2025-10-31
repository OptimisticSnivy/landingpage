import Link from "next/link"

export default function Nav() {
	return (
		<div className="text-[#ebc06d] font-regular text-lg">
			<div className="flex flex-row mt-[30px] min-w-[80%] text-[20px]">
				{/* <h1 className="italic"> anand mahamuni </h1> */}
				<div className="flex flex-row ml-130 mt-30">
					<h1 className="mr-3"><Link className="hover:text-[#7f91b2]" href="/">home</Link></h1>
					<h1 className="mr-3"><Link className="hover:text-[#7f91b2]" href="/">about</Link></h1>
					<h1 className="mr-3"><Link className="hover:text-[#7f91b2]" href="/">contact</Link></h1>
				</div>
			</div>
		</div>
	);
}
