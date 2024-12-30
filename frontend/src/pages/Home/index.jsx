import React from "react";

import styles from "./Home.module.scss";
import TopPanel from "../../components/TopPanel";
import Monitor from "../../components/SearchPanel";

function Home() {
  return (
    <>
      <TopPanel />
      <Monitor></Monitor>
      <button>СОЗДАТЬ ИГРУ</button>
      <br />
      <button>СЫГРАТЬ С ДРУГОМ</button>
      <br />
      <button>СЫГРАТЬ С КОМПЬЮТЕРОМ</button>
    </>
  );
}

export default Home;
