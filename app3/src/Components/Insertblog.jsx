import React from "react";
import { useNavigate } from "react-router-dom";

function Insertblog() {
  return (
    <div className="container-fluid m-5">
      <div>
        <div className="insertblog">
          <div>
            <h4>Title:</h4>
          </div>
          <div>
            <input style={{ borderRadius: 10, height:50,width:800 }} type="text" />
          </div>
        </div>
        <div>
          <div>
            <h4>Content:</h4>
          </div>
          <div>
            <input style={{ borderRadius: 10, height: 200, width:800 }} type="textarea" />
          </div>
        </div>
        <div>
          <div className="mt-4">
            <h4>Category:</h4>
          </div>
          <div>
            <label htmlFor="category"></label>
            <select
              className="btn btn-info btn-lg"
              name="Category"
              id="categories"
            >
              <option value="Technical">Technical</option>
              <option value="Food">Food</option>
              <option value="Lifestyle">Lifestyle</option>
              <option value="Health">Health</option>
              <option value="Travel">Travel</option>
            </select>
          </div>
        </div>
        <div >
          
            
            <button className="btn btn-success m-4">Create</button>
          
          
            
            <button className="ml-3 btn btn-danger m-4">Cancel</button>
          
        </div>
      </div>
    </div>
  );
}

export default Insertblog;
