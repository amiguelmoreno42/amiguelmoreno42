import { FaLinkedin, FaGithubSquare, FaEnvelopeSquare } from 'react-icons/fa'

export default function SocialsLinks() {
	return (
		<div className="absolute -right-24 -top-14 flex flex-col gap-6 text-secondary">
			<a href="https://www.linkedin.com/in/miguelmoreno00">
				<FaLinkedin className=" h-9 w-9 rounded-sm bg-primary [transition:all_0.6s] hover:bg-secondary hover:text-primary" />
			</a>
			<a href="https://github.com/amiguelmoreno" className="ml-12">
				<FaGithubSquare className="h-9 w-9 rounded-sm bg-primary [transition:all_0.6s]  hover:bg-secondary hover:text-primary " />
			</a>
			<a href="mailto: amiguelmoreno00@gmail.com" className="ml-24">
				<FaEnvelopeSquare className="h-9 w-9 rounded-sm bg-primary [transition:all_0.6s]  hover:bg-secondary hover:text-primary" />
			</a>
		</div>
	)
}
