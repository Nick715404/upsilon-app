import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';

import Container from '@mui/material/Container';
import Button from '@mui/material/Button';

import { navLinks } from '../../constants/nav-links';

function ResponsiveAppBar() {

  const navStyles = { flexGrow: 1, display: { xs: 'none', md: 'flex' } }

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={navStyles}>
            {navLinks.map((page) => (
              <Button
                key={page.id}
                sx={{ my: 2, color: 'white', display: 'block' }}
                href={page.route}
              >
                {page.label}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;