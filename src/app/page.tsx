"use client"

import Image from "next/image";
import styles from "./page.module.css";
import { Happiness } from "@/components/hapiness";
import { LandscapeBackground } from "../components/landscapbackground";
import { Grimaldis } from "@/components/grimaldis";
import Cake from "@/components/cake";
import { Fairies } from "@/components/fairies";
import { TomCruise } from "@/components/tomcruise";
import { SnackRecommender } from "@/components/snack-recommender";
import { TomT } from "@/components/tom";
import TonyVoter from "@/components/tonyvoter";
import ImageCarousel from "@/components/imageCarousel";
import StickyNotes from "@/components/stickynotes";
import YankeesScore from "@/components/yankeesscore";
import { Water } from "@/components/water";

export default function Home() {
  return (
    <div>
      <div style={{ position: "absolute", width: "100vw", height: "100vh", zIndex: 100 }}>
        <Water />
        <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
          <div style={{width: "400px"}}>
          <a href="https://birdcast.info/migration-tools/live-migration-maps/" target="_blank">
            <img src="https://blob.gifcities.org/gifcities/U54DSIN24GTJQZ2UJPFSDJLYVIV65EWM.gif" style={{ height: "80px" }}></img>
          </a>
          </div>
          <Grimaldis />
        </div>
        <div style={{ position: "absolute", top: "2%", left: "80%", scale: "0.5" }}>
          <YankeesScore />
        </div>
        <div style={{ position: "absolute", top: "10%", left: "10%" }}>
          <Happiness />

        </div>
        <div style={{ position: "absolute", top: "70%", left: "20%", transform: "translate(-50%, -50%)" }}>

          <Cake />

        </div>
        <div style={{ position: "absolute", top: "10%", right: "10%" }}>
        </div>
        <div style={{ position: "absolute", top: "10%", right: "20%", transform: "scale(0.75)" }} className="stack:horizontal:s2">
          <TomT />
          <TomCruise />
        </div>
        <div style={{ position: "absolute", bottom: "20%", right: "20%" }}>
          <ImageCarousel />
        </div>
        <div style={{ position: "absolute", top: "80%", left: "20%" }} className="stack:horizontal">
          <SnackRecommender />
          <TonyVoter />
          <StickyNotes />

        </div>
      </div>
      <img src="https://blob.gifcities.org/gifcities/JGB2JFYBYIR33BHTPDB3XNZCCQEZXERL.gif" style={{ position: "absolute", top: "90%", left: "0", width: "50vw" }}></img>
      <img src="https://blob.gifcities.org/gifcities/JGB2JFYBYIR33BHTPDB3XNZCCQEZXERL.gif" style={{ position: "absolute", top: "90%", left: "50vw", width: "50vw" }}></img>
      <div style={{ zIndex: "-1" }}>
        <Fairies />
        <LandscapeBackground />
      </div>
    </div>
  );
}
