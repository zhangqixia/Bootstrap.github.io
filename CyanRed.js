window.onload = function(){

        onload1();

    function onload1(){
        var inp = document.getElementById("inp");
        var btn = document.getElementById("btn");
        btn.onclick = function(){
            Search();
        }
        document.onkeydown = function(){
            if(event.keyCode == 13){
                Search();
            }
        }
        function Search(){
            var url = 'https://www.baidu.com/s?wd='+ inp.value;
            window.open(url);
        }
    }

}