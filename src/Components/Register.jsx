import { useState } from "react";

export default function Register() {
    const [fName, setFName] = useState("");
    const [lName, setLName] = useState("");
    const [id, setId] = useState("");
    const [email, setEmail] = useState("");
    const [city, setCity] = useState("");
    const [zip, setZip] = useState("");
    const [uname, setUname] = useState("");
    const [pwd, setPwd] = useState("");

    const submitForm = (event) => {
        event.preventDefault();

        if (!/^[a-zA-Z]+$/.test(fName)) {
            alert("First Name: Must not contain numbers");
            return;
        }
        if (!/^[a-zA-Z]+$/.test(lName)) {
            alert("Last Name: Must not contain numbers.");
            return;
        }
        if (!/^\d+$/.test(id)) {
            alert("ID: Must be numeric only (no letters allowed).");
            return;
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            alert("Email: Must contain both @ and . symbols, with @ appearing before.");
            return;
        }
        if (!/^\d+$/.test(zip)) {
            alert("Zip Code: Must be numeric only (no letters allowed)");
            return;
        }
        if (/[^a-zA-Z0-9]/.test(uname) || uname.includes(" ") || /^[0-9]/.test(uname)) {
            alert("Username: \nMust not contain spaces. \nMust not start with a number or special character");
            return;
        }
        if (pwd.length < 10 || !/[A-Z]/.test(pwd) || !/[a-z]/.test(pwd) || !/[0-9]/.test(pwd)) {
            alert("Password: \nMust be at least 10 characters long. \nMust contain at least one uppercase and one lowercase letter.\n Must contain at least one digit.");
            return;
        }
        alert("Form Submitted");
    }

    return (
        <div className="flex">
            <div className="w-1/2 p-4 border-2 border-amber-900">
                <form onSubmit={submitForm}>
                    First Name: <input className="border-2 px-1" type="text" value={fName} onChange={(e) => setFName(e.target.value)} /> <br />
                    Last Name: <input className="border-2 px-1" type="text" value={lName} onChange={(e) => setLName(e.target.value)} /> <br />
                    ID: <input className="border-2 px-1" type="text" value={id} onChange={(e) => setId(e.target.value)} /> <br />
                    Email: <input className="border-2 px-1" type="text" value={email} onChange={(e) => setEmail(e.target.value)} /> <br />
                    City:
                    <select className="border-2 px-1" value={city} onChange={(e)=>setCity(e.target.value)}>
                        <option value="">Select City</option>
                        <option value="City 1">City 1</option>
                        <option value="City 2">City 2</option>
                        <option value="City 3">City 3</option>
                    </select> <br />
                    Zip Code: <input className="border-2 px-1" type="text" value={zip} onChange={(e) => setZip(e.target.value)} /> <br />
                    Username: <input className="border-2 px-1" type="text" value={uname} onChange={(e) => setUname(e.target.value)} /> <br />
                    Password: <input className="border-2 px-1" type="text" value={pwd} onChange={(e) => setPwd(e.target.value)} /> <br />
                    <input className="border-2 px-1" type="submit" value="Submit" />
                </form>
            </div>
            <div className="w-1/2 p-4 border-2 border-amber-900">
                <p>First Name: Must not contain numbers</p>
                <p>Last Name: Must not contain numbers.</p>
                <p>ID: Must be numeric only (no letters allowed).</p>
                <p>Email: Must contain both @ and . symbols, with @ appearing before.</p>
                <p>Zip Code: Must be numeric only (no letters allowed)</p>
                <p>Username: Must not contain spaces. Must not start with a number or special character</p>
                <p>Password: Must be at least 10 characters long. Must contain at least one uppercase and one lowercase letter. Must contain at least one digit.</p>
            </div>
        </div>
    )
}