import { useState, useContext } from "react";
import { DataContext } from "../App";
import usersData from "../Model/Users.json";

export default function NavBar() {
  const { logStatus, setLogStatus } = useContext(DataContext);
  const [uname, setUname] = useState("");
  const [pwd, setPwd] = useState("");

  function check() {
    const user = usersData.users.find(
      (u) => u.uname === uname.trim() && u.password === pwd.trim()
    );
    if (user) {
      sessionStorage.setItem("logged", 1);
      sessionStorage.setItem("admin", user.role === "admin" ? 1 : 0);
      setLogStatus(1);
      alert(`You are logged in as ${user.name}`);
    } else {
      alert("Invalid Username or Password");
    }
  }

  function logout() {
    sessionStorage.setItem("cart", JSON.stringify([]));
    sessionStorage.setItem("logged", 0);
    sessionStorage.setItem("admin", 0);
    setLogStatus(0);
    setUname("");
    setPwd("");
    alert("You are logged out");
  }

  var login = (
    <div>
      Please enter Username
      <input className="border-2" type="text" id="uname" value={uname} onChange={(e) => setUname(e.target.value)} /> <br />
      Please enter Password
      <input className="border-2" type="password" id="pwd" value={pwd} onChange={(e) => setPwd(e.target.value)} /> <br /><br />
      <input className="border-2 px-1 py-0.5" type="button" value="Login" onClick={check} style={{ marginRight: "10px" }} />
      <a href="/Register" className="border-2 px-1 py-1">Register</a>
    </div>
  );

  var logoutUser = (
    <div>
      <input className="border-2 px-1" type="button" value="Logout" onClick={()=>{logout(); window.location.href = "/Home";}}/> 
    </div>
  );

  return (
    <div className="grid grid-cols-6 bg-blue-100 text-sm px-10 py-5">
      <div><a href="/Home">Home</a></div>
      <div><a href="/movies">Movies</a></div>
      <div><a href="/contactus">Contact Us</a></div>
      <div></div>
      <div> {sessionStorage.getItem("admin")==1?<a href="/movieadmin">Add New Movie</a>:""} </div>
      {/* <div> {sessionStorage.getItem("logged")==1?<a href="/users">Users</a>:""} </div> */}
      <div>{sessionStorage.getItem("logged") == 0 ? login : logoutUser}</div>
    </div>
  );
}