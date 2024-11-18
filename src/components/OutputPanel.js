import React from 'react';
import { Card, Col, Row } from 'antd';

function OutputPanel({ data }) {
  if (!data) return <div className="output-panel" />;

  return (
    <div className="output-panel">
      {data.error ? (
        <div className="error-message">{data.error}</div>
      ) : (
        <Row gutter={[16, 16]}>
          {Array.isArray(data) ? (
            data.map((item, index) => (
              <Col key={index} xs={24} sm={12} md={8}>
                <Card title={item.name}>
                  {item.desc}
                </Card>
              </Col>
            ))
          ) : (
            <pre>{JSON.stringify(data, null, 2)}</pre>
          )}
        </Row>
      )}
    </div>
  );
}

export default OutputPanel; 