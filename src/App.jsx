import CounterView from "./features/counter/CounterView"
import PostView from "./features/posts/PostView"

function App() {


  return (
    <>
      <div className="App text-center my-10 font-bold text-2xl">
        <h1>Counter App</h1>
        <CounterView></CounterView>
        <PostView></PostView>
      </div>
    </>
  )
}

export default App
