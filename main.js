// const form = document.getElementById("form");
const input = document.getElementById("input");
const msg = document.getElementById("msg");
const posts = document.getElementById("posts");
const img = document.getElementById('img');

// form.addEventListener("submit", (e) => {
//     e.preventDefault();   
  
//     formValidation();
//   });

const data={};


const formValidation = ()=>{
    // alert("error")
    if(input.value.trim().length == 0){
         msg.innerHTML="Post cannot be blank";
        console.log("failure")
    }
    else{
         msg.innerHTML="";
        console.log("success")
         addPost();
         
    }
}
const addPost =()=>{
    data["text"] = input.value;
    // data["img"] = img.src;
    console.log(data);
    createPost();

}

const createPost = ()=>{
    posts.innerHTML +=`
    <div>
    <p>${data.text}</p>
    
                <span class="options">
                    <i onclick="editPost(this)" class="fas fa-edit"></i>
                    <i onclick="deletePost(this)" class="fas fa-trash-alt"></i>
                </span>
    </div>`;
     input.value="";    
}

const deletePost = (e)=>{
    e.parentElement.parentElement.remove();
}


const editPost = (e)=>{
    input.value = e.parentElement.previousElementSibling.innerHTML;
  e.parentElement.parentElement.remove();

}

const createImage =()=>{
    let img = document.getElementById('img');
         let newImage = document.createElement('img');
         newImage.src = "https://www.tutorialspoint.com/static/images/simply-easy-learning.png";
         // Set attribute values for the image
         newImage.setAttribute('id', 'myImage');
         newImage.setAttribute('width', '200px');
         newImage.setAttribute('height', '200px');
         img.appendChild(newImage);
}

// formValidation()