import Head from "next/head";

export default function HeadMeta(props) {
  return (
    <Head>
      <title>{props.title}</title>
      <link rel="icon" href="/icon.png" />
    </Head>
  );
}
