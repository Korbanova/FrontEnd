
document.querySelector('.main_post_form').addEventListener('submit', function (event) {
    event.preventDefault();
    var formData = getFormData(event.target);
    console.log(formData);
    var names=formData.nam;
    var target=formData.age;
     
console.log(g);console.log(d);
 
var str = names.replace(/\./g,"");
        str = str.replace(/\,/g,"");
    var result = '';

    var arr = str.split(' ');
    for (var i = 0; i < arr.length; i++) {

        var pos = 0;
        var n = 0;
        var foundPos = 0;
        var flag = new Boolean(true);
        while (flag) {
             foundPos = arr[i].indexOf(target, pos);
             if(foundPos != -1){
                n++;
             }else{
                flag = false;
             }
            pos = foundPos + 1; // продолжить поиск со следующей
        }
        if(n != 0){result += '<div class="main_get_list_item">'+ arr[i]+' - '+n
        }
    }
    document.querySelector('.main_get_list').innerHTML = result;
});

