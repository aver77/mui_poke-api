/* eslint-disable react-hooks/exhaustive-deps */
import React, { memo, useCallback, useEffect, useState } from 'react';
import Btn from '../../components/Btn';
import Loading from '../../components/Loading';
import Error from '../../components/Error';
import ApiCalls from '../../helpers/apiCalls';
import { Grid } from '@mui/material';

const btnSectionStyles = () => ({
    paddingRight: '20px'
})

const BtnSection = ({nameHandler}) => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const itemsHandler = useCallback((value) => {
        setItems(value);
    },[])
    const loadingHandler = useCallback((bool) => {
        setLoading(bool);
    },[])
    const errorHandler = useCallback((bool) => {
        setError(bool);
    },[])

    useEffect(() => {
        if (items && !items.length) {
            setLoading(true);
            const AC = new ApiCalls();
            AC.pokeNames(errorHandler, loadingHandler, itemsHandler);
        }
    },[items, items.length])

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
        <Grid item sx={btnSectionStyles} xl={6} lg={6} md={6} sm={5} xs={4}>
            {
                items?.map((item, index) => {
                    return (
                        <Btn key={index} text={item.name} nameHandler={nameHandler}/>
                    )
                })
            }
        </Grid>
    );
};

export default memo(BtnSection);