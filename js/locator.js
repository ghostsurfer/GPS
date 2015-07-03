            var map;
            function initialize() {
                map = new google.maps.Map(document.getElementById('map-canvas'), {
                    zoom: 3,
                    center: {lat: 0, lng: 0}
                });
            }
                        
            google.maps.event.addDomListener(window, 'load', initialize);
                            
            document.querySelector('#btn_zoom').addEventListener('click', function(){
                                
                navigator.geolocation.getCurrentPosition(function(position) {
                                    
                    var myLatlng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
                    var marker = new google.maps.Marker({
                        position: myLatlng,
                        map: map,
                        title: 'Sie sind Hier!!'
                    });
                    map.setCenter(myLatlng);
                    map. setZoom(4);
                    setTimeout(function(){
                        map.setZoom(6);
                        setTimeout(function(){
                            map.setZoom(8)
                            setTimeout(function(){
                                map.setZoom(10)
                                setTimeout(function(){
                                    map.setZoom(12)
                                    setTimeout(function(){
                                        map.setZoom(14)
                                        setTimeout(function(){
                                            map.setZoom(16)
                                        },500);
                                    },500);
                                },500);  
                            },500);  
                        },500);                 
                    },500);                
                });
            });