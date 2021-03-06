/** @format */
import {Row, Col, Button} from 'antd';
import './index.less';
interface Person {
  name: string;
}

const Rashomon: Person = {
  name: 'rashomon',
};

export default () => {
  return (
    <div>
      <Row>Nextjs Test222: {Rashomon.name}</Row>
      <Row>
        <Col span={6}>1111</Col>
        <Col span={6}>222</Col>
        <Col span={6}>333</Col>
        <Col span={6}>444</Col>
      </Row>
      <Row>
        <Button type="primary">11111111111</Button>
      </Row>
    </div>
  );
};
