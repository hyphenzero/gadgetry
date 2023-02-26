import React, { Fragment } from 'react';
import Head from 'next/head'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons'
import { Dialog, Transition } from '@headlessui/react';
import Greeting from './greeting'

const gadgets = [
	{
		name: 'Dummy App 01',
		link: "#",
		class: 'flex justify-center items-center h-64 w-64 bg-sky-200 shadow-xl rounded-3xl border-2 border-sky-300',
		icon: <FontAwesomeIcon icon={faScrewdriverWrench} className="w-24 h-24 text-sky-700" />,
	},
	{
		name: 'Dummy App 02',
		link: "#",
		class: 'flex justify-center items-center h-64 w-64 bg-red-200 shadow-xl rounded-3xl border-2 border-red-300',
		icon: <FontAwesomeIcon icon={faScrewdriverWrench} className="w-24 h-24 text-red-700/90" />,
	},
	{
		name: 'Dummy App 03',
		link: "#",
		class: 'flex justify-center items-center h-64 w-64 bg-green-200 shadow-xl rounded-3xl border-2 border-green-400',
		icon: <FontAwesomeIcon icon={faScrewdriverWrench} className="w-24 h-24 text-green-700" />,
	},
]

function SlideDots({ currentSlide, length }: { currentSlide: number, length: number }) {
	const dots: JSX.Element[] = [];
	for (let i = 0; i < length; i++) {
		dots.push(
			<div
				key={i}
				className={`w-3 h-3 rounded-full mx-1 ${currentSlide === i ? 'bg-slate-500' : 'bg-slate-300'
					}`}
			/>
		);
	}
	return <div className="flex">{dots}</div>;
}

function Gadgets() {
	const [currentSlide, setCurrentSlide] = useState(0)

	const goToNextSlide = () => {
		setCurrentSlide((currentSlide + 1) % gadgets.length)
	}

	const goToPreviousSlide = () => {
		setCurrentSlide(
			currentSlide === 0 ? gadgets.length - 1 : currentSlide - 1
		)
	}

	const [isOpen, setIsOpen] = useState(true);

  function closeModal() {
    setIsOpen(false);
	}

	return (
		<>
			<Head>
				<title>Simple Gadgets</title>
			</Head>

			<Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeModal}
        >
          <div className="min-h-screen flex flex-col justify-center items-center">
            <Dialog.Overlay className="fixed inset-0 bg-black/30" />

            <div className="relative">
							<Greeting closeModal={closeModal} />
						</div>
          </div>
        </Dialog>
      </Transition>

			<div className="min-h-screen flex flex-col justify-center items-center">
				<div className="relative max-w-2xl space-y-12  w-full">

					<div className="flex justify-center">
						<h1 className="text-3xl font-bold text-slate-900">{gadgets[currentSlide].name}</h1>
					</div>

					<div className="flex justify-center items-center">
						<div className={gadgets[currentSlide].class}>
							{gadgets[currentSlide].icon}
						</div>
					</div>

					<div className="flex justify-center items-center">
						<SlideDots currentSlide={currentSlide} length={gadgets.length} />
					</div>

					<div className="w-full h-full flex justify-center">
						<a target="_blank" rel="noopener noreferrer" className="text-white px-6 py-2 bg-sky-400/40 rounded-lg text-lg font-semibold cursor-not-allowed">
							Open
						</a>
					</div>

					<div className="absolute bottom-1/2 mb-1/2 left-0 w-full flex justify-between p-4">
						<button
							className="w-10 h-10 flex justify-center items-center bg-slate-600 text-white font-bold rounded-full hover:bg-gray-700 transition-colors"
							onClick={goToPreviousSlide}
						>
							←
						</button>

						<button
							className="w-10 h-10 flex justify-center items-center bg-slate-600 text-white font-bold rounded-full hover:bg-gray-700 transition-colors"
							onClick={goToNextSlide}
						>
							→
						</button>
					</div>
				</div>
			</div>
		</>
	)
}

export default function Home() {
	return <React.Suspense fallback={<div>Loading...</div>}><Gadgets /></React.Suspense>;
}