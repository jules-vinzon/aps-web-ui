import styled from 'styled-components';

const NoDataFoundStyles = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;

    .ant-typography {
        color: #5B4E8E !important;
    }

    .text1 {
        font-weight: 300;
        font-size: 1.1em;
    }

    .text2 {
        font-weight: 500;
        font-size: 1.1em;
    }

    @media only screen and (max-width: 320px) {
        .text1 {
            font-size: 1em;
        }
    
        .text2 {
            font-size: 1em;
        }
    }

    
`;

export default NoDataFoundStyles;