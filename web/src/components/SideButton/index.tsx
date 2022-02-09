import { FiLayout } from 'react-icons/fi';

import { ButtonName, Container } from "./styles";

export default function SideButton() {
    return (
        <Container>
            <FiLayout size={24} color="#5B77BE" />
            <ButtonName>Dashboard</ButtonName>
        </Container>
    );
}