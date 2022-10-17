import styled from 'styled-components';
import { AiOutlineClose } from "react-icons/ai";
import TodoLogo from '../../assets/images/todologo.png';

const AddTask = () => {
  return (
    <>
      <Container>
        <TopBanner>
          <h1>ADD TASK</h1>
          <AiOutlineClose className='closeBtn' />
        </TopBanner>
        <Content>
          <img src={TodoLogo} alt="" />
          <div className="contentWrapper">
            <div>
              <label for="Title">Title</label>
              <input type="text" id="Title" placeholder="Enter task title" />
            </div>
            <div>
              <label for="Desc">Description</label>
              <input type="text" id="Desc" placeholder="Enter task description" />
            </div>
            <div>
              <label for="Date">Date end</label>
              <input type="text" id="Date" placeholder="Click here to choose date" />
            </div>
          </div>
          <div className="buttonWrapper">
            <button className="AddBtn blue">Add</button>
            <button className="CancelBtn red">Cancel</button>
          </div>
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
  padding: 25px 25px 25px 10px;
  color: #1AB8DB;

  h1 {
    font-size: 16px;
  }

  .closeBtn {
    font-size: 25px;
    font-weight: 700;
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

  img {
    display: block;
    width: 100px;
    height: 100px;
    margin-top: 45px;
    margin-bottom: 50px;
  }

  .contentWrapper {
    width: 100%;

    div {
      display: flex;
      flex-direction: column;
      width: 100%;
      padding: 4px 12px;
      margin-bottom: 25px;
  
      &:last-child {
        margin-bottom: 0;
      }
    }

    label {
      font-size: 20px;
      color: #000;
      margin-bottom: 8px;
    }
  }

  input {
    padding: 16px 0 16px 16px;
    border: 1px solid #1AB8DB;
    border-radius: 10px;
  }

  div.buttonWrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    padding: 0 20px;
    margin-top: 44px;
  }
  button {
    width: 106px;
    height: 40px;
    color: #fff;
    font-size: 15px;
    border-radius: 20px;
  }
  button.blue {
    background-color: #1AB8DB;
  }
  button.red {
    background-color: #FF0000;
  }
`;

