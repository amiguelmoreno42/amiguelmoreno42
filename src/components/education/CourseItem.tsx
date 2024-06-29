import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger
} from '@/components/ui/dialog'
import { cn } from '@/lib/utils'
import { Info, Link, ReceiptText, Star } from 'lucide-react'

interface CourseProps {
	id: number
	title: string
	institution: string
	date: string
	duration?: string
	description: string
	skills: string[]
	imageInstitution: string
	topEducation?: boolean
	imageEducation: string
	certification?: string
}

export default function CourseItem({ course }: { course: CourseProps }) {
	return (
		<Dialog key={course.id}>
			<DialogTrigger
				className={cn(
					'group relative flex w-full items-center justify-between rounded-sm bg-primary/10 p-2 pl-4 ',
					course.topEducation === true && 'border-2 border-yellow-400'
				)}
			>
				{course.topEducation === true && (
					<Star className="absolute left-0 top-0 h-5 w-5 -translate-x-1/2 -translate-y-1/2 fill-yellow-400 text-primary/10" />
				)}

				<p className="text-base font-light group-hover:font-normal md:text-xl">{course.title}</p>

				<div className="flex items-center gap-2 text-xs">
					<p className="hidden text-sm font-normal sm:block md:text-xs">More Details</p>
					<ReceiptText />
				</div>
			</DialogTrigger>
			<DialogContent className="h-[500px] w-[90%] rounded-sm bg-secondary pr-0 md:h-[700px]   md:w-[700px]">
				<DialogHeader>
					<DialogTitle className="pb-4 text-xl font-normal md:text-2xl ">
						{course.title}
					</DialogTitle>
					<DialogDescription className="max-h-[410px] w-full overflow-y-scroll scroll-smooth px-4 pr-8 scrollbar-hide md:max-h-[610px] ">
						<div className="mb-8 flex flex-col gap-5">
							<div className="flex flex-col items-center gap-6  sm:flex-row ">
								<div className="relative w-fit shadow-md">
									<img
										src={course.imageEducation}
										width={250}
										alt={course.title}
										className="rounded-sm"
									></img>
									<img
										className="absolute -bottom-1 -right-1 rounded-sm bg-white p-1 shadow-md"
										src={course.imageInstitution}
										width={70}
										alt={course.title}
									></img>
								</div>
								<div className="flex flex-col gap-2">
									<p className="text-base font-light">
										Duration: <span className="text-base font-normal">{course.duration}</span>
									</p>
									<p className="text-base font-light">
										Institution: <span className="text-base font-normal">{course.institution}</span>
									</p>
									{course.certification && (
										<a
											href={course.certification}
											target="_blank"
											className="mt-3 flex  items-center justify-center gap-1 text-base font-normal hover:underline"
										>
											<Link className="h-4 w-4" />
											<p>Certification link</p>
										</a>
									)}
								</div>
							</div>
							<p className="my-6 text-base font-light">{course.description}</p>

							<div className="flex flex-col gap-5 ">
								<h4 className="text-xl">What did I learn in this course?</h4>

								<div className="flex flex-col gap-2 pl-3 text-base font-light">
									{course.skills.map((skill, i) => (
										<p key={i}>- {skill}</p>
									))}
								</div>
							</div>
						</div>
					</DialogDescription>
				</DialogHeader>
			</DialogContent>
		</Dialog>
	)
}
