import $ from 'jquery'

module.exports = {
  $('p').each(function() {
      var innerHTML = $(this).html();
      var words = innerHTML.trim().split(' ');
      if(words.length > 2) {
          var potentialWidow = words[words.length-1];
          var newWords = words.slice(0,-1).join(' ');
          $(this).html(newWords+'&nbsp;'+potentialWidow);
      }
  })
}


// import * from 'scripts/fixWidows'
