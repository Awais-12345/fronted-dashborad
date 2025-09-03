import React from 'react'
import { Row, Col } from 'react-bootstrap';
import { ColumnChart } from '../graphs';
import { AreaChart } from '../graphs';
import { LineChart } from '../graphs';
import { PieChart } from '../graphs';
import GoogleMaps from '../google-map/google-map';
import { OrderCard, ProductCard, UserCard } from '../cards';
const Dashboard = () => {
    return (
        <div>
            <Row className='mb-4 align-items-center justify-content-between'>
                <Col xs={10} md={10}>
                    <h3 className='mb-0'>Dashboard</h3>
                </Col>
            </Row>

            <Row className="mb-5" >
                <Col md={4}><OrderCard showTable={false} showButton={false} /></Col>
                <Col md={4}><UserCard /></Col>
                <Col md={4}><ProductCard /></Col>
            </Row>

            <Row>
                <Col xs={12} md={6} className='mb-4' >
                    <h5 className='m-0 p-2' style={{ backgroundColor: '#F0F0F0' }}>Sales Chart</h5>
                    <div style={{ backgroundColor: '#00B8D9' }}>
                        <ColumnChart />
                    </div>
                </Col>

                <Col xs={12} md={6}  >
                    <h5 className='m-0 p-2' style={{ backgroundColor: '#F0F0F0' }}>Revenue Trend</h5>
                    <div style={{ backgroundColor: '#6554C0' }}>
                        <AreaChart />
                    </div>
                </Col>

                <Col xs={12} md={6}>
                    <h5 className='m-0 p-2' style={{ backgroundColor: '#F0F0F0' }}>Product Distribution</h5>
                    <div style={{ backgroundColor: '#FF5630' }}>
                        <PieChart />
                    </div>
                </Col>

                <Col xs={12} md={6}  >
                    <h5 className='m-0 p-2' style={{ backgroundColor: '#F0F0F0' }}>Customer Growth</h5>
                    <div style={{ backgroundColor: '#FF7A00' }}>
                        <LineChart />
                    </div>
                </Col>
                <Col xs={12} md={6} className='mt-4'>
                    <GoogleMaps />
                </Col>
            </Row>
        </div>
    )
}

export { Dashboard }
