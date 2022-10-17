import styled from 'styled-components';
import todologo from '../../assets/images/todologo.png';

const Main = () => {
  return (
    <>
      <Wrapper>
        <BlackBg>
          <TodoLogo src={todologo} alt="" />
          <MainTitle>Make successful your day</MainTitle>
          <MainDesc>
            Make small somethings to get big gift in your life
          </MainDesc>
          <MainStartBtn>
            Start
          </MainStartBtn>
        </BlackBg>
      </Wrapper>
    </>
  )
}

export default Main;

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(180deg, rgba(229, 0, 0, 0.71) 9.02%, rgba(221, 6, 7, 0.720854) 11.25%, #1593AF 68.67%);
`;

const BlackBg = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 312px;
  height: 570px;
  margin: 0 auto;
  padding: 56px 0;
  background-color: #222222;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
`;

const TodoLogo = styled.img`
  display: block;
  width: 100px;
  height: 100px;
  margin-bottom: 37px;
`;

const MainTitle = styled.h1`
  font-size: 32px;
  line-height: 1.15625;
  color: #fff;
  text-align: center;
  margin-bottom: 60px;
`;

const MainDesc = styled.p`
  font-size: 15px;
  color: #C1CC41;
  text-align: center;
  padding: 0 32px;
  margin-bottom: 54px;
`;

const MainStartBtn = styled.button`
  width: 150px;
  height: 45px;
  background-color: #1AB8DB;
  color: #fff;
  font-size: 24px;
  border-radius: 15px;
`;