var partyprau=(function partyPrau(){
    
    this.data=[
        {id:0,name:'Mi cumpleaños',dateCelebration:'Thu Oct 13 2016 15:00:00 GMT',lon:'43.588121',lat:'-5.770440'},
        {id:1,name:'Rally de la sidra',dateCelebration:'Wed Aug 03 2016 18:00:00 GMT',lon:'43.584968',lat:'-5.772006'},
        {id:2,name:'Cristo de Candás',dateCelebration:'Sat Sep 17 2016 23:00:00 GMT',lon:'43.588459',lat:'-5.767590'},
        {id:3,name:'Carmin de la pola',dateCelebration:'Mon Jul 18 2016 12:00:00 GMT',lon:'43.391693',lat:'-5.647475'},
    ];
    this.selectParty={id:0,name:'Mi cumpleaños',dateCelebration:'Thu Oct 13 2016 15:00:00 GMT',lon:'43.588121',lat:'-5.770440'};
    
    this.nearParty=function(){
        refreshData();
        var party={};
        for (var fiesta in this.data){
            var DateNear=new Date(party.dateCelebration);
            var DateTmp=new Date(fiesta.dateCelebration);
            var DateToday=new Date();
            if(DateTmp.getTime()>DateToday.getTime()){
                //is that dateTmp is future
                if(DateTmp.getTime()<DateNear.getTime()){
                    party=fiesta;
                }
            }
        }
        return party;
    }
    this.selectPartyPrau=function(nameParty){
        refreshData();
        var party={};
        for (var i=0;i<this.data.length;i++){
            var fiesta=this.data[i];
            if(fiesta.name==nameParty){
                party=fiesta;
                this.selectParty=party;
                console.log("[PartyPrauService] The party selected was change for"+nameParty+","+party.id);
            }
        }
        return party;
    }
    this.getTimeToParty=function(){
        var dateNow=new Date();
        var dateParty=new Date(this.selectParty.dateCelebration);
        var result=dateParty.getTime()-dateNow.getTime();
        return result;
    }
    function refreshData(){
        var dateToday=new Date();
        for(var fiesta in this.data){
            var dateParty=new Date(fiesta.dateCelebration);
            if(dateToday.getTime()>dateParty.getTime()){
                //Modify date
                var newDate=new Date((dateParty.getYear()+(dateToday.getYear()-dateParty.getYear())),dateParty.getMonth(),dateParty.getDay());
                fiesta.dateCelebration=newDate.toGMTString();
            }
        }
    }
});