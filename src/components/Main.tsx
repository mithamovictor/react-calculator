import React from 'react';
import Button from './Button';
import { add } from '../modules/Calculate';

type myProps = {}
type myState = {
  output: number,
  val1: number,
  val2: number
}

class Main extends React.Component<myProps, myState>{
  constructor(props: myProps) {
    super(props)
    this.state = {
      output: 0,
      val1: 0,
      val2: 0
    }
  }
  addNums = (num1:number, num2:number) => {
    return add(num1, num2);
  }
  render() {
    const { output } = this.state;
    return (
      <main className="flex flex-col justify-center items-center flex-grow w-full p-4">
        <div className="flex flex-col bg-slate-900 w-full md:max-w-500 rounded-xl shadow-lg p-4">
          <div className="flex flex-row-reverse bg-slate-800 rounded-md my-8 px-2 py-4 w-full">
            <p id="output" className="text-3xl text-gray-500">{output}</p>
          </div>
          <div className="flex flex-col my-2 w-full">
            <div className="grid grid-cols-4 gap-4 w-full py-2">
              <Button
                class="px-4 py-2 bg-slate-800 rounded-md min-w-80 text-gray-500 text-xl leading-1 shadow-lg"
                id=""
                value="AC"
                onClick={()=>{alert('Clicked')}}
              />
              <Button
                class="px-4 py-2 bg-slate-800 rounded-md min-w-80 text-gray-500 text-xl leading-1 shadow-lg"
                id=""
                value="Del"
                onClick={()=>{alert('Clicked')}}
              />
              <Button
                class="px-4 py-2 bg-slate-800 rounded-md min-w-80 text-gray-500 text-xl leading-1 shadow-lg"
                id=""
                value="%"
                onClick={()=>{alert('Clicked')}}
              />
              <Button
                class="px-4 py-2 bg-slate-800 rounded-md min-w-80 text-gray-500 text-3xl leading-1 shadow-lg"
                id=""
                value="&#247;"
                onClick={()=>{alert('Clicked')}}
              />
              <Button
                class="px-4 py-2 bg-slate-800 rounded-md min-w-80 text-gray-500 text-xl leading-1 shadow-lg"
                id=""
                value="7"
                onClick={()=>{alert('Clicked')}}
              />
              <Button
                class="px-4 py-2 bg-slate-800 rounded-md min-w-80 text-gray-500 text-xl leading-1 shadow-lg"
                id=""
                value="8"
                onClick={()=>{alert('Clicked')}}
              />
              <Button
                class="px-4 py-2 bg-slate-800 rounded-md min-w-80 text-gray-500 text-xl leading-1 shadow-lg"
                id=""
                value="9"
                onClick={()=>{alert('Clicked')}}
              />
              <Button
                class="px-4 py-2 bg-slate-800 rounded-md min-w-80 text-gray-500 text-3xl leading-1 shadow-lg"
                id=""
                value="&#215;"
                onClick={()=>{alert('Clicked')}}
              />
              <Button
                class="px-4 py-2 bg-slate-800 rounded-md min-w-80 text-gray-500 text-xl leading-1 shadow-lg"
                id=""
                value="4"
                onClick={()=>{alert('Clicked')}}
              />
              <Button
                class="px-4 py-2 bg-slate-800 rounded-md min-w-80 text-gray-500 text-xl leading-1 shadow-lg"
                id=""
                value="5"
                onClick={()=>{alert('Clicked')}}
              />
              <Button
                class="px-4 py-2 bg-slate-800 rounded-md min-w-80 text-gray-500 text-xl leading-1 shadow-lg"
                id=""
                value="6"
                onClick={()=>{alert('Clicked')}}
              />
              <Button
                class="px-4 py-2 bg-slate-800 rounded-md min-w-80 text-gray-500 text-3xl leading-1 shadow-lg"
                id=""
                value="+"
                onClick={()=>{alert('Clicked')}}
              />
              <Button
                class="px-4 py-2 bg-slate-800 rounded-md min-w-80 text-gray-500 text-xl leading-1 shadow-lg"
                id=""
                value="1"
                onClick={()=>{alert('Clicked')}}
              />
              <Button
                class="px-4 py-2 bg-slate-800 rounded-md min-w-80 text-gray-500 text-xl leading-1 shadow-lg"
                id=""
                value="2"
                onClick={()=>{alert('Clicked')}}
              />
              <Button
                class="px-4 py-2 bg-slate-800 rounded-md min-w-80 text-gray-500 text-xl leading-1 shadow-lg"
                id=""
                value="3"
                onClick={()=>{alert('Clicked')}}
              />
              <Button
                class="px-4 py-2 bg-slate-800 rounded-md min-w-80 text-gray-500 text-3xl leading-1 shadow-lg"
                id=""
                value="&#8722;"
                onClick={()=>{alert('Clicked')}}
              />
              <Button
                class="px-4 py-2 bg-slate-800 rounded-md min-w-80 text-gray-500 text-xl leading-1 shadow-lg"
                id=""
                value="0"
                onClick={()=>{alert('Clicked')}}
              />
              <Button
                class="px-4 py-2 bg-slate-800 rounded-md min-w-80 text-gray-500 text-xl leading-1 shadow-lg"
                id=""
                value="&#43;&nbsp;&#8260;&nbsp;&#8722;"
                onClick={()=>{alert('Clicked')}}
              />
              <Button
                class="px-4 py-2 bg-slate-800 rounded-md min-w-80 text-gray-500 text-xl leading-1 shadow-lg"
                id=""
                value="&sdot;"
                onClick={()=>{alert('Clicked')}}
              />
              <Button
                class="px-4 py-2 bg-slate-800 rounded-md min-w-80 text-gray-500 text-3xl leading-1 shadow-lg"
                id=""
                value="&#61;"
                onClick={()=>{alert('Clicked')}}
              />
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default Main;
