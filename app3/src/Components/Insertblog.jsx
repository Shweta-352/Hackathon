import React from "react";
import { useNavigate } from "react-router-dom";

function Insertblog(){
    return(
        <div className="container-fluid m-5">
            <div>
                <div className="insertblog">
                
                <div>
                    <h4>Title:</h4>
                </div>
                <div>
                    <input type="text" />
                </div>
                </div>
                <div>
                    <div><h4>Content:</h4></div>
                    <div><input type="textarea"  /></div>
                </div>
                <div>
                    <div><h4>Category:</h4></div>
                    <div><label htmlFor="category"></label>
                    <select  className="btn btn-info btn-lg" name="Category" id="categories">
                    <option value="Technical">Technical</option>
                    <option value="Food">Food</option>
                    <option value="Lifestyle">Lifestyle</option>
                    <option value="Health">Health</option>
                    <option value="Travel">Travel</option>


                    </select>
                   

                    </div>
                </div>
               <div>
                <button className="btn btn-success">Create</button>
                <button style={{float:"right"}} className="btn btn-danger" >Cancel</button>

               </div>
               
            </div>
        </div>
    );
}

export default Insertblog