import React, { useState } from "react"
import { HeadFC, PageProps, graphql, useStaticQuery } from "gatsby"
import '../styles/global.scss'
import * as styles from '../styles/indexPage.module.scss'
import HeaderLayout from "../components/headerLayout/headerLayout"
import logo from '../images/logo.png'
import { IProduct } from "../types/types"
import CardProduct from "../components/cardProduct/cardProduct"


const IndexPage: React.FC<PageProps> = () => {
  const {allMensClothingJson: mansData, allWomensClothingJson: womansData} = useStaticQuery(
    graphql`
    query {
      allMensClothingJson {
        nodes {
          category
          id
          image
          price
          title
        }
      }
      allWomensClothingJson {
        nodes {
          category
          id
          image
          price
          title
        }
      }
    }
    `
  )

  const [mansCategory, setMansCategory] = useState(false);
  
  const changeCategory = (mansCat:boolean) => {
    setMansCategory(mansCat);
  }

  return (
    <HeaderLayout category={mansCategory} changeCategory={changeCategory}>
      <ul className={styles.products_area}>
        {(mansCategory ? mansData : womansData).nodes.map((prod:IProduct) => {
          return <CardProduct product={prod} key={prod.id}/>
        })}
      </ul>
    </HeaderLayout>
  )
}

export default IndexPage

export const Head: HeadFC = () => (
  <>
    <title>B R A N D S</title>
    <link rel="preconnect" href="https://fonts.googleapis.com"/>
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin=''/>
    <link href="https://fonts.googleapis.com/css2?family=Frank+Ruhl+Libre:wght@300&display=swap" rel="stylesheet"/>
    <link rel="icon" href={logo} type="image/png"/>
  </>
)