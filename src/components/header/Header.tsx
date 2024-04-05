import { navLinks } from '../../constants/nav-links';

import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';
import { logoStyles, navStyles, toolbarStyles } from './Header.styles';

function ResponsiveAppBar() {
  return (
    <Container maxWidth="xl">
      <Toolbar sx={toolbarStyles} disableGutters>
        <Box>
          <Typography sx={logoStyles} >
            Upsilon
          </Typography>
        </Box>
        <Box sx={navStyles}>
          {navLinks.map((page) => (
            <Link
              className='header-link'
              key={page.id}
              to={page.route}
            >
              {page.label}
            </Link>
          ))}
        </Box>
        <Box>
          <a className='about-link' target='_blank' href="https://t.me/unclenicklllson">About me</a>
        </Box>
      </Toolbar>
    </Container>
  );
}
export default ResponsiveAppBar;