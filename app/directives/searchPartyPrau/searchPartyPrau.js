function searchPartyPrau(partyprauService){
    return{
        link: function (scope, element, attributes){
            scope.partyprauService=partyprauService;
            scope.selectParty=function(){
                var nameSelectedParty=scope.selectedName.name;
                console.log("[SearchPartyprau] The user select this party:"+scope.selectedName.name);
                partyprauService.selectPartyPrau(nameSelectedParty);
                
                gMap = new google.maps.Map(document.getElementById('map')); 
                gMap.setZoom(20);      // This will trigger a zoom_changed on the map
                gMap.setCenter(new google.maps.LatLng(parseFloat(partyprauService.selectParty.lon),parseFloat(partyprauService.selectParty.lat)));
                gMap.setMapTypeId(google.maps.MapTypeId.SATELLITE);

            }
        },
        templateUrl: '/app/directives/searchPartyPrau/searchPartyPrau.html'
    };
}