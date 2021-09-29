import Head from "next/head";
import FormModal from "./components/FormModal";
import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Tip from "./components/Tip";

export default function Home() {
  const [id, setId] = useState(3470);
  const [sockzData, setSockzData] = useState({});

  useEffect(() => {
    checkSockz(id);
  }, [id]);

  const checkSockz = async (id: number) => {
    const settings = {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    };

    try {
      const fetchResponse = await fetch(`/api/sockz/${id}`, settings);

      const data = await fetchResponse.json();

      setSockzData(data);
    } catch {
      console.error("Error fetching loot information");
    }
  };

  return (
    <div className=" ">
      <Head>
        <title>TOADZTOOLZ</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="p-3">
        <Header />

        <div className="flex py-12 md:w-3/4">
          <FormModal
            sockzData={sockzData}
            sockzId={id}
            checkSockz={checkSockz}
          />
          <p className="self-center sm:text-4xl copy">
            Click and provide a Cryptoadz id to see if your Sockz have been
            claimed.
          </p>
        </div>

        {/* <div className="grid">
          <a
            href="https://cryptoadz.io/"
            className="card"
            target="_blank"
            rel="noreferrer"
          >
            <h3>Derivatives &rarr;</h3>
            <p>See what the Cryptoadz community is building!</p>
          </a>

          <a
            href="https://www.sockz.exchange/"
            className="card"
            target="_blank"
            rel="noreferrer"
          >
            <h3>Sockz Exchange &rarr;</h3>
            <p>Mint your sockz here.</p>
          </a>

          <a
            href="https://etherscan.io/address/0x1cb1a5e65610aeff2551a50f76a87a7d3fb649c6"
            className="card"
            target="_blank"
            rel="noreferrer"
          >
            <h3>Cryptoadz Smart Contract &rarr;</h3>
            <p>Learn more by seeing exploring the deployed smart contract.</p>
          </a>
        </div> */}
      </main>

      <Tip />

      <Footer />
    </div>
  );
}
