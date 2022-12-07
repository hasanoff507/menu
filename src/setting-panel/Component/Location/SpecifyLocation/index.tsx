import React, { useState, useEffect } from "react";

import { LocationSection, Title, Text, Category, InputDiv, ButtonLocation } from '../style'

import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";
import { FiMapPin } from 'react-icons/fi'
import L, { LatLngExpression, LocationEvent, } from "leaflet";
import mapNodeIcon from "../constants";
import { Input } from "antd";
import { Button } from 'antd';
import { ButtonLinks, ButtonSettings } from "../../Favorites/styled";

type Props = {
    handleChange: (e: React.SyntheticEvent, value: string) => void

};


const SpecifyLocation: React.FC<Props> = ({ handleChange }: Props) => {
    function LocationMarker() {
        const [position, setPosition] = useState<LatLngExpression>([41.38117, 64.57358]);
        const [bbox, setBbox] = useState<string[]>();

        const map = useMap();

        useEffect(() => {
            map.locate().on("locationfound", function (e: LocationEvent) {
                setPosition(e.latlng);
                map.flyTo(e.latlng, 16);

                setBbox(e.bounds.toBBoxString().split(","));
            });
        }, [map]);

        return position === null ? null : (
            <Marker
                position={position}
                icon={mapNodeIcon}
            >

            </Marker>
        );
    }

    return (
        <LocationSection>
            <Category>
                <Title>Локация</Title>
                <Text>Поделитесь вашей текущей локацией</Text>
                <MapContainer
                    center={[41.38117, 64.57358]}
                    zoom={6}
                    scrollWheelZoom
                    style={{ height: "191px" }}
                >
                    <TileLayer
                        url='https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw'
                        id='mapbox/streets-v11'
                    />
                    <LocationMarker />
                </MapContainer>
                <InputDiv>
                    <Input size="large" style={{ border: '1px solid #EAE9E9', borderRadius: '10px' }} placeholder="Локация еще не указана" prefix={<FiMapPin />} />
                    <Button style={{ background: "#40A7E3", color: "#FFFFFF", borderRadius: '20px', marginTop: '20px', width: '100%', height: "34px", marginBottom: '22px' }}>Поделиться</Button>

                    <ButtonLinks>
                        <ButtonSettings onClick={(e: React.SyntheticEvent) => handleChange(e, '3')} variant="contained"   >
                            ←  Назад
                        </ButtonSettings>

                        <ButtonLocation onClick={(e: React.SyntheticEvent) => handleChange(e, '5')} variant="contained"  >Дальше  →</ButtonLocation>

                    </ButtonLinks>
                    <Text>Вы можете изменить эти настройки в любое время.</Text>
                </InputDiv>
            </Category>
        </LocationSection>
    )
}
export default SpecifyLocation