$(document).ready(function () {
  let amenity_check = {};
  $(document).on('change', "input[type='checkbox']", function () {
    if (this.checked) {
      amenity_check[$(this).data('id')] = $(this).data('name');
    } else {
      delete amenity_check[$(this).data('id')];
    }
    let lst = Object.values(amenity_check);
    if (lst.length > 0) {
      $('div.amenities > h4').text(Object.values(amenity_check).join(', '));
    } else {
      $('div.amenities > h4').html('&nbsp;');
    }
  });
});