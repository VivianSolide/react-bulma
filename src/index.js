import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bulma/css/bulma.css';

////////////////SSH-TEST///////////////////////

class Button extends React.Component {

  getClassName() {
    let asso = {
      isDanger: "is-danger",
      isSuccess: "is-success",
      isRounded: "is-rounded"
    };
    let res = '';

    Object.keys(asso).forEach((key) => {
      if (this.props[key]) {
        res += asso[key] + " ";
      }
    });
    return 'button ' + res;
  }
  render() {
    return (
      <button className={this.getClassName()}>{this.props.children}</button>
    )
  }
}

///////////////////////////////////////

class Message extends React.Component {

  constructor(props) {
    super(props);
    this.handleDeleteClick = this.handleDeleteClick.bind(this); // I don't understand
    this.state = ({
      visibility: 'visible'
    })
  }

  handleDeleteClick() {
    this.setState({
      visibility: 'hidden'
    })
  }

  displayMessageHeader() {
    if (!this.props.title)
      return;
    return (
      <div className="message-header">
        <p>{this.props.title}</p>
        <button className="delete" aria-label="delete" onClick={this.handleDeleteClick}></button>
      </div>
    )
  }

  getClassName() {
    let asso = {
      isInfo: "is-info",
      isPrimary: "is-primary",
      isDark: "is-dark",
      isDanger: "is-danger",
      isSuccess: "is-success",
      isRounded: "is-rounded"
    };
    let res = '';

    Object.keys(asso).forEach((key) => {
      if (this.props[key]) {
        res += asso[key] + " ";
      }
    });

    return 'message ' + res;
  }
  render() {
    return (
      <article className={this.getClassName()} style={{visibility: this.state.visibility}}>
        {this.displayMessageHeader()}
        <div class="message-body">
          {this.props.children}
        </div>
      </article>
    )
  }
}

///////////////////////////////////////

let dairyMessages = [
  {
    date: new Date("2018-01-01"),
    text: "I slept a lot after the New Year eve and I visited Madrid in the afternoon",
    moodLevel: 3
  },
  {
    date: new Date("2018-01-02"),
    text: "Last day at Madrid, we've decided to play basketball with other Spanish guys",
    moodLevel: 2
  },
  {
    date: new Date("2018-01-03"),
    text: "Let's back to work in Paris. It was hard but good!",
    moodLevel: 1
  },
  {
    date: new Date("2018-01-04"),
    text: "I've meet a very nice person at friend's dinner and we are going to meet again next week :)",
    moodLevel: 3
  }
]

///////////////////////////////////////

class Diary extends React.Component {
  constructor(props) {
    super(props);
    console.log("DEBUG props", props);
  }

  getAllMessages() {
    let res = [];
    for (let i = 0; i < dairyMessages.length; i++) {
      switch (dairyMessages[i].moodLevel) {
        case 1:
          res.push(
            <Message key={i} isDanger title={dairyMessages[i].date.toDateString()}>
              {dairyMessages[i].text}
            </Message>
          )
          break;
        case 2:
          res.push(
            <Message key={i} isInfo title={dairyMessages[i].date.toDateString()}>
              {dairyMessages[i].text}
            </Message>
          )
          break;
        case 3:
          res.push(
            <Message key={i} isSuccess title={dairyMessages[i].date.toDateString()}>
              {dairyMessages[i].text}
            </Message>
          )
          break;
      }
    }
    return res;
  }

  render() {
    return (
      <div>
        {this.getAllMessages()}
        <br />
        <Button isDanger isRounded> Remove </Button>
        <Button isSuccess isRounded> Random </Button>
      </div>
    )
  }
}

///////////////////////////////////////

class App extends React.Component {
  render() {
    return (
      <div>
        <Button isDanger isRounded> Button 1 </Button>
        <Button isSuccess> Button 2 </Button>
        <Message isDark title="Hello World">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>.
        </Message>
        <Diary> </Diary>
      </div>
    );
  }
}

///////////////////////////////////////

ReactDOM.render(
  <App />,
  document.getElementById('root')
);