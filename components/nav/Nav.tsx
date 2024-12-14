'use client';

import useGetQuery from '@/data/query/useGetQuery';
import Image from 'next/image';
import Link from 'next/link';
import { IoCartOutline } from 'react-icons/io5';
import { FaFacebook } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { FaInstagram } from 'react-icons/fa';
import { FaPhoneAlt } from 'react-icons/fa';
import { MdOutlineEmail } from 'react-icons/md';
import { usePathname } from 'next/navigation';
import { useEffect,useState } from 'react';

const Nav = () => {
  const [toggle,setToggle] = useState('hide')
  useEffect(() => {
    window.addEventListener('scroll', staticnav);
    return () => window.removeEventListener('scroll', staticnav);
  }, []);

  const staticnav = () => {
    const scroll = window.scrollY;
    const scrl = Math.floor(scroll);

    if (scrl > 150) {
      document.querySelector('nav')?.classList.add('stickynav');
    } else {
      document.querySelector('nav')?.classList.remove('stickynav');
    }
  };

  const cont = useGetQuery('/contact', 'contact') || [];
  const path = usePathname();

  return (
    <section className="navbar">
      <section className="topbar">
        <div className="container">
          <div>
            <a href={cont[0]?.facebook}>
              <FaFacebook />
            </a>
            <a href={cont[0]?.twitter}>
              <FaXTwitter />
            </a>
            <a href={cont[0]?.instagram}>
              <FaInstagram />
            </a>
          </div>
          <div>
            <span>
              <FaPhoneAlt /> {cont[0]?.phone1}
            </span>
            <span>
              <MdOutlineEmail /> {cont[0]?.email}
            </span>
          </div>
        </div>
      </section>

      <nav className="navbar">
        <Image
          alt="Hamburger"
          src="/hamburger.jpg"
          width="40"
          height="40"
          className="hamburger"
          onClick={()=> setToggle('show')}
        />

        <div className={`container nav-box1 ${toggle}`}>
          <div>
            {cont[0] ? (
              <Image
                src={cont[0]?.comp_logo}
                alt="logo"
                width="70"
                height="70"
              />
            ) : (
              ''
            )}
          </div>

          <div>
            <div>
              <ul>
                <li>
                  <Link href="/" onClick={()=> setToggle('hide')} className={path === '/' ? 'active' : ''}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/shop"
                    onClick={()=> setToggle('hide')}
                    className={path === '/shop' ? 'active' : ''}
                  >
                    Shop
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms"
                    onClick={()=> setToggle('hide')}
                    className={path === '/terms' ? 'active' : ''}
                  >
                    Terms & Condition
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className={path === '/contact' ? 'active' : ''}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div className="cart-bx">
              <IoCartOutline />
            </div>

            <div className="mobile-contact-box">
              <div>
                <span>
                  <FaPhoneAlt /> {cont[0]?.phone1}
                </span>
                <span>
                  <MdOutlineEmail /> {cont[0]?.email}
                </span>
              </div>

              <div>
                <a href={cont[0]?.facebook}>
                  <FaFacebook />
                </a>
                <a href={cont[0]?.twitter}>
                  <FaXTwitter />
                </a>
                <a href={cont[0]?.instagram}>
                  <FaInstagram />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className={`container nav-box2 ${toggle}`} onClick={()=> setToggle('hide')}></div>
      </nav>
    </section>
  );
};

export default Nav;
