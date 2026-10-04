import { catsData } from '/data.js'

const emotionRadios = document.getElementById('emotion-radios')
const getImageBtn = document.getElementById('get-image-btn')
const gifsOnlyOption = document.getElementById('gifs-only-option')
const memeModalInner = document.getElementById('meme-modal-inner')
const memeModal = document.getElementById('meme-modal')
const memeModalCloseBtn = document.getElementById('meme-modal-close-btn')

emotionRadios.addEventListener('change', highlightCheckedOption)

memeModalCloseBtn.addEventListener('click', closeModal)

getImageBtn.addEventListener('click', renderCat)

function highlightCheckedOption(e){
    const radios = document.getElementsByClassName('radio')
    for (let radio of radios){
        radio.classList.remove('highlight')
    }
    document.getElementById(e.target.id).parentElement.classList.add('highlight')
}

function closeModal(){
    memeModal.style.display = 'none'
}

function renderCat(){
const catObjects = getTwoCatObjects()
    if (catObjects.length === 0) return

    // Generate HTML for each cat image
    let catsHtml = ''
    for (let cat of catObjects) {
        catsHtml += `
            <img 
                class="cat-img" 
                src="./images/${cat.image}"
                alt="${cat.alt}"
            >
        `
    }

    memeModalInner.innerHTML = catsHtml
    memeModal.style.display = 'flex'
}


function getTwoCatObjects(){
const catsArray = getMatchingCatsArray()
    if (!catsArray || catsArray.length === 0) return []

    // If there is only 1 match, return it in an array
    if (catsArray.length === 1) {
        return [catsArray[0]]
    }

    // Shuffle a shallow copy so we don't mutate the original data
    const shuffled = catsArray.slice().sort(() => 0.5 - Math.random())
    
    // Pick the first 2 distinct items
    return shuffled.slice(0, 2)
}

function getMatchingCatsArray(){     
    if(document.querySelector('input[type="radio"]:checked')){
        const selectedEmotion = document.querySelector('input[type="radio"]:checked').value
        const isGif = gifsOnlyOption.checked
        
        const matchingCatsArray = catsData.filter(function(cat){
            
            if(isGif){
                return cat.emotionTags.includes(selectedEmotion) && cat.isGif
            }
            else{
                return cat.emotionTags.includes(selectedEmotion)
            }            
        })
        return matchingCatsArray 
    }  
}

function getEmotionsArray(cats){
    const emotionsArray = []    
    for (let cat of cats){
        for (let emotion of cat.emotionTags){
            if (!emotionsArray.includes(emotion)){
                emotionsArray.push(emotion)
            }
        }
    }
    return emotionsArray
}

function renderEmotionsRadios(cats){
        
    let radioItems = ``
    const emotions = getEmotionsArray(cats)
    for (let emotion of emotions){
        radioItems += `
        <div class="radio">
            <label for="${emotion}">${emotion}</label>
            <input
            type="radio"
            id="${emotion}"
            value="${emotion}"
            name="emotions"
            >
        </div>`
    }
    emotionRadios.innerHTML = radioItems
}

renderEmotionsRadios(catsData)

window.addEventListener('click', function(e) {
    // If the modal is open and the click occurred outside the modal and outside the open button
    if (memeModal.style.display === 'flex') {
        if (!memeModal.contains(e.target) && e.target !== getImageBtn) {
            closeModal()
        }
    }
})




