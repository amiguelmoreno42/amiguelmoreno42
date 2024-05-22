export default function shadcnSvg({ width = 40, height = 40, fill = 'none' }) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={width}
			height={height}
			fill={fill}
			viewBox="0 0 256 256"
			className="rounded-sm bg-black text-white dark:bg-black"
		>
			<rect width="256" height="256" fill="none"></rect>
			<line
				x1="208"
				y1="128"
				x2="128"
				y2="208"
				fill="none"
				stroke="currentColor"
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="16"
			></line>
			<line
				x1="192"
				y1="40"
				x2="40"
				y2="192"
				fill="none"
				stroke="currentColor"
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="16"
			></line>
		</svg>
	)
}
