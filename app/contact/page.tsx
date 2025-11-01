import Link from 'next/link'
import { herbert } from '../fonts'

export default function Page() {
	return (
		<div className="flex flex-col text-[#ebc06d] font-regular mt-10 w-2xl mx-auto">
			<h1 className={`${herbert.className} text-xl`}> Email </h1>
			<h1 className={`${herbert.className} text-xl`}> Discord </h1>
		</div>
	)
}
