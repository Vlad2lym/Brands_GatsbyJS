import React, { FC } from 'react';
import { IProduct } from '../../types/types';
import * as styles from './cardProduct.module.scss'
import { Link } from 'gatsby';

interface IProps {
    product: IProduct;
}

const CardProduct:FC<IProps> = ({ product }) => {

    return (
        <Link to={`/${product.id}`} className={styles.link}>
            <li className={styles.container}>
                <img src={product.image} alt={product.title} height={200}/>
                <h3>{product.title}</h3>
                <h2>{`${product.price}`} &#8364;</h2>
            </li>
        </Link>
    )
}

export default CardProduct;