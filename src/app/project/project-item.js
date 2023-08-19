import {
    project,
    projectID,
    projectNames,
    projectList,
    projectGroup,
    projectSort,
    projectIntro,
    projectProgram,
    // projectImg
} from '../component/Notion';
import '../../app/globals.css';
import Image from 'next/image';
// import Data from '../../../pages/dtl';
import Data from '../../../pages/project';
useState
import Link from "next/link";
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { useMemo } from "react";

function ProjectItem({Data,index,id,project}){
    // console.log(project);
    return(
        
        <Link href={`/dtl/${index}`} key={index} index={index} className="bg-slate-400 rounded-xl project-card flex flex-col p-6 m-3">

            <h4>{Data[index].properties["분류"].select.name}</h4>
            <h1 className='text-xl font-bold'>{Data[index].properties["이름"].title[0].plain_text}</h1>
            <h4>Intro</h4>

            <div className="flex flex-wrap items-start gap-1 mt-2">
                {Data[index].properties["분야"].multi_select.map((a,index)=>(
                    <h2 key={index}>{a.name}</h2>    
                ))}
            </div>
            <div className='flex flex-wrap items-start gap-1 mt-2'>
                {Data[index].properties["tool"].multi_select.map((a,index)=>(
                    <span className=" bg-sky-200 dark:bg-sky-700 px-2 py-1 mr-2 rounded-md" key={index}>{a.name}</span> 
                ))}
            </div>

        </Link> 
    )
}

function ProjectDtl({item,index,color}){
    const name = item.project[index].properties["이름"].title[0].plain_text
    const categroy = item.project[index].properties["분류"].select.name
    const part = item.project[index].properties["분야"].multi_select
    const tool = item.project[index].properties["tool"].multi_select
    // const desc = item.project[index].properties["한줄소개"].rich_text[0].plain_text
    const desc = item.project[index].properties["한줄소개"].rich_text[0]
    const url = item.project[index].properties["파일과 미디어"].files
    
    
    const thumb = item.project[index].cover
    const thumbUrl = thumb ? thumb.file.url : "";
    const hiddenClass = !thumb ? "hidden" : "";


    console.log(desc)

    
    const [sort, setSort] = useState([]);
    useEffect(() => {
        const sortedArray = tool.sort((a, b) => (a.color > b.color ? -1 : 1));
        console.log(sortedArray)
        setSort(sortedArray);

    });



    return(
        <>
            <section className="text-gray-600 body-font overflow-hidden"> 
                <div className="container lg:h-screen mx-auto my-auto py-16 px-5">
                    <div className="lg:flex-row flex flex-col gap-6 items-center justify-center">
                        {typeof spec !== "null" && (
                            <Image alt="전자상거래" className={`lg:w-1/2 rounded-md w-full ${hiddenClass}`}  src={thumb === null ? '': thumb.file.url } width={500} height={500}></Image>
                        )}
                        <div className="lg:w-1/2 lg:pr-10 lg:py-6 lg:mb-0 w-full mb-6">
                            <h2 className="title-font text-sm tracking-widest text-gray-500 text-center lg:text-left ">
                             
                            {Object.keys(categroy).map((a, index) => (
                                <font style={{verticalAlign: `inherit`}}key={index}>
                                    <font style={{verticalAlign: `inherit`}} key={index}>{categroy[index]}</font>
                                </font>
                            ))}

                            
                            </h2>
                            <h1 className="title-font mb-4 text-3xl font-medium text-gray-700 text-center lg:text-left ">
                            {name && ( 
                                <font style={{verticalAlign: `inherit`}}>
                                    <font style={{verticalAlign: `inherit`}} key={index}>{name}</font>
                                </font>
                            )}
                            </h1>
                            {/* <div className="flex mb-4">
                                <a className="flex-grow px-1 py-2 text-ms text-indigo-500 border-b-2 border-indigo-500">
                                    <font style={{verticalAlign: `inherit`}}>
                                        <font style={{verticalAlign: `inherit`}}>설명</font>
                                    </font>
                                </a>

                            </div> */}
                            <p className="mb-4 leading-relaxed w-full bg-white/60 rounded-md text-center p-4 lg:text-left lg:bg-white/0 lg:p-0">
                                <font style={{verticalAlign: `inherit`}} key={index}>{desc === undefined ? "" : desc.plain_text}</font>
                            </p>
                            <div className="flex py-2 border-t border-gray-200">
                                <span className="  text-gray-500 lg:w-1/3 text-sm" >
                                    <font style={{verticalAlign: `inherit`}}>
                                        <font style={{verticalAlign: `inherit`}} className="w-full">사용 프로그램</font>
                                    </font>
                                </span>

                                <span className="tool ml-auto text-gray-900 flex flex-wrap justify-end gap-1 " key={index}>
                                    {tool.map((tools, index) => {
                                        console.log(tools.color)
                                        const colorBadge = `inline-flex items-center rounded-md px-2 py-1 text-xs font-medium  ring-1 ring-inset ring-gray-500/10 ${tools.color === 'red' ? 'bg-red-50 text-red-600' : tools.color === 'yellow' ? 'bg-yellow-50 text-yellow-600' : tools.color === 'yellow' ? 'bg-yellow-50 text-yellow-600' : ''}`

                                        return(
                                            <span key={index} data-color={tools.color} className={`${colorBadge}`} /* className="" */>
                                                {tools.name}
                                            </span>
                                            
                                        );
                                    })}
                                </span>
                            </div>
                            <div className="flex py-2 border-t border-gray-300">
                                <span className="text-gray-500 text-sm">
                                <font style={{verticalAlign: `inherit`}}>
                                    <font style={{verticalAlign: `inherit`}}>담당작업</font>
                                </font>
                                </span>
                                {typeof part !== "undefined" && (
                                    <span className="ml-auto text-gray-900 flex flex-wrap" key={index}>
                                        {part.map((a, index) => (
                                            <font style={{verticalAlign: `inherit`}} key={index}>
                                            <font style={{verticalAlign: `inherit`}} className=" bg-gray-50 ring-1 ring-inset ring-gray-500/10 last:mr-0 inline-flex items-center px-2 py-1 mr-2 text-xs font-medium text-gray-600 rounded-md" key={index}>{a.name}</font>
                                            </font>
                                        ))}
                                    </span>
                                )}
                            </div>
                            <div className="flex py-2 mb-6 border-t border-b border-gray-300">
                                <span className="text-gray-500 text-sm">
                                    <font style={{verticalAlign: `inherit`}}>
                                        <font style={{verticalAlign: `inherit`}}>작업 기간</font>
                                    </font>
                                </span>
                                <span className="ml-auto text-gray-900">
                                    <font style={{verticalAlign: `inherit`}}>
                                        <font style={{verticalAlign: `inherit`}}>4</font>
                                    </font>
                                </span>
                            </div>
                            <div className="flex justify-end py-2 border-t border-gray-300">

                                {Object.keys(url).map((urls, i) => (

                                    <Link href={url[i].name} key={index}>
                                            <button className="flex mr-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                                                <font style={{verticalAlign: `inherit`}}>
                                                    <font style={{verticalAlign: `inherit`}}>LINK1</font>
                                                </font>
                                            </button>
                                    </Link>
                                ))}
                                
                                <button className="inline-flex items-center justify-center w-10 h-10 p-0 ml-4 text-gray-500 bg-gray-200 border-0 rounded-full">
                                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                                </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export {ProjectItem,ProjectDtl};