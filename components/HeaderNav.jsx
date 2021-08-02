import Link from "next/link";
import Image from "next/image";
import Styles from "../styles/HeaderNav.module.css";

export default function HeaderNav() {
  return (
    <>
      <header className={Styles.navbar}>
        <div className={Styles.container}>
          <h1 className={Styles.title}>【ラグオリ】RAGNAROK</h1>
          <Link href="https://ragnarokorigin.gungho.jp/">
            <a>
              <Image src="/icon.png" width={100} height={70} alt="" />
            </a>
          </Link>
          <nav>
            <ul className={Styles.navlist}>
              <li>
                <Link href="#">
                  <a>MENU<Image src="/icon/icon9.png" width={25} height={20} alt=""/></a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a>MENU<Image src="/icon/icon7.png" width={25} height={20} alt=""/></a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a>MENU<Image src="/icon/icon8.png" width={25} height={20} alt=""/></a>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <style jsx>
        {`
          li {
            margin-right: 2rem;
            background: linear-gradient(transparent 90%, red 10%);
            background-size: 0%;
            background-position: left bottom;
            background-repeat: no-repeat;
            transition: all 0.5s ease;
            padding-bottom: 5px;
          }
          li:hover {
            background-size: 100%;
          }
        `}
      </style>
    </>
  );
}
