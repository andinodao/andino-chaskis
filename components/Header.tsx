import { AppBar, Button, Toolbar, Link, Grid } from "@mui/material";
import Image from "next/image";

export default function Header() {
  return (
    <AppBar sx={{ backgroundColor: "#001030" }}>
      <Toolbar>
        <Grid
          container
          alignItems='center'
          justifyContent='space-between'
          py={2}
          px={{ md: 20 }}
        >
          <Grid
            item
            xs={4 /* Dps pasar en un menu item-icon */}
            sm={4}
            lg={7}
            xl={8}
          >
            <Image
              src='/../public/img/logoAndino.png'
              width={120}
              height={35}
              alt='Logo Andino'
            />
          </Grid>
          <Grid item xs={8} sm={8} lg={5} xl={4}>
            <Grid container justifyContent='space-between' alignItems='center'>
              <Link
                sx={{
                  cursor: "pointer",
                  textDecoration: "none",
                  fontSize: 18,
                  fontFamily: "TextaAltMedium",
                }}
                color='inherit'
              >
                Eventos
              </Link>
              <Link
                sx={{
                  cursor: "pointer",
                  textDecoration: "none",
                  fontSize: 18,
                  fontFamily: "TextaAltMedium",
                }}
                color='inherit'
              >
                Contribución
              </Link>
              <Button
                variant='contained'
                color='info'
                sx={{
                  px: 4,
                  borderRadius: 4,
                  fontFamily: "TextaAltHeavy",
                  textTransform: "none",
                  fontSize: 16,
                }}
              >
                Registrarme ahora
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
