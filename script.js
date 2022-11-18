console.log("Welcome to Music player");
let songindex=0;
let songs=[
       {songname:"kana yari" ,filepath:"songs/1.mp3",coverpath:"images/recent1.jpg"},
       {songname:"pata laguga" ,filepath:"songs/2.mp3",coverpath:"images/recent2.jpg"},
       {songname:"har har sambhu" ,filepath:"songs/3.mp3",coverpath:"images/recent3.jpg"}
      ];
let audioElement = new Audio(songs[songindex].filepath);

//cover image in bottom

let image=document.getElementById('cover');
image.src=songs[songindex].coverpath;

//displays song name in bottom

let mastersongname=document.getElementById('mastersongname');
mastersongname.innerText="Song name- "+songs[songindex].songname;

//displays time in bottom
let time=document.getElementsByClassName('time');
time[0].innerText=((Math.floor(audioElement.currentTime/60))+":"+Math.floor(audioElement.currentTime%60))+'/'+((Math.floor(audioElement.duration/60))+":"+Math.floor(audioElement.duration%60));

const util=()=>{
    //play pause button change
    Play.classList.remove('fa-play-circle');
    Play.classList.add('fa-pause-circle');
    //displays songdetails in bottom
    mastersongname.innerText="Song name- " + songs[songindex].songname;
    image.src=songs[songindex].coverpath;
};

//play pause button


let Play = document.getElementById('masterPlay');
Play.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        Play.classList.remove('fa-play-circle');
        Play.classList.add('fa-pause-circle');
        document.getElementById('playm').title='Pause';
    }
    else{
        audioElement.pause();
        Play.classList.remove('fa-pause-circle');
        Play.classList.add('fa-play-circle');
        document.getElementById('playm').title='Play';
    }
})

//updatepprogressbar

let myprogressbar = document.getElementById('myprogressbar');
audioElement.addEventListener('timeupdate', ()=>{
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    myprogressbar.value=progress;
    //updates time in bottom
    time[0].innerText=((Math.floor(audioElement.currentTime/60))+":"+Math.floor(audioElement.currentTime%60))+'/'+((Math.floor(audioElement.duration/60))+":"+Math.floor(audioElement.duration%60));
    
})
myprogressbar.addEventListener('change',()=>{
    audioElement.currentTime=myprogressbar.value*audioElement.duration/100;
})



//next button

document.getElementById('next').addEventListener('click',()=>{
    if (songindex>=2){
        songindex=0;
    }
    else{
        songindex+=1;
    }
    audioElement.src = (songs[songindex].filepath);
    audioElement.currentTime=0;
    audioElement.play();
    util();

})


//previous button

document.getElementById('previous').addEventListener('click',()=>{
    if (songindex<=0){
        songindex=2;
    }
    else{
        songindex-=1;
    }
    audioElement.src = (songs[songindex].filepath);
    audioElement.currentTime=0;
    audioElement.play();
    util();
});


// horizontal scrolling trending


let leftscroll=document.getElementById('left-scroll');
let rightscroll=document.getElementById('right-scroll');
let elem=document.getElementById('trending1');

leftscroll.onclick= ()=>{
    elem.scrollLeft-=800;
};

rightscroll.onclick= ()=>{
    elem.scrollLeft+=800;
};


// horizontal scrolling recent


let leftscroll1=document.getElementById('left-scroll1');
let rightscroll1=document.getElementById('right-scroll1');
let elem1=document.getElementById('recent1');

leftscroll1.onclick= ()=>{
    elem1.scrollLeft-=document.getElementById("recent1").offsetWidth;
};

rightscroll1.onclick= ()=>{
    elem1.scrollLeft+=document.getElementById("recent1").offsetWidth;
};


// Dark and light mode


const theme=()=>{
    let icons=document.getElementById('mode');
    document.body.classList.toggle('light-mode');
    if (document.body.classList.contains('light-mode')){
        document.getElementById('modem').title="Switch to dark mode";
        icons.classList.remove('fa-sun');
        icons.classList.add('fa-moon');
    } 
    else{
        document.getElementById('modem').title="Switch to light mode";
        icons.classList.remove('fa-moon');
        icons.classList.add('fa-sun');
        
    }
};


//repeat tooltip

let repeat =document.getElementById('repeat');
let repeatm=document.getElementById('repeatm');
repeat.addEventListener('click',()=>{
    if(repeatm.title=='Repeat Off'){
        repeatm.title='Repeat Single Song'
        repeat.style.color='red'
        
    }
    else if(repeatm.title=='Repeat Single Song'){
        repeatm.title='Repeat All Song'
        repeat.style.color='red'
    }
    else{
        repeatm.title='Repeat Off'
        repeat.style.color='grey'
    }
});


//next song repeat or shuffle


audioElement.addEventListener('ended',()=>{
    Play.classList.remove('fa-pause-circle');
    Play.classList.add('fa-play-circle');
    if(repeatm.title=="Repeat Single Song"){
       audioElement.play();
       Play.classList.remove('fa-play-circle');
       Play.classList.add('fa-pause-circle');
   }
    else{
        songindex+=1
        if(songindex<=songs.length-1){
            audioElement.src=(songs[songindex].filepath);
            audioElement.play();
            util();
        }
        else{
            if(repeatm.title=="Repeat All Song"){
                songindex=0
                audioElement.src=(songs[songindex].filepath);
                audioElement.play();
                util();
            }
        }
    }  
});

//shuffle
document.getElementById('shuffle').addEventListener('click',()=>{
    function shuffles(array) {
        array.sort(() => Math.random() - 0.5);
      }
      shuffles(songs)
});
let queues=document.getElementById('queues');
document.getElementById('queue').addEventListener('click',()=>{
    if(document.getElementById('queuedisplay').innerText=='queue off'){
        queues.style.display="block";
    }
    else{
        queues.style.display="none";
    }
    
})


