import { useRouter } from "next/router"
import React, { useState, useEffect } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronLeft, faGear } from "@fortawesome/free-solid-svg-icons"
import { motion, AnimatePresence } from "framer-motion"
import Clock from "react-live-clock"

const clockVariants = {
	hidden: { opacity: 0, y: 20 },
	visible: { opacity: 1, y: 0 },
}

const linkVariants = {
	hidden: { opacity: 0 },
	visible: { opacity: 1 },
}

export default function ClockApp() {
	const router = useRouter()
	const [isVisible, setIsVisible] = useState(true)
	const [timezone, setTimezone] = useState("")

	useEffect(() => {
		setTimezone(Intl.DateTimeFormat().resolvedOptions().timeZone)
	}, [])

	const handleBackButton = () => {
		setIsVisible(false)
		setTimeout(() => {
			router.push("/select")
		}, 200)
	}

	return (
		<>
			<AnimatePresence>
				{isVisible && (
					<div class="fixed h-screen w-screen">
						<motion.div
							variants={clockVariants}
							initial="hidden"
							animate="visible"
							exit="hidden"
							className="flex h-screen w-screen items-center justify-center"
						>
							<div className="text-center">
								<Clock
									format={"h:mm A"}
									ticking={true}
									timezone={timezone}
									className="text-5xl font-bold text-slate-800 sm:text-6xl cursor-default"
								/>
							</div>
						</motion.div>

						<motion.button
							className="absolute flex h-12 w-12 top-7 left-7 items-center justify-center rounded-full bg-slate-700 font-bold text-white transition-colors hover:bg-slate-800"
							whileHover={{ scale: 1.25 }}
							whileTap={{ scale: 1.1 }}
							onClick={handleBackButton}
						>
							<FontAwesomeIcon icon={faChevronLeft} className="w-5 h-5"/>
						</motion.button>
					</div>
				)}
			</AnimatePresence>
		</>
	)
}
