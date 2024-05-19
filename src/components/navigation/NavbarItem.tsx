import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import LogoM from './LogoM'
import { FaBriefcase, FaCodeFork, FaSchool } from 'react-icons/fa6'
import { cn } from '@/lib/utils'

interface NavbarItemProps {
	path: string
	type?: string
	tooltipText: string
	active: boolean
}

export default function NavbarItem({ path, type, tooltipText, active }: NavbarItemProps) {
	return (
		<TooltipProvider delayDuration={400}>
			<Tooltip>
				<TooltipTrigger>
					<li>
						<a
							href={path}
							className={cn(
								'flex h-12 w-12  items-center justify-center rounded-sm bg-primary fill-secondary p-1.5  text-secondary [transition:all_0.4s] hover:bg-secondary hover:fill-primary hover:text-primary',
								active && 'bg-transparent fill-primary text-primary'
							)}
						>
							{type === 'svg' && <LogoM styles="h-full w-full  hover:fill-primary" />}
							{type === 'work' && <FaBriefcase className="h-7 w-7" />}
							{type === 'project' && <FaCodeFork className="h-7 w-7" />}
							{type === 'education' && <FaSchool className="h-7 w-7" />}
						</a>
					</li>
				</TooltipTrigger>
				<TooltipContent side="right" sideOffset={15}>
					<p>{tooltipText}</p>
				</TooltipContent>
			</Tooltip>
		</TooltipProvider>
	)
}
