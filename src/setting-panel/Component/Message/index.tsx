import { Stack, ToggleButton, ToggleButtonGroup } from "@mui/material";
import React, { useState, useEffect } from "react";
import { Category, LocationSection, Text, Title, LanguageText, ButtonLocation } from "../Location/style";
import { Button } from 'antd';
import { Link } from "react-router-dom";
import { ButtonLinks, ButtonSettings } from "../Favorites/styled";

type Props = {
    setTitle: React.Dispatch<React.SetStateAction<string>>
    handleChange: (e: React.SyntheticEvent, value: string) => void

};

const Message: React.FC<Props> = ({ setTitle, handleChange }: Props) => {
    useEffect(() => {
        setTitle('Choose language')
    }, [setTitle])


    const [language, setLanguage] = useState('');

    const handleAlignment = (
        event: React.MouseEvent<HTMLElement>,
        newAlignment: string | null,
    ) => {
        if (newAlignment !== null) {
            setLanguage(newAlignment);
            console.log(newAlignment)
        }


    };



    return (
        <div>
            <LocationSection>
                <Category>
                    <Title>Язык</Title>
                    <Text>Выберите удобный вам язык</Text>
                    <Stack direction="row" spacing={4} style={{ marginBottom: '220px' }}>

                        <ToggleButtonGroup
                            value={language}
                            exclusive
                            onChange={handleAlignment}
                            aria-label="text alignment"
                            sx={{
                                backgroundColor: "#f1f1f1",
                                borderRadius: "120px !important",
                                border: "none",
                                "& .Mui-selected ": {
                                    color: '#FFFFFF !important',
                                    background: '#FF6E01 !important',
                                },

                            }}
                        >
                            <ToggleButton value="Узбекча" sx={{
                                borderRadius: "120px !important",
                                padding: '0 !important',
                                border: "none",
                                fontSize: '12px',
                                width: '80px !important',
                                height: '34px !important',


                            }}>

                                Узбекча
                            </ToggleButton>
                            <ToggleButton sx={{
                                borderRadius: "120px !important",
                                padding: '0 !important',
                                border: "none",
                                fontSize: '12px',
                                width: '80px !important',
                                height: '34px !important',
                            }} value="O’zbekcha">
                                O’zbekcha
                            </ToggleButton>
                            <ToggleButton sx={{
                                borderRadius: "120px !important",
                                padding: '0 !important',
                                border: "none",
                                fontSize: '12px',
                                width: '80px !important',
                                height: '34px !important',
                            }} value="Русский">
                                Русский
                            </ToggleButton>
                        </ToggleButtonGroup>
                    </Stack>
                    <ButtonLinks>
                        <ButtonSettings onClick={(e: React.SyntheticEvent) => handleChange(e, '4')} variant="contained"   >
                            ←  Назад
                        </ButtonSettings>
                        <Link to='registration'>

                            <ButtonLocation >Дальше  →</ButtonLocation>
                        </Link>

                    </ButtonLinks>
                    <Text>Вы можете изменить эти настройки в любое время.</Text>

                </Category>
            </LocationSection>
        </div>
    );
};

export default Message;
