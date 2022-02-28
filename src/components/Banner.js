import { Container, Row, Col, InputGroup, FormControl, Button, Card, Dropdown} from "react-bootstrap"

const Banner = () => {

    return (
        <Card className="bg-light text-black">
            <Card.Img src="https://www.instacart.com/image-server/x428/www.instacart.com/assets/homepage/homepage_background_full_m3_cropped-8d2d286263821da7decd7c61fb1db1eb0e3dec13e0c356277d6d3cb7484c024a.jpg" alt="Card image" height="450" />
            <Card.ImgOverlay>
            <Row>
            <Col style={{backgroundColor: "transparent" }}>
            <Row>
                    <Col style={{paddingTop: "5em"}} md={{ span: 4, offset: 2 }}>
                        <h2>Order groceries for delivery or pickup today</h2>
                        <p>
                            Whatever you want from local stores, brought right to your door.
                        </p>

                        <InputGroup>
                            <FormControl 
                                type="text"
                                placeholder="Enter your address"
                                >
                            </FormControl>
                            <Button variant="success"> Go </Button>
                        </InputGroup>
  
                    </Col>
                </Row>
            </Col>
            
            </Row>
            </Card.ImgOverlay>
        </Card>
    )
}

export default Banner;