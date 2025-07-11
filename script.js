document.addEventListener('DOMContentLoaded', () => {

    const inputBox = document.getElementById('input')

    const sound = new Audio('keyboard-typing-one-short-1-292590.mp3');
    sound.volume = .3;

document.addEventListener('keydown', (e) => {
    if(e.ctrlKey || e.altKey || e.metaKey) return;

    let key = e.key

    if(key === 'Backspace'){
        inputBox.value = inputBox.value.slice(0,-1);
        AnimateButton('Backspace')
    }else if(key === 'Enter'){
        inputBox.value += '\n';
        AnimateButton('Enter')
    }else if(key === ' '){
        inputBox.value += ' ';
        AnimateButton('gap')
    }else if(key === 'Delete'){
        inputBox.value = ''
        AnimateButton('Delete')
    }else{
        let btn = findButtonByText(key.toUpperCase());
        if(btn){
            inputBox.value += btn.textContent.trim()
            AnimateButton(btn.textContent.trim());
        }
    }
})


inputBox.forEach(btn => {
    btn.addEventListener('click', () => {
        let v = btn.textContent.trim();

        if(v === 'Backspace'){
            inputBox.value = inputBox.value.slice(0,-1)
        }else if(v === 'Enter'){
            inputBox.value += '\n';
        }else if(btn.classList.contains('gap')){
            inputBox.value += " ";
        }else if(v === 'Delete'){
            inputBox.value = ''
        }else{
            inputBox.value += v;
        }
        AnimateButton(v);
    })
})


function AnimateButton(keyText){
    let btn = findButtonByText(keyText);

    if(btn){
        btn.classList.add('active-hover');
        setTimeout(() => {
            btn.classList.remove('active-hover')
        },150)
    }
    sound.currentTime = 0;
    sound.play()
}

function findButtonByText(txt){
    const allbtns = document.querySelectorAll('button');
    for(let b of allbtns){
        if(b.textContent.trim() === txt){
            return b;
        }else if(b.dataset.key === txt){
            return b;
        }
    }
    return null;
}
})