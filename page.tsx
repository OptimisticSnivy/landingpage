import Link from "next/link"

export default function Home() {
	return (
		<div className="flex flex-col text-[#ebc06d] font-regular mt-10 ml-130">
			<div>
				<h1 className="text-xl"> Anand Mahamuni</h1>
				<h2 className="italic text-base"> Unemployed,Full-Stack Developer</h2>
				<div className="flex flex-row">
					<p className="text-3xl mr-1.5"><Link className="hover:text-[#7f91b2]" href="https://github.com/optimisticSnivy/">󰊤</Link></p>
					<p className="text-3xl mr-1.5"><Link className="hover:text-[#7f91b2]" href="https://www.linkedin.com/in/anand-mahamuni-134611239/">󰌻</Link></p>
					<p className="text-3xl mr-1.5"><Link className="hover:text-[#7f91b2]" href="https://www.linkedin.com/in/anand-mahamuni-134611239/">󰫑</Link></p>
				</div>
				<p className="mt-2 mr-130 text-base"> Hello who are prolly wondering who is this prick? Maybe go through this site I made to actually make a fair judgement? </p>
			</div>
		</div>
	);
}

