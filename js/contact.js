function initialize() {
    var myLatlng = new google.maps.LatLng(32.66703444294909, 51.6888143746426);
    var mapOptions = {
      zoom: 15,
      center: myLatlng,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
     
    var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
     
    var contentString = '<div style="direction: rtl; text-align: right;width:140px;height:50px;">' +
                                '<h4 style="font-size:2rem;">قم . پردیسان . خیابان البرز</h4>' +
                                 
                                 '</div>';
     
    var infowindow = new google.maps.InfoWindow({
      content: contentString
    });
     
    var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      title: 'Takhte Jamshid'
    });
     
    infowindow.open(map, marker);
    google.maps.event.addListener(marker, 'click', function() {
      infowindow.open(map, marker);
    });
  }
  const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
hamburger.classList.toggle("active");
navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((link) =>
link.addEventListener("click", () => {
hamburger.classList.remove("active");
navMenu.classList.remove("active");
})
);