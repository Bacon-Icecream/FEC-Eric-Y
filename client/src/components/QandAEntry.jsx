import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding-top: 15px;
  padding-left: 20px;
  width: 1000px;
`;

const Vote = styled.div`
  float: left;
  width: 15px;
  height: 60px;
`;

const VoteColumn = styled.div`
  float: left;
  width: 5%;
  height: 60px;
`;

const NumberOfVotes = styled.div`
  line-height: .3em;
  display: inline-block;
  font-family: Helvetica;
  font-size: 12px;
  text-align: center;
  height: 40px;
`;

const Arrows = styled.img`
  width: 15px;
  height: 10px;
  margin: 0 0 0 0px;
`;


const Upvote = styled.button`
  padding-top: 5px;
  text-align: center;
  border: 0;


  &:hover {
    background: url(https://i.imgur.com/KEdWwvV.png);
  }
`;

const Downvote = styled.button`
  padding-bottom: 5px;
  text-align: center;
  border: 0;
  width: 15px;
  height: 10px;
  background: url(https://i.imgur.com/JjBoMxn.png) no-repeat;

  &:onClick {
    background: url(https://i.imgur.com/KEdWwvV.png) no-repeat;
  }
`;

const GreyVerticalBar = styled.div`
  padding-top: 10px;
  border-right: .5px solid lightgrey;
  height: 50px;
`;

const QuestionAnswerColumn = styled.div`
  padding-left: 4px;
  font-family: Helvetica;
  font-size: 12px;
  line-height: 1em;
  float left;
  width: 8%;
`;

const ActualQuestionsAndAnswers = styled.div`
  padding-top: 10px;
  font-family: Helvetica;
  font-size: 12px;
  line-height: 1em;
  float: left;
  width: 85%;
`;

const Answerer = styled.div`
  color: grey;
`;


class QandAEntry extends React.Component {
  constructor(props) {
    super(props);
  }

  voteOrVotes() {
    return (this.props.qanda.votes === 1 || this.props.qanda.votes === 0) 
      ? 'vote' : 'votes';
  }

  render() {
    var postDate = this.props.qanda.date.substr(0, 16);

    return(
      <div>
        <Wrapper>
          <VoteColumn>
            <Vote>
              <Upvote type="submit">
                <Arrows src="https://i.imgur.com/JjBoMxn.png"/>
              </Upvote>
              <NumberOfVotes>
                <p>{this.props.qanda.votes}</p>
                <p>{this.voteOrVotes()}</p>
              </NumberOfVotes>
              <Downvote type="button">
                <Arrows src="https://i.imgur.com/Eaaa8jy.png" />
              </Downvote>
              
            </Vote>
            <GreyVerticalBar />
          </VoteColumn>

          <QuestionAnswerColumn>
            <div>
              <p><strong>Question: </strong></p>
              <p><strong>Answer:</strong></p>
            </div>
          </QuestionAnswerColumn>

          <ActualQuestionsAndAnswers>
            <div>
              <a href='#'>{this.props.qanda.question}</a>

              <p>{this.props.qanda.answer}</p>
              <Answerer>
                <p>By {this.props.qanda.answerer} on {postDate}</p>
              </Answerer>
              
            </div>
          </ActualQuestionsAndAnswers>
      </Wrapper>
      </div>
    )
  }
}

export default QandAEntry;