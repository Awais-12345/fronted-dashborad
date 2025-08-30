import React, { useState } from 'react'
import { SideArray, SideBar } from '../side-bar'
import { Outlet } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'
import { Header } from '../header/header'

const MainComponent = () => {
    const [active, setActive] = useState(SideArray[0]);
    
    return (
        <div>
            <Container fluid>
                <Row>
                    <Col md={2} className="d-none d-md-block p-2 border-end position-fixed start-0 top-0 h-100" style={{ backgroundColor: 'lightseagreen' }}>
                        <SideBar setActive={setActive} active={active} />
                    </Col>
                    <Col md={10} className='offset-md-2'>
                        <div className='position-fixed top-0 w-100' style={{ zIndex: 1030 }}>
                            <Header setActive={setActive} active={active} />
                        </div>
                        <div style={{ marginTop: '100px' }}>
                            <Outlet />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export { MainComponent }