import React from "react";
import Post1 from "./Post1";
import Post2 from "./Post2";
import Post3 from "./Post3";
import Post4 from "./Post4";


import { Container, Row, Col, Card } from 'react-bootstrap';
 
 
const Posts = () => {
    return (
        <Container>
            <Row className="justify-content-between"> 
                <Col md={6} className="mb-4">
                    <Post1 />
                </Col>
                <Col md={6} className="mb-4">
                    <Post2 />
                </Col>
                <Col md={6} className="mb-4">
                    <Post3 />
                </Col>
                <Col md={6} className="mb-4">
                    <Post4 />
                </Col>
            </Row>
        </Container>
    );
};
 
export default Posts;