class Visibility extends React.Component {
  constructor(props) {
    super(props)
    this.handleDetails = this.handleDetails.bind(this);
    this.state = {
      view: false
    }
  }

  handleDetails() {
    this.setState((prevState) => {
      return { 
        view: !prevState.view 
      }
    })
  }

  render() {
    return (
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.handleDetails}>{this.state.view ? 'Hide Details' : 'Show Details'}</button>
        {this.state.view && (
          <p>Can you see me now!?!</p>
        )}
      </div>
    );
  }
}

ReactDOM.render(<Visibility />, document.getElementById("app"));

// const displayDetails = () => {
//     view = !view;
//     render();
//     console.log(view);
// }

// let view = false;

// const render = () => {
//   const jsx = (
//     <div>
//       <h1>Visibility Toggle</h1>
//       <button onClick={displayDetails}>{view ? 'Hide Details' : 'Show Details'}</button>
//       {view && (
//           <p>Can you see me now!?!</p>
//       )}
//     </div>
//   );

//   ReactDOM.render(jsx, document.getElementById("app"));
// };

// render();
