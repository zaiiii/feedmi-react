import BasicBarChart from "./BasicBarChart";
import { getReactionCounts } from '../../utils/counter-service';
import { Card, Col, Row } from 'antd';
import React from "react";

const Dashboard = () => {

    const [data, setData] = React.useState<any>(undefined);
    React.useEffect(() => {
        getReactionCounts().then((res) => { setData(res); });
    }, []);


    //const [timerId, setTimerId] = React.useState(0);
    // React.useEffect(() => {
    //     const t = setInterval(() => {
    //         getReactionCounts().then((res) => { setData(res); });
    //     }, 1000);
    //     console.log(t);
    //     setTimerId(t as any as number);
    //     return () => { timerId > 0 && clearInterval(timerId) };
    // }, []);
    return (
        <div>
            {/* <div id="container"/>
            <div className="site-card-wrapper">
                <Row gutter={16}>
                    <Col span={8}>
                        <Card title="Card title" bordered={true}>
                            Card content
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card title="Card title" bordered={true}>
                            Card content
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card title="Card title" bordered={true}>
                            Card content
                        </Card>
                    </Col>
                </Row>
            </div> */}
            {data && (data[0].boredCount)}
            {data && <BasicBarChart top={10} right={50} bottom={50} left={50} width={900} height={400} fill="tomato" data={data} />}
        </div>
    );
    // return <>zai</>
}

export default Dashboard

