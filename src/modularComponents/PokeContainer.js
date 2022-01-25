import React from 'react';
import styled from 'styled-components';
import { Box, Button, Chip, Container, Grid, Typography } from '@mui/material';
import clickIcon from '../assets/images/clickIcon.png';
import pokePic from '../assets/images/picture.png'
import { maxWidth } from '@mui/system';

// const MainContainer = style(Container)((theme) => ({
//     maxWidth: '1280px',
//     border: '1px solid #FFFFFF'
// }));
const mainContainerStyles = theme => ({
    height: '100vh',
    display: 'flex',
    // border: '1px solid #FFFFFF', 
    alignItems: 'center',
})
const lgContainerStyles = theme => ({
    // border: '1px solid #FFFFFF',
    display: 'flex',
    justifyContent: 'center'
})
const mdContainerStyles = theme => ({
    // border: '1px solid #FFFFFF',
    // minHeight: '405px',
    maxWidth: '980px'
})
const titleWrapper = theme => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
})

const titleTextWrapper = theme => ({
    border: '1px solid #FFFFFF'
});
const titleText = theme => ({
    fontSize: '12px',
    padding: '7px'
});

const titleTapWrapper = theme => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
})
const TitleTapImage = styled.img`
    margin-right: 10px;
    width: 24px;
    height: 30px;
`;
const titleTapTextWrapper = theme => ({
    width: '112px'
});
const titleTapText = theme => ({
    fontSize: '12px',
    lineHeight: '100%',
});

const PokeImg = styled.img`
    /* width: 100%;
    height: 100%; */
    max-width: 396px ;
    width: 100%;
`;

const arr = [1,2,3,4,5,6];

const PokeContainer = () => {
    return (
        <Container maxWidth="xl" sx={mainContainerStyles}>
            <Container sx={lgContainerStyles} maxWidth="lg">
                <Box sx={mdContainerStyles}>
                    <Box sx={titleWrapper}>
                        <Box sx={titleTextWrapper}>
                            <Typography sx={titleText}>ПОКЕМОНЫ API</Typography>
                        </Box>
                        <Box sx={titleTapWrapper}>
                            <TitleTapImage src={clickIcon} alt='click to poke'/>
                            <Box sx={titleTapTextWrapper}>
                                <Typography sx={titleTapText}>Нажмите на нужного Покемона</Typography>
                            </Box>
                        </Box>
                    </Box>
                    {/*  */}
                    {/* <Box sx={{marginTop: '54px', height: '500px'}}> */}
                    <Grid sx={{alignItems: 'center',marginTop: '54px', height: '500px', width: '100%'}} container>
                        <Grid sx={{paddingRight: '20px'}} xl={6} lg={6} md={6} sm={5} xs={4} item>
                            {
                                arr.map(item => {
                                    return (
                                        <Chip label="Clickable" sx={{margin: '6px 6px 6px 0',padding: '20px', color: 'white', backgroundColor: '#1986EC'}} key={item}>Bulbasaur</Chip>
                                    )
                                })
                            }
                        </Grid>
                        <Grid xl={6} lg={6} md={6} sm={7} xs={8} sx={{backgroundColor: '#000000'}} item>
                            <Grid container>
                                <Box sx={{margin: '44px 44px 16px 44px', width: '100%'}}>
                                    <Grid item xs={12}>
                                        <Typography sx={{fontSize: '48px', left: 0, color: '#A0A0A0'}}>Bulbasaur</Typography>
                                    </Grid>
                                    <Grid sx={{mt: '44px'}} item xs={12}>
                                        <PokeImg src={pokePic} alt="poke"/>
                                    </Grid>
                                    <Grid item sx={{mt: '44px'}} xs={12}>
                                        <Typography sx={{fontSize: '17px', color:' #A0A0A0'}}>Снялся в {17} сериях</Typography>
                                        <Typography sx={{fontSize: '17px', color:' #A0A0A0'}}>id: 1</Typography>
                                        <Typography sx={{fontSize: '17px', color:' #A0A0A0'}}>height: 7</Typography>
                                        <Typography sx={{fontSize: '17px', color:' #A0A0A0'}}>attck: 49</Typography>
                                    </Grid>
                                </Box>
                            </Grid>
                        </Grid>
                    </Grid>
                    {/* </Box> */}
                </Box>
            </Container>
        </Container>
    );
};

export default PokeContainer;