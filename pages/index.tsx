import Head from "next/head";

import Header from "../components/Header";

import { useState } from "react";
import { RespondeData, SocialMediaPost } from "./api/generate";

import copy from "clipboard-copy";

import {
  TextField,
  Toolbar,
  Button,
  Grid,
  Typography,
  Card,
  CircularProgress,
  CardContent,
  CardActions,
} from "@mui/material";

import { useForm } from "./hooks/useForm";

export default function Home() {
  const [isLoading, setisLoading] = useState(false);

  /*   const [title, setTitle] = useState(
    "CryptoMonday 14: Como crear applicar web 3 en tu empresa"
  );
  const [description, setDescription] = useState(
    "En este segmento aremos entender a pymes y empresas pequenas como usar esta nueva dimension para incrementar sus ventas"
  ); */
  /*   const [speaker, setSpeaker] = useState("Paul Garcia- tech lead Upstream");
  const [date, setDate] = useState("January 14 2023");
  const [link, setLink] = useState("https://andino.upstreamapp.com"); */

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

  const onCopyClipboardMedia = (res: any) => {
    copy(res.content);
  };

  const { inputState, onChangeForm, onResetForm } = useForm({
    title: "CryptoMonday 14: Como crear applicar web 3 en tu empresa",
    description:
      "En este segmento aremos entender a pymes y empresas pequenas como usar esta nueva dimension para incrementar sus ventas",
    speaker: "Paul Garcia- tech lead Upstream",
    date: "January 14, 2023",
    link: "https://andino.upstreamapp.com",
  });

  const { title, description, speaker, date, link } = inputState;

  return (
    <div className='scrollbar-contentAll'>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <Toolbar />

      <main className={""}>
        <Grid
          container
          alignItems='center'
          sx={{
            minHeight: { xs: "calc(100vh + 160px)", sm: "calc(100vh - 64px)" },
          }}
        >
          <Grid
            item
            xs={12}
            md={6}
            px={{ xs: 3, md: 15 }}
            pt={{ xs: 3, md: 0 }}
          >
            <Typography
              variant='h1'
              sx={{
                width: { xs: "100%", md: "70%" },
                fontFamily: "TextaAltHeavy",
                fontSize: { xs: 38, sm: 45 },
                margin: "0 auto",
                textAlign: "center",
              }}
            >
              ¡Generador contenido social media!
            </Typography>
            <form onSubmit={onSubmit} id='form-media'>
              <Grid container spacing={2} py={4}>
                <Grid item xs={6}>
                  <TextField
                    type='text'
                    name='title'
                    placeholder='Enter titulo'
                    value={title}
                    onChange={onChangeForm}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    type='text'
                    name='date'
                    placeholder='Fecha'
                    value={date}
                    onChange={onChangeForm}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    name='description'
                    placeholder='Enter a description'
                    value={description}
                    multiline
                    rows={8}
                    onChange={onChangeForm}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    type='text'
                    name='speaker'
                    placeholder='Enter speaker'
                    value={speaker}
                    onChange={onChangeForm}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    type='text'
                    name='link'
                    placeholder='Enter link'
                    value={link}
                    onChange={onChangeForm}
                    fullWidth
                  />
                </Grid>
              </Grid>
              <Grid
                container
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", md: "row" },
                  justifyContent: "space-around",
                }}
                py={{ xs: 0, md: 4 }}
                pb={{ xs: 5 }}
              >
                <Button
                  variant='contained'
                  color='inherit'
                  sx={{
                    minWidth: { xs: "100%", md: "230px" },
                    borderRadius: 5,
                    fontFamily: "TextaAltBold",
                    fontSize: 18,
                    textTransform: "none",
                    mb: { xs: 2, md: 0 },
                  }}
                  onClick={onResetForm}
                >
                  Limpiar formulario
                </Button>
                <Button
                  type='submit'
                  variant='contained'
                  sx={{
                    minWidth: { xs: "100%", md: "230px" },
                    borderRadius: 5,
                    fontFamily: "TextaAltBold",
                    fontSize: 18,
                    textTransform: "none",
                  }}
                  disabled={isLoading}
                >
                  Crear contenido
                </Button>
              </Grid>
            </form>
          </Grid>

          <Grid
            item
            xs={12}
            md={6}
            sx={{
              background:
                'url("https://images.unsplash.com/photo-1665686310429-ee43624978fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80")',
              backgroundPosition: "center center",
              backgroundSize: "cover",
              minHeight: {
                xs: "calc(100vh + 160px)",
                sm: "calc(100vh - 64px)",
              },
              pt: { xs: 2, sm: 3 },
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-evenly",
            }}
          >
            {isLoading ? (
              <div>
                <CircularProgress
                  size={50}
                  sx={{
                    color: "white",
                  }}
                />
              </div>
            ) : (
              result?.map((res: any) => (
                <Card
                  sx={{
                    width: { xs: "85%", md: "70%" },
                    backgroundColor: "#ffffff",
                    p: { xs: 1, md: 2 },
                  }}
                  key={res.where}
                >
                  <CardContent>
                    <Typography>{res.content}</Typography>
                  </CardContent>
                  <CardActions
                    sx={{ display: "flex", justifyContent: "right" }}
                  >
                    <Button
                      variant='contained'
                      sx={{
                        borderRadius: 8,
                        fontFamily: "TextaAltMedium",
                        textTransform: "none",
                        fontSize: 16.5,
                        px: 3,
                      }}
                      onClick={() => onCopyClipboardMedia(res)}
                    >
                      Copiar
                    </Button>
                  </CardActions>
                </Card>
              ))
            )}
          </Grid>
        </Grid>

        {/*         <DataResultSocial
          result={result}
          isLoading={isLoading}
          spinnerLoading={spinnerLoading}
        /> */}
      </main>

      {/*       <footer className={""}>
        <a
          href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
          target='_blank'
          rel='noopener noreferrer'
        >
          Powered by{" "}
          <span className={""}>
            <Image src='/vercel.svg' alt='Vercel Logo' width={72} height={16} />
          </span>
        </a>
      </footer> */}
    </div>
  );
}
