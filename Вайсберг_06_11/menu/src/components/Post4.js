import { Card } from "react-bootstrap";
import Button from "./Button";
import { useState } from 'react';

// import imgf from "../../content/manrelax.jpeg";
// console.log(imgf)
 
const Post4 = () => {
    const [isShown, setIsShown] = useState(false);
    const handleClick = event => {
        setIsShown(current => !current);
    };
    return (
        <Card >
            <Card.Img
                variant="top"
                src =  "https://img.freepik.com/free-photo/close-up-view-of-delicious-healthy-breakfast_23-2148694996.jpg?w=740&t=st=1699271375~exp=1699271975~hmac=97445eb52f20ec843150aeb576b7f6f7e3c7231463f95c1ff47473a320169b4f"
                // src = "/home/lizik/webLess/blog/content/manrelax.jpeg"
                // source={require('manrelax.jpeg')}
                width= {400}
                height={400}
            />
            <Card.Body>
                <Card.Title>Десерт клубника с чиа</Card.Title>
                <Card.Text>
                <div>
                        <button className="button-desc" onClick={handleClick}>Состав</button>
                        {isShown && (
                            <div class="text-wrap" style={{"width": "400px", "overflow-y": "scroll", "display": "block"}}>
                                Состав: молоко, семена чиа, клубника, сироп топинамбура, соль
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
 
export default Post4;