var apiPrefix = 'http://172.16.16.167:7878';

function openTab(evt, tabName) {
    var i, tabcontent, tablink;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablink = document.getElementsByClassName("tablink");
    for (i = 0; i < tablink.length; i++) {
        tablink[i].className = tablink[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

document.getElementById("defaultOpen").click();


window.onload = function() {

document.querySelector('.pagename').addEventListener('', function (event) {
    event.preventDefault();

    createRequest(apiPrefix + '/api/users/id/', {}, 'GET', function(response) {
        response = response ? JSON.parse(response) : [];

        console.log('response', response);

        var result = '';

        for (var i = 0; i < response.length; i++) {
            var item = response[i];

            result += '<div class="main_get_list_item">'
                
                + '  |  name ' + item.name
                + '  |  age ' + item.age

                + '</div>'
        }

        document.querySelector('.main_get_list__orders').innerHTML = result;
    });
});


}

document.querySelector('.main_get_send').addEventListener('click', function (event) {
    event.preventDefault();

    createRequest(apiPrefix + '/api/users/', {}, 'GET', function(response) {
        response = response ? JSON.parse(response) : [];

        console.log('response', response);

        var result = '';

        for (var i = 0; i < response.length; i++) {
            var item = response[i];

            result += '<div class="main_get_list_item">'

                +'<ul type="square">'
                                          +'<li><b>id : </b>'+item.id
                                          +'   <b>Firstname:  </b>' + item.firstName
                                          +'   <b>Lastname:  </b>' + item.lastName
                                          +'   <b>Balance:  </b>' + item.balance
                                          +'</li></ul></div>'
        }

        document.querySelector('.main_get_list').innerHTML = result;
    });
});

document.querySelector('.main_get_send2').addEventListener('click', function (event) {
    event.preventDefault();

    createRequest(apiPrefix + '/api/user/operations', {}, 'GET', function(response) {
        response = response ? JSON.parse(response) : [];

        console.log('response', response);

        var result = '';

        for (var i = 0; i < response.length; i++) {
            var item = response[i];

            result += '<div class="main_get_list_item">'

                +'<ul type="square">'
                                          +'<li><b>id : </b>'+item.id
                                          +'   <b>value:  </b>' + item.operationList['1'].value
                                          +'   <b>Type:  </b>' + item.operationList['2'].operType

                                          +'</li></ul></div>'
        }

        document.querySelector('.main_get_list2').innerHTML = result;
    });
});

document.querySelector('.main_get_send1').addEventListener('click', function (event) {
    event.preventDefault();

    createRequest(apiPrefix + '/api/user/invests', {}, 'GET', function(response) {
        response = response ? JSON.parse(response) : [];

        console.log('response', response);

        var result = '';

        for (var i = 0; i < response.length; i++) {
            var item = response[i];

            result += '<div class="main_get_list_item">'

                +'<ul type="square">'
                                          +'<li><b>id : </b>'+item.id
                                          +'   <b>value:  </b>' + item.investList['1'].investBalance
                                          +'   <b>Type:  </b>' + item.investList['2'].percent

                                          +'</li></ul></div>'
        }

        document.querySelector('.main_get_list1').innerHTML = result;
    });
});

/*
function requestDebts() {


    createRequest(apiPrefix + '/api/users/debts/', {}, 'GET', function(response) {
        response = response ? JSON.parse(response) : [];

        console.log('responseDebtOrders', response);

        var result = '';

        for (var i = 0; i < response.length; i++) {
            var item = response[i];

            result += '<div class="main_get_list_item">'
                + 'id: ' + item.id
                + '  |  name ' + item.name
                + '  |  age ' + item.balance

                + '</div>'
        }
        document.querySelector('.main_get_list__orders').innerHTML = result;

})
}
*/

// ЗАПРОС СПИСКА ЮЗЕРОВ


// ЗАПРОС СПИСКА ИНВЕСТИЦИЙ
/*
document.querySelector('.get_info_people').addEventListener('click', function (event) {
    event.preventDefault();

    createRequest(apiPrefix + '/api/users/invests/', {}, 'GET', function(response) {
        response = response ? JSON.parse(response) : [];

        console.log('response', response);

        var result = '';

        for (var i = 0; i < response.length; i++) {
            var item = response[i];

            result += '<div class="main_get_list_item">'
                + 'id: ' + item.id
                + '  |  name ' + item.name
                + '  |  balance ' + item.balance

                + '</div>'
        }

        document.querySelector('.main_get_list__orders').innerHTML = result;
    });
});
*//*
// ЗАПРОС СПИСКА ОПЕРАЦИЙ 
document.querySelector('.get_info_people').addEventListener('click', function (event) {
    event.preventDefault();

    createRequest(apiPrefix + '/api/users/operations/', {}, 'GET', function(response) {
        response = response ? JSON.parse(response) : [];

        console.log('response', response);

        var result = '';

        for (var i = 0; i < response.length; i++) {
            var item = response[i];

            result += '<div class="main_get_list_item">'
                + 'id: ' + item.id
                + '  |  name ' + item.name
                + '  |  balance ' + item.balance

                + '</div>'
        }

        document.querySelector('.main_get_list__orders').innerHTML = result;
    });
});

*/
// СОЗДАТЬ ЗАЯВКУ ЗАЕМЩИКА

document.querySelector('#createOrder').addEventListener('submit', function (event) {
    event.preventDefault();

    var formData = getFormData(event.target);
    formData.value = Number(formData.value);
    formData.days = Number(formData.days);
   

    console.log(formData);

    createRequest(apiPrefix + '/api/debt_order/create/', JSON.stringify(formData), 'POST', function(response) {
response = response && JSON.parse(response)

        console.log('data', formData, response);
        if (response && response.status === 0){
            console.log(111111);
            document.querySelector('.percent').innerHTML = response.percent*100;
            document.querySelector('.returnDay').innerHTML = response.date;
            document.querySelector('.finalSum').innerHTML = response.final;
        } 

        
    })
});


/*

// ЗАЯВКА ЗАЕМЩИКА ПРИНЯТА
document.querySelector('.accept_form').addEventListener('submit', function (event) {
    event.preventDefault();

    var formData = getFormData(event.target);
    formData.value = Number(formData.value);

    console.log(formData);

    createRequest(apiPrefix + '/api/debt_order/accept/' + formData.value, {}, 'POST', function(response) {
        console.log('data', formData, response);
    });
});





// ЗАЯВКА ЗАЕМЩИКА ОТМЕНЕНА
document.querySelector('.accept_form').addEventListener('submit', function (event) {
    event.preventDefault();

    var formData = getFormData(event.target);
    formData.value = Number(formData.value);

    console.log(formData);

    createRequest(apiPrefix + '/api/debt_order/decline/' + formData.value, {}, 'POST', function(response) {
        console.log('data', formData, response);
    });
});


// УДАЛИТЬ ПАСПОРТНЫЕ ДАННЫЕ
document.querySelector('.accept_form').addEventListener('submit', function (event) {
    event.preventDefault();

    var formData = getFormData(event.target);
    formData.value = Number(formData.value);
    
    console.log(formData);

    createRequest(apiPrefix + '/api/users/id/' + formData.value, {}, 'DELETE', function(response) {
        console.log('data', formData, response);
    });
});



*/

