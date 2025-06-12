
import Logo from "../../public/logo_.svg";


export const Footer = () => {
  return (
    <footer className="p-4">
      <div className="items-center">
      <img width={200} className="m-auto" src={Logo.src} alt="" />
      </div>
      <p className="sm:pt-0 lg:pt-2 text-white text-center ">©2025</p>
    </footer>
  )
}
