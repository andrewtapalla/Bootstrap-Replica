import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'

function StoreListing() {
    return(
    <>
        <h2>Browse stores in Sacramento</h2>
        <Container style={{ marginTop: "40px", textAlign: "center" }}>
            <Container>
                <Row>
                    <Col>
                        <img src="https://www.instacart.com/image-server/68x68/www.instacart.com/assets/domains/warehouse/logo/1618/a37b9c51-3e88-4042-9690-e28c85ca9517.png"></img>
                    </Col>
                    <Col xs={6}>
                        <img src="https://www.instacart.com/image-server/68x68/www.instacart.com/assets/domains/warehouse/logo/233/ca07b011-2df2-4e1d-bdef-e47d2d0f24d7.png"></img>
                    </Col>
                    <Col>
                        <img src="https://www.instacart.com/image-server/68x68/www.instacart.com/assets/domains/warehouse/logo/1366/d1487beb-780a-4dff-afe6-356b03287594.png"></img>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <img src="https://www.instacart.com/image-server/68x68/www.instacart.com/assets/domains/warehouse/logo/5/65f2304b-908e-4cd0-981d-0d4e4effa8de.png"></img>
                    </Col>
                    <Col xs={6}>
                        <img src="https://www.instacart.com/image-server/68x68/www.instacart.com/assets/domains/warehouse/logo/279/0d43b5d2-9d07-4a30-a0ee-0e16d5922411.png"></img>
                    </Col>
                    <Col>
                        <img src="https://www.instacart.com/image-server/68x68/www.instacart.com/assets/domains/warehouse/logo/1439/174eebab-0b37-4c76-b1dc-67f94e49b16d.jpg"></img>
                    </Col>
                </Row>
            </Container>
        </Container>
    </>
    )
}

export default StoreListing;