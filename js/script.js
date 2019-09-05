let today = new Date();
document.getElementsByClassName("date")[0].innerHTML = today;

let sample_input = `6 (5 ounce) salmon fillets
4 cloves garlic, minced
1 tablespoon white wine
1 tablespoon honey
1/3 cup balsamic vinegar
4 teaspoons Dijon mustard
salt and pepper to taste
1 tablespoon chopped fresh oregano`

let sample_output = `12 (10 ounce) salmon fillets
8 cloves garlic, minced
2 tablespoon white wine
2 tablespoon honey
2/3 cup balsamic vinegar
8 teaspoons Dijon mustard
salt and pepper to taste
2 tablespoon chopped fresh oregano`

document.getElementById("input-textarea").placeholder = sample_input;
document.getElementById("output-textarea").placeholder = sample_output;

$("button").click(function () {
    let text = $("#input-textarea").val();
    $("#output-textarea").val(text);
});