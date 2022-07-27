import Link from 'next/link'
import React from 'react'
import style from './header.module.scss'

type Props = {}

const Header  = (props: Props) => {
  return (
    <>
        <ul className="menu">
            <li>  
                <img src="https://picsum.photos/50" alt="" />
            </li>
            <li>
                <Link href="/">
                    <a className="menu_item">Home page</a>
                </Link>
            </li>
            <li>
                <Link href="/products">
                    <a className="menu_item">Product</a>
                </Link>
            </li>
            <li>
                <Link href="/about">
                    <a className="menu_item">Admin</a>
                </Link>
            </li>
            <li>
                <Link href="/contact">
                    <a className="menu_item">Blog</a>
                </Link>
            </li>
            <li>
                <Link href="/lienhe">
                    <a className="menu_item">Liên hệ</a>
                </Link>
            </li>
        </ul>
    </>
);
};

export default Header 