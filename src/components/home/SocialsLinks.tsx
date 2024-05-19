import { FaLinkedin, FaGithubSquare, FaEnvelopeSquare } from 'react-icons/fa'

export default function SocialsLinks() {
	return (
		<div className="absolute -right-24 top-1/2 flex -translate-y-1/2 flex-col gap-12 text-secondary">
			<a href="https://www.linkedin.com/in/miguelmoreno00" className="-ml-4">
				<FaLinkedin className=" h-9 w-9 rounded-sm bg-primary [transition:all_0.6s] hover:bg-secondary hover:text-primary" />
			</a>
			<a href="https://github.com/amiguelmoreno">
				<FaGithubSquare className="h-9 w-9 rounded-sm bg-primary [transition:all_0.6s]  hover:bg-secondary hover:text-primary " />
			</a>
			<a href="mailto: amiguelmoreno00@gmail.com" className="-ml-4">
				<FaEnvelopeSquare className="h-9 w-9 rounded-sm bg-primary [transition:all_0.6s]  hover:bg-secondary hover:text-primary" />
			</a>
		</div>
	)
}
