import { projects42Info } from '@/assets/data/projects-42-info'
import { Accordion } from '@/components/ui/accordion'
import React from 'react'
import Project42Item from './Project42Item'

export default function Projects42Cont() {
	return (
		<Accordion type="single" collapsible className="rounded-lg bg-primary/90 text-secondary">
			{projects42Info.map((project) => {
				return (
					<Project42Item
						key={project.id}
						id={project.id}
						title={project.title}
						description={project.description}
						technologies={project.technologies}
						repoLink={project?.repoLink}
						cover={project.cover}
					/>
				)
			})}
		</Accordion>
	)
}
