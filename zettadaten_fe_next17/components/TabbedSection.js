import * as React from 'react';
import { styled } from '@mui/material/styles';
import TabsUnstyled from '@mui/base/TabsUnstyled';
import TabsListUnstyled from '@mui/base/TabsListUnstyled';
import TabPanelUnstyled from '@mui/base/TabPanelUnstyled';
import { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled';
import TabUnstyled, { tabUnstyledClasses } from '@mui/base/TabUnstyled';
import { Button} from '@mui/base';
import { css } from '@emotion/react';
import BrokenComponantTabbes from '../src/BrokenComponantTabbes'
//import { StyledComponent } from '@mui/material/styles';


const blue = {
    50: '#F0F7FF',
    100: '#C2E0FF',
    200: '#80BFFF',
    300: '#66B2FF',
    400: '#3399FF',
    500: '#007FFF',
    600: '#0072E5',
    700: '#0059B2',
    800: '#004C99',
    900: '#003A75',
};

const grey = {
    50: '#f6f8fa',
    100: '#eaeef2',
    200: '#d0d7de',
    300: '#afb8c1',
    400: '#8c959f',
    500: '#6e7781',
    600: '#57606a',
    700: '#424a53',
    800: '#3a383f',
    900 : '#3a3632',
    //900: '#24292f',
    
};

const Tab = styled(TabUnstyled)`
  font-family: IBM Plex Sans, sans-serif;
  color: #3a3632;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: 600;
  background-color: transparent;
  width: 100%;
  padding: 10px 12px;
  margin: 6px 6px;
  border: none;
  border-radius: 7px;
  display: flex;
  justify-content: center;

  &:hover {
    background-color: ${grey[400]};
  }

  &:focus {
    color: #fff;
    outline: 3px solid ${grey[200]};
  }

  &.${tabUnstyledClasses.selected} {
    background-color: #3a3632;
    color: ${grey[50]};
  }

  &.${buttonUnstyledClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const TabPanel = styled(TabPanelUnstyled)(
    ({ theme }) => `
  width: 100%;
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
  padding: 20px 12px;
  background: ${theme.palette.mode === 'dark' ? grey[900] : grey[700]};
  border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : blue[200]};
  border-radius: 12px;
  opacity: 0.6;
  `,
);

const TabsList = styled(TabsListUnstyled)(
    ({ theme }) => `
  min-width: 400px;
  background-color: ${blue[50]};
  border-radius: 12px;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: space-between;
  box-shadow: 0px 4px 30px ${theme.palette.mode === 'dark' ? grey[900] : grey[200]};
  `,
);

export default function TabbedSection() {
    return (
        <TabsUnstyled defaultValue={0}>
            <TabsList>
                <Tab>My account</Tab>
                <Tab>Profile</Tab>
                <Tab>Language</Tab>
            </TabsList>
        <TabPanel value={0}> <BrokenComponantTabbes /> </TabPanel>
        <TabPanel value={1}><BrokenComponantTabbes /> </TabPanel>
        <TabPanel value={2}><BrokenComponantTabbes /> </TabPanel>
        </TabsUnstyled>
    );
}