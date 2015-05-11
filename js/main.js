var json

Tabletop.init({ 
  key: "https://docs.google.com/spreadsheets/d/1_bU0idTkrU4c0P3Y4ha3KeULIQ8fL22t8mffOETafTA/pubhtml",
  callback: sheetLoad,
  simpleSheet: true 
})

function sheetLoad( data, tabletop ){
  render( data )
  buildTeams( data )
}

function render( context ){
  var template = $("#employee-template").html()
    console.log( context )
  var compile = Handlebars.compile( template )
  var html = compile( { employees: context } )
  $(".js-profiles").html( html ).show()
}

function buildTeams( context ){
  var teams = _.map( context, function( person ){
    return person.Team 
  })
  teams = _.uniq( teams )
  for( var i = 0; i < teams.length; i++ ){
    $(".js-teams-nav").append("<a href='#'>"+teams[i]+"</a>") 
  }
}
