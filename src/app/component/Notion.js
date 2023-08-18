import { Client } from "@notionhq/client";
import Layout from "./Layout";
import '../globals.css';
import Header from "./header";
import Footer from "./footer";
const notion = new Client({ auth: process.env.NOTION_API_SECRET });


export async function getDatabaseData(databaseId) {
  const response = await notion.databases.query({
    database_id: databaseId,
  });
  // console.log(response.);
  const projectList = response.results.map((aProject)=>(
      aProject.properties
      // aProject.properties.이름.title[0].plain_text
      // aProject.properties.URL.url
  ))
  const project = response.results.map((aProject)=>(
    aProject

  ))
  console.log(project)
  const projectID = response.results.map((aProject)=>(
    aProject.id
  ))

  const projectNames = response.results.map((aProject)=>(
    aProject.properties.이름.title[0].plain_text
  ))
  const projectURL = response.results.map((aProject)=>(
    aProject.properties.URL.url
  ))
  const projectSort = response.results.map((aProject)=>(
    aProject.properties.분류.select.name

  ))

  const projectIntro = response.results.map((aProject)=>(
    aProject.properties.한줄소개.rich_text[0] === undefined ? "" : aProject.properties.한줄소개.rich_text[0].text.content

  ))
  const projectPart = response.results.map((aProject)=>(
    aProject.properties.분야.multi_select.map((a)=>(
        a.name
      ))
  ))

  const projectProgram = response.results.map((aProject)=>(
    aProject.properties[`tool`].multi_select.map((a)=>(
        a.name
      ))
  ))

  // const projectImg = response.results.map((aProject)=>(
  //   aProject.cover.file.url
  // ))


  // console.log(`projectID : ${projectID}`);    

  return{
    props:{
      project,
      projectNames,
      projectList,
      projectURL,
      projectSort,
      projectIntro,
      projectPart,
      projectProgram,
      projectID,
      // projectImg,
    },
  }
}
