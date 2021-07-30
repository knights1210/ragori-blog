import Styles from "../styles/Body.module.css";
import Image from "next/image";

export default function Body() {
  return (
    <>
      <div className={Styles.container}>
        <h2 className={Styles.title}>TITLE</h2>
        <hr className={Styles.hr} />
        <p className={Styles.text}>
          text文章text文章text文章text文章text文章text文章text文章text文章text文章text文章text文章text文章text文章text文章text文章text文章text文章text文章text文章text文章text文章
         
        </p>
      </div>
      <style jsx>{`
        hr {
          background-color: red;
        }
      `}</style>
    </>
  );
}
