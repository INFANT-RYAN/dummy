import ReactDOM from  "react-dom/client"
import "./index.css"
import Header from "./components/Header/Header";
const Applayout = ()=>{
  return(
    <>
        <Header></Header>   
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Applayout></Applayout>)
