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
  var imgs = getAllImgs();

  // get all elements with background
  var backgrounds = getAllBackgroundUrls();

  //generate new image elements
  imgs.length && imgs.forEach(function(img){
    var imageBox = $('<div class="image"></div');
    var newImageElement = $('<img src="' + img.src + '">');
    imageBox.append(newImageElement);
    newImageElements.append(imageBox);
  });

  backgrounds.length && backgrounds.forEach(function(src){
    var imageBox = $('<div class="image"></div');
    var newImageElement = $('<img src="' + src + '">');
    imageBox.append(newImageElement);
    newImageElements.append(imageBox);
  })


  picPickerSideBar.append(newImageElements);

  $('body').append(picPickerSideBar);

})();

function getAllImgs(){
  var imgs = $('html img');
  return imgs;
}

function getAllBackgroundUrls(){
  var elements = $('*'),
      length = elements.length,
      backgroundUrlList = [],
      regex = /"(.*?)"/g,
      backgroundUrlList = [];
  
  for(var i = 0; i < length; i++){
    var bgValue = elements.eq(i).css('background-image');
    if(bgValue){
      while(matches = regex.exec(bgValue)){
        backgroundUrlList.push(matches[1]);
      }
    }
  }
  return backgroundUrlList;
}