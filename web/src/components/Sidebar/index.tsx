import Logo from '../../images/logo.svg';
import SideButton from '../SideButton';
import SideButton2 from '../SideButton2';

import { ButtonList, Container, LogoImage } from "./styles";

export default function Sidebar() {
    return (
        <Container>
            <LogoImage src={Logo} alt="logo" />
            <ButtonList>
                <SideButton />
                <SideButton2 />
                
            </ButtonList>
            <SideButton2 />
        </Container>
    );
}