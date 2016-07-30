 $(function() {
  /*
    To have multiple slideshows on the same page
    they just need to have separate IDs
  */
  $('#slides').slidesjs({
    
    navigation: false,
    start: 3,
    play: {
      auto: false
    }
  });
});
