import styled from 'styled-components';

const SampleContentStyled = styled.div`

    .content-page {
        min-width: 100vw;
        min-height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #F4F7FE;
    }

    .ant-layout {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #F4F7FE;
        width: 100%;
        height: 100%; 
        flex-grow: 1; 
    }

    .signin-header {
        font-weight: bold;
        font-size: 36px;
        display: flex;
        justify-content: center;
    }

    .signin-header-content {
        font-size: 16px;
        color: #A3AED0;
        margin-top: 15px
    }

    .signin-form {
        border-radius: 35px;
    }

    .signin-input {
        height: 50px
    }
        
    .signin-label-username {
        margin: 50px 0 10px 0;
    }

    .signin-label-password {
        margin: 0 0 10px 0;
    }
    
    .signin-label-forgot {
       display: flex;
       justify-content: flex-end;
       color: #4318FF;
    }

    
`;

export default SampleContentStyled;