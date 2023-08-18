import Link from 'next/link'
// import DarkModeToggleButton from "./darkmodeToggleBtn";
export default function Header() {
  return (
    <div>
      
      <header className="body-font text-gray-600">
        <div className="md:flex-row container flex flex-col flex-wrap items-center p-5 mx-auto">
          <Link href="/" className="title-font md:mb-0 flex items-center mb-4 font-medium text-gray-900">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-10 h-10 p-2 text-white bg-indigo-500 rounded-full"
                viewBox="0 0 24 24"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
              </svg>
              <span className="ml-3 text-xl">빡지은의 Portfolio</span>
            
          </Link>
          <nav className="md:ml-auto flex flex-wrap items-center justify-center text-base">

            <Link href="../home" className="hover:text-gray-900 mr-5">Home</Link>
            <Link href="/project" className="hover:text-gray-900 mr-5">Project</Link>
            <Link href="../project" className="hover:text-gray-900 mr-5">notion</Link>
            <Link href="https://open.kakao.com/me/pje9978" className="hover:text-gray-900 mr-5">aboutMe</Link>


       
          </nav>
          {/* <DarkModeToggleButton/> */}
        </div>
      </header>
    </div>
  );
}
