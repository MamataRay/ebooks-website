                                // search
const searchButton =document.getElementById('search-button'),
      searchClose = document.getElementById('search-close'),
      searchContent = document.getElementById('search-content')

    //   search show
if(searchButton){
    searchButton.addEventListener('click',() =>{
        searchContent.classList.add('show-search')
    })
}

    // search hidden
if(searchClose){
    searchClose.addEventListener('click',()=>{
        searchContent.classList.remove('show-search')
    })
}


                                // login
const loginButton =document.getElementById('login-button'),
      loginClose = document.getElementById('login-close'),
      loginContent = document.getElementById('login-content')

    //   login show
if(loginButton){
    loginButton.addEventListener('click',() =>{
        loginContent.classList.add('show-login')
    })
}

    // login hidden
if(loginClose){
    loginClose.addEventListener('click',()=>{
        loginContent.classList.remove('show-login')
    })
}

//add shadow header
const shadowheader = () =>{
    const header = document.getElementById('header')
    this.scrollY >= 50 ? header.classList.add('shadow-header')
                       :header.classList.remove('shadow-header')

}
window.addEventListener('scroll',shadowheader)

//home swiper
let swiperHome = new Swiper('.home__swiper', {
 
    loop: true,
    spaceBetween: 24,
    grabCursor:true,
    slidesPerView:'auto',
    centeredSlides:'auto',

    autoplay:{
        delay:3000,
        disableOnInteraction: false,
    },
    breakpoints:{
        1220:{
            spaceBetween: -32,
        }
    }
})

//featured swiper

let swiperFeatured = new Swiper('.featured__swiper', {
 
    loop: true,
    spaceBetween: 16,
    grabCursor:true,
    slidesPerView:'auto',
    centeredSlides:'auto',

    navigation:{
        nextEl: 'swiper-button-next',
        prevEl: 'swiper-button-prev',
    },

    autoplay:{
        delay:3000,
        disableOnInteraction:false,
    },
    
    breakpoints:{
        1150:{
            slidesPerView: 4,
            centeredSlides: false,
        }
    }
})

//new swiper

let swiperNew = new Swiper('.new__swiper', {
 
    loop: true,
    spaceBetween: 16,
    slidesPerView:'auto',

    breakpoints:{
        1150:{
            slidesPerView: 3,
        }
    }
})

//testimonal swiper


//show scroll up
