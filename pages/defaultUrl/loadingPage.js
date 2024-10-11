import React from 'react'
import Head from 'next/head'
import styled from 'styled-components';
// import { LoadingOutlined } from '@ant-design/icons';
// import { Spin } from 'antd';

const LoadingPayPage = styled.div`
    display: flex;
    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Ubuntu,sans-serif;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    flex: 1;
    width: 100vw;
    height: 100vh;
`;

export default function RedirectPageCmp() {

  // const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />

  return <LoadingPayPage>
      <Head>
        <title>Loading...</title>
      </Head>
      {/* <Spin indicator={antIcon} /> */}
      Loading...

  </LoadingPayPage>
}
