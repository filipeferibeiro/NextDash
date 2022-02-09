import { FiTrello } from 'react-icons/fi';

import { ButtonName, Container } from "./styles";

export default function SideButton2() {
    return (
        <Container>
            <FiTrello size={24} color="#DDD" />
            <ButtonName>Kanban</ButtonName>
        </Container>
    );
}