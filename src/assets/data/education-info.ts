import { date } from 'astro/zod'

export const educationInfo = [
	{
		id: 1,
		title: 'Platzi Bootcamp',
		institution: 'Platzi',
		date: 'Aug 2020 - Jan 2022',
		duration: '200 hours',
		description:
			'Throughout my work experience, I discovered the motivation and enthusiasm to delve into web development during my free time. I   started a self-taught journey, dedicating time to explore and understand essential technologies such as HTML, CSS, Git, GitHub, JavaScript and more.',
		skills: [
			'Basic JavaScript Course.',
			'CSS Grid Layout Course.',
			'HTML and CSS Course.',
			'Responsive Design: First Mobile Layouts Course.',
			'Git and GitHub Course.'
		],
		imageInstitution: import.meta.env.BASE_URL + '../../education/logos/platzi-logo.png',
		imageEducation: import.meta.env.BASE_URL + '../../education/covers/platzi.png'
	},
	{
		id: 2,
		title: 'HTML and CSS',
		institution: 'Udemy',
		date: 'Sep 2021',
		duration: '38 hours',
		certification: 'https://www.udemy.com/certificate/UC-bfefdf28-d891-4acd-b7ac-2804b687d59c/',
		description: 'Learn how to make stunning websites with modern HTML5, CSS3 and web design.',
		skills: [
			'Modern, semantic and accessible HTML5.',
			'Important CSS concepts such as the box model, positioning schemes, inheritance, flexbox, CSS Grid, selector conflicts, etc.',
			'How to plan, sketch, design, build, test, and optimize a professional website.',
			'How to make websites work on every possible mobile device (responsive design).',
			'Developer skills such as reading documentation, debugging, and using professional tools.'
		],
		imageInstitution: import.meta.env.BASE_URL + '../../education/logos/udemy-logo.svg.png',
		imageEducation: import.meta.env.BASE_URL + '../../education/covers/html-css.png'
	},
	{
		id: 3,
		title: 'Advanced CSS and Sass',
		institution: 'Udemy',
		date: 'Oct 2021',
		duration: '28 hours',
		certification: 'https://www.udemy.com/certificate/UC-3ca936d7-92bf-45df-b580-b835049d442e/',
		description:
			'In this course I learned how to use the most advanced and modern CSS, mastering flexbox, CSS Grid, responsive design and more.',
		skills: [
			'Using Sass in real-world projects: global variables, architecting CSS, managing media queries, etc.',
			'Responsive images in HTML and CSS for faster pageloads.',
			'How CSS works behind the scenes: the cascade, specificity, inheritance, etc.',
			'Advanced responsive design: media queries, mobile-first vs desktop-first, em vs rem units, etc.',
			'Advanced CSS animations with @keyframes, animation and transition.',
			'CSS Grid layouts and Flexbox layouts.'
		],
		imageInstitution: import.meta.env.BASE_URL + '../../education/logos/udemy-logo.svg.png',
		imageEducation: import.meta.env.BASE_URL + '../../education/covers/css-sass.png'
	},

	{
		id: 4,
		title: 'JavaScript',
		institution: 'Udemy',
		date: 'Dic 2021 - Mar 2022 ',
		duration: '69 hours',
		certification: 'https://www.udemy.com/certificate/UC-26c7140b-6041-4aac-afd2-6cb8b1bc0f79/',
		description:
			"The course's primary objetive is to master JavaScript with projects, challenges and theory.",
		skills: [
			'JavaScript fundamentals: variables, if/else, operators, boolean logic, functions, arrays, objects, loops, strings, etc.',
			'Modern OOP: Classes, constructors, prototypal inheritance, encapsulation, etc.',
			'Asynchronous JavaScript: Event loop, promises, async/await, AJAX calls and APIs.',
			'NPM, Parcel, Babel and ES6 modules.',
			'How to think and work like a developer: problem-solving, researching, workflows',
			'Modern ES6+ from the beginning: arrow functions, destructuring, spread operator, optional chaining (ES2020), etc.',
			'How to architect your code using flowcharts and common patterns.'
		],
		imageInstitution: import.meta.env.BASE_URL + '../../education/logos/udemy-logo.svg.png',
		imageEducation: import.meta.env.BASE_URL + '../../education/covers/javascript.png'
	},
	{
		id: 5,
		title: 'Digital Marketing and SEO',
		institution: 'Incyde Fundation',
		date: 'Sep 2021 - Nov 2021',
		duration: '80 hours',
		description:
			"The course's primary objective was to impart a comprehensive understanding of diverse business functions, empowering individuals to discern market opportunities and formulate effective Business Plans. As a Front-End web developer, the focus was on utilizing management tools to enhance project implementation strategies.",
		skills: [
			'Introduction to Web Development and Gamification.',
			'Digital Marketing and Finance - SEO, SEM, SMO, and ASO.',
			'Gamification Solutions and Soft Skills.',
			'Create a WordPress E-commerce website.'
		],
		imageInstitution: import.meta.env.BASE_URL + '../../education/logos/incyde-logo.png',
		imageEducation: import.meta.env.BASE_URL + '../../education/covers/marketing-front.webp'
	},
	{
		id: 6,
		title: 'Git & Github Bootcamp',
		institution: 'Udemy',
		date: 'Oct 2022',
		duration: '17 hours',
		certification: 'https://www.udemy.com/certificate/UC-e8a35d61-e4e5-42c5-baff-ea219a30f899/',
		description:
			'I learned the essentials of Git and GitHub, mastering actions like adding, pushing, committing, rebasing, squashing, stashing, exploring reflogs, and more.',
		skills: [
			'Understand how Git works behind the scenes.',
			'Master the essential Git workflow: adding & committing.',
			'Work with local and remote repositories.',
			'Perform Git merges and resolve merge conflicts.',
			'Create markdown READMEs.',
			'Retrieve "lost" work using git reflogs.',
			'Work with Git branches.',
			'Undo changes using git restore, git revert, and git reset.'
		],
		imageInstitution: import.meta.env.BASE_URL + '../../education/logos/udemy-logo.svg.png',
		imageEducation: import.meta.env.BASE_URL + '../../education/covers/git-github.png'
	},
	{
		id: 7,
		title: 'Coding Campus 42 Malaga',
		institution: '42 Malaga Telefonica',
		topEducation: true,
		duration: '1 year 10 months',
		date: 'Feb 2022 - Dec 2023',
		description:
			"At 42 Malaga, education transcends traditional classrooms. It's a full immersion into exciting challenges and hands-on projects. As a campus student, I've developed solid skills in development and coding within a collaborative and innovative environment. This unique experience has equipped me to stand out in the tech world, going beyond conventional forms of learning.",
		skills: [
			"Collaborative Development: I've developed my skills in collaborative development, working in teams on challenging projects.",
			'Problem Solving: Training at 42 Málaga has equipped me with strong problem-solving skills, tackling complex programming challenges.',
			"Advanced Programming: I've gained advanced knowledge in coding, covering key topics and concepts for software development.",
			"Innovation in Projects: Through practical projects, I've learned to apply innovation in developing creative and effective solutions.",
			"Proficient Tool Usage: I've developed a proficient ability in using various tools and essential technologies in the tech field.",
			'Self-Learning: 42 Malaga has fostered my ability to learn independently, promoting autonomy in acquiring new knowledge.',
			'Technological Community: This experience has connected me with a vibrant technological community, providing networking opportunities and continuous learning.',
			"Technological Adaptability: I've developed the ability to quickly adapt to new technologies and methodologies in constant evolution.",
			"Code Optimization: I've improved code optimization techniques to create efficient and high-performance solutions.",
			'Emphasis on Best Practices: know the importance of following best development practices, such as version control usage and effective documentation.'
		],
		imageInstitution: import.meta.env.BASE_URL + '../../education/logos/42Malaga-logo.png',
		imageEducation: import.meta.env.BASE_URL + '../../education/covers/42malaga.png'
	},
	{
		id: 8,
		title: 'React',
		institution: 'Udemy',
		date: 'Oct 2023 - Jan 2024',
		duration: '67 hours',
		certification: 'https://www.udemy.com/certificate/UC-9313b7cb-2d4b-4aad-9276-f97e3221682d/',
		description:
			'In this course I learned how to work with React, covering the Context API, React Query, Redux Toolkit, Tailwind, advanced patterns, and more.',
		skills: [
			'React fundamentals: components, JSX, props, events, state, forms.',
			'State management: thinking about state, where to place, local vs. global, UI vs. remote.',
			'Master the confusing but important useEffect hook once and for all.',
			'Build single-page applications with React Router.',
			'Advanced React features: useReducer, Context API, cloneElement, portals, etc.',
			'Style apps with Tailwind CSS, CSS Modules and Styled Components.',
			'Build reusable, composable, and versatile components.',
			'Understand how React actually works behind the scenes: virtual DOM, reconciliation, fiber tree, key prop, etc.'
		],
		imageInstitution: import.meta.env.BASE_URL + '../../education/logos/udemy-logo.svg.png',
		imageEducation: import.meta.env.BASE_URL + '../../education/covers/react.jpeg'
	},
	{
		id: 9,
		title: 'Typescript',
		institution: 'Udemy',
		date: 'May 2024',
		duration: '15 hours',
		certification: 'https://www.udemy.com/certificate/UC-fc252add-1316-4724-bdcd-64ab2160cd3f/',
		description:
			'In this course I learned how to work with TypeScript, learning features like types, interfaces, classes...',
		skills: [
			'Use TypeScript and its Features like Types, ES6 Support, Classes, Modules, Interfaces and more.',
			'Understand what TypeScript really is about and how it works.',
			'Why TypeScript offers a real advantage over vanilla JavaScript.',
			'Learn TypeScript both in theory as well as applied to real use-cases and projects.',
			'How to combine TypeScript with ReactJS or NodeJS / Express.'
		],
		imageInstitution: import.meta.env.BASE_URL + '../../education/logos/udemy-logo.svg.png',
		imageEducation: import.meta.env.BASE_URL + '../../education/covers/typescript.jpg'
	},
	{
		id: 10,
		title: 'GitHub Actions',
		institution: 'Udemy',
		date: 'Jun 2024',
		duration: '11 hours',
		certification: 'https://www.udemy.com/certificate/UC-3c3ee082-9349-4690-8fb1-950d20c27fcd/',
		description:
			"In this course I learned how to build automated CI / CD workflows with GitHub's DevOps service.",
		skills: [
			'Use GitHub Actions to build automated workflows & processes.',
			'Run simple and complex workflows on a broad variety of triggers.',
			'Build powerful CI / CD workflows, including runtime configuration, security and conditional execution.',
			'Use environment variables and secrets in workflows.'
		],
		imageInstitution: import.meta.env.BASE_URL + '../../education/logos/udemy-logo.svg.png',
		imageEducation: import.meta.env.BASE_URL + '../../education/covers/github-actions.jpg'
	},
	{
		id: 11,
		title: 'Jest and React Testing Library',
		institution: 'Udemy',
		date: 'Jun 2024',
		duration: '8 hours',
		certification: 'https://www.udemy.com/certificate/UC-de9487af-daf0-40dc-9a02-c6cf0ebc7004/',
		description: 'In this course I learned how to test apps using Jest and React Testing Library.',
		skills: [
			'Testing and finding elements in the DOM with query functions.',
			'Matchers in Jest.',
			'Handling data fetching with tests.',
			'Testing Authentication.'
		],
		imageInstitution: import.meta.env.BASE_URL + '../../education/logos/udemy-logo.svg.png',
		imageEducation: import.meta.env.BASE_URL + '../../education/covers/jest-rtl.jpeg'
	},
	{
		id: 12,
		title: 'MySQL',
		institution: 'Udemy',
		date: 'Jun 2024',
		duration: '22 hours',
		certification: 'https://www.udemy.com/certificate/UC-58671718-d6d6-461e-969b-5fcceddf0f2e/',
		description:
			'In this course I learned how to create and interact with databases, write complex SQL join queries...',
		skills: [
			'Create, drop and update tables with multiple types of data.',
			'String functions, aggregate functions, data types, comparison operators...',
			'Understanding relationships and joins basics with multiple tables.',
			'Work with big databases and make efficient queries.'
		],
		imageInstitution: import.meta.env.BASE_URL + '../../education/logos/udemy-logo.svg.png',
		imageEducation: import.meta.env.BASE_URL + '../../education/covers/mysql.jpg'
	},
	{
		id: 13,
		title: 'Playwright',
		institution: 'Udemy',
		date: 'Jul 2024',
		duration: '13 hours',
		certification: 'https://www.udemy.com/certificate/UC-934cee70-5eac-47db-8ff5-bbda61385496/',
		description:
			'In this course I learned how to do test automation with TypeScript, API testing and more advanced features.',
		skills: [
			'Learn how to locate any web element on the page following Playwright best practices.',
			'Learn how to install Playwright from scratch run and debug tests, analyze reports and test results.',
			'How to interact with different UI components such as: input fields, radio buttons, check boxes, lists, tooltips, date pickers, web tables, sliders, iFrames.',
			'How to work with APIs in Playwright: API mocking, API requests, API call intercept, shared authentication and API authentication.',
			'Advanced topics: global setup and teardown, visual testing, mobile device emulation, fixtures, environment variables, test execution in Docker container.'
		],
		imageInstitution: import.meta.env.BASE_URL + '../../education/logos/udemy-logo.svg.png',
		imageEducation: import.meta.env.BASE_URL + '../../education/covers/playwright.png'
	}
]
