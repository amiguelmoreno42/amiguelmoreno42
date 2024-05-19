import { Moon, Sun } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { useEffect, useState } from 'react'

export function ModeToggle() {
	const [theme, setThemeState] = useState(() => {
		if (typeof window !== 'undefined') {
			return (
				localStorage.getItem('theme') ||
				(window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'theme-light')
			)
		}
		return 'system'
	})

	useEffect(() => {
		if (typeof window !== 'undefined') {
			const isDark =
				theme === 'dark' ||
				(theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches)
			document.documentElement.classList[isDark ? 'add' : 'remove']('dark')
			localStorage.setItem('theme', theme)
		}
	}, [theme])

	const toggleTheme = () => {
		setThemeState((prevTheme) => (prevTheme === 'dark' ? 'theme-light' : 'dark'))
	}

	return (
		<Button onClick={toggleTheme} className="absolute left-0 m-4" variant="outline" size="icon">
			<Sun className="dark:-rotate-90 dark:scale-0 absolute h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
			<Moon className="dark:rotate-0 dark:scale-100 absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all" />
		</Button>
	)
}
