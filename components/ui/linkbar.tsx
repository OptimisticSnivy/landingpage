import Link from "next/link"

export default function Linkbar() {
	return (
		<div className="flex flex-row">
			<p className="text-3xl mr-1.5"><Link className="hover:text-[#78997a]" href="https://github.com/optimisticSnivy/">󰊤</Link></p>
			<p className="text-3xl mr-1.5"><Link className="hover:text-[#78997a]" href="https://www.linkedin.com/in/anand-mahamuni-134611239/">󰌻</Link></p>
			<p className="text-3xl mr-1.5"><Link className="hover:text-[#78997a]" href="https://mastodon.social/@optimisticsnivy">󰫑</Link></p>
		</div>
	);
}
