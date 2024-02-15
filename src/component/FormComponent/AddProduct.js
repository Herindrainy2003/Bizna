import React , { useState } from 'react';
// Initialization for ES Users
import { MDBBtn } from 'mdb-react-ui-kit';



export default function AddProduct() {
   const [nom , setNom] = useState('')
   const [number , setNumber] = useState('')
   const [description , setDescription] = useState('')
   const [nomfacebook , setNomFacebook] = useState('')
   const [prix , setPrix] = useState(0)
   const [photo , setphoto] = useState('')
 
   const validateForm =(e)=>{
      e.preventDefault()
      
 }
  
  
   return (
<form onSubmit={validateForm}>
<div className="container">
   <div class="row justify-content-center">
      <div class="col-md-6">
            <div className="form-floating mb-1 ">
               <input type="text" className="form-control mt-8" id="floatingInput" placeholder="" onChange={(e)=>setNom(e.target.value)} value={nom} required/>
               <label for="floatingInput">Inona le aseara</label>
            </div>

            <div className="form-floating mb-1 ">
               <input type="number" className="form-control mt-8" id="floatingInput" placeholder='' onChange={(e)=>setPrix(e.target.value)} value={prix} required />
               <label for="floatingInput">Vidiny ( atao Ariary)</label>
            </div>

            <div className="form-group  mt-3">
                <textarea className="form-control" id="comment" rows="5" cols="5" placeholder='Ny mombamomba anilay sera' onChange={(e)=>setDescription(e.target.value)} value={description} required></textarea>
            </div>

            <div className="form-floating mb-1 ">
               <input type="text" className="form-control mt-8" id="floatingInput" value={nomfacebook} onChange={(e)=>setNomFacebook(e.target.value)} placeholder="" />
               <label for="floatingInput">Anaranao amin'ny Facebook (afaka tsy asiana)</label>
            </div>

            <div className="form-floating mb-1 ">
               <input type="telephone" className="form-control mt-8" id="floatingInput"  onChange={(e)=>setNumber(e.target.value)} value={number} placeholder=""  required/>
               <label for="floatingInput">Ny laharany findainao</label>
            </div>

            <div className="form-floating mb-1 ">
               <input type="file" className="form-control mt-8" id="floatingInput" onChange={(e)=>setphoto(e.target.value)} value={photo} placeholder="" required/>
               <label for="floatingInput">Sarinilay Sera</label>
            </div>

            <div className=" text-center mt-3">
                 <MDBBtn type='submit'>Asera</MDBBtn>
            </div>
         
      </div>
   </div>
</div>
</form>
  );
}