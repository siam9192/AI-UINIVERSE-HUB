const loadMoreDiv = document.getElementById("load-more-div");
const loadMoreButton = document.getElementById('load-more-btn');

let x = 6;

const getData = async(name)=>{
    // const request = await fetch('https://opeconst request = await fetch('https://openapi.programming-hero.com/api/ai/tools');napi.programming-hero.com/api/ai/tools');
    const request = await fetch(`https://openapi.programming-hero.com/api/ai/tools`);
const response = await request.json();
const data = response;
console.log(data.data)
console.log(data.data.tools)
const array = data.data.tools;
const result = [];
try{
for (let i of array){
    if(i.name.toLowerCase().includes(name.toLowerCase()  || i.description.toLowerCase(includes(name.toLowerCase())))){
        result.push(i)

    }
  
}
}
catch(err){
    console.log(57676)
}
showSearchResult(result,name)
console.log(result)
}

const get = async()=>{
   
    const request = await fetch("https://openapi.programming-hero.com/api/ai/tools");
const response = await request.json();
const dataMain = response;
loadData(dataMain.data)

}
const loadModal= async (id)=>{
    const request = await fetch(` https://openapi.programming-hero.com/api/ai/tool/${id}`);
    const response = await request.json();
    const data = response;
    console.log(data)
    showModalData(data.data)
}

get()
// getData()
const loadData = data => {

   
const card_container = document.getElementById('card-container');
const cardByClass =  card_container.getElementsByClassName('card');
card_container.innerHTML = '';
if(data.tools.length > 6){
loadMoreDiv.classList.remove('hidden');
}
else{
    loadMoreDiv.classList.add('hidden');
}

const array = data.tools.slice(0,x)

array.forEach(object => {
    console.log(object)
  const arr =  object.features
    const card = document.createElement('div');
card.classList = 'p-5 border-gray-200 border-[1px] card';
card.innerHTML = ` <div class="p-5">
<img src="${object.image || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQakEs_bbjdPZLhpcK4fG8cKKDJ0iC64sODpg&usqp=CAU'}" class="rounded">
<div class="py-3 border-gray-400 border-b-[2px]">
    <h2 class="text-black font-semibold text-xl">Features</h2>
    <p class="text-gray-500">1. ${object.features[0]}</p>
    <p class="text-gray-500">2. ${object.features[1]}</p>
    <p class="text-gray-500">3. ${object.features[2]}</p>
</div>
<div class="flex justify-between items-center py-2">
<div class="space-y-6">
  <h1 class="text-2xl font-semibold text-black">
    ${object.name}
  </h1>
  <h2 class="text-gray-500 "><i class="fa-solid fa-calendar-days"></i> <span>${object.published_in}</span></h2>
</div>
<div>
  <i class="fa-solid fa-arrow-right text-2xl text-black" onclick = "showModal('${object.id}')"></i>
</div>
</div>
</div>`
card_container.appendChild(card)

})


// hide loadMore btn if data not available 
if(data.tools.length === cardByClass.length){
    loadMoreDiv.classList.add('hidden');
    searchBtn.classList.remove('hidden')
}
else{
    loadMoreDiv.classList.remove('hidden');
}

}


// load more button click

const loadMore = load =>{
animation(true)
 x += 3;
 const card_container = document.getElementById('card-container');

//  card_container.innerHTML = '';
setTimeout(()=>{
    get()
    setTimeout(()=>{
        animation(false)
    },1000)
},2000)

}

const animation = (isLoad)=>{
    const loadingAni = document.getElementById('loading');
    if(isLoad){
       loadingAni.classList.remove('hidden');
       loadMoreButton.classList.add('hidden');
    
    }
    else{
        loadMoreButton.classList.remove('hidden');
       loadingAni.classList.add('hidden');
       
    }
}

const searchBtn = document.getElementById('search-btn');
const search = document.getElementById('search');


function loadSearch(){
    
searchBtn.classList.add('hidden')
const loadWhenSearch = document.getElementById('loading-search');
   
loadWhenSearch.classList.remove('hidden')
setTimeout(()=>{
    getData(search.value)
},2000)
  

}

