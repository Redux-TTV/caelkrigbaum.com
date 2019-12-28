function ajaxLoad(path,dest) {
    console.log(path);
    //const p = 'public/'+path;
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if(this.readyState==4 && this.status==200) {
            document.getElementById(dest).innerHTML=this.responseText;
            checkGetScript(path);
        }
    }
    xhttp.open("GET",path,true);
    xhttp.send();
}
function checkGetScript(url) {
    if(!url.startsWith('/')){url = '/'+url;};
    const jsURL = url.replace('public/','public/js/') + url.replace('.php','.js').replace('.html','.js');
    try {
        $.getScript(jsURL)
    } catch (error) {
        console.log(error);
        performAlert(error,true)
    }
}
function performAlert(alert,err) {
    if(err==true){
        document.getElementById('status').className="status-alert";
    } else {
        document.getElementById('status').className="status-info";
    }
    clearTimeout();
    document.getElementById('status').style.display="none";
    document.getElementById('status').innerText=alert;
    $('#status').slideDown(200);
    setTimeout(function() {
        $('#status').slideUp(200);
    }, 6000);
}