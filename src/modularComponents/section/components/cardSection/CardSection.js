import React, { memo, useState, useEffect } from 'react';
import CardTitle from './CardTitle';
import CardImg from './CardImg';
import CardTextWrap from './CardTextWrap';
import Text from '../../../../components/Text';
import Error from '../../../../components/Error';
import Loading from '../../../../components/Loading';
import ApiCalls from '../../../../helpers/apiCalls';
import { Grid, Box } from '@mui/material';

const cardSectionStyles = () => ({
    maxHeight: '500px',
    backgroundColor: '#000000'
})
const cardSectionWrapper = (theme) => ({
    margin: '44px 44px 16px 44px', 
    width: '100%',
    [theme.breakpoints.down('sm')]: {
        margin: '16px 16px 16px 16px'
    }
})

const CardSection = ({name}) => {
    const [items, setItems] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const itemsHandler = (value) => {
        setItems(value);
    }
    const loadingHandler = (bool) => {
        setLoading(bool);
    }
    const errorHandler = (bool) => {
        setError(bool);
    }

    useEffect(() => {
        if (name) {
            console.log(name)
            setLoading(true);
            const AC = new ApiCalls();
            AC.pokeCharacteristics(name, errorHandler , loadingHandler, itemsHandler);
        }
    },[name])

    if (loading && !error) return (
        <Grid item xl={6} lg={6} md={6} sm={6} xs={6}>
            <Loading/>
        </Grid>
    )
    if (error) return (
        <Grid item xl={6} lg={6} md={6} sm={6} xs={6}>
            <Error/>
        </Grid>
    )

    return (
        <Grid item xl={6} lg={6} md={6} sm={7} xs={8} sx={cardSectionStyles}>
            <Grid container>
                <Box sx={cardSectionWrapper}> 
                    <CardTitle title={name}/>
                    <CardImg imgSrc={items.img} imgAlt={name}/>
                    <CardTextWrap>
                        <Text series={items.moves} id={items.id} height={items.height} attack={items.attack}/>
                    </CardTextWrap>
                </Box>
            </Grid>
        </Grid>
    );
};

export default memo(CardSection);