//     Zepto.js
//     (c) 2010, 2011 Thomas Fuchs
//     Zepto.js may be freely distributed under the MIT license.

(function ($) {

  // ### $.fn.serializeArray
  //
  // Encode a set of form elements as an array of
  // names and values
  //
  // *Example:*
  //
  //     $('#login_form').serializeArray()
  //
  //  returns
  //
  //     [
  //         {
  //             name: 'email',
  //             value: 'koss@nocorp.me'
  //         },
  //         {
  //             name: 'password',
  //             value: '123456'
  //         }
  //     ]
  //
  $.fn.serializeArray = function () {
    var result = [];
    $( Array.prototype.slice.call(this.get(0).elements) ).each(function () {
      if ( $(this).attr('type') !== 'radio' || $(this).is(':checked') ) {
        result.push({
          name: $(this).attr('name'),
          value: $(this).val()
        });
      }
    });
    return result;
  };

})(Zepto);
