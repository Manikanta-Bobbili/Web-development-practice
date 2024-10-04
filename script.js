  
function submit(){
    var b=document.getElementById('inp').value;
    if(b==='Teja')
{
    document.getElementById('image1').src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2kkHLWJ_MDyNJg6iVcdPmOmcT30Hq11uFYA&s';
}
else if(b==='Mani')
{
        document.getElementById('image1').src='https://m.media-amazon.com/images/I/816TZ6fyV+L._AC_UF1000,1000_QL80_.jpg';

    }

    document.getElementById('text').innerHTML='Hi, '+b;
    document.getElementById('text').style.color='red'
    document.getElementById('user').style.display='none'
    document.getElementById('profile').style.display='block'
    // document.getElementById('user').style.visibility='hidden'
    // document.getElementById('profile').style.visibility='visible'

    
}

function removeDel(){
    document.getElementById('text').style.display=none;
}