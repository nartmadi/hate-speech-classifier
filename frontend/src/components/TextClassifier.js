import React, { useState } from 'react';
import axios from 'axios';
import { Layout, Input, Button, Typography, Alert } from 'antd';
import './TextClassifier.css';

const { Content } = Layout;
const { TextArea } = Input;

function TextClassifier() {
  const [text, setText] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (text.trim() === '') {
      setError('Text input cannot be empty.');
      setResult(null);
      return;
    }
    setResult(null);
    setError(null);
    try {
      const response = await axios.post('http://localhost:5000/predict', { text });
      setResult(response.data.prediction);
    } catch (err) {
      setError(err.response ? err.response.data.error : 'An error occurred');
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <Layout className="layout">
      <Content className="content">
        <Typography.Title level={2} style={{ color: '#e0e0e0', textAlign: 'center' }}>
          Hate Speech Detector
        </Typography.Title>
        <div className="text-area-wrapper">
          <TextArea
            rows={10}
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Enter text to classify"
            className="text-area"
          />
        </div>
        <Button type="primary" onClick={handleSubmit} block className="submit-button">
          Classify
        </Button>
        {error && <Alert message={error} type="error" showIcon className="alert" />}
        {result !== null && (
          <Alert
            message={result === 1 ? 'Hate Speech' : 'Not Hate Speech'}
            type={result === 1 ? 'error' : 'success'}
            showIcon
            className="alert"
          />
        )}
      </Content>
    </Layout>
  );
}

export default TextClassifier;
