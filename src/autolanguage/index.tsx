import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { Language, LanguageContent, LanguageTitle, LanguageText, LanguageButtons, Button } from "./style";






type Props = {

};



const Favorites: React.FC<Props> = ({ }: Props) => {




    return (
        <Language>
            <LanguageContent>
                <LanguageTitle>UcharMarket</LanguageTitle>
                <LanguageText>Ўзингизга кулай тилни танланг
                    <br /><br />
                    O'zingizga qulay tilni tanlang
                    <br /><br />
                    Выберите удобный для Вас язык
                </LanguageText>
            </LanguageContent>
            <LanguageButtons>
                <Link to='registration'>
                    <Button >
                        Узбекча
                    </Button>
                    <Button >
                        O’zbekcha
                    </Button>
                    <Button >
                        Русский
                    </Button>
                </Link>
               
            </LanguageButtons>
        </Language>

    );
};

export default Favorites;
