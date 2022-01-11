

$(document).ready(function(){
    $('#get-data').click(function(){
        $.getJSON('https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php')
            .done(function(data){
                let imie = $('<p></p>').text(`Imie: ${data.imie}`);
                let nazwisko = $('<p></p>').text(`Nazwisko: ${data.nazwisko}`);
                let zawod = $('<p></p>').text(`Zawod: ${data.zawod}`);
                let firma = $('<p></p>').text(`Firma: ${data.firma}`);
                let hr = $('<hr/>')
                let div = $('#dane-programisty');

                div.append(imie);
                div.append(nazwisko);
                div.append(zawod);
                div.append(firma);
                div.append(hr);
            })

        .fail(function(error){
            console.error(error);
        });
    });
});