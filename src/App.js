import React,{useState, useEffect} from "react";
import Header from "./components/Header";
import Profile from  "./components/Profile";
import Share from  "./components/Share";
import axios from "axios";
import "./app.css"
function App() {
  const [state, setState] = useState(null);
  useEffect(()=>{
    const fetch = async()=>{
      const res = await axios(
        {
          method: 'post',
          url:"https://api.meetworks.in/users/get_unique_jobseeker_profile",
          data :{ jobseeker_id: "614b410c2c4b197356a37f18"}
        }
      );
      if(res && res.data.length!== 0){
        setState(res.data[0]);
        console.log(res.data)
        console.log(state);
      }
    }
    fetch();
  },[])
  return (
    <div className="main">
      <Header/>
      <Profile data={state}/>
      <Share/>
    </div>
  );
}

export default App;
