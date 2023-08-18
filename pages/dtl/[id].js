import {useRouter} from "next/router";
import { useEffect, useState } from "react";
import {notionData} from '../project';
import { ProjectDtl } from "../../src/app/project/project-item";
import {
    project,
    projectID,
    projectNames,
    projectList,
    projectGroup,
    projectSort,
    projectIntro,
    projectProgram,
} from '../../src/app/component/Notion';
import { TOKEN, DATABASE_ID } from "../../config";
import { getDatabaseData} from "../../src/app/component/Notion"; // import getDatabaseData 함수
import Layout from '../../src/app/component/Layout'


const Post = ({project}) => {
    const router = useRouter();
    // console.log(router)
    const { id } = router.query;
    const index = router.query.id
    const [item, setItem] = useState({project});
    
    // console.log({project})
    return(
        <>
            <Layout>

                    <ProjectDtl item={item} key={index} index={index}/>
            </Layout>
              
        </>

    )
};

export default Post;


export async function getServerSideProps(context) {
    const databaseData = await getDatabaseData(process.env.NOTION_DATABASE_ID);
    return databaseData;
}