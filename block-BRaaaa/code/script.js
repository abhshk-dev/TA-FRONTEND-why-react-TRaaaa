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
function createMovieUI(data,root){
    root.innerHTML='';
    data.forEach((movie,i)=>{
        let li=document.createElement('li');
        let button=document.createElement('button');;
        button.id=i;
        button.innerText=movie.watched? 'Watched': 'To Watch';
        button.addEventListener('click',handleChange);
        let label=document.createElement('label');
        label.for=i;
        label.innerText=movie.name;

        li.append(label,button);

        rootElm.append(li);
    });
}

createMovieUI(allMovies,rootElm);