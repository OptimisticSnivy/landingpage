import Link from "next/link"
import Linkbar from "@/components/ui/linkbar";
import { herbert } from "./fonts";

export default function Home() {
	return (
		<div >
			<div className="flex flex-col text-[#ebc06d] font-regular mt-10 w-2xl mx-auto">
				<h1 className={`${herbert.className} text-xl`}> Anand Mahamuni</h1>
				<Linkbar />
				<h2 className="italic text-base"> Full-Stack Developer</h2>
				<p className="mt-2 text-base">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </p>
			</div>
			<div className="flex flex-col text-[#ebc06d] font-regular mt-10 w-2xl mx-auto">
				{/* <h1 className={`${herbert.className} text-xl`}> Blog</h1> */}
				<div className="flex flex-row">
				</div>
			</div>
			{/* <div> */}
			{/* 	<p className={`${herbert.className} text-sm italic`}> “There is no real ending. It’s just the place where you stop the story.”</p> */}
			{/* 	<p className={`text-sm italic`}> ― Frank Herbert</p> */}
			{/* </div> */}
		</div>
	);
}

