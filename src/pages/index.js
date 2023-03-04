import { useState } from "react"
import { useRouter } from "next/router"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { motion, AnimatePresence } from "framer-motion"

const outerVariants = {
	hidden: { opacity: 0 },
	visible: { opacity: 1 },
}

const itemVariants = {
	hidden: { opacity: 0, y: 20 },
	visible: { opacity: 1, y: 0 },
}

export default function Greeting() {
	const router = useRouter()
	const [isVisible, setIsVisible] = useState(true)

	const handleOpenButton = () => {
		setIsVisible(false)
		setTimeout(() => {
			router.push("/select")
		}, 300)
	}

	return (
		<AnimatePresence>
			{isVisible && (
				<motion.div
					key="greeting"
					initial={{ opacity: 1 }}
					animate="visible"
					exit="hidden"
					variants={outerVariants}
					className="flex h-screen w-screen items-center justify-center bg-slate-100"
				>
					<motion.div
						key="content"
						initial="hidden"
						animate="visible"
						exit="hidden"
						variants={itemVariants}
						className="mx-4 h-fit max-w-md items-center justify-center rounded-xl border border-slate-200 bg-white px-12 py-12 shadow-xl sm:mx-0"
					>
						<h1 className="mb-4 text-center text-4xl font-bold cursor-default">
							Simple Gadgets
						</h1>
						<p className="mb-8 text-center text-lg text-gray-600 cursor-default">
							A collection of simple but useful tools to enhance your everyday
							adventures.
						</p>
						<div className="flex justify-center space-x-3">
							<button
								onClick={handleOpenButton}
								className="flex cursor-pointer items-center justify-center rounded-lg bg-sky-500 px-6 py-2 text-lg font-semibold text-white transition-colors hover:bg-sky-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2"
							>
								Get Started
							</button>
							<a
								href="https://github.com/HyphenZero/simple-gadgets"
								target="_blank"
								rel="noopener noreferrer"
								className="focus:border-3 flex items-center justify-center rounded-lg border-2 border-slate-600 bg-white p-2 px-4 text-lg font-semibold text-slate-600 transition-colors hover:bg-slate-200/75 focus:outline-none focus-visible:ring-4"
							>
								<FontAwesomeIcon icon={faGithub} className="h-7 w-7" />
							</a>
						</div>
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>
	)
}
