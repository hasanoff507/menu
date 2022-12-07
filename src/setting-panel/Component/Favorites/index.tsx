import React, { useState, useEffect } from "react";

//Category data
import { Category, CategoryType, Region, RegionType, Time, TimeType } from '../../../Api'


import CategoryPage from './category'
import RegionPage from './region'
import PublicationsPage from './publications'
import TimePage from './time'

import { PersonSection } from './styled'

type Props = {
    setTitle: React.Dispatch<React.SetStateAction<string>>
    handleChange: (e: React.SyntheticEvent, value: string) => void

};

const Person: React.FC<Props> = ({ setTitle, handleChange }: Props) => {

    const [categorys, setCategorys] = useState(Category as CategoryType[])
    const [region, setRegion] = useState(Region as RegionType[])
    const [time, setTime] = useState(Time as TimeType[])


    useEffect(() => {
        setTitle('complete your profile')
    }, [setTitle])


    return (
        <PersonSection >
            <CategoryPage categorys={categorys} />
            <RegionPage region={region} />
            <PublicationsPage />
            <TimePage time={time} handleChange={handleChange} />
        </PersonSection>
    );
};

export default Person;
