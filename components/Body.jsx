import Styles from "../styles/Body.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Body() {
  return (
    <>
      <div className={Styles.container}>
        <p className={Styles.date}>
          2021 <br /> 08/02
        </p>
        <h2 className={Styles.title}>TITLE</h2>
        <hr className={Styles.hr} color="lightpink" />
        <p className={Styles.text}>
          text文章text文章text文章text文章text文章text文章text文章text文章text文章text文章text文章text文章text文章text文章text文章text文章text文章text文章text文章text文章text文章
        </p>
        <div className={Styles.category}>
        <hr className={Styles.hr2} color="lightpink" />
          <div className={Styles.flex}>
            <p>
              カテゴリー：
              <Link href="#">
                <a>未分類</a>
              </Link>
            </p>
            <p>
              投稿日：
              <Link href="#">
                <a>2021 08 / 02</a>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
