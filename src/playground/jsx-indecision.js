const appObj = {
    title: "Indecision App",
    subtitle: "Built by Bauer",
    options: [],
  };
  
  const onFormSubmit = (e) => {
    e.preventDefault();
  
    const option = e.target.elements.option.value;
    if (option) {
      console.log('appObj.options', appObj.options);
      appObj.options.push(option);
      e.target.elements.option.value = "";
      renderFunction();
    }
  };
  
  const onClickRemoveAll = () => {
    appObj.options = [];
    renderFunction();
  };
  
  const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * appObj.options.length);
    const option = appObj.options[randomNum];
    alert(option);
  }
  
  const numbers = [55, 101, 1000];
  
  const appRoot = document.getElementById("app");
  
  const renderFunction = () => {
    const template = (
      <div>
        <h1>{appObj.title}</h1>
        {appObj.subtitle && <p>{appObj.subtitle}</p>}
        {appObj.options.length > 0 ? (
          <p>Here are your options:</p>
        ) : (
          <p>'No options'</p>
        )}
        <button disabled={appObj.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
        <button onClick={onClickRemoveAll}>Remove All</button>
        <ol>
        {appObj.options.map((option) => <li key={option}>{option}</li>)}
        </ol>
        <form onSubmit={onFormSubmit}>
          <input type="text" name="option" />
          <button>Add Option</button>
        </form>
      </div>
    );
  
    ReactDOM.render(template, appRoot);
  };
  
  renderFunction();
  