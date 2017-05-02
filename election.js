$(document).ready(function() {

  $.ajax({
      url: 'https://bb-election-api.herokuapp.com/',
      method: 'GET',
      dataType: 'json'
    }).done(function(data) {
      for (var i = 0; i < data.candidates.length; i++) {
        candidate = data.candidates[i]
        $('<li>').html(candidate.name + ' has ' + candidate.votes + ' votes.').appendTo('#everyCandidate');
      }
    });
});
