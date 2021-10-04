/* eslint-disable @next/next/no-img-element */
import React from "react";
import Item from "./components/Toolz/Item";
import Social from "./components/Toolz/Social";
import Section from "./components/Toolz/Section";

const Toolz = () => {
  return (
    <div className="bg-toadz-dark h-full text-white p-5 sm:px-10">
      <h1 className="text-wizards text-center xs:text-5xl sm:text-6xl mb-10">
        Toolz
      </h1>

      <Social />

      <div className="">
        <Section title="Derivatives">
          <Item
            name="Sockz Exchange"
            description="Sockz for toad holders. Sockz NFTs can be burned and redeemed for a real pair of sockz."
            link="https://www.sockz.exchange/"
          />
          <Item
            name="CryptoFlyz"
            description="Free mint for all toad holder. All the toad traits that you love painstakingly retuned to fit the aerodynamic body of a fly, plus some new bonus traits."
            link="https://twitter.com/masonlondon/status/1443576364913754116?s=20"
          />
          <Item
            name="Choadz"
            description="An homage to CrypToadz, brought to life in 3D by The Chunks."
            link="https://choadz.com/"
          />
        </Section>

        <Section title="Stats & Analytics">
          <Item
            name="Flips Finance"
            description="Wide array of available stats with a great trait breakdown and comprehensive stat chart per toad."
            link="https://www.flips.finance/collection/cryptoadz-by-gremplin"
          />
          <Item
            name="Dune Analytics"
            description="More in-depth vizuals taking a deeper-dive into Cryptoadz' trading volume, top holders, and other data points!"
            link="https://dune.xyz/Artoria/Toadz-dash"
          />
          <Item
            name="Rarity"
            description="Classic tool for discovering collection's rarity and explaining asset traits and value."
            link="https://rarity.tools/cryptoadz-by-gremplin?sort=byId"
          />
        </Section>

        <Section title="News">
          <Item
            name="The Defiant • Punks or Toadz?"
            description={`"Referential Art Project No.1 in 24-Hour Trading Volume. Another day, another NFT project, but with the strong network and idiosyncratic art behind this one, it might be in it for the long haul."
            `}
            link="https://thedefiant.io/cryptoadz-nft/"
          />
          <Item
            name="New York Times • Why My NFT Toad Brought Me Joy"
            description={`"An economy where nobody works a bad job, where cryptocurrencies only go up in value and where financial planning for the future just involves buying more toads."`}
            link="https://www.nytimes.com/2021/09/20/opinion/NFT-crypto-art.html"
          />
          <Item
            name="Redlion • Cryptoadz By Gremplin"
            description={`"I think what makes Cryptoadz unique is Gremplin's referential style and irreverent artistic voice. His work is silly and fun. It comes across with an earnestness that resonates with a lot of people."`}
            link="https://www.redlion.news/article/cryptoadz-by-gremplin"
          />
        </Section>

        <Section title="Buy/Sell/Trade">
          <Item
            name="OpenSea: Low to High"
            description="View the current ''Floor Toadz'' and pick on up yourself!"
            link="https://opensea.io/collection/cryptoadz-by-gremplin?search[sortAscending]=true&search[sortBy]=PRICE&search[toggles][0]=BUY_NOW"
          />

          <Item
            name="Ghosts Market"
            description="Buy available Ghost-body toadz."
            link="https://www.ghosts.market/"
          />
          <Item
            name="Hoodies Market"
            description="Buy available Mysterious Hoodie toadz."
            link="https://mystictoads-market.vercel.app/"
          />
          <Item
            name="Aliens Market"
            description="Buy available Alien toadz."
            link="https://alientoadz.market/"
          />
        </Section>

        <Section title="Resources">
          <Item
            name="Subgraph Explorer"
            description="Subgraph published to The Graph Network to allow devs to quickly query toadz data."
            link="https://thegraph.com/legacy-explorer/subgraph/kevlee1/cryptoadz"
          />
        </Section>

        <Section title="Games">
          <Item name="Game 1" description="TBD" link="https://cryptoadz.io" />
          <Item name="Game 2" description="TBD" link="https://cryptoadz.io" />
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
