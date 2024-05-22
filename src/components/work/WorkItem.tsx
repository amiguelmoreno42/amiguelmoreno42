import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger
} from '@/components/ui/dialog'
import { Info } from 'lucide-react'

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
			<DialogTrigger className="flex items-center gap-4 rounded-sm bg-primary/20 p-2 pr-4 ">
				<img
					src={work.imageCompany}
					width={100}
					alt={work.institution}
					className="rounded-sm bg-white p-1"
				/>
				<div className="flex w-full items-center justify-between">
					<p>{work.title}</p>
					<div className="flex items-center gap-3">
						<p className="text-xs font-extralight">{work.duration}</p>
						<Info className="h-5 w-5" />
					</div>
				</div>
			</DialogTrigger>
			<DialogContent className="h-[500px] bg-secondary pr-0">
				<DialogHeader>
					<DialogTitle className="pb-4 font-normal">{work.title}</DialogTitle>
					<DialogDescription className="max-h-[430px] w-full overflow-y-scroll px-4 pr-8">
						<div className="mb-8 flex flex-col gap-5">
							<div className="flex gap-5">
								<img
									src={work.imageCompany}
									width={150}
									alt={work.title}
									className="rounded-sm bg-white object-contain p-2 "
								></img>
								<div className="flex flex-col gap-2">
									<p className="text-xs font-light">
										Duration: <span className="pl-1 text-sm font-normal">{work.duration}</span>
									</p>
									<p className="text-xs font-light">
										Company: <span className="pl-1 text-sm font-normal">{work.institution}</span>
									</p>
									<p className="text-xs font-light">
										Date: <span className="pl-1 text-sm font-normal">{work.date}</span>
									</p>
								</div>
							</div>
							<p className="my-6 text-xs font-light">{work.description}</p>
							<div className="flex flex-col gap-5 ">
								<h4>What did I do?</h4>
								<div className="flex flex-col gap-2 pl-3 text-xs font-light">
									{work.skills.map((skill, i) => (
										<p key={i}>- {skill}</p>
									))}
								</div>{' '}
							</div>
						</div>
					</DialogDescription>
				</DialogHeader>
			</DialogContent>
		</Dialog>
	)
}
