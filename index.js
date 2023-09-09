const submitBtn = document.getElementById('submit-btn')
//prevent default in submitBtn
submitBtn.addEventListener('click', (e) => {
    e.preventDefault()
    console.log("CLICK")
})
    