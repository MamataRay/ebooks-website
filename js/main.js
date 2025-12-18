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
  spaceBetween: 16,
    grabCursor:true,
    slidesPerView:'auto',
    centeredSlides:'auto',

    autoplay:{
        delay:3000,
        disableOnInteraction:false,
    },
    breakpoints:{
        1220:{
            spaceBetween: -22,
        }
    }
})
//featured swiper

//new swiper

//testimonal swiper


//show scroll up