import * as React from 'react';
import Typography from '@mui/material/Typography';
import MuiLink from '@mui/material/Link';

export default function Copyright() {
    return (
        <Typography variant="body2" color="text.secondary" align="center">
            {'Copyright © '}
            <MuiLink color="inherit" href="https://ndedges.com/">
                CADENTIC®
            </MuiLink>{' '}
            <MuiLink color="inherit" href="https://zettadaten.com/">
                CADENTIC ZETTADATEN™
            </MuiLink>{' '}
            {new Date().getFullYear()}.
        </Typography>
    );
}