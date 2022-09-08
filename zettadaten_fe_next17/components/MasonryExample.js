import * as React from 'react';
import { styled } from '@mui/material/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Masonry from '@mui/lab/Masonry';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from '@mui/material';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

const heights = [15, 15, 15, 15];


const StyledAccordion = styled(Accordion)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#ffff',
  color: theme.palette.text.secondary,
}));







const MasonryExample = () => {
  return (
    <div>
      <Box sx={{ width: 500, minHeight: 377, color: 'Highlight' }}>
        <Masonry columns={4} spacing={2}>
          {heights.map((height, index) => (
            <Paper key={index}>
              <StyledAccordion sx={{ minHeight: height }}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography>Accordion {index + 1}</Typography>
                </AccordionSummary>
                <AccordionDetails> potato chips </AccordionDetails>
              </StyledAccordion>
            </Paper>
          ))}
        </Masonry>
      </Box>
    </div>
  )
}

export default MasonryExample
