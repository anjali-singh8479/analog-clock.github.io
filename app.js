setInterval(()=>{
    let date=new Date();
     hrs=date.getHours();
 m=date.getMinutes();
 s=date.getSeconds();
rh= 30*hrs+ m/2;
 rmin=6*m;
 rsec=6*s;
hours.style.transform=`rotate(${rh}deg)`;
min.style.transform=`rotate(${rmin}deg)`;
sec.style.transform=`rotate(${rsec}deg)`;
},1000)