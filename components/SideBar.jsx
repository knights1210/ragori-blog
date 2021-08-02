import Styles from "../styles/SideBar.module.css";
import Image from "next/image";
export default function SideBar() {
  return (
    <>
      <aside className={Styles.sidebar}>
        <div className={Styles.category}>
          <div className={Styles.flex}>
            <Image src="/icon/icon11.png" width={40} height={30} alt="" />
            <h2>Category</h2>
          </div>
          <hr color="lightpink" />
        </div>
        <div className={Styles.archive}>
          <div className={Styles.flex}>
            <Image src="/icon/icon10.png" width={40} height={30} alt="" />
            <h2>Archive</h2>
          </div>
          <hr color="lightpink" />
        </div>
      </aside>
    </>
  );
}
