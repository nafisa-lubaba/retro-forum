
// const fetchPosts = async () => {
//     const response  = await fetch('https://openapi.programming-hero.com/api/retro-forum/posts');
//     const data = await response.json();
//     const posted = data.posts;
//     console.log(posted)
//     displayPost(posted)


// }
// const displayPost = posted =>{
//     posted.forEach(datas((datas, time) =>{
//         setTimeout(() =>{
//         const cardContainer = document.getElementById('post-container');
//             const div = document.createElement('div');
//             div.innerHTML = `  
//             <div class=" flex bg-gray-200 px-5 py-10 rounded-2xl gap-5">
//                             <div>
                               
//                                 <div class="indicator">
//                                  <span class="indicator-item badge badge-secondary ${datas.isActive ? 'bg-green-700' : 'bg-red-700'} border-none"></span>
//                              <div class="grid w-32 h-32 bg-base-300 place-items-center"></div>
//                              <img class="w-14 rounded-md" src="${datas.image}" alt="" srcset="">
//                              </div>
//                             </div>
//                             <div class="flex flex-col gap-3 ">
//                                 <div id="cat-1" class="flex gap-5">
//                                     <p> #${datas.category}</p>
                                    

//                                     <p>Author : ${datas.author.name}</p>
//                                 </div>
//                                 <div class="flex flex-col gap-5">
//                                     <div class="flex flex-col gap-3">
//                                         <h1 class="text-xl">${datas.title}</h1>
//                                         <p>${datas.description}</p>
//                                     </div>
//                                     <div class="border-dashed border-[2px]"></div>
//                                     <div class="flex gap-5">
//                                         <div class="flex gap-3 items-center">
//                                             <i class="fa-regular fa-message"></i>
//                                             <p>${datas.comment_count}</p>
//                                         </div>
//                                         <div class="flex gap-3 items-center">
//                                             <i class="fa-regular fa-eye"></i>
//                                             <p>${datas.view_count}</p>
//                                         </div>
//                                         <div class="flex gap-3 items-center">
//                                             <i class="fa-regular fa-clock"></i>
//                                             <p>${datas.posted_time} min</p>
                                    
//                                         </div>
//                                         <div id="btn-email" class="items-end">
//                                         <img src="./images/email 1.svg" alt="">
                                        
//                                          </div>
//                                     </div>

                
//                                     </div>
//                                 </div>
//                             </div>
//              </div>
//             `        
//             cardContainer.appendChild(div);
//         }, time * 2000);  
    
//     });

// }

const fetchPosts = async () => {
    const response = await fetch('https://openapi.programming-hero.com/api/retro-forum/posts');
    const data = await response.json();
    const posted = data.posts;
    console.log(posted);
    displayPost(posted);
}

const displayPost = (posted) => {
    posted.forEach(datas => {
       
            const cardContainer = document.getElementById('post-container');
            const div = document.createElement('div');
            div.innerHTML = `  
            <div class="flex bg-gray-200 px-5 py-10 rounded-2xl gap-5">
                <div>
                    <div class="indicator">
                        <span class="indicator-item badge badge-secondary ${datas.isActive ? 'bg-green-700' : 'bg-red-700'} border-none"></span>
                        <div class="grid w-32 h-32 bg-base-300 place-items-center"></div>
                        <img class="w-14 rounded-md" src="${datas.image}" alt="" srcset="">
                    </div>
                </div>
                <div class="flex flex-col gap-3 ">
                    <div id="cat-1" class="flex gap-5">
                        <p> #${datas.category}</p>
                        <p>Author: ${datas.author.name}</p>
                    </div>
                    <div class="flex flex-col gap-5">
                        <div class="flex flex-col gap-3">
                            <h1 class="text-xl">${datas.title}</h1>
                            <p>${datas.description}</p>
                        </div>
                        <div class="border-dashed border-[2px]"></div>
                        <div class="flex gap-5">
                            <div class="flex gap-3 items-center">
                                <i class="fa-regular fa-message"></i>
                                <p>${datas.comment_count}</p>
                            </div>
                            <div class="flex gap-3 items-center">
                                <i class="fa-regular fa-eye"></i>
                                <p>${datas.view_count}</p>
                            </div>
                            <div class="flex gap-3 items-center">
                                <i class="fa-regular fa-clock"></i>
                                <p>${datas.posted_time} min</p>
                            </div>
                            <div onclick="click()" id="btn-email" class="items-end">
                                <img src="./images/email.svg" alt="">
                            </div>
                        </div>
                    </div>
                </div>
            </div>`

            cardContainer.appendChild(div);
        
    });
}
const click = () =>{
    console.log('click')
}
const handleSearch =() =>{
  const searchField = document.getElementById('cat-1')
  const searchText = searchField.value;
  console.log(searchText)
 }
