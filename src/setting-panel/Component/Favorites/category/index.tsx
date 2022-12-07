import React, { useState, useEffect } from "react";
import { CategoryType } from '../../../../Api'


//Mui design
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';



//Styled Component
import { FavoriteSection, Title, Text, Category } from '../styled'




type Props = {
    categorys: CategoryType[]
};

type SaveCategory = {
    category: string;
    id: number;
}

const Person: React.FC<Props> = ({ categorys }: Props) => {
    const [saveCategory, setSaveCategory] = useState<SaveCategory[]>([])


    const handleClick = (category: string, id: number, event: any) => {
        setSaveCategory(prevEmployees => [...prevEmployees, { id: id, category: category }])

        const value = event.target.closest('div')


        if (value.classList.contains('categoryBtn')) {
            value.classList.add('categoryBtn-active')
        } else {
            value.classList.remove('categoryBtn-active')
        }

        saveCategory.forEach((item) => {
            if (item.id === id) {
                const removeArray = saveCategory.filter((item) => item.id !== id)
                setSaveCategory(removeArray)
                value.classList.remove('categoryBtn-active')
            }
        })

    };


    console.log(saveCategory);


    return (
        <FavoriteSection>
            <Category>
                <Title>Категории</Title>
                <Text>Отметьте категории, которые вам интересны</Text>
                <Stack sx={{ padding: '0 16px 0 0' }} direction="row" flexWrap='wrap' rowGap={1} columnGap={0.8}>
                    {categorys.map((item) => {
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

export default Person;
