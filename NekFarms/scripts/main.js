let myImage = document.querySelector('img')
    myImage.onclick =() =>{
        let mySrc = myImage.getAttribute('src')
        if (mySrc ==='C:\Desktop\imaages\nek2.jpg') {
            myImage.setAttribute('src','C:\Desktop\imaages\nek2')


        } else {
            myImage.setAttribute('src','C:\Desktop\imaages\nek1')
            
        }
    }

    document.querySelector('a').addEventListener('click',()=>{
     alert('Content not yet available')   
    })