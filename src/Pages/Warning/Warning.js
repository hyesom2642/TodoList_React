// > styled-components
import styled from 'styled-components';

import warning from '../../assets/images/warning.png';

const Warning = () => {
  return (
    <>
      <Wrapper>
        <WarningImg src={warning} alt="" />
        <WarningTitle>Warning</WarningTitle>
        <WarningText>768px 이하로 낮춰주세요!</WarningText>
      </Wrapper>
    </>
  )
}

export default Warning;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #000;
  font-family: 'Noto Sans', 'Noto Sans KR', sans-serif;
  font-weight: bold;
  color: #FFD42A;
`;
const WarningImg = styled.img`
  display: block;
  width: 300px;
  height: 300px;
`;
const WarningTitle = styled.h1`
  font-size: 80px;
`;
const WarningText = styled.p`
  font-size: 50px;
`;