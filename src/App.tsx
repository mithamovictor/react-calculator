import React from 'react';
import Button from "./components/Button";

type myProps = {}
type myState = { count: number }

class App extends React.Component<myProps, myState> {
  constructor(props: myProps) {
    super(props);
    this.state = { count: 0 };
    this.add = this.add.bind(this)
    this.less = this.less.bind(this)
  };
  add = () => this.setState({ count: this.state.count + 1,});
  less= () => this.setState({ count: this.state.count - 1 });
  render() {
    return (
      <div className="flex flex-col bg-slate-900 justify-center items-center min-w-full min-h-screen mx-auto">
        <h1 className="text-3xl text-red-200">Hello World!</h1>
        <p className="text-xl text-red-200">{this.state.count}</p>
        <hr />
        <Button class='test-class text-red-200' id='test-id' value='Add' onClick={this.add}/>
        <hr />
        <Button class='test-class text-red-200' id='test-id' value='Less' onClick={this.less}/>
        <hr />
      </div>
    )
  }
}

export default App;
