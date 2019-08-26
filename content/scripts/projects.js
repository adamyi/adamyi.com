function filterClick() {
  var groupAndType = $(this).attr('data-id');
  if($(this).is(':checked')) {
    $('.' + groupAndType).show();
  } else {
    $('.' + groupAndType).hide();
  }
}

$(document).ready(function() {
  $(".projects-filter-cb").click(filterClick);
});
