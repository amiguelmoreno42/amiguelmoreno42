import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger
} from '@/components/ui/accordion'
import { SquareMousePointer } from 'lucide-react'

interface Project42ItemProps {
	id: number
	title: string
	description: string
	technologies: string[]
	repoLink?: string
	cover: string
}

export default function Project42Item({
	id,
	title,
	repoLink,
	cover,
	description
}: Project42ItemProps) {
	return (
		<AccordionItem value={`item-${id}`}>
			<AccordionTrigger className="rounded-lg px-4 font-normal hover:font-bold  data-[state=open]:font-bold">
				{title}
			</AccordionTrigger>
			<AccordionContent className="flex gap-5 p-4">
				<div className="h-32 min-w-fit">
					<img src={cover} alt={title} className="h-32 rounded-sm object-cover"></img>
				</div>
				<div className="flex flex-col justify-between">
					<p className="mt-2 text-base font-light">{description}</p>

					<a
						href={repoLink}
						target="_blank"
						className="mt-8 flex items-center gap-2 self-end rounded-sm bg-secondary/15 p-2 transition hover:bg-secondary hover:text-primary"
					>
						<SquareMousePointer className="h-5 w-5" />
						<p>Go to repo</p>
					</a>
				</div>
			</AccordionContent>
		</AccordionItem>
	)
}
