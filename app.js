const hidden  = document.querySelectorAll(".hidden");
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) =>{
        console.log(entry)
        if (entry.isIntersecting){
            entry.target.classList.add('show');
        }
        //dont add else if you want the animation to run once  
        else{
            entry.target.classList.remove('show');
        }
    });
});
hidden.forEach((el) => observer.observe(el));