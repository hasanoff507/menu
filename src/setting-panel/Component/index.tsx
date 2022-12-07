import React, { useState } from 'react';

//Material Ui 
import { Box, Tab } from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab';



//React Icons
import { ImHome } from "react-icons/im";
import { AiFillHeart, AiFillMessage } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import { HiLocationMarker } from "react-icons/hi";


//import Pages
import Home from './Home'
import Favorites from './Favorites'
import Person from './Person'
import Location from './Location'
import Message from './Message'


//Styled Component
import { Title } from './styled'




function LabTabs() {
    const [value, setValue] = useState('1');
    const [title, setTitle] = useState('')



    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%', typography: 'body1' }} >
            <TabContext value={value} >
                <Title>{title}</Title>
                <Box sx={{ borderBottom: 1, borderColor: 'divider', width: '100%' }}>
                    <TabList sx={{ overflow: 'unset', width: '100%' }} onChange={handleChange} aria-label="icon tabs">
                        <Tab sx={{ minWidth: '10px', width: '100%', WebkitFlexShrink: 'unset', flexShrink: 'unset', fontSize: '20px' }} label={<ImHome />} aria-label="home" value="1" />
                        <Tab sx={{ minWidth: '10px', width: '100%', WebkitFlexShrink: 'unset', flexShrink: 'unset', fontSize: '20px' }} label={<AiFillHeart />} aria-label="heart" value="2" />
                        <Tab sx={{ minWidth: '10px', width: '100%', WebkitFlexShrink: 'unset', flexShrink: 'unset', fontSize: '20px' }} label={<BsFillPersonFill />} aria-label="person" value="3" />
                        <Tab sx={{ minWidth: '10px', width: '100%', WebkitFlexShrink: 'unset', flexShrink: 'unset', fontSize: '20px' }} label={<HiLocationMarker />} aria-label="location" value="4" />
                        <Tab sx={{ minWidth: '10px', width: '100%', WebkitFlexShrink: 'unset', flexShrink: 'unset', fontSize: '20px' }} label={<AiFillMessage />} aria-label="message" value="5" />
                    </TabList>
                </Box>

                <TabPanel sx={{ padding: '0' }} value="1"><Home setTitle={setTitle} handleChange={handleChange} /></TabPanel>
                <TabPanel sx={{ padding: '0' }} value="2"><Favorites setTitle={setTitle} handleChange={handleChange} /></TabPanel>
                <TabPanel sx={{ padding: '0' }} value="3"><Person setTitle={setTitle} handleChange={handleChange} /></TabPanel>
                <TabPanel sx={{ padding: '0' }} value="4"><Location setTitle={setTitle} handleChange={handleChange} /></TabPanel>
                <TabPanel sx={{ padding: '0' }} value="5"><Message setTitle={setTitle} handleChange={handleChange} /></TabPanel>


            </TabContext>
        </Box>
    );
}


export default LabTabs