import { Button, Col, Container, Form, InputGroup, Row, Stack } from "react-bootstrap";
import "./HeaderComponent.css";
import LogoComponent from "./LogoComponents";
import { useState } from "react";

//TODO adicioanr componente de skeleton nos
// lugares que tem as inforamções das requisições
interface HeaderComponentProps {
    onSearch: (inputScp: string) => void
}
function HeaderComponent({ onSearch }: HeaderComponentProps) {
    const [inputScp, setInputScp] = useState<string>("");

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputScp(event.target.value);
    }
    const handleSearchClick = () => {
        onSearch(inputScp)
    }
    return (
        <Container fluid>
            <Row className="justify-content-center background-degrade gap-5">
                {/* <Col md={{ span: 3 }} /> */}
                <Col md={{ span: 3 }} className="d-flex ">
                    <Col md='auto'>
                        <LogoComponent width='100px' height='100px' />
                    </Col>
                    <Stack className="">
                        <div className="font-header-title">Fundação SCP</div>
                        <div className="font-header-sub-title">Filial Lusofona</div>
                    </Stack>
                </Col>
                <Col md='2' className=" d-flex justify-content-end align-self-end">
                    <InputGroup>
                        <Form.Control onChange={handleInputChange} value={inputScp} type="text" placeholder="Pesquise por um SCP" className="form-control-sm" />
                        <Button variant="dark" onClick={handleSearchClick}>
                            🔎
                        </Button>
                    </InputGroup>
                </Col>
            </Row>
        </Container>
    )
}


export default HeaderComponent;