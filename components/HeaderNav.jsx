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
                  <a>MENU</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a>MENU</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a>MENU</a>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <style jsx>
        {`
          li {
            margin-right: 20px;
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
