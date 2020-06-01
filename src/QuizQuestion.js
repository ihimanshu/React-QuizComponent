import React, { Component } from 'react';
import QuizQuestionButton from './QuizQuestionButton.js';

class QuizQuestion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      incorrectAnswer: false
    }
  }
  handleClick(buttonText) {
    if(buttonText === this.props.quiz_question.answer) {
      this.props.showNextQuestionHandler();
      this.setState((state) => {
        incorrectAnswer: state.incorrectAnswer = false
      });
    } else {
      this.setState((state) => {
        incorrectAnswer: state.incorrectAnswer = true
      });
    }
  }
  render() {
    return(
      <main>
        {this.state.incorrectAnswer === true ? <p className='error'>Sorry, that's not right</p> : null}
        <section>
          <p>
          {/*instruction text goes here*/}
          { this.props.quiz_question.instruction_text }
          </p>
        </section>
        <section className="buttons">
          <ul>
            {/*quiz question button logic goes here*/}
            {/*<li>{ this.props.quiz_question.answer_options[0] }</li>*/}
            {this.props.quiz_question.answer_options.map
              ((answer_option, index) =>
                <QuizQuestionButton
                  key={index}
                  button_text={answer_option}
                  clickHandler={this.handleClick.bind(this)}
                />
              )
            }
            {/*<QuizQuestionButton button_text={ this.props.quiz_question.answer_options[0] } />*/}
          </ul>
        </section>
      </main>
    );
  }
}

export default QuizQuestion;
