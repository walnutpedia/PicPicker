(function(){
  // Close Sidebar if already opened
  if($('#picPickerSideBar').length){
    $('#picPickerSideBar').remove();
    return;
  }

  // generate image wrapper
  var picPickerSideBar = $('<div id="picPickerSideBar"><div class="title">PicPicker</div></div>');
  var newImageElements = $('<div id="picPickerPickedImages"></div>');

  // get all img elements
  var imgs = $('html img');

  // get all elements with background
    

  // generate new image elements
  imgs.length && imgs.forEach(function(img){
    var imageBox = $('<div class="image"></div');
    var newImageElement = $('<img src="' + img.src + '">');
    imageBox.append(newImageElement);
    newImageElements.append(imageBox);
  });


  picPickerSideBar.append(newImageElements);

  $('body').append(picPickerSideBar);

})();
