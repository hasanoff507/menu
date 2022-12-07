import React, { useState, FC, useEffect } from "react";
import FormControlLabel from '@mui/material/FormControlLabel/FormControlLabel';
import { CardSection, CardCheck, CardCheckes, CardCheckesText, CardIcon, CardSectionText, ButtonLinks, ButtonSettings, Button } from './styled';
import { Checkbox } from "@mui/material";
import DoneOutlinedIcon from '@mui/icons-material/DoneOutlined';
import { Link } from "react-router-dom";
// import { Button } from 'antd'

interface CheckboxProp {
    number: number
}

type Props = {
    setTitle: React.Dispatch<React.SetStateAction<string>>
    handleChange: (e: React.SyntheticEvent, value: string) => void
};

const Home: React.FC<Props> = ({ setTitle, handleChange }: Props) => {
    useEffect(() => {
        setTitle('Настройте бот под себя! ')
    }, [setTitle])
    const CustomCheckbox: FC<CheckboxProp> = (prop) => {
        return (
            <>
                <CardCheck>
                    <CardCheckes>
                        <CardCheckesText>{prop.number}</CardCheckesText>
                    </CardCheckes>
                </CardCheck>

            </>
        )
    }

    const CustomImg = () => {
        return (
            <CardIcon>
                <DoneOutlinedIcon sx={{ color: 'white', marginTop: '2px' }} />
            </CardIcon>
        )
    }

    return (
        <CardSection>
            <FormControlLabel onClick={(e: React.SyntheticEvent) => handleChange(e, "2")} control={<Checkbox sx={{
                "& MuiButtonBase-root": {
                    padding: "unset !important"
                },
            }} icon={<CustomCheckbox number={1} />} checkedIcon={<CustomImg />} />} label="Определите свои предпочтения" />
            <FormControlLabel onClick={(e: React.SyntheticEvent) => handleChange(e, "3")} control={<Checkbox sx={{
                "& MuiButtonBase-root": {
                    padding: "unset !important"
                },
            }} icon={<CustomCheckbox number={2} />} checkedIcon={<CustomImg />} />} label="Заполните свой профиль" />
            <FormControlLabel onClick={(e: React.SyntheticEvent) => handleChange(e, "4")} control={<Checkbox sx={{
                "& MuiButtonBase-root": {
                    padding: "unset !important"
                },
            }} icon={<CustomCheckbox number={3} />} checkedIcon={<CustomImg />} />} label="Укажите свою локацию" />
            <FormControlLabel onClick={(e: React.SyntheticEvent) => handleChange(e, "5")} control={<Checkbox sx={{
                "& MuiButtonBase-root": {
                    padding: "unset !important"
                },
            }} icon={<CustomCheckbox number={4} />} checkedIcon={<CustomImg />} />} label="Выберите язык" />
            <CardSectionText>
                Это нужно вам, чтобы быть в курсе событий, <br /> интересных только вам и получать только <br /> подходящую вам информацию.
            </CardSectionText>
            <ButtonLinks>
                <Link to="/main">
                    <ButtonSettings  >
                        Настрою позже
                    </ButtonSettings>
                </Link>
                <Button onClick={(e: React.SyntheticEvent) => handleChange(e, '2')}  >
                    Настроить
                </Button>
            </ButtonLinks>

        </CardSection >

    );
};

export default Home;
