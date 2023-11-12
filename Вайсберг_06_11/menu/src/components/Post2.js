import { Card } from "react-bootstrap";
import Button from "./Button";
import { useState } from 'react';


const Post2 = () => {
    const [isShown, setIsShown] = useState(false);
    const handleClick = event => {
        setIsShown(current => !current);
    };
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img
                variant="top"
                src="https://img.freepik.com/free-photo/high-angle-of-delicious-healthy-breakfast_23-2148695003.jpg?w=740&t=st=1699265824~exp=1699266424~hmac=2f9a98c5ed09b48a86f884c18fc0240c87e76c32c428a28d72990742e0a7bb56"
                width={400}
                height={400}
            />
            <Card.Body>
                <Card.Title>
                    Молочная каша с клубникой</Card.Title>
                <Card.Text>
                    <div>
                        <button className="button-desc" onClick={handleClick}>Состав</button>
                        {isShown && (
                            <div class="text-wrap" style={{ "width": "400px", "overflow-y": "scroll", "display": "block" }}>
                                Состав: вода, молоко, овсянка, семена чиа, клубника, сироп топинамбура, соль
                            </div>
                        )}
                        {isShown}
                    </div>
                </Card.Text>
                <Button />
            </Card.Body>
        </Card>
    )
}

export default Post2;