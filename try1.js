

function function2(inplabel,elemuwan,parent1){
    var item = document.getElementById(inplabel).value;
    var text = document.createTextNode(item);
    var newItem = document.createElement(elemuwan);
    newItem.appendChild(text);
    document.getElementById(parent1).appendChild(newItem);
    document.getElementById(inplabel).value = " ";
}

function function1(){
    inplabel = "intake";
    elemuwan = "li";
    parent1 = "p1";
    function2(inplabel,elemuwan,parent1);

}