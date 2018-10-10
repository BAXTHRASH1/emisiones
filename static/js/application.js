
$(document).ready(function(){
    var socket = io.connect('http://' + document.domain + ':' + location.port + '/test');
    var numbers_received = [];
    var numbers_received2 = [];
    var numbers_received3 = [];
    var patentes= []


    //receive details from server
    socket.on('NumeroAuto', function(msg) {
        //maintain a list of ten numbers
        if (numbers_received.length >= 1){
            numbers_received.shift()
            numbers_received2.shift()
            numbers_received3.shift()
        }            
        numbers_received.push(msg.numberAuto1);
        numbers_received2.push(msg.numberAuto2);
        numbers_received3.push(msg.numberAuto3);
       
            auto1 ='-' + numbers_received.toString() + '%';
            auto2 ='-' + numbers_received2.toString() + '%';
            auto3 ='-' + numbers_received3.toString() + '%';
           // asd ='<p>' + numbers_received[i].toString() + '</p>';
       //colorear numeros
        if (numbers_received>=66  ){
             color= {'color': 'red'}
            }
        else if (numbers_received>=33) {
            color= {'color': 'orange'}
        }
        else {
            color= {'color': 'yellow'}
        }


        //rellena numeros CO
         if (numbers_received2>=66  ){
             colorCO= {'color': 'red'}
            }
        else if (numbers_received2>=33) {
            colorCO= {'color': 'orange'}
        }
        else {
            colorCO= {'color': 'yellow'}
        }
         if (numbers_received3>=66  ){
             colorCO2= {'color': 'red'}
            }
        else if (numbers_received3>=33) {
            colorCO2= {'color': 'orange'}
        }
        else {
            colorCO2= {'color': 'yellow'}
        }

        $('#log').html(auto1).css(color);
        $('#log2').html(auto2).css(colorCO);
        $('#log3').html(auto3).css(colorCO2);
    });
     socket.on('NumeroCamion', function(msg) {
       
        //maintain a list of ten numbers
        if (numbers_received.length >= 1){
            numbers_received.shift()
            numbers_received2.shift()
            numbers_received3.shift()
        }            
        numbers_received.push(msg.numberCamion1);
        numbers_received2.push(msg.numberCamion2);
        numbers_received3.push(msg.numberCamion3);
       
        
            camion1 ='-' + numbers_received.toString() + '%';
            camion2 ='-' + numbers_received2.toString() + '%';
            camion3 ='-' + numbers_received3.toString() + '%';
           // asd ='<p>' + numbers_received[i].toString() + '</p>';

           //colorear numeros
        if (numbers_received>=66  ){
             color= {'color': 'red'}
            }
        else if (numbers_received>=33) {
            color= {'color': 'orange'}
        }
        else {
            color= {'color': 'yellow'}
        }


        //rellena numeros CO
         if (numbers_received2>=66  ){
             colorCO= {'color': 'red'}
            }
        else if (numbers_received2>=33) {
            colorCO= {'color': 'orange'}
        }
        else {
            colorCO= {'color': 'yellow'}
        }
         if (numbers_received3>=66  ){
             colorCO2= {'color': 'red'}
            }
        else if (numbers_received3>=33) {
            colorCO2= {'color': 'orange'}
        }
        else {
            colorCO2= {'color': 'yellow'}
        }
        $('#camion1').html(camion1).css(color);
        $('#camion2').html(camion2).css(colorCO);
        $('#camion3').html(camion3).css(colorCO2);
    });
     socket.on('NumeroCamioneta', function(msg) {
       
        //maintain a list of ten numbers
        if (numbers_received.length >= 1){
            numbers_received.shift()
            numbers_received2.shift()
            numbers_received3.shift()
        }            
        numbers_received.push(msg.numberCamioneta1);
        numbers_received2.push(msg.numberCamioneta2);
        numbers_received3.push(msg.numberCamioneta3);

            camioneta1 ='-' + numbers_received.toString() + '%';
            camioneta2 ='-' + numbers_received2.toString() + '%';
            camioneta3 ='-' + numbers_received3.toString() + '%';
           // asd ='<p>' + numbers_received[i].toString() + '</p>';

           //colorear numeros
        if (numbers_received>=66  ){
             color= {'color': 'red'}
            }
        else if (numbers_received>=33) {
            color= {'color': 'orange'}
        }
        else {
            color= {'color': 'yellow'}
        }

        //rellena numeros CO
         if (numbers_received2>=66  ){
             colorCO= {'color': 'red'}
            }
        else if (numbers_received2>=33) {
            colorCO= {'color': 'orange'}
        }
        else {
            colorCO= {'color': 'yellow'}
        }
         if (numbers_received3>=66  ){
             colorCO2= {'color': 'red'}
            }
        else if (numbers_received3>=33) {
            colorCO2= {'color': 'orange'}
        }
        else {
            colorCO2= {'color': 'yellow'}
        }
      
        $('#camioneta1').html(camioneta1).css(color)
        $('#camioneta2').html(camioneta2).css(colorCO)
        $('#camioneta3').html(camioneta3).css(colorCO2)
    });
     socket.on('NumeroBus', function(msg) {
       
        //maintain a list of ten numbers
        if (numbers_received.length >= 1){
            numbers_received.shift()
            numbers_received2.shift()
             numbers_received3.shift()

            }            
        numbers_received.push(msg.numberBus1);
        numbers_received2.push(msg.numberBus2);
        numbers_received3.push(msg.numberBus3);


            bus1 ='-' + numbers_received.toString() + '%';
            bus2 ='-' + numbers_received2.toString() + '%';
            bus3 ='-' + numbers_received3.toString() + '%';
           // asd ='<p>' + numbers_received[i].toString() + '</p>';
           //colorear numeros
        if (numbers_received>=66  ){
             color= {'color': 'red'}
            }
        else if (numbers_received>=33) {
            color= {'color': 'orange'}
        }
        else {
            color= {'color': 'yellow'}
        }
        //rellena numeros CO
         if (numbers_received2>=66  ){
             colorCO= {'color': 'red'}
            }
        else if (numbers_received2>=33) {
            colorCO= {'color': 'orange'}
        }
        else {
            colorCO= {'color': 'yellow'}
        }
         if (numbers_received3>=66  ){
             colorCO2= {'color': 'red'}
            }
        else if (numbers_received3>=33) {
            colorCO2= {'color': 'orange'}
        }
        else {
            colorCO2= {'color': 'yellow'}
        }
        

        $('#bus1').html(bus1).css(color)
        $('#bus2').html(bus2).css(colorCO)
        $('#bus3').html(bus3).css(colorCO2)
    });


//funciones socket.io para traer las patentes 
      socket.on('PatenteAuto', function(msg){
        if (patentes.length>=1){
            patentes.shift()
        }

        patentes.push(msg.l1)
        
        patenteauto = patentes.toString()+'-XX-XX ';
        
        $('#patenteAuto').html(patenteauto);

      })
      socket.on('PatenteCamioneta', function(msg){
         if (patentes.length>=1){
            patentes.shift()
        }

        patentes.push(msg.l2)

        patentecamioneta = patentes.toString()+'-XX-XX ';
        $('#patenteCamioneta').html(patentecamioneta);
      })

      socket.on('PatenteCamion', function(msg){
         if (patentes.length>=1){
            patentes.shift()
        }

        patentes.push(msg.l3)

        patentecamion = patentes.toString()+'-XX-XX ';
        $('#patenteCamion').html(patentecamion);


      })

      socket.on('PatenteBus', function(msg){
         if (patentes.length>=1){
            patentes.shift()
        }
        patentes.push(msg.l4)

        patentebus = patentes.toString()+'-XX-XX ';
        $('#patenteBus').html(patentebus);

            var tds=$("#tabla tr:first th").length;
            // Obtenemos el total de columnas (tr) del id "tabla"
            var trs=$("#tabla tr").length;
            var nuevaFila="<tr>";
            var nuevaFila2="<tr>";
            var nuevaFila3="<tr>";
            var nuevaFila4="<tr>";
        
                // añadimos las columnas
             nuevaFila+="<th>"+patenteauto+"</th>"+
                        "<th>"+auto1+"</th>"+
                        "<th>"+auto2+"</th>"+
                        "<th>"+auto3+"</th>";

            nuevaFila2+="<th>"+patentecamioneta+"</th>" +
                        "<th>"+camioneta1+"</th>"+
                        "<th>"+camioneta2+"</th>"+
                        "<th>"+camioneta3+"</th>";
            
            nuevaFila3+="<th>"+patentecamion+"</th>" +
                        "<th>"+camion1+"</th>"+
                        "<th>"+camion2+"</th>"+
                        "<th>"+camion3+"</th>";

            nuevaFila4+="<th>"+patentebus+"</th>" +
                        "<th>"+bus1+"</th>"+
                        "<th>"+bus2+"</th>"+
                        "<th>"+bus3+"</th>";

            // Añadimos una columna con el numero total de columnas.
            // Añadimos uno al total, ya que cuando cargamos los valores para la
            // columna, todavia no esta añadida
            
            $("#tabla").append(nuevaFila);
            $("#tabla").append(nuevaFila2);
            $("#tabla").append(nuevaFila3);
            $("#tabla").append(nuevaFila4);
      })



});
/*
  // Obtenemos el numero de filas (td) que tiene la primera columna

            // (tr) del id "tabla"

            var tds=$("#tabla tr:first td").length;
            // Obtenemos el total de columnas (tr) del id "tabla"
            var trs=$("#tabla tr").length;
            var nuevaFila="<tr>";
            for(var i=0;i<tds;i++){
                // añadimos las columnas

                nuevaFila+="<th>columna "+(i+1)+" Añadida con jquery</th>"

            }
            // Añadimos una columna con el numero total de columnas.
            // Añadimos uno al total, ya que cuando cargamos los valores para la
            // columna, todavia no esta añadida
            nuevaFila+="<td>"+(trs+1)+" columnas";
            nuevaFila+="</tr>";
            $("#tabla").append(nuevaFila);
*/