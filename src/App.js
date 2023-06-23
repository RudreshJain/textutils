import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";



function App() {
  return (
   <>
   
<Navbar title="TextUtils" about="AboutUtils"/>
<div className="container m3">
  <TextForm heading="Enter the text to Analyze"/>
</div>
   </>
  );
}

export default App;
