import React from 'react';
import { Card, Col, Row, Skeleton, Button } from 'antd';
import { CopyTwoTone } from '@ant-design/icons';
import LojoLinks from './LojoLinks';


function OutputPanel({ data, isLoading }) {
  const handleCopy = () => {
    const textToCopy = data.items
      .map(item => `${item.name}\t: \t${item.desc}`)
      .join('\n');
      
    navigator.clipboard.writeText(textToCopy)
      .then(() => {
        console.log('Copied to clipboard');
      })
      .catch(err => {
        console.error('Failed to copy:', err);
      });
  };

  const handleCopyItem = (item) => {
    const textToCopy = `${item.name}: ${item.desc}`;
    navigator.clipboard.writeText(textToCopy)
      .then(() => {
        console.log('Copied item to clipboard');
      })
      .catch(err => {
        console.error('Failed to copy:', err);
      });
  };

  if (isLoading) return <div className="output-panel"><LojoLinks /><Skeleton active /></div>;
  if (!data) return <div className="output-panel" ><LojoLinks /></div>;

  return (
    <div className="output-panel">
      
      {data.error ? (
        <div className="error-message">{data.error}</div>
      ) : (
        <>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
            <Button onClick={handleCopy}>
              <CopyTwoTone />
              Copy All
            </Button>
            <LojoLinks />
          </div>
          
          <Row gutter={[16, 16]}>
            {Array.isArray(data.items) ? (
              data.items.map((item, index) => (
                <Col key={index} xs={24} sm={12} md={8}>
                  <Card 
                    title={item.name}
                    extra={<Button size="small" onClick={() => handleCopyItem(item)}><CopyTwoTone /></Button>}
                  >
                    {item.desc}
                  </Card>
                </Col>
              ))
            ) : (
              <pre>{JSON.stringify(data, null, 2)}</pre>
            )}
          </Row>
        </>
      )}
 
    </div>
  );
}

export default OutputPanel; 