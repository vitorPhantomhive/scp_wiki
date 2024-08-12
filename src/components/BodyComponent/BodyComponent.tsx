import { Col, Container, Row, Stack } from "react-bootstrap"
import './BodyComponent.css';
import { useState } from "react";
import { GetScp } from "../../models/getScp.interface";

interface BodyComponentProps {
    scpData: GetScp | null;
}

function BodyComponent({ scpData }: BodyComponentProps) {

    if (!scpData) {
        return <>
            Pesquise por um scp
        </>
    }

    const [itemNumber, setItemNumber] = useState(scpData!.itemNumber);
    const [objectClass, setObjectClass] = useState(scpData!.objectClass);
    const [containmentProcedures, setContainmentProcedures] = useState(scpData!.containmentProcedures);
    return (
        <Container fluid>
            <Row>
                <Col md={{ span: 3 }}></Col>
                <Col className='font'>
                    <br />
                    <h1>SCP-{itemNumber}</h1>
                    <hr />
                    <p><strong>Item nº: SCP-{itemNumber}</strong></p>
                    <p><strong>Classe de Objeto</strong>: {objectClass}</p>

                    <p><strong>Procedimentos Especiais de Contenção: </strong>{containmentProcedures}</p>

                </Col>
                <Col md={{ span: 3 }}></Col>
            </Row>
        </Container>
    )
}




export default BodyComponent