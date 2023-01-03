import {
  Button,
  Grid,
  Typography,
  Card,
  CircularProgress,
  CardContent,
  CardActions,
  Chip,
  Box
} from '@mui/material'

import copy from 'clipboard-copy'
import {
  SocialMediaContentFieldsFragment,
  SocialMediaTypes
} from '../graphql/generated/generated'

type Props = {
  isLoading: boolean
  result: SocialMediaContentFieldsFragment[] | null
}

const SocialMediasLabel = {
  [SocialMediaTypes.facebook]: 'Facebook',
  [SocialMediaTypes.twitter]: 'Twitter',
  [SocialMediaTypes.linkedin]: 'Linkedin',
  [SocialMediaTypes.whatsapp]: 'Whatsapp'
}

export const DataSocialMedia = ({ isLoading, result }: Props) => {
  const onCopyClipboardMedia = (res: SocialMediaContentFieldsFragment) => {
    copy(res.content)
  }

  return (
    <Grid
      item
      xs={12}
      lg={6}
      sx={{
        background:
          'linear-gradient(#00000090, #00000090), url("https://images.unsplash.com/photo-1665686310429-ee43624978fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80")',
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
        minHeight: {
          xs: 'calc(100vh - 80px)',
          sm: 'calc(100vh - 64px)'
        },
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        flexWrap: 'wrap'
      }}
      className="animate__bounceIn"
    >
      {result?.length === 0 && !isLoading ? (
        <Typography
          color="white"
          variant="h1"
          sx={{
            fontSize: { xs: 25, md: 30 },
            px: { xs: 2, md: 8 },
            fontFamily: 'TextaAltMedium',
            lineHeight: 1.5,
            letterSpacing: 1
          }}
        >
          <Typography
            component="span"
            sx={{
              fontSize: { xs: 25, md: 30 },
              color: 'deepskyblue',
              fontFamily: 'TextaAltMedium'
            }}
          >
            Bienvenidos a Andino Chaski{' '}
          </Typography>
          nuestro agente de marketing de AI. Este agente fue creado para
          preparar todo el contenido de las redes sociales para usted en función
          de un conjunto simple de preguntas según el tema. Puede proporcionarle
          tantos detalles como sea posible y necesario y tendrá un mejor
          contexto. Este modelo de inteligencia artificial se entrenó con datos
          de redes sociales. Si tiene datos adicionales o personas en las que
          desea basar su generación de tweets, háganoslo saber para que podamos
          agregar nuestro modelo.
        </Typography>
      ) : null}
      {isLoading ? (
        <div>
          <CircularProgress
            size={60}
            sx={{
              color: 'white'
            }}
          />
        </div>
      ) : (
        result?.map((res: SocialMediaContentFieldsFragment) => (
          <Card
            sx={{
              width: { xs: '85%', md: '40%' },
              backgroundColor: '#ffffff',
              p: { xs: 1, md: 2 },
              my: 2,
              cursor: 'pointer'
            }}
            key={res.where}
          >
            <CardContent>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}
              >
                <Typography color="GrayText" sx={{ fontSize: 15 }}>
                  {res.date.slice(0, 21)}
                </Typography>
                <Chip
                  sx={{
                    fontFamily: 'TextaAltMedium',
                    fontSize: 18,
                    textTransform: 'capitalize',
                    mb: 2,
                    px: 3
                  }}
                  label={SocialMediasLabel[res.where]}
                  variant="outlined"
                />
              </Box>
              <Typography sx={{ fontSize: 15 }}>{res.content}</Typography>
            </CardContent>
            <CardActions sx={{ display: 'flex', justifyContent: 'right' }}>
              <Button
                variant="contained"
                sx={{
                  borderRadius: 8,
                  fontFamily: 'TextaAltMedium',
                  textTransform: 'none',
                  fontSize: 16.5,
                  px: 3
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
  )
}
