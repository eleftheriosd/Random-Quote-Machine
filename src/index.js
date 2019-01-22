import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import './index.css';



class App extends Component {
    constructor(){
        super()
        this.state={
          name:'',
          quote:'',
          allQuotes:[]
        }
        this.handleChange = this.handleChange.bind(this)      
    }
  
    
    componentDidMount(){
      const script = document.createElement("script");
      script.src = "https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js";
      script.async = true;
      document.body.appendChild(script);
  
        fetch("https://raw.githubusercontent.com/eleftheriosd/My-React-projects/master/quotes2")
        .then(response => response.json())  
        .then(data=>{
          const quotes = data
          // console.log(quotes)
              this.setState({
                  name: quotes[0].name,
                  quote: quotes[0].quote,
                  allQuotes: quotes
              })
              // console.log(this.state)
          }
        )
    }
    
    handleChange(event){
          // console.log(0)
          event.preventDefault()
          const randNum = Math.floor(Math.random() * this.state.allQuotes.length)
          const randquote = this.state.allQuotes[randNum]
          // console.log(randquote)
          this.setState({
              name:randquote.name,
              quote:randquote.quote
          })
    }
  
      render() {
      return (
          <div>
              <div id="quote-box">
                  <div id="text">
                      {this.state.quote}
                  </div>
                  <br />
                  <div id="author">
                      {this.state.name}
                  </div>
              </div>
              <br />
              <br />
              <div className="center">
                  <button id="new-quote" onClick={this.handleChange}>New quote!</button> 
                  <br />
                  <br />
                  <a id="tweet-quote" href="https://www.twitter.com/intent/tweet"> Tweet quote!</a>
              </div>            
          </div>
      )
    }
  }
  
ReactDOM.render(<App />, document.getElementById('root'));
