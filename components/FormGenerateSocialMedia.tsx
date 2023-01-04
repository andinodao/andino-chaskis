import { TextField, Button, Grid, Typography } from "@mui/material";

export const FormGenerateSocialMedia = ({
  onSubmit,
  title,
  description,
  speaker,
  date,
  link,
  onChangeForm,
  onResetForm,
  isLoading,
}: any) => {
  return (
    <Grid item xs={12} px={{ xs: 3, md: 15 }} pt={{ xs: 3, md: 5 }}>
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
  );
};
