import React from 'react';

class AddCowForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputName: '',
      inputDesc: '',
    };
  }

  buttonHandler(event) {
    event.preventDefault();
    this.props.clickHandler({ name: this.state.inputName, description: this.state.inputDesc })
    this.setState({inputName: '', inputDesc: ''})
  }

  render() {
    return (
      <form className="form-addcow">
        <input onChange = { (event) => this.setState({inputName: event.target.value})} type="text" placeholder='name' value={this.state.inputName}></input>
        <textarea onChange = { (event) => this.setState({inputDesc: event.target.value})}  placeholder='description'  value={this.state.inputDesc}></textarea>
        <button onClick = { (event) => this.buttonHandler(event) } >Add Cow</button>
      </form>
    );
  }
};

export default AddCowForm;
