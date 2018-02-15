var apiPrefix = 'http://localhost:7878';

document.querySelector('.main_get_send').addEventListener('click', function (event) {
    event.preventDefault();

    createRequest(apiPrefix + '/api/users/', {}, 'GET', function(response) {
        response = response ? JSON.parse(response) : [];

        console.log('response', response);

        var result = '';

        for (var i = 0; i < response.length; i++) {
            var item = response[i];

            result += '<div class="main_get_list_item">'
                + 'id: ' + item.id
                '<ul type="square">'
                                          +'<li><b>id : </b>'+item.id
                                          +'   <b>Firstname:  </b>' + item.firtName
                                          +'   <b>Lastname:  </b>' + item.lastName
                                          +'   <b>Balance:  </b>' + item.balance
                                          +'</li></ul></div>'
        }

        document.querySelector('.main_get_list').innerHTML = result;
    });
});

document.querySelector('.main_post_form').addEventListener('submit', function (event) {
    event.preventDefault();

    var formData = getFormData(event.target);
    formData.age = Number(formData.age);

    console.log(formData);

    createRequest(apiPrefix + '/api/users/', JSON.stringify(formData), 'POST', function(response) {
        console.log('data', formData, response);
    });
});