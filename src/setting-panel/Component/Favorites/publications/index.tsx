import React, { useState, useEffect } from "react";

import Slider from "@mui/material/Slider";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";


//Styled Component
import { FavoriteSection, Title, Text, Category, PublicationNumber } from '../styled'

type Props = {
};
const Publication: React.FC<Props> = ({ }: Props) => {
    const PrettoSlider = styled(Slider)({
        color: "#52af77",
        height: 8,
        "& .MuiSlider-track": {
            border: "none"
        },
        "& .MuiSlider-thumb": {
            height: 24,
            width: 24,
            backgroundColor: "#fff",
            border: "2px solid currentColor",
            "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
                boxShadow: "inherit"
            },
            "&:before": {
                display: "none"
            }
        },
        "& .MuiSlider-valueLabel": {
            lineHeight: 1.2,
            fontSize: 12,
            background: "unset",
            padding: 0,
            width: 32,
            height: 32,
            borderRadius: "50% 50% 50% 0",
            backgroundColor: "#52af77",
            transformOrigin: "bottom left",
            transform: "translate(50%, -100%) rotate(-45deg) scale(0)",
            "&:before": { display: "none" },
            "&.MuiSlider-valueLabelOpen": {
                transform: "translate(50%, -100%) rotate(-45deg) scale(1)"
            },
            "& > *": {
                transform: "rotate(45deg)"
            }
        }
    });

    return (
        <>
            <FavoriteSection>
                <Category>
                    <Title>Публикации</Title>
                    <Text style={{ maxWidth: '300px' }}>Какое количество публикаций в день вам комфортно получать?</Text>
                    <Box sx={{ width: '100%' }}>
                        {/* <Typography gutterBottom>pretto.fr</Typography> */}
                        <PrettoSlider
                            valueLabelDisplay="auto"
                            aria-label="pretto slider"
                            defaultValue={20}
                            sx={{ color: '#1976d2 !important' }}
                        />
                    </Box>
                    <PublicationNumber>
                        <span>1 публикация</span>
                        <span>20 публикаций</span>
                    </PublicationNumber>
                </Category>
            </FavoriteSection>
        </>
    );
};

export default Publication;
