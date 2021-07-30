import Head from "next/head";
import Image from "next/image";
import Styles from "../styles/Home.module.css";
import HeadMeta from "../components/Head.jsx";
import HeaderNav from "../components/HeaderNav";
import Thumbnail from "../components/thumbnail";
import Body from "../components/Body";

export default function Home() {
  return (
    <>
      <HeadMeta title="【ラグオリ】RAGNAROK" />
      <HeaderNav />
      <Thumbnail />
      <div className={Styles.container}>
        <Body />
      </div>
    </>
  );
}
