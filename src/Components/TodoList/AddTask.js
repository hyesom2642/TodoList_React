// > styled components
import styled from 'styled-components';

// > icons
import { AiOutlineClose } from "react-icons/ai";

// > images
import TodoLogo from '../../assets/images/todologo.png';

// > react-router-dom@6
import { useNavigate } from 'react-router-dom';

const AddTask = () => {
  const navigate = useNavigate();

  return (
    <>
      <Container>
        <TopBanner>
          <h1 className="TopBanner-title">ADD TASK</h1>
          <AiOutlineClose className='TopBanner-closeBtn' onClick={() => navigate(-1)} />
        </TopBanner>
        <Content>
          <Logo src={TodoLogo} alt="" />
          <ContentWrapper>
            <div className="content title-content">
              <label htmlFor="title">Title</label>
              <input type="text" id="title" placeholder="Enter task title" />
            </div>
            <div className="content desc-content">
              <label htmlFor="desc">Description</label>
              <input type="text" id="desc" placeholder="Enter task description" />
            </div>
            <div className="content date-content">
              <label htmlFor="date">Date end</label>
              <input type="text" id="date" placeholder="Click here to choose date" />
            </div>
          </ContentWrapper>
          <ButtonWrapper>
            <button className="AddBtn blue">Add</button>
            <button className="CancelBtn red">Cancel</button>
          </ButtonWrapper>
        </Content>
      </Container>
    </>
  )
}
export default AddTask;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
`;

const TopBanner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 70px;
  padding: 25px;
  color: #1AB8DB;

  .TopBanner-title {
    font-size: 20px;
  }

  .TopBanner-closeBtn {
    font-size: 25px;
    cursor: pointer;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 0 15px;
`;

const Logo = styled.img`
  display: block;
  width: 100px;
  height: 100px;
  margin: 45px 0;
`;

const ContentWrapper = styled.div`
  width: 100%;

  .content {    
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 4px 12px;
    margin-bottom: 25px;
    font-family: 'Montserrat', sans-serif;

    &:last-child {
      margin-bottom: 0;
    }
  }

  label {
    font-size: 20px;
    font-weight: bold;
    color: #000;
    margin-bottom: 8px;
  }
  input {
    padding: 16px 0 16px 16px;
    border: 1px solid #1AB8DB;
    border-radius: 10px;
    transition: all 0.2s ease-in-out;

    &::placeholder {
      font-size: 14px;
      color: rgba(0, 0, 0, 0.7);
    }
    &:focus {
      border: 2px solid #1AB8DB;;
    }
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  padding: 0 20px;
  margin-top: 44px;

  button {
    width: 106px;
    height: 40px;
    color: #fff;
    font-size: 15px;
    border-radius: 20px;
    transition: opacity 0.3s ease-in-out;

    &:hover {
      opacity: 0.7;
    }
  }
  button.blue {
    background-color: #1AB8DB;
  }
  button.red {
    background-color: #FF0000;
  }
`;