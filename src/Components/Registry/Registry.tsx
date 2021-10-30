import React from "react";
import { FlipCard } from "../FlipCard/FlipCard";
import { ZZFooter } from "../ZZFooter/ZZFooter";
import "./Registry.css";

export const Registry: React.FC = () => {
  return (
    <section className="registry-list">
      <h2 className="header">
        Help us fill our <i className="fas fa-home"></i>
      </h2>
      <FlipCard
        front="Target"
        back="Lots of basics"
        link="https://www.target.com/gift-registry/gift-giver?registryId=a7f8b4f0-0d28-11ec-bb7c-df277178efe4&type=WEDDING"
      />
      <FlipCard
        front="Zola"
        back="Chip in on a group gift"
        link="http://www.zola.com/registry/kristiandjoshua2022"
      />
      <ZZFooter />
    </section>
  );
};
