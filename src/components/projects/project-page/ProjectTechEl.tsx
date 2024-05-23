import ReactSvg from '@/assets/svgs/technologies/react-svg.tsx'
import HtmlSVG from '@/assets/svgs/technologies/html-svg.tsx'
import CssSvg from '@/assets/svgs/technologies/css-svg.tsx'
import JavascriptSvg from '@/assets/svgs/technologies/javascript-svg.tsx'
import StorybookSvg from '@/assets/svgs/technologies/storybook-svg.tsx'
import ShadcnSvg from '@/assets/svgs/technologies/shadcn-svg.tsx'
import TypescriptSvg from '@/assets/svgs/technologies/typescript-svg'
import NextjsSvg from '@/assets/svgs/technologies/nextjs-svg.tsx'
import StyledCompSvg from '@/assets/svgs/technologies/styled-components-svg.tsx'
import ClerkSvg from '@/assets/svgs/technologies/clerk-svg'
import SocketioSvg from '@/assets/svgs/technologies/socketio-svg.tsx'
import PrismaSvg from '@/assets/svgs/technologies/prisma-svg.tsx'
import SassSvg from '@/assets/svgs/technologies/sass-svg.tsx'
import TailwindSvg from '@/assets/svgs/technologies/tailwind-svg.tsx'
import ReactQuerySvg from '@/assets/svgs/technologies/react-query-svg.tsx'

export default function ProjectTechEl({ tech }: { tech: string }) {
	const width = 30
	const height = 30

	return (
		<div className="flex flex-1 flex-col items-center gap-2 rounded-sm  bg-white p-2 px-4">
			{tech === 'react' && <ReactSvg width={width} height={height} />}
			{tech === 'html' && <HtmlSVG width={width} height={height} />}
			{tech === 'css' && <CssSvg width={width} height={height} />}
			{tech === 'javascript' && <JavascriptSvg width={width} height={height} />}
			{tech === 'sass' && <SassSvg width={width} height={height} />}
			{tech === 'styled-components' && <StyledCompSvg width={width} height={height} />}
			{tech === 'react-query' && <ReactQuerySvg width={width} height={height} />}
			{tech === 'tailwind' && <TailwindSvg width={width} height={height} />}
			{tech === 'nextjs' && <NextjsSvg width={width} height={height} />}
			{tech === 'prisma' && <PrismaSvg width={width} height={height} />}
			{tech === 'clerk' && <ClerkSvg width={width} height={height} />}
			{tech === 'typescript' && <TypescriptSvg width={width} height={height} />}
			{tech === 'storybook' && <StorybookSvg width={width} height={height} />}
			{tech === 'shadcnui' && <ShadcnSvg width={width} height={height} />}
			{tech === 'socketio' && <SocketioSvg width={width} height={height} />}
			<p className="text-sm text-black">{tech[0].toUpperCase().concat(tech.slice(1))}</p>
		</div>
	)
}
