setInterval(() => {
    d = new Date();
    htime = d.getHours();
    mtime = d.getMinutes();
    stime = d.getSeconds();
    hrotation = 30*htime + mtime/2+stime/120;
    mrotation = 6*mtime+stime/10;
    srotation = 6*stime;
 hours.style.transform = `rotate(${hrotation}deg)`;
 minutes.style.transform = `rotate(${mrotation}deg)`; 
 seconds.style.transform = `rotate(${srotation}deg)`;   
},1000);