import React, { useState, useEffect } from "react";
import SpecifyLocation from './SpecifyLocation'

type Props = {
    setTitle: React.Dispatch<React.SetStateAction<string>>
    handleChange: (e: React.SyntheticEvent, value: string) => void

};

const Location: React.FC<Props> = ({ setTitle, handleChange }: Props) => {
    useEffect(() => {
        setTitle('indicate the location')
    }, [setTitle])

    return (
        <SpecifyLocation handleChange={handleChange} />
    );
};

export default Location;