const showModalData = (data)=>{
    console.log(data)
    const modal = document.getElementById('modal');
    modal.classList.remove('hidden');
    const modal_image  = document.getElementById('modal-image');
    const detail = document.getElementById('detail');

    const features_1 = document.getElementById('features-1');
    const features_2 = document.getElementById('features-2');
    const features_3 = document.getElementById('features-3');
    // Integrations-1
    const integrations_1 = document.getElementById('Integrations-1');
    const integrations_2 = document.getElementById('Integrations-2');
    const integrations_3 = document.getElementById('Integrations-3');
    // image title 
    const imageTitle = document.getElementById('image-title');
    // accuracy
    const accuracy = document.getElementById('accuracy');
detail.innerText = data.description;
features_1.innerText = data.features["1"].feature_name;
features_2.innerText = data.features['2'].feature_name;
features_3.innerText = data.features["3"].feature_name;
// Integrations-1
integrations_1.innerText = data.integrations[1];
integrations_2.innerText = data.integrations[2];
integrations_3.innerText = data.integrations[3];
// image title
// pay info
const pay_info_1 = document.getElementById('pay-info-1');
const pay_info_2 = document.getElementById('pay-info-2');
const pay_info_3 = document.getElementById('pay-info-3');

imageTitle.innerText = data.accuracy.description;
let x = 0
// set image
modal_image.src = data.image_link[0];
// pay info 
pay_info_1.innerText = `${data.pricing[0].plan} ${data.pricing[0].price}`
pay_info_2.innerText = `${data.pricing[1].plan} ${data.pricing[1].price}`
pay_info_3.innerText = `${data.pricing[2].plan} ${data.pricing[2].price}`
accuracy.innerText = `${data.accuracy.score * 100}% accuracy`
console.log(data)
}
const showModal =(id)=>{
    
  loadModal(id)

}
const hideModal = ()=>{
    const hide = document.getElementById('cancel');
    const modal = document.getElementById('modal');
    modal.classList.add('hidden');

}


const showSearchResult = (array,name)=>{
    const loadWhenSearch = document.getElementById('loading-search');
   
  loadWhenSearch.classList.remove('hidden')

    const card_container = document.getElementById('card-container');
card_container.innerHTML = ''
    array.forEach(object => {
    console.log(object)
      const arr =  object.features
        const card = document.createElement('div');
    card.classList = 'p-5 border-gray-200 border-[1px] card';
    card.innerHTML = ` <div class="p-5">
    <img src="${object.image || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQakEs_bbjdPZLhpcK4fG8cKKDJ0iC64sODpg&usqp=CAU'}" class="rounded">
    <div class="py-3 border-gray-400 border-b-[2px]">
        <h2 class="text-black font-semibold text-xl">Features</h2>
        <p class="text-gray-500">1. ${object.features[0]}</p>
        <p class="text-gray-500">2. ${object.features[1]}</p>
        <p class="text-gray-500">3. ${object.features[2]}</p>
    </div>
    <div class="flex justify-between items-center py-2">
    <div class="space-y-6">
      <h1 class="text-2xl font-semibold text-black">
        ${object.name}
      </h1>
      <h2 class="text-gray-500 "><i class="fa-solid fa-calendar-days"></i> <span>${object.published_in}</span></h2>
    </div>
    <div>
      <i class="fa-solid fa-arrow-right text-2xl text-black" onclick = "showModal('${object.id}')"></i>
    </div>
    </div>
    </div>`
    card_container.appendChild(card)

    })
if(array.length < 6){
    loadMoreDiv.classList.add('hidden')
}
    if(array.length === 0){
        card_container.innerHTML = `<h1 class=" text-center text-black text-xl">Sorry no results found</h1>`
      
        card_container.classList.add('text-center')
}
if(name == ''){
    console.log(5765)
    get()
}
loadWhenSearch.classList.add('hidden')
searchBtn.classList.remove('hidden')
}