import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger
} from '@/components/ui/dialog'

interface CourseProps {
	id: number
	title: string
	institution: string
	date: string
	duration?: string
	description: string
	skills: string[]
	imageInstitution: string
	imageEducation: string
	certification?: string
}

export default function CourseItem({ course }: { course: CourseProps }) {
	return (
		<Dialog key={course.id}>
			<DialogTrigger className="dark:text-secondary">{course.title}</DialogTrigger>
			<DialogContent className="h-[500px]">
				<DialogHeader>
					<DialogTitle>{course.title}</DialogTitle>
					<DialogDescription className="max-h-[430px] overflow-y-scroll">
						<div className="flex flex-col gap-5 ">
							<img src={course.imageEducation} width={200} alt={course.title}></img>
							<img src={course.imageInstitution} width={50} alt={course.title}></img>
							<p>Title: {course.title}</p>
							<p>Institution: {course.institution}</p>
							<p>date: {course.date}</p>
							<p>duration: {course.duration}</p>
							<p>description: {course.description}</p>
							<div className="flex flex-col gap-5">
								skills:
								{course.skills.map((skill) => (
									<p>{skill}</p>
								))}
							</div>
						</div>
					</DialogDescription>
				</DialogHeader>
			</DialogContent>
		</Dialog>
	)
}
