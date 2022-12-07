import React, { useState, useEffect } from "react";

import Name from './Name'

import { Age, AgeType } from '../../../Api'


type Props = {
    setTitle: React.Dispatch<React.SetStateAction<string>>
    handleChange: (e: React.SyntheticEvent, value: string) => void
};



const Favorites: React.FC<Props> = ({ setTitle, handleChange }: Props) => {

    const [saveAge, setSaveAge] = useState(Age as AgeType[])

    useEffect(() => {
        setTitle('define preferences')
    }, [setTitle])


    return (
        <div>

            <Name ageNumber={saveAge} handleChange={handleChange} />
        </div>

    );
};

export default Favorites;
