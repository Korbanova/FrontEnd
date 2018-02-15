
function getFormData(form) {
    var elements = form.querySelectorAll('input, textarea, select');
    var data = {};
    for (var i = 0; i < elements.length; i++) {
        var element = elements[i];

        data[element.name] = element.value;
    }

    return data;
}