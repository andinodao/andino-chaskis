import { MenuOutlined } from '@mui/icons-material'
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
  Typography
} from '@mui/material'
import Image from 'next/image'
import { useState } from 'react'

import { useRouter } from 'next/router'

export default function Header(): JSX.Element {
  const [open, setopen] = useState(false)

  const onToogleMenu = () => {
    setopen(!open)
  }

  const drawer = (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
        alignItems: { sm: 'center' },
        justifyContent: { sm: 'space-between' }
      }}
    >
      <Typography
        variant="h6"
        sx={{
          textAlign: 'center',
          my: 2,
          display: { xs: 'block', sm: 'none' }
        }}
      >
        Andino DAO
      </Typography>
      <Divider />
      {['Eventos', 'Contribución'].map((navLink, i) => (
        <Link
          sx={{
            cursor: 'pointer',
            textDecoration: 'none',
            fontSize: 18,
            fontFamily: 'TextaAltMedium',
            p: { xs: 2.5, sm: 0 }
          }}
          color="inherit"
          key={i}
          onClick={() => router.push(`/${navLink.toLocaleLowerCase()}`)}
        >
          {navLink}
        </Link>
      ))}
      <Link
        sx={{
          cursor: 'pointer',
          textDecoration: 'none',
          fontSize: 18,
          fontFamily: 'TextaAltMedium',
          p: { xs: 2.5, sm: 0 }
        }}
        color="inherit"
        onClick={() => router.push('/generators/social')}
      >
        Generator
      </Link>
      <Link
        sx={{
          cursor: 'pointer',
          textDecoration: 'none',
          fontSize: 18,
          fontFamily: 'TextaAltMedium',
          p: { xs: 2.5, sm: 0 }
        }}
        color="inherit"
        onClick={() => router.push('/dashboard')}
      >
        Dashboard
      </Link>
      {/*       <Button
        onClick={() => {
          fetch('/api/util/speaker')
        }}
      >
        Generate Speakers
      </Button> */}

      <Button
        onClick={() => {
          fetch('/api/getTweets')
            .then(response => response.json())
            .then(data => console.log(data))
        }}
      >
        mirna test
      </Button>
    </Box>
  )

  const router = useRouter()

  return (
    <>
      <AppBar sx={{ backgroundColor: '#001030' }}>
        <Toolbar>
          <Grid
            container
            alignItems="center"
            justifyContent="space-between"
            py={{ xs: 2, sm: 0 }}
            px={{ lg: 20 }}
          >
            <Grid
              item
              xs={4 /* Dps pasar en un menu item-icon */}
              sm={4}
              lg={5}
              xl={6}
            >
              <Image
                src="/img/logoAndino.png"
                width={120}
                height={35}
                alt="Logo Andino"
                onClick={() => router.push('/')}
              />
            </Grid>
            <Grid item sm={8} lg={7} xl={6}>
              <Grid container sx={{ display: { xs: 'none', sm: 'flex' } }}>
                {drawer}
              </Grid>
              <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
                <IconButton onClick={onToogleMenu}>
                  <MenuOutlined sx={{ color: '#fff' }} />
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
  )
}
