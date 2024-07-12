import { cn } from '@/lib/utils'
import { useEffect, useState } from 'react'

const getWidth = () =>
	window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth

const ScreenWidth = () => {
	const [width, setWidth] = useState(getWidth())

	useEffect(() => {
		const handleResize = () => setWidth(getWidth())

		window.addEventListener('resize', handleResize)
		return () => window.removeEventListener('resize', handleResize)
	}, [])

	console.log(width)

	return width
}

export default function VideoPlayer({
	className,
	videoId
}: {
	className?: string
	videoId: string
}) {
	const maxWidth = 1920
	const maxVideoWidth = 1000
	let displayWidth = ScreenWidth()
	const videoWidth = Math.min(
		displayWidth > maxWidth ? maxVideoWidth : displayWidth * 0.8,
		maxVideoWidth
	)

	const height = videoWidth / 1.78

	return (
		<div className="aspect-w-16 aspect-h-9 rounded-lg border-2">
			<iframe
				className={cn('rounded-md', className)}
				width={videoWidth}
				height={height}
				src={`https://www.youtube.com/embed/${videoId}?rel=0&autoplay=1&modestbranding=1`}
				title="YouTube video player"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				allowFullScreen
			></iframe>
		</div>
	)
}
