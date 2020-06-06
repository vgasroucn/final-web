// var getLocation = function (href) {
//     var l = document.createElement("a");
//     l.href = href;
//     return l;
// };
// function submitDemoImage(src) {
//     var img_path = getLocation(src).pathname;
// }
$(document).ready(
    function () {
        $('input:file').change(
            function () {
                if ($(this).val() != null) {
                    console.log($(this).val());
                        $("#my_image").attr("src", "./images/after.png");
                    // console.log($(this).val())
                    // $('input:file').css('cursor', 'not-allowed');
                    // $('input:submit').attr('disabled', false);
                    // or, as has been pointed out elsewhere:
                    $('input:button').removeAttr('disabled');
                    $('input:button').val('continue');
                    $('input:button').css('cursor', 'pointer');
                }
            }
        );
    });
function toggle() {
    var element = document.getElementById("h");
    if (element.className == "nav-content") {

        element.classList.add("responsive");
    } else {
        element.className = "nav-content";
    }
}
function closae() {
    console.log("here");
    var element = document.getElementById("h");
    if (element.className == "nav-content") {
    } else {
        var ele = document.getElementById("toggle");
        ele.click();
    }
}

function onSubmit(e) {
    $('input:button').val('Wait...')
    $('input:button').attr('disabled', 'disabled');
    $('input:button').css('cursor', 'not-allowed');

    // $('input:button').addAttr('disabled');
    let cap = document.getElementById('caption')
    g = document.createElement('div');
    g.setAttribute("id", "caption");
    var x = document.createElement("P");
    let node = document.createTextNode('Loading...');
    x.classList.add("txt");
    x.appendChild(node);
    g.appendChild(x);

    cap.replaceWith(g);
    // cap.style.visibility = "visible";
    var formData = new FormData();
    formData.append("image", document.querySelector('#file-input').files[0]);
    // console.log(document.querySelector('#image').files[0]);
    fetch('http://max-image-caption-generator.codait-prod-41208c73af8fca213512856c7a09db52-0000.us-east.containers.appdomain.cloud/model/predict', {
        method: 'POST',
        // headers: { 'Content-Type': 'multipart/form-data' },
        body: formData
    })
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            g = document.createElement('div');
            g.setAttribute("id", "caption");
            var y = document.createElement("P");
            y.classList.add("txt");
            let node2 = document.createTextNode(data.predictions[0].caption);
            y.appendChild(node2);
            g.appendChild(y);
            let old2 = document.getElementById('caption');
            old2.replaceWith(g);
            $('input:button').val('Try More')
            $('input:button').removeAttr('disabled');
            $('input:button').css('cursor', 'pointer');

        });
}