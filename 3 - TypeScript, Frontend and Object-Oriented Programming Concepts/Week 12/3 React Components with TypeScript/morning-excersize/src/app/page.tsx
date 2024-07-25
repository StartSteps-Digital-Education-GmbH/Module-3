'use client'
import react, { Component } from "react";

type hello = {
  age?: number;
  name: string;
  run?: () => void;
}
//normal JS function not a component
function run(): void {
  console.log("Hello World");
}

//creating functional React component
function Hello({ age, name, run }: hello) {
  // const { age, name } = props; //destructring const age =props.age
  if (run) {
    console.log(name);
    run();
  }
  return <div>
    <p>Hello {name}</p>
    <a>Link to my profile</a>
    {age ? <p>Age: {age}</p> : ''}
  </div>
}

interface IHelloClass {
  name: string;
}

// Class React Component
class HelloClass extends Component<IHelloClass> {

  constructor(props: IHelloClass) {
    super(props);
  }
  render() {
    return <p>Hello to {this.props.name} from Class Component</p>
  }
}

const HelloFunction = (props: IHelloClass) => {
  return <p>Hello to {props.name} from Class Component</p>
}


export default function Home() {
  return (
    <main>
      <p >asdasdasd</p>
      <Hello name="John" age={10} /> {/* using react component  */}
      <strong>
        <Hello name="asdasd" run={run} />
      </strong>
      <HelloClass name="John" />
    </main>
  );
}
