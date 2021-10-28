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
      <PageTitle passedClass="" title="Toolz" />

      <MiniNav passedClass="">
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
        <Section title="Toad-Holder Projects" id="toad-holder">
          <Item
            name="CryptoFlyz"
            pic="cryptoflyz.jpg"
            description="All the toad traits that you love painstakingly retuned to fit the aerodynamic body of a fly, plus some new bonus traits."
            link="https://opensea.io/collection/cryptoflyz"
          />
          <Item
            name="Creature Toadz"
            pic="creaturetoadz.png"
            description="First crossover project between two independently successful NFT communities, Creatures and CryptoToadz by Skirano."
            link="https://opensea.io/collection/creaturetoadz"
          />
          <Item
            name="StitchToadz"
            pic="stitchtoadz.jpeg"
            description="Small, hand-stitched & then digitally edited, amphibious creatures. Made with love by MELLIA, with help by Matas."
            link="https://twitter.com/MELLIAART"
          />
          <Item
            name="CrypTurtz"
            pic="crypturtz.png"
            description="Turtz are swamp-wise creatures, they’re here to join the !vibe"
            link="https://twitter.com/CrypTurtz"
          />
          <Item
            name="CorruptedToadz"
            pic="corruptedtoadz.jpeg"
            description="Created using a manual unique process of rendering an image on an old PC emulator and tinkering with the image source code."
            link="https://www.corruptedtoadz.com/"
          />
          <Item
            name="AI Toadz"
            pic="aitoadz.png"
            description="AI-generated Toadz. Every CrypToad owner can commission one unique AI Toad and incorporate some custom theme in the image."
            link="https://aitoadz.xyz/"
          />

          <Item
            name="ToadEggz"
            pic="toadeggz.jpeg"
            description="ToadEggz is a collection of 6969 Eggz to be released soon exclusively for Cryptoadz holders."
            link="https://twitter.com/ToadEggz"
          />
          <Item
            name="Gel Toadz"
            pic="geltoadz.jpeg"
            description="Custom gel toadz made for toad holders. They are 0.20 ETH each and will be delivered in a week. Capped at 1,000 orders. Collection by Danny Zareto."
            link="https://opensea.io/collection/geltoadz-by-danny-zareto"
          />
          <Item
            name="Sockz"
            pic="sockz.jpeg"
            description="Sockz for toad holders. Sockz NFTs can be burned and redeemed for a real pair of sockz."
            link="https://www.sockz.exchange/"
          />
          <Item
            name="Choadz"
            pic="choadz.jpg"
            description="An homage to CrypToadz, brought to life in 3D by The Chunks."
            link="https://choadz.com/"
          />
        </Section>

        <Section title="Open-to-Public Projects" id="open-public">
          <Item
            pic="vantoadz.jpeg"
            name="VanToadz"
            description="A Swamp Full of 1/1 Toadz, brought to you by Van Coleman."
            link="https://opensea.io/collection/van-toadz"
          />
          <Item
            pic="dissectedtoadz.jpeg"
            name="Dissected Toadz"
            description="Looking inside your favorite toadz and see what makes them !vibe by @2aca71."
            link="https://opensea.io/collection/dissected-toadz"
          />
          <Item
            pic="frentoadz.jpeg"
            name="FrenToadz"
            description="Unique 1/1 custom illustrations of Cryptoadz."
            link="https://opensea.io/collection/frentoadz-by-affenbrot"
          />
          <Item
            pic="complextoadz.jpeg"
            name="Complex Toadz"
            description="Hand-drawn unqiue toadz inspired by Cryptoadz."
            link="https://opensea.io/collection/complextoadz-nft"
          />
          <Item
            name="Pop Wonder Cryptoadz #3852"
            pic="popwonder.png"
            description="Cryptoadz #3852 // Pop Wonder Remix"
            link="https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/12271885842822188039840568155851815734139929241518364030099885563946106617858/"
          />
          <Item
            pic="boredvibes.png"
            name="Bored Vibes"
            description="A hand-done derivative series mashup of NFT projects and Cryptoadz. Created with owners permission."
            link="https://opensea.io/collection/bored-vibes"
          />
          <Item
            pic="papervibes.png"
            name="Paper Vibes"
            description="A hand-done derivative series mashup of NFT projects and Cryptoadz. Created with owners permission."
            link=" https://opensea.io/collection/papervibes"
          />
          <Item
            pic="tezoadz.jpeg"
            name="Tezoadz"
            description="When toadz die, they cross over to the underworld and continue the !darkvibe in the dark swampz of tez."
            link="https://objkt.com/profile/tz1Qwv2m1MzVwUkGgVZb7EGoKV8n9RtBc3Jh/creations"
          />
          <Item
            pic="toadbarz.png"
            name="ToadzBarz"
            description="Limited collection of 69 hungry toadz with chocolates."
            link="https://opensea.io/collection/toadz-barz"
          />
          <Item
            pic="dostoadz.png"
            name="DOS Toadz"
            description="Cryptoadz + DOS Character set + random color palette."
            link="https://opensea.io/collection/dos-toadz-by-chartoadz"
          />
          <Item
            pic="asciitoadz.png"
            name="ASCII CrypToadz"
            description="Collection of ASCII toadz by tricK."
            link="https://www.hicetnunc.xyz/trick"
          />
          <Item
            pic="cryptadpolez.png"
            name="CrypTadpolez"
            description="Unique 1/1 tadpolez by nobiscum."
            link="https://opensea.io/collection/cryptadpolez"
          />
          <Item
            pic="fastfoodtoadz.jpg"
            name="Fast Food Toadz"
            description="The Fast Food Toadz are a curated boutique collection primary to Cryptoadz holders of Unique Fast Food Toadz."
            link="https://opensea.io/collection/fast-food-toadz"
          />
          <Item
            pic="legentoady.png"
            name="Legendtoady"
            description="A collection of Legendary Toadz that grew too big for the swamp. One added every day."
            link="https://opensea.io/collection/legendtoady"
          />
          <Item
            pic="crypghostz.png"
            name="CrypGhostz"
            description="Collection of 6,969 toadz who found their peace in CrypToadz heaven."
            link="https://opensea.io/collection/crypghostz"
          />
          <Item
            pic="zombietoadz.png"
            name="ZombieToadz"
            description="Collection of 5,555 zombie toadz."
            link="https://opensea.io/collection/zombietoadzofficial"
          />
          <Item
            pic="69toadz.png"
            name="69Toadz"
            description="Collection of 69 swamp-inspired toadz."
            link="https://opensea.io/collection/69toadz"
          />
          <Item
            pic="cholotoadz.png"
            name="CholoToadz"
            description="Collection of 500 cholo-style toadz by Blue Pastel."
            link="https://opensea.io/collection/cholotoadz"
          />
          <Item
            pic="mekatoadz.jpeg"
            name="Meka Toadz"
            description="MEKA TOADZ"
            link="https://twitter.com/MekaToadzNFT"
          />
          <Item
            pic="chunkytoadz.png"
            name="Chunky Toadz"
            description="Collection of 7,777 chuck toadz."
            link="https://opensea.io/collection/chunkytoadz"
          />
        </Section>

        <Section title="Stats & Analytics" id="stats">
          <Item
            pic="flipsfinance.png"
            name="Flips Finance"
            description="Wide array of available stats with a great trait breakdown and comprehensive stat chart per toad."
            link="https://www.flips.finance/collection/cryptoadz-by-gremplin"
          />
          {/* <Item
            pic="sockz.jpeg"
            name="Toadz Genome Project"
            description=""
            link=""
          /> */}
          <Item
            pic="degendata.png"
            name="Degen Data"
            description="DegenData allows NFT traders to analyze historical price trends by any combination of NFT MetaData. Track wallet activity, monitor price and analyze project growth."
            link="https://degendata.io/project/cryptoadz"
          />
          <Item
            pic="dune.png"
            name="Dune Analytics"
            description="More in-depth vizuals taking a deeper-dive into Cryptoadz' trading volume, top holders, and other data points!"
            link="https://dune.xyz/Artoria/Toadz-dash"
          />
          <Item
            pic="compass.png"
            name="Compass Analytics"
            description="Compass lets you track collection floors, ongoing mints, wallet transactions and more from one place."
            link="https://compass.art/collections/0x1cb1a5e65610aeff2551a50f76a87a7d3fb649c6/analytics"
          />
          <Item
            pic="rarity.png"
            name="Rarity"
            description="Classic tool for discovering collection's rarity and explaining asset traits and value."
            link="https://rarity.tools/cryptoadz-by-gremplin?sort=byId"
          />
        </Section>

        <Section title="News" id="news">
          <Item
            pic="nftnow.png"
            name="nft now • How Gremplin’s CrypToadz Took the NFT Market by Storm"
            description={`"Over the months, Punk4156 and others have attributed the success of CrypToadz in part to its art being public domain. "
            `}
            link="https://nftnow.com/features/how-gremplins-cryptoadz-took-nft-market-by-storm/"
          />
          <Item
            pic="defiant1.png"
            name="The Defiant • Punks or Toadz? Referential Art Project No.1 in 24-Hour Trading Volume"
            description={`"Another day, another NFT project, but with the strong network and idiosyncratic art behind this one, it might be in it for the long haul."
            `}
            link="https://thedefiant.io/cryptoadz-nft/"
          />
          <Item
            pic="nyt.png"
            name="New York Times • Why My NFT Toad Brought Me Joy"
            description={`"An economy where nobody works a bad job, where cryptocurrencies only go up in value and where financial planning for the future just involves buying more toads."`}
            link="https://www.nytimes.com/2021/09/20/opinion/NFT-crypto-art.html"
          />
          <Item
            pic="defiant2.png"
            name="The Defiant • Vibe! Cryptoadz Floor Price Soars as Snoop Dogg and Other NFT Buyers Pile In"
            description={`"Cozomo de Medici, a Twitter account which the rapper Snoop Dogg claimed as his own, cashed out 140 ETH for Cryptoadz #4236."`}
            link="https://thedefiant.io/cryptotoadz-discord-snoop-starry-night/"
          />
          <Item
            pic="redlion.png"
            name="Redlion • Cryptoadz By Gremplin"
            description={`"I think what makes Cryptoadz unique is Gremplin's referential style and irreverent artistic voice."`}
            link="https://www.redlion.news/article/cryptoadz-by-gremplin"
          />
        </Section>

        <Section title="Buy/Sell/Trade" id="buy">
          <Item
            pic="opensea.png"
            name="OpenSea: Low to High"
            description="View the current ''Floor Toadz'' and pick on up yourself!"
            link="https://opensea.io/collection/cryptoadz-by-gremplin?search[sortAscending]=true&search[sortBy]=PRICE&search[toggles][0]=BUY_NOW"
          />

          <Item
            pic="nftx.png"
            name="NFTX Cryptoadz Valut"
            description="Buy from, sell into, or stake toadz in the vault to get rewarded on trading volume."
            link="https://nftx.io/vault/0x1999a92711cf8815b7f6b07bd34b4287d853cfba/buy/"
          />
          <Item
            pic="explorer.png"
            name="Explorers Market"
            description="Buy available Explorer toadz."
            link="https://exploreringtoadz-market.vercel.app/"
          />
          <Item
            pic="ghost.png"
            name="Ghosts Market"
            description="Buy available Ghost-body toadz."
            link="https://www.ghosts.market/"
          />
          <Item
            pic="hoodie.png"
            name="Hoodies Market"
            description="Buy available Mysterious Hoodie toadz."
            link="https://mystictoads-market.vercel.app/"
          />
          <Item
            pic="alien.png"
            name="Aliens Market"
            description="Buy available Alien toadz."
            link="https://alientoadz.market/"
          />
        </Section>

        <Section title="Resources" id="resources">
          <Item
            pic="api.png"
            name="Toadz API"
            description="Custom API Routes by Flips.Finance to query toad data."
            link="https://toadzapi.herokuapp.com/docs"
          />
          <Item
            pic="vibebot.png"
            name="Twitter Vibe Bot (Github Repo)"
            description="The Discord !vibe bot brought to Twitter."
            link="https://github.com/jhenthorn/vibebot2000"
          />
          <Item
            pic="graph.png"
            name="Subgraph Explorer"
            description="Subgraph published to The Graph Network to allow devs to quickly query toadz data."
            link="https://thegraph.com/legacy-explorer/subgraph/kevlee1/cryptoadz"
          />
          <Item
            pic="toadzworld.png"
            name="Toadz World"
            description="CrypToadz News Roundup"
            link="https://toadz.world/"
          />
          <Item
            pic="etherscan.jpeg"
            name="Cryptoadz Etherscan Contract"
            description="Learn more by seeing, explore the deployed smart contract."
            link="https://etherscan.io/address/0x1cb1a5e65610aeff2551a50f76a87a7d3fb649c6"
          />
        </Section>

        <Section title="Games" id="games">
          <Item
            pic="gremp.png"
            name="GREMPLAND: Cryptovoxels World"
            description="Explore the Toadz metaverse."
            link="https://www.cryptovoxels.com/play?coords=N@770E,356N"
          />

          <Item
            pic="fvck.png"
            name="FVCK TOADZ"
            description="Try to collect as many FVCK Crystals as possible!"
            link="http://dumbesturl.com/games/FVCKTOADZ/"
          />
          <Item
            pic="toadrunnerz.png"
            name="Toad Runnerz"
            description="Cryptoadz/Arcade NFTs Collab"
            link="https://arcadenfts.com/drops/#toadrunnerz"
          />
        </Section>

        <Section title="Art" id="art">
          {/* <Item
          pic="sockz.jpeg"
            name="Toadz World NFT"
            description="Backgrounds for toadz. Art by @AtticRoomBoy. Devs @k1dgalax1 @mardisant."
            link="https://toadoshop.com/"
          /> */}
          <Item
            pic="issa.png"
            name={`"Issa !Vibe" song`}
            description="Issa !Vibe Official Lyric Video"
            link="https://www.youtube.com/watch?v=jT_lwrjQNFw&t=2s&ab_channel=CryptoadzShow"
          />
          <Item
            pic="ode2toad.jpg_large"
            name="ode 2 toad"
            description="Animation of an ode to a Nounish toad by @JackMaschka"
            link="https://twitter.com/jackmaschka/status/1452983362902106123?s=21"
          />
          <Item
            pic="wizard.png"
            name="Voxels"
            description="Voxel Toadz"
            link="https://twitter.com/SEETHEWIZARD69/status/1445389166213279744"
          />
          <Item
            pic="kopper.png"
            name="Physical Toadz"
            description="Physical Toadz made out of beads"
            link="https://twitter.com/kopperkitty/status/1441403748308357120"
          />
          <Item
            pic="toadoshop.png"
            name="Toadoshop"
            description="Upload a background and drop in your toadz to create your own art piece by NounDoge"
            link="https://toadoshop.com/"
          />
          <Item
            pic="show.png"
            name="Cryptoadz Show"
            description="2 Toadz, 1 mission: become rap superstars."
            link="https://mmm.page/cryptoadz.main"
          />
          <Item
            pic="themesong.png"
            name="Cryptoadz Theme Song"
            description="music by Bettorup"
            link="https://twitter.com/cryptobuffalo/status/1437915763214479360?s=21"
          />
          <Item
            pic="light.png"
            name="Neon Toad #6294"
            description="Custom Neon Toad art by Bryan Brinkman"
            link="https://twitter.com/bryanbrinkman/status/1444813816718635010?s=21"
          />
        </Section>

        <Section title="Merch" id="merch">
          <Item
            pic="grempland.png"
            name="Grempland Giftshop"
            description="Swampy souvenirs by Watermelone & bloopy911"
            link="https://gremplandgiftshop.com/"
          />
        </Section>

        <Section title="Audio" id="audio">
          <Item
            pic="mm1.jpeg"
            name="Moti Monday Genesis"
            description="''Moti Monday'' Twitter Spaces with Motivateme.eth hosted by Deeze from 10/4/21."
            link="https://soundcloud.com/user-814745690/moti-monday-genesis?si=7506edff7a104790a9fdd1d2a322228f"
          />
          <Item
            pic="tt.jpeg"
            name="Toadz Tuesday"
            description="Toadz discussion with host Bobby 0xelrod and Moti from 10/5/21."
            link="https://soundcloud.com/user-814745690/toadz-tuesday"
          />
          <Item
            pic="mm2.jpeg"
            name="Moti Monday Ep. 2"
            description="''Moti Monday'' Twitter Spaces with Motivateme.eth from 10/11/21."
            link="https://soundcloud.com/user-814745690/moti-monday-ep-2"
          />
          <Item
            pic="mm3.jpeg"
            name="Moti Monday Ep. 3"
            description="''Moti Monday'' Twitter Spaces with Motivateme.eth hosted by Deeze from 10/18/21."
            link="https://soundcloud.com/user-814745690/moti-mondays-ep-3"
          />
          <Item
            pic="mm4.jpeg"
            name="Moti Monday Ep. 4"
            description="''Moti Monday'' Twitter Spaces with Motivateme.eth hosted by Deeze from 10/26/21."
            link="https://soundcloud.com/user-814745690/moti-mondays-ep-4"
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
