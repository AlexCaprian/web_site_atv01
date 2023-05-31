let count_clt = 1;

document.getElementById("cltradio1").checked = true;

setInterval(  function(){
    nextImageclt();
}, 4000)

function nextImageclt(){
    count_clt++;
    if(count_clt>5){
        count_clt = 1;
    }
    document.getElementById("cltradio"+count_clt).checked = true;
    
}