import React from 'react';
import HeaderLayout from '../components/headerLayout/headerLayout';
import { graphql, HeadFC } from 'gatsby';
import * as styles from '../styles/singleProductPage.module.scss';
import logo from '../images/logo.png';

const SingleProductPage = ({ data }: any) => {
    const product = data.mensClothingJson ?? data.womensClothingJson;
    return (
        <HeaderLayout>
            <div className={styles.wrapper}>
                <img src={product.image} alt={product.title} height={600} className={styles.image}/>
                <div className={styles.description}>
                    <h1 className={styles.title}>{product.title}</h1>
                    <h1>{`${product.price}`} &#8364;</h1>
                    <h2>Category: {product.category}</h2>
                    <h2>Rating: {product.rating.rate}</h2>
                    <h2>{product.description}</h2>
                </div>
            </div>
        </HeaderLayout>
    )
}

export default SingleProductPage;

export const query = graphql`
    query ProductQuery($id: String) {
        mensClothingJson(id: {eq: $id}) {
            id
            image
            price
            title
            rating {
                rate
            }
            description
            category
        }
        womensClothingJson(id: {eq: $id}) {
            id
            image
            category
            description
            price
            title
            rating {
                rate
            }
        }
    }
`

export const Head: HeadFC = () => (
    <>
      <title>B R A N D S</title>
      <link rel="icon" href={logo} type="image/png"/>
    </>
  )