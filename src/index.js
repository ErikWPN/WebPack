import './styles.scss'

function titleComponet(){
    const elemH1 = document.createElement('h1')
    elemH1.innerHTML = 'Hello World 2'
    elemH1.classList.add('title')
    return elemH1
}

document.body.appendChild(titleComponent())