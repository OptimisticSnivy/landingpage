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
				<p className="mt-2 text-base">Hey! Welcome to my landing page. I am a full stack dev, amateur guitarist, linux enthusiast, music nerd & a writer. This page hosts all my contact information and cool shit I have done, it also hosts some weird ramblings & strong opinions I was brave enough to share with the world!</p>
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

