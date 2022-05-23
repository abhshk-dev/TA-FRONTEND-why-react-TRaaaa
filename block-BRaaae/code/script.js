let input=document.querySelector('input[type="text"]');

let rootElm=document.querySelector('.todos');

let allMovies=[
{
    name:'Forest Gump',
    watched: false,
},
{
    name:'Inception',
    watched:true,
}
];

input.addEventListener('keyup',(event)=>{
    if(event.keyCode === 13){
        allMovies.push({
            name:event.target.value,
            watched:false,
        });
        event.target.value='';
        createMovieUI(allMovies,rootElm);
    }
})
function handleChange(event){
    let id=event.target.id;
    console.log(id)
    allMovies[id].watched=!allMovies[id].watched;
    createMovieUI(allMovies,rootElm);
}


// function createElement(type,attr={},...children){
//     let element=document.createElement(type);
//     for(let key in attr){
//         if(key.startsWith('data-')){
//             element.setAttribute(key,attr[key]);
//         }else if(key.startsWith('on')){
//             let eventType=key.replace('on','')
//             element.addEventListener(eventType,attr[key])
//         }
        
//         else{
//             element[key]=attr[key];
//         }
//     }
//     children.forEach((child)=>{
//         if(typeof child === 'object'){
//             element.append(child);
//         }
//         if(typeof child === 'string'){
//             let node=document.createTextNode(child);
//             element.append(node);
//         }
//     });
//     return element;

// }

function createMovieUI(data,root){
    let elm=React.createElement;
    let ui=data.map((movie,i)=>{
        let li=elm('li',
         null, 
         elm('label',{for:i},movie.name),
         elm('button', {id:i, onclick:handleChange},
         movie.watched ? 'Watched':'To Watch')
         );
        // let button=document.createElement('button');;
        // button.id=i;
        // button.innerText=movie.watched? 'Watched': 'To Watch';
        // button.addEventListener('click',handleChange);
        // let label=document.createElement('label');
        // label.for=i;
        // label.innerText=movie.name;
        return li;
        // rootElm.append(li);
    });
    ReactDOM.render(ui,li);
}

createMovieUI(allMovies,rootElm);