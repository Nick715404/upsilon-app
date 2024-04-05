import { navLinks } from '../../constants/nav-links';

import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import AppBar from '@mui/material/AppBar';

function ResponsiveAppBar() {

  const navStyles = { flexGrow: 1, display: { xs: 'none', md: 'flex' }, gap: '20px' }

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={navStyles}>
            {navLinks.map((page) => (
              <Link
                style={{ color: '#fff', }}
                key={page.id}
                to={page.route}
              >
                {page.label}
              </Link>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;