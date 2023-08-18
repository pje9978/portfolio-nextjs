import Image from "next/image";
import Layout from "../../src/app/component/Layout";
import { TOKEN, DATABASE_ID } from '../../config';
import React from 'react';
// import '../src/app/globals.css';
import Link from 'next/link';
import {ProjectDtl} from '../../src/app/project/project-item';
import { getDatabaseData, projectList } from "../../src/app/component/Notion"; // import getDatabaseData 함수
import { useRouter } from "next/router";
import Data from '../project';

import { useEffect, useState } from "react";

export default function dtl({Data,index}){
    const router = useRouter();
    const { id } = router.query;
    
    const [item, setItem] = useState({Data});
    
    console.log(item)

  
    console.log(Data);
    return(

        <Layout>
            <div className="contianer">
                {/* 새로운 Routes 컴포넌트로 감싸기 */}

                {/* <ProjectDtl  list={list} Data={Data} key={index} index={index}></ProjectDtl> */}
                {Data.map((a,index)=>(
                  <ProjectDtl id={Data.id} Data={Data} index={index + 1} key={index}></ProjectDtl>
                ))}

                {/* {Object.values(notionData)[0].projectList.map((aProject,index) => (
                  <ProjectDtl projectID={notionData.projectID} data={notionData} key={index} index={index}></ProjectDtl>
                ))} */}

            </div>
        </Layout>

    )
}
export async function getStaticProps() {
    const notionData = await getDatabaseData(process.env.NOTION_DATABASE_ID);

    const options = {
      method: 'POST',
  
      body: JSON.stringify({
          sorts: [
              {
                  "property": "Name",
                  "direction": "ascending"
              }
          ],
          page_size: 100
      })
    };
  
    
    return {
      props: {
        notionData,
      },
    };
  }

