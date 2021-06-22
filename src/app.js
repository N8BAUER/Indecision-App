const obj = {
  name: 'N8',
  getName() {
    return this.name;
  }
}
console.log(obj.getName());

// the binding to this breaks because it's as if we're calling it as an anonymous function
// wherein the binding to this is undefiend 
const getName = obj.getName.bind(obj);
const getName2 = obj.getName.bind({ name: 'BIZ'});
const func = function () {
  console.log('', this);
}
func();
console.log(getName(), getName2());

class IndecisionApp extends React.Component {
  render() {
    const title = "Indecision";
    const subtitle = "Put your life in the hands of a computer";
    const options = ["Thing One", "Thing Two", "Thing Four"];
    return (
      <div>
        <Header title={title} />
        <Action subtitle={subtitle} />
        <Options options={options} />
        <AddOption />
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
      </div>
    );
  }
}

class Action extends React.Component {
  handlePick() {
    alert("handlePick");
  }
  // react components have to define render
  render() {
    return (
      <div>
        <button onClick={this.handlePick}>What should I do?</button>
      </div>
    );
  }
}

class Options extends React.Component {
  constructor(props) {
   // if you don't call super in this fashion you won't have access to this.props
    super(props);
    this.handleRemoveAll = this.handleRemoveAll.bind(this);
  }
  handleRemoveAll() {
    console.log('this.prop.options', this.props.options);
    
    // alert("handleRemoveAll");
  }
  render() {
    return (
      <div>
        <button onClick={this.handleRemoveAll}>Remove All</button>
        {this.props.options.map((option) => (
          <Option key={option} optionText={option} />
        ))}
      </div>
    );
  }
}

class Option extends React.Component {
  render() {
    return <div>{this.props.optionText}</div>;
  }
}

class AddOption extends React.Component {
  formSubmission(e) {
    // if you don't prevent the default you'll get a full page refresh
    e.preventDefault();
    console.log('event.target', e.target.elements);
    
    const option = e.target.elements.option.value.trim();
    option && alert(option);
  }
  render() {
    return (
      <div>
        Add Option:
        <form onSubmit={this.formSubmission}>
        <button>
          <input type="text" name="option" />
          Submit
        </button>
        </form>
      </div>
    );
  }
}

const root = document.getElementById("app");

ReactDOM.render(<IndecisionApp />, root);
