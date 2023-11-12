import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar, Nav} from 'react-bootstrap';
import Container from 'react-bootstrap/Container';

const RestNav = () => {
    return (
        <div>
            <Navbar  fixed="top" data-bs-theme="dark" >
                <Container>
                    <Navbar.Brand href="#"><img src="https://static.tildacdn.com/tild3534-6531-4863-b537-376264653863/EGGSELLENT_LOGO-2_1.png" alt="logo" width= {100}/></Navbar.Brand>
                    <Nav className="justify-content-end">
                        <Nav.Link href="#">Меню</Nav.Link>
                        <Nav.Link href="#">Мероприятия</Nav.Link>
                        <Nav.Link href="#">Контакты</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default RestNav;