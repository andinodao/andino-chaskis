import Head from "next/head";
import { useState } from "react";
import styles from "./index.module.css";

export default function Home() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [speaker, setSpeaker] = useState("");
  const [date, setDate] = useState("");
  const [link, setLink] = useState("");

  const [result, setResult] = useState();

  async function onSubmit(event) {
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
    <div>
      <Head>
        <title>OpenAI Quickstart</title>
        <link rel="icon" href="/dog.png" />
      </Head>

      <main className={styles.main}>
        <img src="/dog.png" className={styles.icon} />
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
            type="text"
            name="description"
            placeholder="Enter a description"
            value={description}
            rows="10"
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
        <div className={styles.result}>{result}</div>
      </main>
    </div>
  );
}
