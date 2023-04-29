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
		<div className="fixed h-screen w-screen bg-white dark:bg-slate-950">
			<AnimatePresence>
				{isVisible && (
					<motion.div
						key="greeting"
						initial={{ opacity: 1 }}
						animate="visible"
						exit="hidden"
						variants={outerVariants}
						className="flex h-screen w-screen items-center justify-center bg-slate-100 dark:bg-slate-950"
					>
						<motion.div
							key="content"
							initial="hidden"
							animate="visible"
							exit="hidden"
							variants={itemVariants}
							className="mx-4 h-fit max-w-md items-center justify-center rounded-xl border border-slate-200 bg-white px-12 py-12 shadow-2xl dark:border-slate-800 dark:bg-slate-900/60 sm:mx-0"
						>
							<h1 className="mb-4 cursor-default text-center text-4xl font-bold text-slate-950 dark:text-white">
								Gadgetry
							</h1>
							<p className="mb-8 cursor-default text-center text-lg text-slate-600 dark:text-slate-400">
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
									href="https://github.com/HyphenZero/gadgetry"
									target="_blank"
									rel="noopener noreferrer"
									className="focus:border-3 flex items-center justify-center rounded-lg border-2 border-slate-600 bg-transparent p-2 px-4 text-slate-600 transition-colors hover:bg-slate-200/75 focus:outline-none focus-visible:ring-4 dark:border-slate-400 dark:text-slate-400 dark:hover:bg-slate-700/75"
								>
									<FontAwesomeIcon icon={faGithub} className="h-7 w-7" />
								</a>
							</div>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	)
}
