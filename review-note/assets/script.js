function AddTopic(){
    var inputcontent = document.querySelector("#content");
    var content = inputcontent.value; 
    
    var inputnoteHits = document.querySelector("#noteHits");
    var noteHits = inputnoteHits.value;

    var inputnoteAll = document.querySelector("#noteAll");
    var noteAll = inputnoteAll.value;
    var divFather= ('#content-note')

    
    var porcentAll = noteHits/noteAll;
    var porcentHits = (porcentAll*100).toFixed(2);

    if(porcentHits < 70){
        var abstract = "<p>" + "Conteúdo: " + content + " " + "Nota: " + porcentHits + "% - Revisar" + "</p>";
        document.getElementById("conteúdo-note").innerHTML = abstract; 
    }
    else if( noteAll/noteHits == noteAll/(noteAll/2) ){
        var abstract = "<p>" + "Conteúdo: " + content + " " + "Nota: "  + porcentHits +"%" + "</p>";
        document.getElementById("conteúdo-note").innerHTML = abstract; 
    }
    else {
        var abstract = "<p>" + "Conteúdo: " + content + " " + "Nota: "  + porcentHits +"%" + "</p>";
        document.getElementById("conteúdo-note").innerHTML = abstract; 
    }
    
    clear()
}

function clear(){
    document.getElementById('content').value='';
    document.getElementById('noteHits').value='';
    document.getElementById('noteAll').value='';
}