import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import QandAEntry from './QandAEntry.jsx';

const TitleContainer = styled.div`
  font-family: Helvetica;
  width: 700px;
`;

const Form = styled.form``;

const Input = styled.input`
  height: 18px;
  &:focus{
    border: gold;
  }
`;

class QandA extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      qandas: [],
      listName: "QandA",
    };
  }

  componentDidMount() {
      this.fetchData();
  }

  fetchData() {
    // console.log('fetching data');
    let options = {
      params: {
        listName: this.state.listName
      }
    }
    // for (let i = 0; i < 9999; i++) {
    //   this.sendRequest(options);
    // }
    axios.get('/api/qAndA', options)
      .then(result => {
        this.setState({ qandas: result.data.slice(0, 5) });
      })
      .catch(err => console.log('error sending get request to server: ', err));
  }
  
  // sendRequest(options) {
  //   axios.get('/api/qAndA', options)
  //     .then(result => {
  //     })
  //     .catch(err => console.log(err));
  // }
  
  render() {
    const { qandas } = this.state;
    return(
      <div>
        <TitleContainer>
          <h3>Customer questions & answers</h3>
        </TitleContainer>

        <Form>
          <Input
            placeholder="Have a question? Search for answers"
            size="130" />
        </Form>

        {qandas.map((qanda, index) => 
          <QandAEntry
            qanda={qanda}
            index={index}
            key={index}
          />
        )}
      </div>
    )
  }
}
export default QandA;