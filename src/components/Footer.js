
import { BsLinkedin } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';


export default function Footer() {
  return (
    <>
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row">
        <nav className="md:mr-auto md:ml-1 md:py-1 md:pl-1 md:border-1 md:border-gray-700 flex flex-wrap text-base justify-end">
          <a href="https://www.linkedin.com/" className="flex items-center gap-1 mr-5 hover:text-white">
            Linkedin <BsLinkedin />
          </a>

          <a href="https://github.com/hanthienduc" className="flex items-center gap-1 mr-5 hover:text-white">
            Github <BsGithub />
          </a>

        </nav>

      </div>
    </>
  )
}