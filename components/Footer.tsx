import Link from "next/link"
import { GithubIcon } from "lucide-react"

export default function Footer() {
  return (
    <footer id="contact" >
      <div className=" py-4 ">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-sm">
          <span>&copy; 2025 googlesolution.ai</span>
          <div className="flex space-x-6">
            {/* <Link href="#" className="hover:text-white">Contact</Link>
            <Link href="#" className="hover:text-white"><X/></Link> */}
            <Link href="#" className="hover:text-white"><button className=" text-black px-8 py-2 rounded-full tracking-widest uppercase font-bold bg-transparent hover:bg-[#616467] hover:text-white dark:text-neutral-200 transition duration-200">
            <GithubIcon />
            </button>    
            </Link>

          </div>
        </div>
      </div>
    </footer>
  )
}

