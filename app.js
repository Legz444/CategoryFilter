

// declare variables and grab elements from index.html//
const btns = document.querySelectorAll(".blog_category_btns button");
const imgs = document.querySelectorAll(".blog_item");

// add click event listener for all buttons//
for(let i = 1; i < btns.length; i++) {
    btns[i].addEventListener('click', filterImg);
};

// make clicked button the active button//
function setActiveBtn(e) {
    // remove active class from all buttons previously used//
    btns.forEach(btn => {
        btn.classList.remove('btn_clicked');
    });
    e.target.classList.add('btn_clicked');
}


function filterImg(e) {
    // run active button function//
    setActiveBtn(e);
    // loop through all imgs//
    imgs.forEach(img => {
        img.classList.remove('img_shrink');
        img.classList.add('img_expand');
        // Get data from data attributes and get item type data//
        const imgType = parseInt(img.dataset.img);
        const btnType = parseInt(e.target.dataset.btn);
        // if the item type and the type of the clicked button are NOT the same//
        if(imgType !== btnType) {
            img.classList.remove('img_expand');
            img.classList.add('img_shrink');
        }
    });
}

// set click event for the "all" btn//
btns[0].addEventListener('click', (e) => {
    // run active btn func//
    setActiveBtn(e);
    // loop through items//
    imgs.forEach(img => {
        img.classList.remove('img_shrink');
        img.classList.add('img_expand');
    });
});