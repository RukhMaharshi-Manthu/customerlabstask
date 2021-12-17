import "./styles.css";
import Popup from "reactjs-popup";
import { useState, axios } from "react";
<script
  src="https://kit.fontawesome.com/yourcode.js"
  crossorigin="anonymous"
></script>;

export default function App() {
  const [color, setColor] = useState("green");
  const [newSchema, setNewSchema] = useState("");
  const [segname, setsegname] = useState("");
  const defaultschemas = [];
  const selectedschemas = [];
  const [Schemas, setSchemas] = useState(defaultschemas);

  const [fields, setfields] = useState(selectedschemas);

  function handleClick(e) {
    e.preventDefault();
    console.log("The schema was saved.");
  }
  return (
    <div className="App">
      <div className="head">
        <header
          style={{
            "background-color": color,
            height: "20%",
            width: "120%",
            marginTop: "-25px",
            marginBottom: "5px"
          }}
        >
          <h5 className="view">View Audience</h5>
        </header>
      </div>

      <div className="view1">
        <Popup
          className="popgroup"
          trigger={
            <button
              onClick={() => setColor(color === "green" ? "pink" : "green")}
              className="btn1"
            >
              Save segment
            </button>
          }
          position="right center"
        >
          <div className="pop">
            <div className="poppage1">
              <div className="head">
                <div
                  style={{
                    "background-color": "green",
                    height: "20%",
                    width: "200%"
                  }}
                ></div>
                <label>Enter the Name of the Segment</label>
                <br />
                <br />
                <input
                  type="text"
                  placeholder="Name of the segment"
                  onChange={(event) => setsegname(event.target.value)}
                />
                <div className="traits">
                  <p>
                    To save you segment, you need to add the schemas to build
                    the query
                  </p>
                  <span class="dot1"></span>
                  -User Traits &nbsp;&nbsp;
                  <span class="dot2"></span>
                  -Group Traits
                </div>
              </div>


              <div
                style={{
                  gap: "5px",
                  margin: "95px",
                  border: "solid",
                  width: "300px",
                  marginLeft: "15px"
                }}
              >
                {Schemas.map((inp, deleteIdx) => (
                  <div style={{ display: "flex", gap: "5px", margin: "5px" }}>
                    <div>
                      <select
                        name="dropdown2"
                        onChange={(event) => setfields(event.target.value)}
                        style={{
                          width:"200px",
                          height:"35px"
                          
                        }}>>
                        <option value="Fname">{inp}</option>
                        <option value="Fname">First Name</option>
                        <option value="lname">Last Name</option>
                        <option value="gender">Gender</option>
                        <option value="age">Age</option>
                        <option value="actname">Account Name</option>
                        <option value="city">City</option>
                        <option value="state">state</option>
                      </select>
                    </div>
                    <button
                      onClick={() =>
                        setSchemas(
                          Schemas.filter((el, index) => deleteIdx !== index)
                        )
                      }
                      style={{
                        borderRadius: "50%",
                        color: "crimson",
                        fontWeight: "bolder"
                      }}
                    >
                      X
                    </button>
                  </div>
                ))}
              </div>


              <div>
                <select
                  name="dropdown1"
                  onChange={(event) => setNewSchema(event.target.value)}
                  style={{
                    width:"250px",
                    height:"50px"
                    
                  }}>
                  <option value="Fname">Add schema to segment</option>
                  <option value="Fname">First Name</option>
                  <option value="lname">Last Name</option>
                  <option value="gender">Gender</option>
                  <option value="age">Age</option>
                  <option value="actname">Account Name</option>
                  <option value="city">City</option>
                  <option value="state">state</option>
                </select>
              </div>
              <br />
              <button
                style={{
                  borderRadius: "50%",
                  color: "red",
                  fontWeight: "bolder"
                }}
                onClick={() => setSchemas([...Schemas, newSchema])}
              >
                +
              </button>
              <label
                style={{
                  color: "red",
                  fontWeight: "bolder"
                }}
              >
                Add new schema{" "}
              </label>
              <br />
              
              <div style={{ display: "flex", gap: "20px", margin: "50px" }}>
                <button
                  style={{
                    backgroundColor: "green",
                    color: "White",
                    fontWeight: "bolder",
                    height: "40px",
                    width: "200px"
                  }}
                  onClick={handleClick}
                >
                  Save the Segment
                </button>
                <button
                  style={{
                    backgroundColor: "green",
                    color: "White",
                    fontWeight: "bolder",
                    height: "40px",
                    width: "200px"
                  }}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </Popup>
      </div>
    </div>
  );
}
