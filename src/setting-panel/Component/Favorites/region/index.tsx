import React, { useState, useEffect } from "react";
import { RegionType } from '../../../../Api'


//Mui design
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

import { FavoriteSection, Title, Text, Category } from '../styled'



type Props = {
    region: RegionType[]
};
type SaveRegion = {
    category: string;
    id: number;
}

const Region: React.FC<Props> = ({ region }: Props) => {
    const [saveRegion, setSaveRegion] = useState<SaveRegion[]>([])


    const handleClick = (category: string, id: number, event: any) => {
        setSaveRegion(prevEmployees => [...prevEmployees, { id: id, category: category }])

        const value = event.target.closest('div')


        if (value.classList.contains('categoryBtn')) {
            value.classList.add('categoryBtn-active')
        } else {
            value.classList.remove('categoryBtn-active')
        }

        saveRegion.forEach((item) => {
            if (item.id === id) {
                const removeArray = saveRegion.filter((item) => item.id !== id)
                setSaveRegion(removeArray)
                value.classList.remove('categoryBtn-active')
            }
        })

    };


    console.log(saveRegion);



    return (
        <FavoriteSection>
            <Category>
                <Title>Регионы</Title>
                <Text>Выберите интересующие вас регионы</Text>
                <Stack sx={{ padding: '0 16px 0 0' }} direction="row" flexWrap='wrap' rowGap={1} columnGap={0.8}>
                    {region.map((item) => {
                        const { category, name, id } = item
                        return (
                            <Chip className='categoryBtn' key={id} label={name} variant="outlined" sx={{ mx: 0 }} onClick={(event) => handleClick(category, id, event)} />
                        )
                    })}
                </Stack>
            </Category>
        </FavoriteSection>
    );
};

export default Region;
