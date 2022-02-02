import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

type myProps = {}

class App extends React.Component<myProps> {
  constructor(props: myProps) {
    super(props);
  }

  render() {
    return (
      <div className="flex flex-col bg-slate-800 justify-between items-center min-w-full min-h-screen mx-auto">
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
