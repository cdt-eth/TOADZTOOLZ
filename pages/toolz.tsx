import React from "react";
import Item from "./components/Toolz/Item";
import Section from "./components/Toolz/Section";

const Toolz = () => {
  return (
    <div className="bg-toadz-dark h-full text-white p-5 sm:px-10">
      <h1 className="text-wizards text-center xs:text-5xl sm:text-6xl mb-10">
        Toolz
      </h1>

      <div className="">
        <Section title="Deriatives">
          <Item
            name="Deriative 1"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus varius sapien sed sagittis. Aenean pellentesque at nibh elementum tempor."
            link="https://cryptoadz.io"
          />
        </Section>

        <Section title="News">
          <Item
            name="Punks or Toadz?"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus varius sapien sed sagittis. Aenean pellentesque at nibh elementum tempor."
            link="https://thedefiant.io/cryptoadz-nft/"
          />
          <Item
            name="Why My NFT Toad Brought Me Joy
"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus varius sapien sed sagittis. Aenean pellentesque at nibh elementum tempor."
            link="https://www.nytimes.com/2021/09/20/opinion/NFT-crypto-art.html"
          />
          <Item
            name="Redlion"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus varius sapien sed sagittis. Aenean pellentesque at nibh elementum tempor."
            link="https://www.redlion.news/article/cryptoadz-by-gremplin"
          />
        </Section>

        <Section title="Games">
          <Item
            name="Game 1"
            description="Cras blandit ultrices libero. In hac habitasse platea dictumst. Suspendisse pellentesque iaculis odio in luctus."
            link="https://cryptoadz.io"
          />
          <Item
            name="Game 2"
            description="Sed nunc sem, accumsan sed dui vel, convallis eleifend metus. "
            link="https://cryptoadz.io"
          />
        </Section>

        <Section title="Resources">
          <Item
            name="Resource 1"
            description="Vestibulum leo mauris, dictum eget convallis sit amet, facilisis eu odio. Nulla at ligula vehicula, scelerisque augue quis, blandit nunc."
            link="https://cryptoadz.io"
          />
          <Item
            name="Resource 2"
            description="Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."
            link="https://cryptoadz.io"
          />
          <Item
            name="Resource 3"
            description="Praesent mauris nunc, vulputate rutrum bibendum at, semper ac elit. Integer egestas eget urna nec ultricies."
            link="https://cryptoadz.io"
          />
        </Section>

        <Section title="Buy/Sell/Trade">
          <Item
            name="Buy 1"
            description="Aliquam elit magna, dictum nec mattis nec, semper ac metus."
            link="https://cryptoadz.io"
          />
          <Item
            name="Sell 2"
            description="Sed vel enim justo."
            link="https://cryptoadz.io"
          />
        </Section>

        <Section title="FAQ">
          <Item
            name="Q: Floor price?"
            description="A: 1 Toad."
            link="https://cryptoadz.io"
          />
          <Item
            name="Q: Roadmap?"
            description="A: Toadmap."
            link="https://cryptoadz.io"
          />
          <Item
            name="Q: !vibe?"
            description="A: !vibe."
            link="https://cryptoadz.io"
          />
        </Section>
      </div>
    </div>
  );
};

export default Toolz;
