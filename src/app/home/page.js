// import Image from "next/image";
// import Layout from "../component/Layout";
// import Animation from "./animation";
import Header from "../component/header";
import Footer from "../component/footer";
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Header />
      <section className="body-font flex flex-col items-center justify-center min-h-screen text-gray-600">
        <div className="md:flex-row container flex flex-col items-center px-5 py-24 mx-auto">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 md:items-start md:text-left md:mb-0 flex flex-col items-center mb-16 text-center">
            <h1 className="title-font sm:text-4xl mb-4 text-3xl font-medium text-gray-900">
              안녕하세요. 박지은입니다. 오늘도 빡코딩!!
            </h1>
            <p className="mb-8 leading-relaxed">
              저는 다양한 경험 속에서 많은 문제들을 마주했습니다. 남들보다
              문제를 많이 생각하고 발견하며, 그 문제를 반드시 해결해야 합니다.
              그 과정들이 저를 성장시키고 발전시킵니다. 사람을 기본적으로
              애정하는 마음이 있어 긍정적인 면을 많이 발견합니다. 협업에 있어
              긍정적인 커뮤니케이션을 할 수 있습니다.
            </p>
            <div className="flex justify-center">
              <Link href="../project" className="focus:outline-none hover:bg-indigo-600 inline-flex px-6 py-2 text-lg text-white bg-indigo-500 border-0 rounded">
              프로젝트 보러가기
              </Link>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
