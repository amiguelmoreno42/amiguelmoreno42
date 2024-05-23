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
		<Button
			onClick={toggleTheme}
			size="icon"
			className="fixed -left-1 -top-1  h-12 w-12 border-2 lg:m-4 lg:border-primary"
		>
			<Sun className="absolute h-[1.6rem] w-[1.6rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
			<Moon className="absolute h-[1.6rem] w-[1.6rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
		</Button>
	)
}
