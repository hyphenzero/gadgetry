import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

export default function Greeting({ closeModal }) {
	return (
		<div className="h-screen w-screen bg-transparent flex justify-center items-center">
			<div className="bg-white justify-center items-center rounded-xl shadow-xl h-fit max-w-md px-12 py-12">
				<h1 className="text-4xl font-bold text-center mb-4">Simple Gadgets</h1>
				<p className="text-lg text-gray-600 text-center mb-8">
					A collection of simple but useful tools to enhance your everyday adventures.
				</p>
				<div className="flex justify-center space-x-3">
					<button
						onClick={closeModal}
						className="text-white flex justify-center items-center px-6 py-2 bg-sky-500 rounded-lg text-lg font-semibold hover:bg-sky-600 transition-colors cursor-pointer focus:outline-none"
						tabIndex={-1}
					>
						Get Started
					</button>
					<a href="https://github.com/HyphenZero/simple-gadgets" target="_blank" rel="noopener noreferrer" className="text-slate-500 flex justify-center items-center hover:text-slate-900 px-4 p-2 bg-white rounded-lg border-2 focus:border-3 border-slate-500 hover:border-slate-900 text-lg font-semibold transition-colors">
						<FontAwesomeIcon icon={faGithub} className="w-7 h-7" />
					</a>
				</div>
			</div>
		</div>
	);
}