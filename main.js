// const loadcategories =()=> {
//     fetch('https://openapi.programming-hero.com/api/news/categories')
//     .then(res=>res.json())
//     .then(data=>displayCategories(data.data.news_category))
// }
// loadcategories()



const loadcategories = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/news/categories')
    const data = await res.json()
    displayCategories(data.data.news_category)
}
loadcategories()


const displayCategories = (categories) => {
    const cat = document.getElementById('categories');
    for (const categorie of categories) {
        const div = document.createElement('div')
        div.classList.add('d-flex');
        div.innerHTML = `
        <p class="p-3" onclick="newsByCategories(${categorie.category_id})">${categorie.category_name}</p>
        `
        cat.appendChild(div)
    }
}

const newsByCategories = async (categoryId) => {
    const url = `https://openapi.programming-hero.com/api/news/category/0${categoryId}`;
    const res = await fetch(url)
    const data = await res.json();
    document.getElementById('news-section').textContent='';
    if((data.data).length===0){
        document.getElementById('no-news-messeage').classList.remove('d-none')
    }
    else{
        document.getElementById('no-news-messeage').classList.add('d-none')
    }
    loadNews(data.data);
}

const loadNews = (newss) => {
    const newsContainer = document.getElementById('news-section');
    for (const news of newss) {
        const div = document.createElement('div');
        div.innerHTML = `
        <div class="d-flex shadow p-3 mb-5 bg-body-tertiary rounded h-100" onclick="newsByCategories(${news._id})">
        <img src="${news.image_url}" alt="" class="w-25 me-4 h-100 news-img">
        <div>
            <h4>${news.title}</h4>
            <p>${(news.details).slice(0,350)}...</p>
            <div class="d-flex justify-content-between">
                <div class="d-flex align-items-center">
                    <img src="${news.author.img}"" class="user-image me-2">
                    <div>
                        <p class="mb-0">${news.author.name?? 'No Information'}</p>
                        <p class="mb-0">${news.author.published_date}</p>
                    </div>
                </div>
                <div class="m-2">
                    <i class="bi bi-eye"></i>
                    <h6>${news.total_view ?? 'No Information'}</h6>
                </div>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                        class="bi bi-star" viewBox="0 0 16 16">
                        <path
                            d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                        class="bi bi-star" viewBox="0 0 16 16">
                        <path
                            d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                        class="bi bi-star" viewBox="0 0 16 16">
                        <path
                            d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                        class="bi bi-star" viewBox="0 0 16 16">
                        <path
                            d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                        class="bi bi-star" viewBox="0 0 16 16">
                        <path
                            d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                    </svg>
                </div>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                        class="bi bi-arrow-right me-2" viewBox="0 0 16 16">
                        <path fill-rule="evenodd"
                            d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                    </svg>
                </div>
            </div>
        </div>
        </div>
        `
        newsContainer.appendChild(div)
    }
}

const newsmodal= newsData=>{
    const url = ''
}