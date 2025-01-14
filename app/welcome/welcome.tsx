import React from "react";
import "./index.css";

export const Welcome = () => {
  return (
    <>
      {/* box-model */}
      {/* <div className="prasanna">
        <h1>Happy</h1>
      </div>

      <div className="prasanna2">
        <h1>Happy</h1>
      </div> */}

      <div className="form">
        <h4> Enter Your Details </h4>
        <div className="name">
          <div id="fname">
            <label>First Name:</label> <input type="text" />
          </div>
          <div id="lastname">
            Last Name: <input type="text" />
          </div>
        </div>
        <div className="normal">
          Age: <input type="text" />
        </div>
        <div className="normal">
          Grade: <input type="text" />
        </div>
        <div className="normal">
          District: <input type="text" />
        </div>
        <div>Parent Name</div>
        <div className="name">
          <div id="fname">
            Father Name: <input type="text" />
          </div>
          <div id="moname">
            Mother Name: <input type="text" />
          </div>
        </div>
        <div>
          <button>clickme</button>
        </div>
      </div>
    </>
  );
};
