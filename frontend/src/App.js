import React from 'react';
import TextClassifier from './components/TextClassifier';
import { Layout } from 'antd';
const { Content } = Layout;

function App() {
  return (
    <Layout>
      <Content>
        <TextClassifier />
      </Content>
    </Layout>
  );
}

export default App;