// const loadLatestPost =async () =>{
//     const res = await fetch('https://openapi.programming-hero.com/api/retro-forum/latest-posts')
//      const data = await res.json()
//         const post = data;
//        console.log(post);
    
//        post.forEach(posts => {
//            console.log(posts);

//         const cardContainer = document.getElementById('latest-container');


//         const div = document.createElement('div');
//             div.innerHTML = `
//             <div class="card bg-base-100 shadow-xl">
//                 <figure class="px-5 pt-10">
//                     <img src="${post.cover_image}" />
//                 </figure>
//                 <div class="card-body">
//                     <div class="flex gap-3">
//                         <i class="fa-solid fa-calendar-days"></i>
//                         <p>${post.author.posted_date ? post.author.posted_date : 'No publish date'}</p>
                    
//                     </div>

//                     <h2 class="text-lg font-bold">${post.title}</h2>
//                     <p>${post.description}</p>

//                     <div class="flex gap-2 items-center">
//                         <img class="w-14 rounded-full" src="${post.profile_image}" alt="" srcset="">
//                         <div>
//                         <p class="text-base">${post.author.name}</p>
//                         <p class="text-sm">${post.author.designation ? post.author.designation : 'Unknown '}</p>
//                         </div>
//                     </div>
//                 </div>
//             </div>`;

//             cardContainer.appendChild(div);
//         });
//     } 




    const loadLatestPost =async () =>{
        const res = await fetch('https://openapi.programming-hero.com/api/retro-forum/latest-posts')
        const data = await res.json()
        const post = data;
        // console.log(post);
    
        post.forEach(posts => {
            // console.log(posts);
    
            const cardContainer = document.getElementById('latest-container')
            
    
            const div = document.createElement('div');
            div.innerHTML = `
            <div class="card bg-base-100 shadow-xl">
                        <figure class="px-5 pt-10">
                            <img src="${posts.cover_image}" />
                        </figure>
                        <div class="card-body">
                            <div class="flex gap-3">
                                <i class="fa-solid fa-calendar-days"></i>
                                <p>${posts.author.posted_date ? posts.author.posted_date : 'No publish date'}</p>
                            </div>
    
                            <h2 class="text-lg font-bold">${posts.title}
                            </h2>
                            <p>${posts.description}
                            </p>
                                <div class="flex gap-2 items-center">
                                    <img class="w-14 rounded-full" src="${posts.profile_image}" alt="" srcset="">
                                    <div>
                                        <p class="text-base">${posts.author.name}</p>
                                        <p class="text-sm	">${posts.author.designation ? posts.author.designation : 'Unknown'}</p>
                                    </div>
                                </div>
                     </div>
             </div>
          
            
            `
            cardContainer.appendChild(div)
        });
    }; 
//  const toggelLoadingSpinner = () => {
//     const loadingSpinner = document.getElementById('loading-spinner')
//     loadingSpinner.classList.remove('hidden')
//  }
//  toggelLoadingSpinner();


fetchPosts();    
loadLatestPost();

