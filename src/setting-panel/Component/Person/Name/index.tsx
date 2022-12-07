import React, { useState, useEffect, } from "react";
//Styled Component
import { FavoriteSection, Title, Text, Category, InputButton, Age, ButtonAges } from '../styled'

//component
// import TelegramUser from "./TelegramUser";

// Input and images
import { Form, Input } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';

import { BsTelephone } from 'react-icons/bs'
// import { Button } from 'antd';
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { Chip, Stack } from "@mui/material";
// import Button from '@mui/material/Button';
import { AgeType } from '../../../../Api'
import { Button, ButtonLinks, ButtonSettings } from "../../Favorites/styled";

type Props = {
    ageNumber: AgeType[],
    handleChange: (e: React.SyntheticEvent, value: string) => void

};

type SaveAge = {
    id: number;
    min: number,
    max: number;
}

interface IForm {
    name: string;
    phoneNumber: number;
}



const Favorites: React.FC<Props> = ({ ageNumber, handleChange }: Props) => {
    const [alignment, setAlignment] = useState('');
    const [selected, setSelected] = useState('');

    const [saveAge, setSevAge] = useState<SaveAge[]>([])




    const onSubmit = (data: IForm) => {
        console.log(data);
    }

    const handleAlignment = (
        event: React.MouseEvent<HTMLElement>,
        newAlignment: string | null,
    ) => {
        if (newAlignment !== null) {
            setAlignment(newAlignment);

        }


    };
    const handleSelected = (
        event: React.MouseEvent<HTMLElement>,
        newSelected: string | null,
    ) => {
        if (newSelected !== null) {
            setSelected(newSelected);

        }


    };

    const handleClick = (id: number, min: number, max: number, event: any) => {
        setSevAge(prevEmployees => [...prevEmployees, { id: id, min: min, max: max }])

        console.log(saveAge);

    };


    return (
        <FavoriteSection>

            <Category>
                <Form
                    onFinish={onSubmit}
                >
                    <Title>Имя</Title>
                    <Text>Напишите имя, чтобы мы знали как к вам обращаться</Text>
                    <Form.Item
                        name="name"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input style={{ borderRadius: "10px", }} size="large" type="text" placeholder="Ваше имя" prefix={<UserOutlined />} />
                    </Form.Item>
                    <Title>Телефон</Title>
                    <Text>Укажите номер или поделитесь им, нажав кнопку </Text>
                    <InputButton>
                        {/* <Form.Item
                            name="phoneNumber"
                            rules={[{ required: true, message: 'Please input your phone number!' }]}
                        >
                            <Input style={{ borderRadius: "10px", }} type='number' size="large" placeholder="Ваш телефон" prefix={<BsTelephone />} />
                        </Form.Item>
                        <Form.Item>

                            <Button style={{ borderRadius: '10px', background: '#40A7E3', color: '#fff' }} size="large" htmlType="submit" >
                                Поделиться
                            </Button>
                        </Form.Item> */}

                    </InputButton>
                    <Title>
                        Пол
                    </Title>
                    <Text>Выберите ваш пол </Text>
                </Form>
                <Stack direction="row" spacing={4}>

                    <ToggleButtonGroup
                        value={alignment}
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
                        <ToggleButton value="Женщина" sx={{
                            borderRadius: "120px !important",
                            padding: '0 !important',
                            border: "none",
                            fontSize: '12px',
                            width: '80px !important',
                            height: '34px !important',
                        }}>
                            Женщина
                        </ToggleButton>
                        <ToggleButton sx={{
                            borderRadius: "120px !important",
                            padding: '0 !important',
                            border: "none",
                            fontSize: '12px',
                            width: '80px !important',
                            height: '34px !important',
                        }} value="Мужчина">
                            Мужчина
                        </ToggleButton>
                    </ToggleButtonGroup>
                </Stack>
                <Age>
                    <Title>
                        Возраст
                    </Title>
                    <Text>
                        В какое время дня Вам комфортно получать публикации?
                    </Text>
                    <Stack direction="row" flexWrap='wrap' sx={{
                        flexWrap: 'wrap', gap: '13px',
                    }}>
                        <ToggleButtonGroup
                            value={selected}
                            exclusive
                            onChange={handleSelected}
                            aria-label="text alignment"
                            sx={{
                                display: 'flex',
                                gap: '5px',
                                flexWrap: 'wrap',
                                "& .Mui-selected ": {
                                    color: '#FFFFFF !important',
                                    background: '#FF6E01 !important',
                                },
                            }}
                        >
                            {ageNumber.map((item) => {
                                const { min, max, id } = item
                                return (
                                    <ToggleButton key={id} sx={{
                                        borderRadius: '17px !important',
                                        width: '70px',
                                        height: "34px",
                                        background: '#F1F1F1 !important',
                                        '&.MuiButtonBase-root': {
                                            padding: 'unset !important',
                                            borderLeft: 'unset !important'
                                        }
                                    }} onClick={(event) => handleClick(id, min, max, event)} value={`${min} - ${max}`} >
                                        {`${min} - ${max}`}
                                    </ToggleButton>
                                )
                            })}
                        </ToggleButtonGroup>
                        <ButtonLinks>
                            <ButtonSettings onClick={(e: React.SyntheticEvent) => handleChange(e, '2')} variant="contained"   >
                                ←  Назад
                            </ButtonSettings>

                            <Button onClick={(e: React.SyntheticEvent) => handleChange(e, '4')} variant="contained"  >Дальше  →</Button>

                        </ButtonLinks>
                        <Text>Вы можете изменить эти настройки в любое время.</Text>
                    </Stack>
                </Age>
            </Category>
        </FavoriteSection >
    );
};

export default Favorites;
