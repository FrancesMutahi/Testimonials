//template strings  ``

// const templateExample = `
// html code
// `

// document.getElementById("div id").innerHTML =someContent
//console.log(templateExample);

// const mappingExample = templateExample.map((value1, index)=>{
//     return `
//     <div class = "item" id=${index}>
//     <h4>Key: ${value1.keys}</h4>
//     <span>Roles: ${value1.keys}</span>
//     </div>
//     `
// }).join("");

const Display1 = [
  {
    img: document.getElementById("photo"),
    txt: document.getElementById("text"),
    name: document.getElementById("name"),
    role: document.getElementById("role"),
  },

  {
    img: document.getElementById("photo1"),
    txt: document.getElementById("text1"),
    name: document.getElementById("name1"),
    role: document.getElementById("role1"),
  },
];

// const Testimonial = `
//     <div class="image" width="700px" height="700px">
//     <img src="../images/image-tanya.jpg" alt="Tanya" width="200px" height="200px" id="photo">
//     <div class="nav-button">
//         <button>
//             <img src="../Testimonials/images/previous.svg" alt="previous" width="8px" height="12px"  onclick="">
//         </button>
//         <button>
//             <img src="../Testimonials/images/next.svg" alt="next" width="8px" height="12px">
//         </button>
//     </div>
// `
// document.getElementById("image-box").innerHTML = Testimonial

const Mapping = Display1.map((test, index) => {
  return `

<div class="text">
   <div class="quote">
   
       <p id="text">
           “ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”
       </p>

       <div class="titles">
           <span class="name-name" id="name">
               Tanya Sinclair
           </span>

           <span class="role" id="role">
               UX Engineer
           </span>
       </div>
     
   </div>
  
</div> 
    <div class="image-box" id="image-box">
    <div class="image" width="700px" height="700px">
       <img src="../images/image-tanya.jpg" alt="Tanya" width="200px" height="200px" id="photo">
       <div class="nav-button">
           <button>
               <img src="../Testimonials/images/previous.svg" alt="previous" width="8px" height="12px"  onclick="">
            </button>
            <button>
                <img src="../Testimonials/images/next.svg" alt="next" width="8px" height="12px">
            </button>
       </div>
   </div>
</div>

    `;
}).join("");

document.getElementById("container").innerHTML = Mapping;
