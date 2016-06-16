function mapPositionOfParty(partyprauService){
    return{
        link:function(scope, element, attributes){
            scope.nameParty=partyprauService;
            scope.initMap=function(){
                var map;
                map = new google.maps.Map(document.getElementById('map'), {
                    mapTypeId: google.maps.MapTypeId.SATELLITE,
                    center: {lat: parseFloat(partyprauService.selectParty.lon), lng: parseFloat(partyprauService.selectParty.lat)},
                    zoom: 20
                });
            };
            scope.initMap();
        },
        templateUrl: '/app/directives/mapPositionOfParty/mapPositionOfParty.html',
        
    };
}