import Link from "next/link"

export default function Nav() {
	return (
		<div className="text-[#ebc06d] font-regular text-lg">
			<div className="flex flex-row justify-center mt-[30px] min-w-[80%] text-[20px]">
				<h1> Anand Mahamuni </h1>
				<div className="flex flex-row ml-100">
					<h1 className="mr-3"><Link href="/">home</Link></h1>
					<h1 className="mr-3"><Link href="/about">about</Link></h1>
					<h1><Link href="/contact">contact</Link></h1>
				</div>
			</div>
		</div>
	);

}
