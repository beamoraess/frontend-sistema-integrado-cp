// eslint-disable-next-line no-multiple-empty-lines
import { useState } from 'react';
import {
  Grid, Paper, Typography, useMediaQuery,
  LinearProgress, Box, useTheme, CssBaseline,
} from '@mui/material';
import students from '../../assets/img/students.png';
import asoec from '../../assets/img/asoec.svg';
import domHelder from '../../assets/img/dom-helder.svg';
import unitri from '../../assets/img/unitri.svg';
import universo from '../../assets/img/universo.svg';
import LoginForm from './LoginForm';

const Login = () => {
  const [loading] = useState(false);

  const theme = useTheme();

  const mobileMatches = useMediaQuery(theme.breakpoints.only('xs'));
  const desktopMatches = useMediaQuery(theme.breakpoints.up('xl'));
  const tabletMatches = useMediaQuery(theme.breakpoints.up('sm'));

  const handleAdjustScreen = () => {
    if (desktopMatches || tabletMatches) {
      return 3;
    }
    return 0;
  };

  return (
    <>
      <CssBaseline />
      <Box
        justifyContent="center"
        alignItems="center"
        width="100vw"
        minHeight="100vh"
        sx={{
          filter: 'brightness(0.4)',
          backgroundImage: `url(${students})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'absolute',
          zIndex: -1,
        }}
        display={mobileMatches ? 'none' : 'block'}
      />
      {loading && (
        <LinearProgress sx={{
          color: theme.palette.primary.main,
          width: '100%',
          position: 'absolute',
          top: '0',
          height: '4px',
        }}
        />
      )}
      <Grid
        container
        direction="row"
        alignItems="center"
        justifyContent="center"
        component="div"
        minHeight="100vh"
        sx={{
          backdropFilter: 'blur(5px)',
        }}
      >
        <Grid
          container
          alignItems="center"
          justifyContent="center"
          direction="row"
        >
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            direction="row"
            item
            minHeight="90vh"
            height="auto"
          >
            <Grid
              item
              py={4}
              backgroundColor="white"
              xl={4}
              lg={5}
              md={8}
              sm={8}
              xs={12}
              component="section"
            >
              <Grid
                container
                item
                justifyContent="center"
                component="header"
              >
                <Grid
                  item
                  xs={9}
                  height="110px"
                  width="110px"
                  component="img"
                  src={asoec}
                  alt="Logotipo da ASOEC"
                  mb={4}
                />
                <Grid
                  item
                  xs={9}
                >
                  <Typography
                    variant="h3"
                    component="h1"
                    my={1}
                  >
                    Bem-vindo à ASOEC!
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    component="p"
                  >
                    Acesse suas informações e explore
                    nossas ferramentas para uma jornada acadêmica eficiente.
                  </Typography>
                </Grid>
              </Grid>
              <Grid
                container
                item
                justifyContent="center"
                component="main"
                mt={3}
              >
                <LoginForm />
              </Grid>
              <Grid
                container
                item
                justifyContent="center"
                alignItems="center"
                component="footer"
              >
                <Grid
                  item
                  xs={9}
                >
                  <Typography
                    component="p"
                    variant="body2"
                    align="center"
                  >
                    Grupo ASOEC:
                  </Typography>
                </Grid>
                <Grid
                  item
                  xs={9}
                  mt={1}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      gap: '10%',
                    }}
                  >
                    <Box
                      component="img"
                      alt="Logotipo do Centro Universitário do Triângulo - UNITRI"
                      src={unitri}
                    />
                    <Box
                      component="img"
                      alt="Logotipo do Colégio Dom Helder"
                      src={domHelder}
                    />
                    <Box
                      component="img"
                      alt="Logotipo da Universo"
                      src={universo}
                    />
                  </Box>
                </Grid>
              </Grid>
            </Grid>
            <Grid
              item
              xl={7}
              lg
              md={0}
            >
              <Box
                height="90vh"
                sx={{
                  backgroundImage: `url(${students})`,
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
                component={Paper}
                elevation={6}
                square
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Login;
