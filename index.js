
const fetchPosts = async () => {
    const response  = await fetch('https://openapi.programming-hero.com/api/retro-forum/posts');
    const data = await response.json();
    const posted = data.posts;
    console.log(posted)
    displayPost(posted)


}
const displayPost = posted =>{
    posted.forEach(datas =>{
        const cardContainer = document.getElementById('post-container');
            const div = document.createElement('div');
            div.innerHTML = `  
            <div class=" flex bg-gray-200 px-5 py-10 rounded-2xl gap-5">
                            <div>
                               
                                <div class="indicator">
                                 <span class="indicator-item badge badge-secondary ${datas.isActive ? 'bg-green-700' : 'bg-red-700'} border-none"></span>
                             <div class="grid w-32 h-32 bg-base-300 place-items-center"></div>
                             <img class="w-14 rounded-md" src="${datas.image}" alt="" srcset="">
                             </div>
                            </div>
                            <div class="flex flex-col gap-3 ">
                                <div class="flex gap-5">
                                    <p> #${datas.category}</p>
                                    

                                    <p>Author : ${datas.author.name}</p>
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
                                        <div id="btn-email" class="items-end">
                                        <img src="./images/email 1.svg" alt="">
                                        
                                         </div>
                                    </div>

                
                                    </div>
                                </div>
                            </div>
             </div>
            `        
            cardContainer.appendChild(div);
    
    })

}
const handleSearch =() =>{
  const searchField = document.getElementById('search-field')
  const searchText = searchField.value;
  console.log(searchText)
}
fetchPosts();   
