import React, { FC, ReactNode, useState } from 'react';
import * as styles from './headerLayout.module.scss'
import { StaticImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';

interface IProps {
    children: ReactNode;
    changeCategory?: Function;
    category?: boolean;
}

const HeaderLayout:FC<IProps> = ({ children, category, changeCategory }) => {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <>
            <div className={styles.header}>
                <div className={styles.icon_menu} onClick={() => setShowMenu(prev => !prev)}>
                    {showMenu ? (
                        <StaticImage 
                            placeholder='blurred'
                            src='../../images/crossIcon.png' 
                            alt='cross' 
                            width={50} 
                        />
                    ) : (
                        <StaticImage 
                            placeholder='blurred'
                            src='../../images/menuIcon.png' 
                            alt='menu' 
                            width={50} 
                        />
                    )}
                </div>
                <h1>B R A N D S clothing</h1> 
            </div>
            {!changeCategory ? (
                <div className={styles.home_link}>
                    <Link to='/' className={styles.link}>H o m e</Link>
                </div>
            ) : (
                undefined
            )}
            {showMenu && changeCategory? (
                <div className={styles.menu_wrapper}>
                    <h1 
                        className={`${styles.category} ${category ? styles.category_active : ''}`}
                        onClick={() => changeCategory(true)}
                    >
                        m a n
                    </h1>
                    <h1 
                        className={`${styles.category} ${!category ? styles.category_active : ''}`}
                        onClick={() => changeCategory(false)}
                    >
                        w o m a n
                    </h1>
                </div>
            ) : (
                <div className={styles.empty}></div>
            )}
            {children}
        </>
    )
}

export default HeaderLayout;