import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger
} from '@/components/ui/dialog'

interface WorkProps {
	id: number
	title: string
	institution: string
	date: string
	duration: string
	description: string
	skills: string[]
	imageCompany: string
}

export default function WorkItem({ work }: { work: WorkProps }) {
	return (
		<Dialog key={work.id}>
			<DialogTrigger>{work.title}</DialogTrigger>
			<DialogContent className="h-[500px]">
				<DialogHeader>
					<DialogTitle>Are you absolutely sure?</DialogTitle>
					<DialogDescription>
						<div className="flex max-h-[400px] flex-col gap-5 overflow-y-scroll">
							<img src={work.imageCompany} width={500} height={500} alt={work.title}></img>
							<p>Title: {work.title}</p>
							<p>Institution: {work.institution}</p>
							<p>date: {work.date}</p>
							<p>duration: {work.duration}</p>
							<p>description: {work.description}</p>
							<div className="flex flex-col gap-5">
								{work.skills.map((skill, i) => (
									<p key={i}>{skill}</p>
								))}
							</div>
						</div>
					</DialogDescription>
				</DialogHeader>
			</DialogContent>
		</Dialog>
	)
}
