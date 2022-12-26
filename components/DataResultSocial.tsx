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

export const DataResultSocial = ({ result, isLoading }: any) => {
  const date = new Date();
  const dateConexion = `${date.getHours()}:${date.getMinutes()} - ${date.getDate()} / ${date.getMonth()} / ${date.getFullYear()}`;

  return (
    <div>
      {isLoading ? (
        <Box
          sx={{
            backgroundColor: "#001030",
            color: "white",
            pt: 1,
            pb: 1.5,
          }}
        >
          <Toolbar sx={{ display: "block", textAlign: "center" }}>
            <h1>¡Ya tenemos generado tu contenido!</h1>
            <IconButton
              sx={{
                backgroundColor: "#003091",
                "&:hover": {
                  backgroundColor: "#0946c0",
                },
              }}
              href='#result-media-social'
            >
              <ArrowDropDown sx={{ color: "#fff", fontSize: 40 }} />
            </IconButton>
          </Toolbar>
        </Box>
      ) : null}

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
