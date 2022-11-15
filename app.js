let count = 0;
const value = document.getElementById("#value");
const decrease = document.querySelector(".decrease");
const increase = document.querySelector(".increase");
const reset = document.querySelector(".reset");

decrease.addEventListener("click", function() {
    count--;
    value.textContent = count;
    colormatch();
});

increase.addEventListener("click", function() {
    count++;
    value.textContent = count;
    colormatch();
});

reset.addEventListener("click", function() {
    count = 0;
    value.textContent = count;
    colormatch();
});

function colormatch () {
    if (count > 0) {
        value.style.color = "Blue";
    }
    if (count < 0) {
        value.style.color = "Red";
    }
    if (count === 0) {
        value.style.color = "Black";
    }
};

/*working codes*/

/*const btns = document.querySelectorAll(".btn");

btns.forEach(function(btn) {
    btn.addEventListener("click", function(e) {
        const styles = e.currentTarget.classList;
       (styles.contains('decrease')) ? count--
       : (styles.contains('increase')) ? count++ 
       : count = 0;


       if (count > 0) {
           value.style.color = "Blue";
        }
        if (count < 0) {
         value.style.color = "Red";
           }
    if (count === 0) {
        value.style.color = "Black";
       }

       value.textContent = count;
    });
});*/