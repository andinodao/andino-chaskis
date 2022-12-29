import Head from "next/head";

import Header from "../../components/Header";

import { useState } from "react";
import { RespondeData, SocialMediaPost } from "../api/generate";

import { Toolbar, Grid } from "@mui/material";

import { useForm } from "../../hooks/useForm";
import { DataSocialMedia } from "../../components/DataSocialMedia";
import { FormGenerateSocialMedia } from "../../components/FormGenerateSocialMedia";

export default function Home() {
  const [isLoading, setisLoading] = useState(false);

  const [result, setResult] = useState<SocialMediaPost[] | null>([]);

  async function onSubmit(event: any) {
    event.preventDefault();

    setisLoading(true);

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
    const responseData: RespondeData = await response.json();

    setResult(responseData?.data);
    setisLoading(false);
  }

  const { inputState, onChangeForm, onResetForm } = useForm({
    title: "CryptoMonday 14: Como crear aplicaciones web 3 en tu empresa",
    description:
      "En este segmento aremos entender a pymes y empresas pequeñas como usar esta nueva dimensión para incrementar sus ventas",
    speaker: "Paul Garcia- Tech Lead Upstream",
    date: "January 14, 2023",
    link: "https://andino.upstreamapp.com",
  });

  const { title, description, speaker, date, link } = inputState;

  console.log(result);

  return (
    <div className="scrollbar-contentAll">
      <Head>
        <title>Andino Chaski</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Toolbar />

      <main className={""}>
        <Grid
          container
          alignItems="center"
          sx={{
            minHeight: { xs: "calc(100vh + 160px)", sm: "calc(100vh - 64px)" },
          }}
          flexWrap="wrap-reverse"
        >
          <DataSocialMedia isLoading={isLoading} result={result} />

          <FormGenerateSocialMedia
            onSubmit={onSubmit}
            onChangeForm={onChangeForm}
            onResetForm={onResetForm}
            isLoading={isLoading}
            {...inputState}
          />
        </Grid>
      </main>
    </div>
  );
}