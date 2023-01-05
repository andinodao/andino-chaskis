import { Box, Toolbar, Typography } from '@mui/material'
import Head from 'next/head'

import Typewriter from 'typewriter-effect'

import {
  DevicesOutlined,
  NotesOutlined,
  StorefrontOutlined,
  TravelExploreOutlined
} from '@mui/icons-material'
import Header from '../components/Header'

export default function Dashboard() {
  return (
    <>
      <Head>
        <title>Andino Chaski</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box
        component="main"
        sx={{ backgroundColor: '#001030', minHeight: '100vh' }}
      >
        <Header />
        <Toolbar />

        <Typography fontSize={50} color="white" textAlign="center" py={5}>
          <Typewriter
            options={{
              strings: [
                'Genera contenido para tu blog',
                'Crea paginas web',
                'Crea post para tus redes sociales'
              ],
              autoStart: true,
              loop: true
            }}
          />
        </Typography>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}
        >
          {[
            {
              name: 'Generator Blog Content',
              icon: <NotesOutlined />,
              link: ''
            },
            { name: 'Create Post', icon: <DevicesOutlined />, link: '' },
            {
              name: 'Create web site',
              icon: <TravelExploreOutlined />,
              link: ''
            },
            { name: 'Create eCommerce', icon: <StorefrontOutlined />, link: '' }
          ].map(dash => (
            <Box
              key={dash.name}
              sx={{
                width: '350px',
                height: '200px',
                // display: 'flex',
                // flexDirection: 'column',
                // justifyContent: 'center',
                backgroundColor: '#eeeeee',
                borderRadius: 2,
                m: 2,
                userSelect: 'none',
                '&:hover': {
                  outline: '#3ec2ff 3px solid'
                }
              }}
            >
              <Typography
                display="flex"
                alignItems="center"
                sx={{
                  fontSize: 18,
                  '&:hover': {
                    color: '#3ec2ff'
                  }
                }}
              >
                <Typography
                  component="span"
                  display="flex"
                  alignItems="center"
                  my={2}
                  ml={2}
                  mr={1.3}
                  sx={{
                    color: '#3ec2ff'
                  }}
                >
                  {dash.icon}
                </Typography>
                {dash.name}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </>
  )
}
