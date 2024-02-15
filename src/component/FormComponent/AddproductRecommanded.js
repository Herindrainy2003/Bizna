import React from 'react'
import { MDBBtn } from 'mdb-react-ui-kit';

function AddproductRecommanded() {
  return (
    <div className="container">
   <div class="row justify-content-center">
      <div class="col-md-6">
            <div className="form-floating mb-1 ">
               <input type="text" className="form-control mt-8" id="floatingInput" placeholder="name@example.com" />
               <label for="floatingInput">Inona le aseara  Tadiavina</label>
            </div>

            <div className="form-floating mb-1 ">
               <input type="number" className="form-control mt-8" id="floatingInput" placeholder='' />
               <label for="floatingInput">Vidiny Zakanao( atao Ariary)</label>
            </div>

            <div className="form-group  mt-3">
                <textarea class="form-control" id="comment" rows="5" cols="5" placeholder='Ny mombamomba anilay sera'></textarea>
            </div>

            <div className="form-floating mb-1 ">
               <input type="text" className="form-control mt-8" id="floatingInput" placeholder="" />
               <label for="floatingInput">Anaranao amin'ny Facebook (afaka tsy asiana)</label>
            </div>

            <div className="form-floating mb-1 ">
               <input type="telephone" className="form-control mt-8" id="floatingInput" placeholder="" />
               <label for="floatingInput">Ny laharany findainao</label>
            </div>

            <div className="form-floating mb-1 ">
               <input type="file" className="form-control mt-8" id="floatingInput" placeholder="" />
               <label for="floatingInput">Sarinilay Sera tadiavina raha misy (afaka tsy asiana)</label>
            </div>

            <div class=" text-center mt-3">
                 <MDBBtn>Hitady Sera</MDBBtn>
            </div>
         
      </div>
   </div>
</div>
  )
}

export default AddproductRecommanded
