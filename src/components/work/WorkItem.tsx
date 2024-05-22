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
			<DialogTrigger className="flex flex-col items-center gap-6 rounded-sm bg-primary/10 p-2  pr-4 md:flex-row">
				<img
					src={work.imageCompany}
					width={150}
					alt={work.institution}
					className="rounded-sm bg-white p-1"
				/>
				<div className="flex w-full flex-col items-center justify-center gap-4 md:flex-row md:justify-between md:gap-[unset]">
					<p className="text-xl">{work.title}</p>
					<div className="flex items-center gap-3">
						<p className="text-base font-light">{work.duration}</p>
						<Info className="h-5 w-5" />
					</div>
				</div>
			</DialogTrigger>
			<DialogContent className="h-[700px] w-[90%] rounded-sm bg-secondary pr-0 sm:h-[500px] md:w-[700px]">
				<DialogHeader>
					<DialogTitle className="pb-4 text-2xl font-normal">{work.title}</DialogTitle>
					<DialogDescription className="max-h-[610px] w-full overflow-y-scroll px-4 pr-8 sm:max-h-[410px]">
						<div className="mb-8 flex flex-col gap-5">
							<div className="flex flex-col items-center gap-6 sm:flex-row">
								<img
									src={work.imageCompany}
									width={250}
									alt={work.title}
									className="rounded-sm bg-white object-contain p-2 "
								></img>
								<div className="flex flex-col gap-2">
									<p className="text-base font-light">
										Duration: <span className="pl-1 text-base font-normal">{work.duration}</span>
									</p>
									<p className="text-base font-light">
										Company: <span className="pl-1 text-base font-normal">{work.institution}</span>
									</p>
									<p className="text-base font-light">
										Date: <span className="pl-1 text-base font-normal">{work.date}</span>
									</p>
								</div>
							</div>
							<p className="my-6 text-base font-light">{work.description}</p>
							<div className="flex flex-col gap-5 ">
								<h4 className="text-xl">What did I do?</h4>
								<div className="flex flex-col gap-2 pl-3 text-base font-light">
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
