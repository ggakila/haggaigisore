import React from "react";
import Typewriter from "typewriter-effect";

export default function Header() {
  return (
		<div className="homepage relative h-screen w-screen text-neutral-900">
			<header className=" absolute w-full  top-0 flex justify-between items-center px-10 ">
				<div className="flex items-center">
					<div className="flex text-[80px] font-bold">
						<h1 className="">H</h1>
						<h1 className="">G</h1>
					</div>
					<h1 className="studios font-bold uppercase">studios</h1>
				</div>
				<div className="navs flex text-xl font-semibold gap-10">
					<div className="about">about.</div>
					<div className="projects">works.</div>
					<div className="contact">contact.</div>
				</div>
			</header>
			<div className="h-screen flex flex-col justify-center items-center ">
				<div className="flex items-center gap-3">
					<h1 className="text-lg font-bold mx-auto uppercase text-gray-400">
						turning ideas into:
					</h1>{" "}
					<h1 className="textswitch text-center font-bold text-3xl text-gray-400 underline uppercase">
						<Typewriter
							options={{
								strings: [" experiences", " businesses", " brands"],
								autoStart: true,
								loop: true,
							}}
						/>
					</h1>
				</div>
				<div className="flex text-[200px] font-bold ">
					<h1>HAGGAI</h1><span className="text-black">.</span>
					<h1 className="gisore font-medium">GISORE</h1>
				</div>
				<h3 className="text-3xl font-bold">Software Developer - (Frontend)</h3>
				<div className=" absolute flex gap-5 w-full marquee uppercase justify-center items-center text-xl font-bold bottom-0 mb-10">
					<h2 className="transpa">Mobile app development</h2>
					<h2 className="">software development</h2>
					<h2 className="transpa">User Experience Design</h2>
					<h2>SEO</h2>
					<h2 className="transpa">Interactive experiences</h2>
					<h2>product design</h2>
					<h2 className="transpa">motion design</h2>
				</div>
			</div>
		</div>
	);
}
