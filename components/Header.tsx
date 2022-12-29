import { MenuOutlined } from "@mui/icons-material";
import {
  AppBar,
  Button,
  Toolbar,
  Link,
  Grid,
  Drawer,
  Box,
  IconButton,
  Divider,
  Typography,
} from "@mui/material";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [open, setopen] = useState(false);

  const onToogleMenu = () => {
    setopen(!open);
  };

  const drawer = (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        alignItems: { sm: "center" },
        justifyContent: { sm: "space-between" },
      }}
    >
      <Typography
        variant="h6"
        sx={{
          textAlign: "center",
          my: 2,
          display: { xs: "block", sm: "none" },
        }}
      >
        Andino DAO
      </Typography>
      <Divider />
      {["Eventos", "Contribución"].map((navLink, i): any => (
        <Link
          sx={{
            cursor: "pointer",
            textDecoration: "none",
            fontSize: 18,
            fontFamily: "TextaAltMedium",
            p: { xs: 2.5, sm: 0 },
          }}
          color="inherit"
          key={i}
        >
          {navLink}
        </Link>
      ))}

      <Button
        variant="contained"
        color="info"
        sx={{
          my: 3,
          mx: 2,
          px: 4,
          borderRadius: 4,
          fontFamily: "TextaAltHeavy",
          textTransform: "none",
          fontSize: 16,
        }}
      >
        Registrarme ahora
      </Button>
    </Box>
  );
  return (
    <>
      <AppBar sx={{ backgroundColor: "#001030" }}>
        <Toolbar>
          <Grid
            container
            alignItems="center"
            justifyContent="space-between"
            py={{ xs: 2, sm: 0 }}
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
                src="/img/logoAndino.png"
                width={120}
                height={35}
                alt="Logo Andino"
              />
            </Grid>
            <Grid item sm={8} lg={5} xl={4}>
              <Grid container sx={{ display: { xs: "none", sm: "flex" } }}>
                {drawer}
              </Grid>
              <Box sx={{ display: { xs: "block", sm: "none" } }}>
                <IconButton onClick={onToogleMenu}>
                  <MenuOutlined sx={{ color: "#fff" }} />
                </IconButton>
                <Drawer anchor="right" open={open} onClose={onToogleMenu}>
                  {drawer}
                </Drawer>
              </Box>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </>
  );
}
