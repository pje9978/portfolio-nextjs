// import Image from "next/image";
import Layout from "../src/app/component/Layout";
// import 'tailwindcss/dist/tailwind.css'
import '../src/app/globals.css'
import { TOKEN, DATABASE_ID } from "../config";
// import Data from './dtl.js';
import { getDatabaseData} from "../src/app/component/Notion"; // import getDatabaseData 함수
import {ProjectItem} from '../src/app/project/project-item';
import React, { useEffect, useState } from 'react';
// import Link from 'next/link';
import {
  project,
  projectID,
  projectNames,
  projectList,
  projectGroup,
  projectSort,
  projectIntro,
  projectProgram,
} from '../src/app/component/Notion';

export default function Project({databaseData,index}) {
 
  let [Data,setData] = useState(databaseData); 
  setData = Data.props.project
  console.log(Data.props.project)

  return (
      <Layout>
        <div className="items-cente container flex flex-col justify-center min-h-screen px-5 py-24 mx-auto mb-10">
            <h1 className="sm:text-6xl ml-8 text-4xl">총 프로젝트 : {/* {Data.length} */}</h1>
            <div className=" md: md:grid-cols-2 grid grid-cols-1 gap-4 m-6">
                {setData.map((a,index)=>(
                  <ProjectItem Data={setData} index={index} key={index}>
                  </ProjectItem>
                ))}

            </div>
        </div>

     </Layout>
  )
}



export async function getServerSideProps(context) {
  const databaseData = await getDatabaseData(process.env.NOTION_DATABASE_ID);


  
  return {
    props: {databaseData}
    
  }
}
