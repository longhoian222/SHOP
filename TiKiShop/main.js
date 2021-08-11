
var $ = document.querySelector.bind(document);
var $$ = document.querySelectorAll.bind(document);



// ........header--history...........
let iconImgs=$$(".icon-close");
let hisItems=$$(".history-suggest-item");
iconImgs.forEach((iconImg,index)=>{
    let hisItem=hisItems[index];
    iconImg.onclick= function (event) {
        event.stopImmediatePropagation()
        event.preventDefault();
        hisItem.style.display="none"
    }
})
let hisCollapse =$(".history__collapse-text");
let hisExpand =$(".history__expand-text");
let hisAdds=$$(".history-suggest-item.add-item");
    hisExpand.onclick= function (event) {
    event.stopPropagation();
    event.preventDefault();
        hisAdds.forEach(hisAdd=>{
            hisAdd.classList.remove("add-item");
        })
        hisExpand.style.display="none";
        hisCollapse.style.display="block";
    }
    hisCollapse.onclick= function (event) {
    event.stopPropagation();
    event.preventDefault();
        hisAdds.forEach(hisAdd=>{
            hisAdd.classList.add("add-item");
        })
        hisExpand.style.display="block";
        hisCollapse.style.display="none";
    }

    let inputHis=$(".header__search-input");
    let headHis=$(".header__search-history");
    document.onclick=function () {
        headHis.style.display="none";
    }

    inputHis.onclick=function (event) {
    event.stopPropagation();
    headHis.style.display="block";
    }

// ........over-lay...........

var closeImg=$(".close-img");
var headerCart=$('.header__cart');
headerCart.onclick=function () {
    var modal=$('.modal');
    modal.classList.add("active");
}
closeImg.onclick=function () {
    var modal=$('.modal');
    modal.classList.remove("active");
}
// .........top - slider.......
var sliders = $$('.img--slider');
var badges = $$('.badge');
badges.forEach((badge, index) => {
    const slider = sliders[index];
    badge.onclick = function () {
        var badgeActive = $('.badge.active')
        var sliderActive = $('.img--slider.active')
        sliderActive.classList.remove('active');
        slider.classList.add('active');
        badgeActive.classList.remove('active');
        badge.classList.add('active');
    }
})
var iconRight = $('.icon-right');
var iconLeft = $('.icon-left');
var slidersLength = sliders.length;
iconRight.onclick = function () {
    for (var i = 0; i < slidersLength; i++) {
        var check = sliders[i].classList.contains('active');
        t = i + 1;
        if (check) {
            sliders[i].classList.remove('active');
            badges[i].classList.remove('active');
            if (t === slidersLength) {
                sliders[0].classList.add('active');
                badges[0].classList.add('active');
            } else {
                sliders[t].classList.add('active');
                badges[t].classList.add('active');
            } break;
        }
    }
}
// ............click left.......
iconLeft.onclick = function () {
    for (var i = 0; i < slidersLength; i++) {
        var check = sliders[i].classList.contains('active');
        t = i - 1;
        if (check) {
            sliders[i].classList.remove('active');
            badges[i].classList.remove('active');
            if (t === -1) {
                sliders[slidersLength - 1].classList.add('active');
                badges[slidersLength - 1].classList.add('active');
            } else {
                sliders[t].classList.add('active');
                badges[t].classList.add('active');
            } break;
        }
    }


}

// .............home__deal-slider.slider..........
var deadLeft=$(".deal-left")
var deadRight=$(".deal-right")
var dealSliders=$$(".home__deal-list");
var dealSlidersLength = dealSliders.length;
deadRight.onclick = function () {
    for (var i = 0; i < dealSlidersLength; i++) {
        let check = dealSliders[i].classList.contains('active');
        t = i + 1;
        if (check) {
            dealSliders[i].classList.remove('active');
            if (t === dealSlidersLength) {
                dealSliders[0].classList.add('active');
            } else {
                dealSliders[t].classList.add('active');
            } break;
        }
    }
}
// ............click left.......
deadLeft.onclick = function () {
    for (var i = 0; i < dealSlidersLength; i++) {
        var check = dealSliders[i].classList.contains('active');
        t = i - 1;
        if (check) {
            dealSliders[i].classList.remove('active');
            if (t === -1) {
                dealSliders[dealSlidersLength - 1].classList.add('active');
            } else {
                dealSliders[t].classList.add('active');
            } break;
        }
    }
}
var genuineSliders = $$('.home__genuine-sliders');
var genuineBadges = $$('.genuine--badge');
genuineBadges.forEach((genuineBadge, index) => {
    const genuineSlider = genuineSliders[index];
    genuineBadge.onclick = function () {
        var genuineBadgesActive = $('.genuine--badge.active')
        var genuineSliderActive = $('.home__genuine-sliders.active')
        genuineSliderActive.classList.remove('active');
        genuineSlider.classList.add('active');
        genuineBadgesActive.classList.remove('active');
        genuineBadge.classList.add('active');
    }
})



// <!-- ..........home--suggest........... -->

var headerItems = $$('.suggest__header-item');
var mainLists = $$('.suggest__main-list');

    headerItems.forEach((headerItem,index)=>{
        var mainList=mainLists[index];
        headerItem.onclick =function(){
            var headerItemActive=$(".suggest__header-item.active");
            var mainListActive=$(".suggest__main-list.active");
            headerItemActive.classList.remove("active");
            mainListActive.classList.remove("active");
            headerItem.classList.add('active');
            mainList.classList.add("active");
        }
    })


// -------- view__more----------

var viewMore=$(".view__more-link");
var viewItems=$$(".suggest__main-item.add--item");
viewMore.onclick = function (event) {
    event.preventDefault();
    viewItems.forEach((viewItem)=>{
    viewItem.style.display="block";
    })
}

// <!-- ..........home--keywords........... -->
let keyword=$(".keyword__header-right");
let keyMains=$$(".home__keyword-main");
keyword.onclick=function(event){
    event.preventDefault();
    keyMains.forEach((main)=>{
        main.classList.toggle("active");
    })
}
// .......header__menu.classList..............
let headMenu=$(".header__menu");
let headNav=$(".header__nav");
headMenu.onmouseover=function(){
    headNav.style.display="block";
}
headMenu.onmouseout=function(){
    headNav.style.display="none";
}
headNav.onmouseover=function(){
    headNav.style.display="block";
}
headNav.onmouseout=function(){
    headNav.style.display="none";
}
