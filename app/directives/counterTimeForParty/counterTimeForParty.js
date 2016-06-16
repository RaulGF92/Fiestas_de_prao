function counterTimeForParty(partyprauService, $interval){
    return{
        link:function(scope, element, attributes){
            
            var countTime=function(scope){
                //funcion periodica a llamar
                scope.countSet={monthElapsed:0,daysElapsed:0,hoursElapsed:0,minutesElapsed:0,secondsElapsed:0,miliseconds:0};
                
                var secState=partyprauService.getTimeToParty()/1000;
                
                var tmpState={monthElapsed:0,daysElapsed:0,hoursElapsed:0,minutesElapsed:0,secondsElapsed: 0};
              

                secState=(((secState/60)/60)/24); //dias
                tmpState.daysElapsed=secState-(secState%1);
                secState=secState%1; 
                  
                secState=secState*24; //horas
                tmpState.hoursElapsed=secState-(secState%1);
                secState=secState%1; 
                  
                secState=secState*60; //minutos
                tmpState.minutesElapsed=secState-(secState%1);
                secState=secState%1; 
                  
                secState=secState*60; //segundos
                tmpState.secondsElapsed=secState-(secState%1);
                secState=secState%1; 
                
                scope.countSet=tmpState;
            };
            
            var shareParty=function(scope){
                if(true)
                    return;
                var title='Fiestas de prau. '+partyprauService.selectParty.name;
                var countSet=countTime(scope);
                var description='Quedan '+countSet.daysElapsed+' dias '+countSet.hoursElapsed+' horas '+countSet.minutesElapsed+' minutos '+countSet.secondsElapsed+' segundos, Te vas a peder esta fiesta???' 
            
                console.log(title);
                console.log(description);
                
                $("meta[property='og:title']").attr("content", title);
                $("meta[property='og:description']").attr("content", description);
                
                
            };
            
            scope.partyprauService=partyprauService;
            scope.shareParty=shareParty(scope);
            
            $interval(function() {
                countTime(scope);
            }, 1000);
            
        },
        templateUrl: '/app/directives/counterTimeForParty/counterTimeForParty.html'
    };
}

