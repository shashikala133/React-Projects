import React ,{Fragment} from "react"
import Provider from "./provider"
import context from "./context"
const Agents = () => {
  return <AgentOne />
}
const AgentOne = () => {
  return <AgentTwo />
}
const AgentTwo = () => {
  return <AgentBond />
}
const AgentBond = () => {
  return (
    <context.Consumer>
      {
        (context) => (
          <Fragment>
            <h3>Agent Information:</h3>
            <p>Mission Name: {context.data.mname}</p>
            <p>Mission Agent: {context.data.agent}</p>
            <h2>Mission Ststus:{context.data.accept}</h2>
            <button onClick={context.isMissionAccepted}>Choose to accept </button>
          </Fragment>
        )
      }
    </context.Consumer>
  )
}
const App =() => {
  return(
    <div>
      <h1>Context API</h1>
      <Provider>
        <Agents />
      </Provider>
    </div>
  )
}
export default App;