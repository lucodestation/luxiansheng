import React from 'react';
import Layout from '@theme/Layout';

function About() {
  return (
    <Layout title="关于我们">
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '50vh',
          fontSize: '20px',
        }}
      >
        <p>这是 React 独立页面。</p>
      </div>
    </Layout>
  );
}

export default About;
