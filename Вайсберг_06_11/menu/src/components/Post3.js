import { Card } from "react-bootstrap";
import Button from "./Button";
import { useState } from 'react';

// import imgf from "../../content/manrelax.jpeg";
// console.log(imgf)

const Post3 = () => {
    const [isShown, setIsShown] = useState(false);
    const handleClick = event => {
        setIsShown(current => !current);
    };
    return (
        <Card >
            <Card.Img
                variant="top"
                src="https://img.freepik.com/free-photo/top-view-of-delicious-healthy-breakfast_23-2148695005.jpg?w=740&t=st=1699271884~exp=1699272484~hmac=a1d264c39119cf3c1b3ddd33b0dbcc237e44d3db0ca5302a4ddc6aaada14a213"
                width={400}
                height={400}
            />
            <Card.Body>
                <Card.Title>Завтрак 1: каша с клубникой, инжир, кофе</Card.Title>
                <Card.Text>
                    <div>
                        <button className="button-desc" onClick={handleClick}>Состав</button>
                        {isShown && (
                            <div class="text-wrap" style={{ "width": "400px", "overflow-y": "scroll", "display": "block" }}>
                                Состав: вода, молоко, мука, клубника, сироп топинамбура, сольб кофе, инжир
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

export default Post3;