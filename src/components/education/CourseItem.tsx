import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger
} from '@/components/ui/dialog'
import { Image } from 'astro:assets'

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
		<Dialog>
			<DialogTrigger className="dark:text-secondary">{course.title}</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Are you absolutely sure?</DialogTitle>
					<DialogDescription>
						<img src={course.imageEducation} width={500} height={500} alt={course.title}></img>
					</DialogDescription>
				</DialogHeader>
			</DialogContent>
		</Dialog>
	)
}
