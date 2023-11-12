import { Card } from "react-bootstrap";
import Button from "./Button";
import { useState } from 'react';



const Post1 = () => {
    const [isShown, setIsShown] = useState(false);
    const handleClick = event => {
        setIsShown(current => !current);
    };
    return (
        <Card >
            <Card.Img
                variant="top"
                src="https://img.freepik.com/free-photo/high-angle-of-delicious-healthy-breakfast_23-2148695001.jpg?w=740&t=st=1699268156~exp=1699268756~hmac=08b1bc087bb1accfce2bbc698009980a32f0b238876dc67569c78bfd2fe03949"
                width={400}
                height={400}
            />
            <Card.Body>
                <Card.Title>Молочная каша с инжиром</Card.Title>
                <Card.Text>
                    <div>
                      
                        <button className="button-desc" onClick={handleClick}>Состав</button>
                        {isShown && (
                            <div class="text-wrap" style={{ "width": "400px", "overflow-y": "scroll", "display": "block" }}>
                                Состав: вода, молоко, овсянка, семена чиа, инжир, сироп топинамбура, соль
                            </div>
                        )}
                        {isShown}
                    </div>
                </Card.Text>
                <Button />
            </Card.Body>
        </Card>
    );
};

export default Post1;