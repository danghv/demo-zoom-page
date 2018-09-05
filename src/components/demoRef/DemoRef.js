import React from 'react'

class CustomTextInput extends React.Component {
    constructor(props) {
      super(props);
      this.textInput = React.createRef();
      this.focusTextInput = this.focusTextInput.bind(this);
    }
  
    focusTextInput() {
      this.textInput.current.focus();
      this.textInput.current.value = 'fucking refs'
    }
  
    render() {
      return (
        <div>
          <input
            type="text"
            ref={this.textInput} />
  
          <input
            type="button"
            value="Focus the text input"
            onClick={this.focusTextInput}
          />
        </div>
      );
    }
  }

// class A extends React.Component{
//     render() {
//         return <h1>AAAAAA</h1>
//     }
// } 

export default class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.myRef = React.createRef();
      this.myRef2 = React.createRef();
    }

    componentDidMount() {
        const node = document.createElement('h1')
        node.appendChild(document.createTextNode('clgt'))
        this.myRef.current.appendChild(node)
        // this.myRef2.current.focusTextInput()
        
    }
    render() {
      return <div ref={this.myRef} >
          <h1>gi ke tui, tui van la tui</h1>
        <CustomTextInput ref={this.myRef2}/>
      </div>;
    }
  }

  