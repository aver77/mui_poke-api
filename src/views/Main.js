import React from 'react';
import PokeWrapper from '../components/page/poke/PokeWrapper';
import TitleItem from '../components/page/title/TitleItem';
import SectionItem from '../modularComponents/section/SectionItem';

const Main = () => {
    return (
        <PokeWrapper>
            <TitleItem/>
            <SectionItem/>
        </PokeWrapper>
    );
};

export default Main;