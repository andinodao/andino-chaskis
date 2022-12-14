import Head from "next/head";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [speaker, setSpeaker] = useState("");
  const [date, setDate] = useState("");
  const [link, setLink] = useState("");

  const [result, setResult] = useState();

  async function onSubmit(event: any) {
    event.preventDefault();
    const response = await fetch("/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        date,
        description,
        speaker,
        link,
      }),
    });
    const data = await response.json();
    setResult(data.result);
  }
  return (
    <div className={""}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={""}>
        <h3>Automaticamente genera el tweet para los posts andino</h3>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            name="title"
            placeholder="Enter titulo"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            name="date"
            placeholder="cuando es"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <textarea
            name="description"
            placeholder="Enter a description"
            value={description}
            rows={10}
            onChange={(e) => setDescription(e.target.value)}
          />
          <input
            type="text"
            name="speaker"
            placeholder="Enter speaker"
            value={speaker}
            onChange={(e) => setSpeaker(e.target.value)}
          />
          <input
            type="text"
            name="link"
            placeholder="Enter link"
            value={link}
            onChange={(e) => setLink(e.target.value)}
          />
          <input type="submit" value="Generate tweet text" />
        </form>
        <div className={""}>{result}</div>
      </main>

      <footer className={""}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={""}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}