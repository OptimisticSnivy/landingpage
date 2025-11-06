import Link from 'next/link'
import { herbert } from '../fonts'

export default function Page() {
	return (
		<div className="flex flex-col text-[#ebc06d] font-regular mt-10 w-2xl mx-auto">
			<Link href="mailto:optimisticsnivy7203@proton.me" className="hover:text-[#78997a]">
				<h1 className={`${herbert.className} text-xl`}>Email</h1>
				<div className='italic'>optimisticsnivy7203@proton.me</div>
			</Link>
			<Link href="https://github.com/OptimisticSnivy/landingpage/issues" className="hover:text-[#78997a] mt-3">
				<h1 className={`${herbert.className} text-xl`}>Spot a problem with this site?</h1>
				<div className='italic'>File an issue on the repo here!</div>
			</Link>
		</div >
	)
}
