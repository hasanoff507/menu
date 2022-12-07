import React, { useState, useEffect } from "react";
import { TimeType } from '../../../../Api'


//Mui design
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
// import Button from '@mui/material/Button';
import { FavoriteSection, Title, Text, Category, Button, ButtonLinks, ButtonSettings } from '../styled'



type Props = {
    time: TimeType[];
    handleChange: (e: React.SyntheticEvent, value: string) => void
};
type Times = {
    category: string;
    id: number;
}

const Home: React.FC<Props> = ({ time, handleChange }: Props) => {
    const [times, setTimes] = useState<Times[]>([])


    const handleClick = (category: string, id: number, event: any) => {
        setTimes(prevEmployees => [...prevEmployees, { id: id, category: category }])

        const value = event.target.closest('div')


        if (value.classList.contains('categoryBtn')) {
            value.classList.add('categoryBtn-active')
        } else {
            value.classList.remove('categoryBtn-active')
        }

        times.forEach((item) => {
            if (item.id === id) {
                const removeArray = times.filter((item) => item.id !== id)
                setTimes(removeArray)
                value.classList.remove('categoryBtn-active')
            }
        })

    };


    console.log(times);


    return (
        <FavoriteSection>
            <Category>
                <Title>Время</Title>
                <Text>В какое время суток Вам комфортно получать публикации?</Text>
                <Stack sx={{ padding: '0 16px 0 0' }} direction="row" flexWrap='wrap' rowGap={1} columnGap={0.8}>
                    {time.map((item) => {
                        const { category, name, id } = item
                        return (
                            <Chip className='categoryBtn' key={id} label={name} variant="outlined" sx={{ mx: 0 }} onClick={(event) => handleClick(category, id, event)} />
                        )
                    })}
                </Stack>
                <ButtonLinks>
                    <ButtonSettings onClick={(e: React.SyntheticEvent) => handleChange(e, '1')} variant="contained"   >
                        ←  Назад
                    </ButtonSettings>

                    <Button onClick={(e: React.SyntheticEvent) => handleChange(e, '3')} variant="contained"  >Дальше  →</Button>

                </ButtonLinks>
                <Text>Вы можете изменить эти настройки в любое время.</Text>
            </Category>
        </FavoriteSection>

    );
};

export default Home;
