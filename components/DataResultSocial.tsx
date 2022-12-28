import {
  IconButton,
  Typography,
  Grid,
  Box,
  Toolbar,
  CircularProgress,
} from "@mui/material";
import {
  FacebookOutlined,
  LinkedIn,
  Twitter,
  ArrowDropDown,
} from "@mui/icons-material";

export const DataResultSocial = ({
  result,
  isLoading,
  spinnerLoading,
}: any) => {
  const date = new Date();
  const dateConexion = `${date.getHours()}:${date.getMinutes()} - ${date.getDate()} / ${date.getMonth()} / ${date.getFullYear()}`;

  return (
    <div>
      {spinnerLoading ? (
        <Box
          sx={{
            position: "absolute",
            top: 0,
            zIndex: 999,
            backgroundColor: "#00000050",
            minWidth: "100vw",
            minHeight: "100vh",
          }}
        >
          <CircularProgress
            size={50}
            sx={{
              position: "absolute",
              top: "48.8%",
              left: "48.8%",
              transform: "translate(-50%, -50%)",
              color: "white",
            }}
          />
        </Box>
      ) : null}
      <Box
        sx={{
          backgroundColor: "#001030",
          color: "white",
          py: 3.9,
        }}
      >
        <Toolbar sx={{ display: "block", textAlign: "center" }}>
          <Typography
            variant='h3'
            sx={{ fontFamily: "TextaAltBold", fontSize: 30, pb: 2 }}
          >
            {isLoading
              ? "¡Ya tenemos generado tu contenido!"
              : "¡Empieza a generar tu contenido!"}
          </Typography>
          <IconButton
            sx={{
              backgroundColor: "#003091",
              "&:hover": {
                backgroundColor: "#0946c0",
              },
            }}
            href='#result-media-social'
          >
            <ArrowDropDown sx={{ color: "#fff", fontSize: 35 }} />
          </IconButton>
        </Toolbar>
      </Box>
      {result?.map((v: any) => {
        return (
          <Grid
            container
            key={v.where}
            sx={{
              backgroundColor: "#fff",
              px: 20,
            }}
            id='result-media-social'
          >
            {v.where === "twitter" ? (
              <Grid item xs={12}>
                <Grid
                  container
                  justifyContent='space-between'
                  alignItems='center'
                  py={3}
                >
                  <Typography>{dateConexion}</Typography>
                  <IconButton
                    sx={{
                      background: "#00b3ff",
                      borderRadius: 7,
                      minWidth: 200,
                      "&:hover": {
                        background: "#2cc0ff",
                      },
                    }}
                  >
                    <Twitter sx={{ color: "#fff" }} />
                    <Typography
                      variant='h6'
                      sx={{
                        pl: 1,
                        textTransform: "capitalize",
                        color: "#fff",
                      }}
                    >
                      {v.where}
                    </Typography>
                  </IconButton>
                </Grid>
                <Typography>{v.content}</Typography>
              </Grid>
            ) : v.where === "linkedIn" ? (
              <Grid item xs={6}>
                <Grid
                  container
                  justifyContent='space-between'
                  alignItems='center'
                  py={3}
                >
                  <Typography>{dateConexion}</Typography>
                  <IconButton
                    sx={{
                      background: "#0077b7",
                      borderRadius: 7,
                      minWidth: 200,
                      "&:hover": {
                        background: "#1582bd",
                      },
                    }}
                  >
                    <LinkedIn sx={{ color: "#fff" }} />
                    <Typography
                      variant='h6'
                      sx={{ pl: 1, textTransform: "capitalize", color: "#fff" }}
                    >
                      {v.where}
                    </Typography>
                  </IconButton>
                </Grid>
                <Typography>{v.content}</Typography>
              </Grid>
            ) : (
              v.where === "facebook" && (
                <Grid item xs={6}>
                  <Grid
                    container
                    justifyContent='space-between'
                    alignItems='center'
                    py={3}
                  >
                    <Typography>{dateConexion}</Typography>
                    <IconButton
                      sx={{
                        background: "#1977f3",
                        borderRadius: 7,
                        minWidth: 200,
                        "&:hover": {
                          background: "#3287f6",
                        },
                      }}
                    >
                      <FacebookOutlined sx={{ color: "#fff" }} />
                      <Typography
                        variant='h6'
                        sx={{
                          pl: 1,
                          textTransform: "capitalize",
                          color: "#fff",
                        }}
                      >
                        {v.where}
                      </Typography>
                    </IconButton>
                  </Grid>
                  <Typography>{v.content}</Typography>
                </Grid>
              )
            )}
          </Grid>
        );
      })}
    </div>
  );
};
