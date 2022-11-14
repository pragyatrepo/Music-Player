console.log("Welcome to Music player");
let songindex=1;
let src=`recent${songindex}.jpg`;
let audioElement = new Audio('songs/1.mp3');
let songs=[
     {songname:"kana yari" ,filepath:"songs/1.mp3",coverpath:"covers/cover1.jpg"},
     {songname:"pata laguga" ,filepath:"songs/2.mp3",coverpath:"covers/cover2.jpg"},
     {songname:"har har sambhu" ,filepath:"songs/3.mp3",coverpath:"covers/cover3.jpg"}
    ];

//play pause button
let Play = document.getElementById('masterPlay');
let mastersongname=document.getElementById('mastersongname');
Play.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        Play.classList.remove('fa-play-circle');
        Play.classList.add('fa-pause-circle');
        mastersongname.innerText="Song name- "+songs[songindex-1].songname;
        document.getElementById('playm').innerText='Pause'
    }
    else{
        audioElement.pause();
        Play.classList.remove('fa-pause-circle');
        Play.classList.add('fa-play-circle');
        document.getElementById('playm').innerText='Play'
    }
})

//updatepprogressbar
let myprogressbar = document.getElementById('myprogressbar');
audioElement.addEventListener('timeupdate', ()=>{
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    myprogressbar.value=progress;
    //displays time in bottom
    let time=document.getElementsByClassName('time');
    time[0].innerText=((Math.floor(audioElement.currentTime/60))+":"+Math.floor(audioElement.currentTime%60))+'/'+((Math.floor(audioElement.duration/60))+":"+Math.floor(audioElement.duration%60));
})
myprogressbar.addEventListener('change',()=>{
    audioElement.currentTime=myprogressbar.value*audioElement.duration/100;
})



//next button

document.getElementById('next').addEventListener('click',()=>{
    if (songindex>=3){
        songindex=1;
    }
    else{
        songindex+=1;
    }
    audioElement.src = `songs/${songindex}.mp3`;
    audioElement.currentTime=0;
    audioElement.play();
    //play pause button change
    Play.classList.remove('fa-play-circle');
    Play.classList.add('fa-pause-circle');
    //displays songname in bottom
    mastersongname.innerText="Song name- "+songs[songindex-1].songname;
    src=`recent${songindex}.jpg`;
    
})


//previous button

document.getElementById('previous').addEventListener('click',()=>{
    if (songindex<=1){
        songindex=3;
    }
    else{
        songindex-=1;
    }
    audioElement.src = `songs/${songindex}.mp3`;
    audioElement.currentTime=0;
    audioElement.play();
    //play pause button change
    Play.classList.remove('fa-play-circle');
    Play.classList.add('fa-pause-circle');
    //displays songname in bottom
    mastersongname.innerText="Song name- " + songs[songindex-1].songname;
    src=`recent${songindex}.jpg`;
    
})
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
    let icons=document.getElementsByClassName('mode');
    document.body.classList.toggle('light-mode');
    if (document.body.classList.contains('light-mode')){
        document.getElementById('modetip').innerText="Switch tod dark mode";
        icons.classList.remove('fa-solid fa-sun');
        icons.classList.add('fa-solid fa-moon');
        
        
    } 
    else{
        document.getElementById('modetip').innerText="Switch to light mode";
        icons.classList.remove('fa-solid fa-moon');
        icons.classList.add('fa-solid fa-sun');
        
    }
};
//repeat
let repeat =document.getElementById('repeat');
repeat.addEventListener('click',()=>{
    if(repeatm.innerText=='Repeat Off'){
        repeatm.innerText='Repeat Single Song'
        repeat.style.color='red'
        
    }
    else if(repeatm.innerText=='Repeat Single Song'){
        repeatm.innerText='Repeat All Song'
        repeat.style.color='red'
    }
    else{
        repeatm.innerText='Repeat Off'
        repeat.style.color='grey'
    }
});

audioElement.addEventListener('ended',()=>{
         if(repeatm.innerText=='Repeat Single Song'){
          audioElement.currentTime=0
            audioElement.play();
        }}

)

//cover image
let image=document.getElementById('cover');
image.src=src;

// console.log(songitems.length);
// Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
    
    //     element.addEventListener('click',(e)=>{
        //         if( audioElement.paused ){
            //             makeAllPlays();
            
            //             songindex=parseInt(e.target.id);
            //             e.target.classList.remove('fa-play-circle');
            //             e.target.classList.add('fa-pause-circle');
            //             audioElement.src = `songs/${songindex}.mp3`;
            //             audioElement.play();
            //             Play.classList.remove('fa-play-circle');
            //             Play.classList.add('fa-pause-circle');
            //             gif.style.opacity=1;
            //             mastersongname.innerText="Song name- "+songs[songindex-1].songname
            //             mastersongname.style.opacity=1;
            //         }
            //         else {
                //             songindex=parseInt(e.target.id);
                //             audioElement.src = `songs/${songindex}.mp3`;
                //             if(audioElement.paused){
                    //                 audioElement.play();
                    //             }
                    //             else{
                        //                 audioElement.pause();
                        //             }
            //         }
            //     })
            // })
            // songitems.forEach((element,i) => {
                //     console.log(element,i);
                //     element.getElementsByTagName('img')[0].src=songs[i].coverpath;
                //     element.getElementsByClassName('songname')[0].innerText=songs[i].songname; 
                //     element.getElementsByClassName('dur')[0].innerText=audioElement.duration
                
                // })
                // const makeAllPlays= ()=>{
                    //     Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
                        //         element.classList.remove('fa-pause-circle');
                        //         element.classList.add('fa-play-circle');
                        //     })
                        // let songitems=Array.from(document.getElementsByClassName('songitem'));
                // }