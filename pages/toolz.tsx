/* eslint-disable @next/next/no-img-element */
import React from "react";
import Item from "./components/Toolz/Item";
import MiniNav from "./components/Toolz/MiniNav";
import Section from "./components/Toolz/Section";
import AnchorGroup from "./components/Toolz/AnchorGroup";
import PageTitle from "./components/PageTitle";
import MiniNavLink from "./components/Toolz/MiniNavLink";

const Toolz = () => {
  return (
    <div className="bg-toadz-dark h-full text-white p-5 sm:px-10">
      <PageTitle title="Toolz" />

      <MiniNav>
        <MiniNavLink
          link="/"
          newPage={false}
          text="Home"
          pic="mininav/ghosts-1.png"
          alt="home"
        />

        <MiniNavLink
          link="https://twitter.com/cryptoadzNFT"
          newPage={true}
          text="Twitter"
          pic="mininav/ghosts-4.png"
          alt="twitter"
        />
        <MiniNavLink
          link="https://discord.gg/PDVfDSDbcE"
          newPage={true}
          text="Discord"
          pic="mininav/ghosts-2.png"
          alt="discord"
        />
        <MiniNavLink
          link="/ideaz"
          newPage={false}
          text="Ideaz"
          pic="mininav/ghosts-3.png"
          alt="ideaz"
        />
      </MiniNav>

      <AnchorGroup />

      <div className="">
        <Section title="Toad-Holder Projects" id="projects">
          <Item
            name="CryptoFlyz"
            description="Free mint for all toad holder. All the toad traits that you love painstakingly retuned to fit the aerodynamic body of a fly, plus some new bonus traits."
            link="https://www.cryptoflyz.io/"
          />
          <Item
            name="Creature Toadz"
            description="First crossover project between two independently successful NFT communities, Creatures and CryptoToadz by Skirano."
            link="https://creaturetoadz.com/"
          />
          <Item
            name="CrypTurtz"
            description="Turtz are swamp-wise creatures, they’re here to join the !vibe"
            link="https://twitter.com/CrypTurtz"
          />
          <Item
            name="CorruptedToadz"
            description="CorruptedToadz are created using a manual unique process of rendering an image on an old PC emulator and tinkering with the image source code to produce an actual corrupted toad with the look of an old school computer graphic."
            link="https://www.corruptedtoadz.com/"
          />
          <Item
            name="Gel Toadz"
            description="Custom gel toadz made for toad holders. They are 0.20 ETH each and will be delivered in a week. Capped at 1,000 orders. Collection by Danny Zareto."
            link="https://opensea.io/collection/geltoadz-by-danny-zareto"
          />
          <Item
            name="Sockz Exchange"
            description="Sockz for toad holders. Sockz NFTs can be burned and redeemed for a real pair of sockz."
            link="https://www.sockz.exchange/"
          />
          <Item
            name="Choadz"
            description="An homage to CrypToadz, brought to life in 3D by The Chunks."
            link="https://choadz.com/"
          />
        </Section>

        <Section title="Derivatives" id="derivatives">
          <Item
            name="VanToadz"
            description="A Swamp Full of 1/1 Toadz, brought to you by Van Coleman."
            link="https://opensea.io/collection/van-toadz"
          />
          <Item
            name="Dissected Toadz"
            description="Looking inside your favorite toadz and see what makes them !vibe by @2aca71."
            link="https://opensea.io/collection/dissected-toadz"
          />
          <Item
            name="FrenToadz"
            description="Unique 1/1 custom illustrations of Cryptoadz."
            link="https://opensea.io/collection/frentoadz-by-affenbrot"
          />
          <Item
            name="Complex Toadz"
            description="Hand-drawn unqiue toadz inspired by Cryptoadz."
            link="https://opensea.io/collection/complex-toadz"
          />
          <Item
            name="ToadzBarz"
            description="Limited collection of 69 hungry toadz with chocolates."
            link="https://toadz-barz.webflow.io/"
          />
          <Item
            name="DOS Toadz"
            description="Cryptoadz + DOS Character set + random color palette."
            link="https://opensea.io/collection/dos-toadz-by-chartoadz"
          />
          <Item
            name="ASCII CrypToadz"
            description="Collection of ASCII toadz by tricK."
            link="https://www.hicetnunc.xyz/trick"
          />
          <Item
            name="CrypTadpolez"
            description="Unique 1/1 tadpolez by nobiscum."
            link="https://opensea.io/collection/cryptadpolez"
          />
          <Item
            name="Legendtoady"
            description="A collection of Legendary Toadz that grew too big for the swamp. One added every day."
            link="https://opensea.io/collection/legendtoady"
          />
          <Item
            name="CrypGhostz"
            description="Collection of 6,969 toadz who successfully escaped the tyrannical rule of the Evil King Gremplin and found their peace in CrypToadz heaven."
            link="https://opensea.io/collection/crypghostz"
          />
          <Item
            name="ZombieToadz"
            description="Collection of 5,555 zombie toadz."
            link="https://opensea.io/collection/zombietoadzofficial"
          />
          <Item
            name="69Toadz"
            description="Collection of 69 swamp-inspired toadz."
            link="https://opensea.io/collection/69toadz"
          />
          <Item
            name="CholoToadz"
            description="Collection of 500 cholo-style toadz by Blue Pastel."
            link="https://opensea.io/collection/cholotoadz"
          />
          <Item
            name="Chunky Toadz"
            description="Collection of 7,777 chuck toadz."
            link="https://opensea.io/collection/chunkytoadz"
          />
        </Section>

        <Section title="Stats & Analytics" id="stats">
          <Item
            name="Flips Finance"
            description="Wide array of available stats with a great trait breakdown and comprehensive stat chart per toad."
            link="https://www.flips.finance/collection/cryptoadz-by-gremplin"
          />
          {/* <Item
            name="Toadz Genome Project"
            description=""
            link=""
          /> */}
          <Item
            name="Dune Analytics"
            description="More in-depth vizuals taking a deeper-dive into Cryptoadz' trading volume, top holders, and other data points!"
            link="https://dune.xyz/Artoria/Toadz-dash"
          />
          <Item
            name="Compass Analytics"
            description="Compass lets you track collection floors, ongoing mints, wallet transactions and more from one place."
            link="https://compass.art/collections/0x1cb1a5e65610aeff2551a50f76a87a7d3fb649c6/analytics"
          />
          <Item
            name="Rarity"
            description="Classic tool for discovering collection's rarity and explaining asset traits and value."
            link="https://rarity.tools/cryptoadz-by-gremplin?sort=byId"
          />
        </Section>

        <Section title="News" id="news">
          <Item
            name="The Defiant • Punks or Toadz? Referential Art Project No.1 in 24-Hour Trading Volume"
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
            name="The Defiant • Vibe! Cryptoadz Floor Price Soars as Snoop Dogg and Other NFT Buyers Pile In"
            description={`"Big players are taking notice. Cozomo de Medici, a Twitter account which the rapper Snoop Dogg claimed as his own, cashed out 140 ETH for  Cryptoadz #4236 which features a pattern referencing Fidenzas, the 999 Art Blocks pieces with a floor well over 100 ETH. "`}
            link="https://thedefiant.io/cryptotoadz-discord-snoop-starry-night/"
          />
          <Item
            name="Redlion • Cryptoadz By Gremplin"
            description={`"I think what makes Cryptoadz unique is Gremplin's referential style and irreverent artistic voice. His work is silly and fun. It comes across with an earnestness that resonates with a lot of people."`}
            link="https://www.redlion.news/article/cryptoadz-by-gremplin"
          />
        </Section>

        <Section title="Buy/Sell/Trade" id="buy">
          <Item
            name="OpenSea: Low to High"
            description="View the current ''Floor Toadz'' and pick on up yourself!"
            link="https://opensea.io/collection/cryptoadz-by-gremplin?search[sortAscending]=true&search[sortBy]=PRICE&search[toggles][0]=BUY_NOW"
          />

          <Item
            name="NFTX Cryptoadz Valut"
            description="Buy from, sell into, or stake toadz in the vault to get rewarded on trading volume."
            link="https://nftx.io/vault/0x1999a92711cf8815b7f6b07bd34b4287d853cfba/buy/"
          />
          <Item
            name="Explorers Market"
            description="Buy available Explorer toadz."
            link="https://exploreringtoadz-market.vercel.app/"
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

        <Section title="Resources" id="resources">
          <Item
            name="Toadz API"
            description="Custom API Routes by Flips.Finance to query toad data."
            link="https://toadzapi.herokuapp.com/docs"
          />
          <Item
            name="Twitter Vibe Bot (Github Repo)"
            description="The Discord !vibe bot brought to Twitter."
            link="https://github.com/jhenthorn/vibebot2000"
          />
          <Item
            name="Subgraph Explorer"
            description="Subgraph published to The Graph Network to allow devs to quickly query toadz data."
            link="https://thegraph.com/legacy-explorer/subgraph/kevlee1/cryptoadz"
          />
          <Item
            name="Toadz World"
            description="CrypToadz News Roundup"
            link="https://toadz.world/"
          />
          <Item
            name="Cryptoadz Etherscan Contract"
            description="Learn more by seeing, explore the deployed smart contract."
            link="https://etherscan.io/address/0x1cb1a5e65610aeff2551a50f76a87a7d3fb649c6"
          />
        </Section>

        <Section title="Games" id="games">
          <Item
            name="GREMPLAND: Cryptovoxels World"
            description="Explore the Toadz metaverse."
            link="https://www.cryptovoxels.com/play?coords=N@770E,356N"
          />
          {/* <Item
            name="Manny's Game"
            description="Play Frogger as your own toad, change the id in the url to your specific toad to play!"
            link="https://mannys.game/1?toad=35000000"
          /> */}
          <Item
            name="FVCK TOADZ"
            description="Try to collect as many FVCK Crystals as possible!"
            link="http://dumbesturl.com/games/FVCKTOADZ/"
          />
          <Item
            name="Toad Runnerz"
            description="Cryptoadz/Arcade NFTs Collab"
            link="https://arcadenfts.com/drops/#toadrunnerz"
          />
        </Section>

        <Section title="Art" id="art">
          {/* <Item
            name="Toadz World NFT"
            description="Backgrounds for toadz. Art by @AtticRoomBoy. Devs @k1dgalax1 @mardisant."
            link="https://toadoshop.com/"
          /> */}
          <Item
            name="Toadoshop"
            description="Upload a background and drop in your toadz to create your own art piece by NounDoge"
            link="https://toadoshop.com/"
          />
          <Item
            name="Cryptoadz Theme Song"
            description="music by Bettorup"
            link="https://twitter.com/cryptobuffalo/status/1437915763214479360?s=21"
          />
          <Item
            name="Neon Toad #6294"
            description="Custom Neon Toad art by Bryan Brinkman"
            link="https://twitter.com/bryanbrinkman/status/1444813816718635010?s=21"
          />
        </Section>

        <Section title="Merch" id="merch">
          <Item
            name="Grempland Giftshop"
            description="Swampy souvenirs by Watermelone & bloopy911"
            link="https://gremplandgiftshop.com/"
          />
        </Section>

        <Section title="Audio" id="audio">
          <Item
            name="Moti Monday Genesis"
            description="''Moti Monday'' Twitter Spaces with Motivateme.eth hosted by Deeze from 10/4/21."
            link="https://soundcloud.com/user-814745690/moti-monday-genesis?si=7506edff7a104790a9fdd1d2a322228f"
          />
          <Item
            name="Toadz Tuesday"
            description="Toadz discussion with host Bobby 0xelrod and Moti from 10/5/21."
            link="https://soundcloud.com/user-814745690/toadz-tuesday"
          />
          <Item
            name="Moti Monday Ep. 2"
            description="''Moti Monday'' Twitter Spaces with Motivateme.eth from 10/11/21."
            link="https://soundcloud.com/user-814745690/moti-monday-ep-2"
          />
        </Section>

        {/*<Section title="FAQ" id="faq">
          TBD
           <Item
            name="Q: What is CC0?"
            description="A: ___"
            link="https://cryptoadz.io"
          />
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
        </Section> */}
      </div>
    </div>
  );
};

export default Toolz;
