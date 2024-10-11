import React from 'react'
import SampleContentContainer from "./signinForm.styles"
import { Layout, Form, Input, Button } from 'antd';
import texts from "components/texts.json"
import Link from 'next/link';
// import { useSelector, useDispatch } from 'react-redux'
const { Content } = Layout;
export default function useMainPageHeader() {
  // const dispatch = useDispatch();

  // useEffect(() => {
    // CODE HERE
  // }, [])

  const [form] = Form.useForm();
  
  const MainContent = () => {
    return <div className="content-page">
      <Layout>
        <Content
          style={{
            padding: 24,
            margin: 0,
            backgroundColor: '#FFFFFF',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            height: 'auto', 
            maxWidth: '425px',
            maxHeight: '480px'
          }}
        >

        <div>
          <div className = 'signin-header'>{texts.signin_header}</div>
          <div className = 'signin-header-content'>{texts.signin_header_content1}</div>

          <Form
            form={form}
            name="signin"
            // onFinish={}
            scrollToFirstError
          >
            <div className = 'signin-label-username'>{texts.signin_label_username}</div>

            <Form.Item className = "signin-form"  name="username">
              <Input className = "signin-input" size="large" autoCapitalize="none" placeholder="Username" autoComplete="off" />
            </Form.Item>

            <div className = 'signin-label-password'>{texts.signin_label_password}</div>
            <Form.Item className = "signin-form" name="password" >
              <Input.Password className = "signin-input" size="large" placeholder="Password" autoComplete="off"/>            
            </Form.Item>

            <div className = 'signin-label-forgot'>
              <Link href="#" >
                {texts.signin_label_forgot_password}
              </Link>
            </div>

            <Button type="primary" size="large" htmlType="submit" style={{ width: '100%', height: '50px', marginTop: '23px', backgroundColor: '#6D3914' }}>
              <div>{texts.signin_header}</div>
            </Button>
          
          </Form>
        </div>

        </Content>
      </Layout>
    </div>
  }

  return (
    <SampleContentContainer>
      <MainContent />
    </SampleContentContainer>
  );
    
}
