import TechElement from './TechElement'
import { Crown, SquareMousePointer, Trophy } from 'lucide-react'

interface ProjectItemProps {
	id: number
	title: string
	topProjects: boolean
	description: string
	technologies: string[]
	repoLink?: string
	deployLink?: string
	cover: string
}

export default function ProjectItem({
	id,
	title,
	cover,
	technologies,
	topProjects
}: ProjectItemProps) {
	return (
		<a
			href={`/projects/${id}`}
			className=" relative flex flex-col gap-3 overflow-hidden rounded-sm bg-primary/90 p-2 text-secondary transition-all hover:font-bold"
		>
			{topProjects === true && (
				<div className="absolute right-0 top-0 z-50 flex h-6 items-center justify-center gap-1 rounded-bl-sm bg-yellow-300 p-1 text-blue-950">
					<Crown className="h-4 min-w-4" />
					<span className=" w-8 text-base">TOP</span>
				</div>
			)}

			<div className="relative">
				<div className="overflow-hidden rounded-sm shadow">
					<img
						src={cover}
						alt={title}
						className=" transition-transform duration-300 ease-in-out hover:scale-125"
					/>
				</div>
				<div className="absolute -bottom-5 right-1 mb-2 flex w-fit flex-wrap items-center gap-2 rounded-sm bg-white p-1 shadow-xl">
					{technologies.map((tech) => (
						<TechElement tech={tech} key={tech} />
					))}
				</div>
			</div>
			<div className="mt-4 flex items-center justify-between">
				<h3 className="ml-1 text-xl">{title}</h3>
				<SquareMousePointer className="h-6 w-6 rounded-sm p-0.5 transition-all duration-500 hover:bg-secondary hover:text-primary" />
			</div>
		</a>
	)
}
