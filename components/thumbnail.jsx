import Styles from "../styles/Thumbnail.module.css";
import Image from "next/image";

export default function Thumbnail() {
  return (
    <>
      <div className={Styles.thumbnail}>
        <Image
          src="/top.png"
          width={1920}
          height={500}
          objectFit="cover"
          alt=""
        />
        <h1 className={Styles.title}>TITLE</h1>
      </div>
    </>
  );
}
