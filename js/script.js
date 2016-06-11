$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

$( document ).ready(function() {
    //store the quotations in arrays
quotes = [];
authors = [];
quotes[0] = "All you need is love. But a little chocolate now and then doesn't hurt.";
authors[0] = "Charles Schulz";
quotes[1] = "If more of us valued food and cheer and song above hoarded gold, it would be a merrier world.";
authors[1] = "J.R.R Tolkien";
quotes[2] = "One cannot think well, love well, sleep well, if one has not dined well.";
authors[2] = " Virginia Woolf, A Room of One's Own";
quotes[3] = "Ask not what you can do for your country. Ask what’s for lunch.";
authors[3] = "Orson Welles";
quotes[4] = "After a good dinner one can forgive anybody, even one's own relations.";
authors[4] = "Oscar Wilde";
quotes[5] = "Humor keeps us alive. Humor and food. Don't forget food. You can go a week without laughing.";
authors[5] = "Joss Whedon";

//calculate a random index number
index = Math.floor(Math.random() * quotes.length);

//display the quotation
$("#quotes").append("<DL>\n");
$("#quotes").append("<DT>" + "\"" + quotes[index] + "\"</DT>\n");
$("#quotes").append("<DD>" + "-- " + authors[index] + "</DT>\n");
$("#quotes").append("</DL>\n");

//done
});
