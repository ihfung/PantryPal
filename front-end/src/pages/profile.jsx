// import {useState, useEffect} from "react";

// import '../style/navbar.scss';
// import '../style/home.scss';
// import '../style/footer.scss';

// import Footer from "../component/footer";
// import View from "../component/view";
// import { useParams } from "react-router-dom";

// const Profile = () =>{
  

//   return (

//     <div className="content">
     
      
//      <div className="recipe-form">
//       <h1>View Profile</h1>
//       <form>
//         <div className="form-row">
//           <div className="form-group">
//             <label>Image</label>
//             <img src= "#!"alt="profile_pic" />
//           </div>
//           <div className="form-field">
//             <div className="form-group">
//               <label>Username</label>
//               <input type="text" name="username" value={form.username}  />
//             </div>
//             <div className="form-group">
//               <label>Email</label>
//               <input type="text" name="email" value={form.email}/>
//             </div>
//             <div className="form-group">
//               <label>Change Password</label>
//               <input type="text" name="password" value={form.password}/>
//             </div>
//           </div> 
//         </div>
//         <div className="form-group">
//           <label>Bio</label>
//           <textarea name="bio" value={form.bio} ></textarea>
//         </div>
//         <div className="comments-section">
//           <div className="form-group">
//             <label>Add comments</label>
//             <div className="input-box">
//               <input type="text" name="comment" value={form.comment} onChange={handleInputChange} placeholder="Add a comment" />
//               <button type="submit">
//                 <LuSend className='icon' />
//               </button>
//             </div>
//           </div>
//           {form.comments.map((comment, index) => (
//             <div key={index} className="comment">
//               <p>{comment.comment_text}</p>
//             </div>
//           ))}
//             {/* <div className="form-group">
//             <label>Comments</label>
//             <textarea name="comments" value={form.comments.map(c => c.comment_text).join('\n')} readOnly></textarea>
//           </div> */}
//         </div>
//       </form>
//     </div>
//       <Footer />
//     </div>
  
//   );
// }

// export default Profile;