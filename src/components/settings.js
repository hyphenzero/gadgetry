import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"

export default function Settings({ setIsOpen }) {
	return (
		<div className="mx-4 h-fit max-w-md items-center justify-center rounded-xl bg-white px-12 py-12 shadow-xl sm:mx-0">
			<h1 className="mb-4 text-center text-4xl font-bold">Simple Gadgets</h1>
			<p className="mb-8 text-center text-lg text-gray-600">
				A collection of simple but useful tools to enhance your everyday
				adventures.
			</p>
			<div className="flex justify-center space-x-3">
				<button
					onClick={() => setIsOpen(false)}
					className="flex cursor-pointer items-center justify-center rounded-lg bg-sky-500 px-6 py-2 text-lg font-semibold text-white transition-colors hover:bg-sky-600 focus:outline-none"
					tabIndex={-1}
				>
					Get Started
				</button>
				<a
					href="https://github.com/HyphenZero/simple-gadgets"
					target="_blank"
					rel="noopener noreferrer"
					className="focus:border-3 flex items-center justify-center rounded-lg border-2 border-slate-500 bg-white p-2 px-4 text-lg font-semibold text-slate-500 transition-colors hover:border-slate-900 hover:text-slate-900 focus:outline-none"
				>
					<FontAwesomeIcon icon={faGithub} className="h-7 w-7" />
				</a>
			</div>
		</div>
	)
}
