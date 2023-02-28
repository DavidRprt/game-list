import { BsGithub, BsTwitter, BsInstagram } from "react-icons/bs"

const Footer = () => {
  return (
    <footer className="bg-gray-800 px-4 py-6 flex justify-between items-center mt-auto">
      <h4 className="text-white text-lg">
        © 2023. All Rights Reserved.
      </h4>
      <div className="flex text-center gap-6">
        <BsGithub className="text-white text-2xl hover:text-gray-300" />
        <BsInstagram className="text-white text-2xl hover:text-gray-300" />
        <BsTwitter className="text-white text-2xl hover:text-gray-300" />
      </div>
    </footer>
  )
}

export default Footer
