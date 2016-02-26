$(function (){
  $('.popUp').hide();
  $('.popUpClose').on('click', function(){
    $('.popUp').hide()
  });

  $('#map').usmap({
    'stateStyles': {fill: 'rgb(74, 137, 163)'},
    'stateHoverStyles': {fill: 'rgb(171, 73, 73)'},
    'stateHoverAnimation': 300,
    click: function(event, data) {
      // persistence function
      // if(localStorage.getItem(data.name)){
      //   var temp = localStorage.getItem(data.name);
      //   temp.count++;
      // }else{
      //   localStorage.setItem({state: data.name, count: 1});
      // }

      // pop-up function
      (function pop (){
        $('.popUp').show()
      })()

      // solar count & cost API
      $.ajax({
        url: 'https://developer.nrel.gov/api/solar/open_pv/installs/rankings?state='+data.name+'&api_key=baBQnhHJIUy28EX60XZ2mpnTHSQ4OkRuRE6Ki4yS&format=JSON',
        type: 'GET',
        dataType: 'json',
        success: function(response){
          console.log(response)
        }
      });

      // available policies API
      $.ajax({
        url: 'https://developer.nrel.gov/api/energy_incentives/v2/dsire.json?api_key=baBQnhHJIUy28EX60XZ2mpnTHSQ4OkRuRE6Ki4yS&address='+data.name+'&technology=solar_photovoltaics',
        type: 'GET',
        dataType: 'json',
        success: function(response){
          console.log(response)
        }
      });

    }
  })

})