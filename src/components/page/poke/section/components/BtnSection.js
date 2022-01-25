import React, { memo, useEffect, useState } from 'react';
import Btn from '../../../../Btn';
import Loading from '../../../../Loading';
import Error from '../../../../Error';
import ApiCalls from '../../../../../helpers/apiCalls';
import { Grid } from '@mui/material';

const btnSectionStyles = () => ({
    paddingRight: '20px'
})

const BtnSection = () => {
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
        if (items && !items.length) {
            setLoading(true);
            const AC = new ApiCalls();
            AC.pokeNames(errorHandler, loadingHandler, itemsHandler);
        }
    },[items])

    if (loading && !error) return <Loading/>
    if (error) return <Error/>

    return (
        <Grid sx={btnSectionStyles} xl={6} lg={6} md={6} sm={5} xs={4} item>
            {
                items.map((item, index) => {
                    return (
                        <Btn key={index} text={item.name}/>
                    )
                })
            }
        </Grid>
    );
};

export default memo(BtnSection);