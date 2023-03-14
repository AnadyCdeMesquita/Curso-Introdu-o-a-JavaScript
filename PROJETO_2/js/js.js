 const colors = ['red','blue', 'yellow', 'purple']
 const color = document.querySelector('.color')
 const btn = document.getElementById('btn')

 btn.addEventListener('click', function(){
    const randomColor = getRandomColor()

    function getRandomColor() { 
        return Math.floor(Math.random() * colors.length)
    }

    document.body.style.backgroundColor = colors[randomColor]
    color.textContent = colors[randomColor]
})



