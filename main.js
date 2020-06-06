function onSubmit() {
    // $("#show-grad-cam-result").hide();
    var question = $("#question").val();
    // var vqa_model = 'pythia';
    // var l = $("#inputImageAfterUpload")[0].src;
    // var img_path = getLocation(l).pathname;

    $.ajax({
      type: 'POST', // define the type of HTTP verb we want to use (POST for our form)
      url: '/', // the url where we want to POST
      data: {
        'img_path': '/media/test2014/COCO_test2014_000000379621.jpg',
        'csrfmiddlewaretoken': 'ubEbVWHOixrtQ30Cw9IX8NJMeAN6xv3PzbbNAup0YZG05TNP8ujdcrKEa3oPrIqv',
        'question': question,
        'vqa_model': 'pythia',
        'socketid': '62e8228f-19a4-40c0-8f6a-7a0dfd12a645',
        // 'job_id': job_id
      } // our data object
    }).done(function (response) {
      console.log("Ajax call completed successfully.")
    });
  }