
// Use Parse.Cloud.define to define as many cloud functions as you want.
// For example:

var Mandrill = require('mandrill');
Mandrill.initialize('8ugNesedBF5ovPlPhM5VLA');


Parse.Cloud.define("hello", function(request, response) {
	  response.success("Hello world!");

	Mandrill.sendEmail({
	  message: {
	    text: "Hello World!",
	    subject: "Using Cloud Code and Mandrill is great!",
	    from_email: "parse@cloudcode.com",
	    from_name: "Cloud Code",
	    to: [
	      {
	        email: "davidalzate@gmail.com",
	        name: "Elegido"
	      }
	    ]
	  },
	  async: true
	},{
	  success: function(httpResponse) {
	    console.log(httpResponse);
	    response.success("Email sent!");
	  },
	  error: function(httpResponse) {
	    console.error(httpResponse);
	    response.error("Uh oh, something went wrong");
	  }
	});
});

Parse.Cloud.define("enviarTemplate", function(request, response){
	response.success("Enviando Template");

	Parse.Cloud.httpRequest({
	method: 'POST',
    headers: {
     'Content-Type': 'application/json',
    },
    url: 'https://mandrillapp.com/api/1.0/messages/send-template.json',
    body:{
            "key": "8ugNesedBF5ovPlPhM5VLA",
        "template_name": "NombreEspecial",
        "template_content": [{
            "name": "example name",
                "content": "eXample cOntent" // Name and Content are required even though they are ignored
            }], 
        "message": {
            "to": [
                {
                    "email": request.object.get("email"),
                 }
                  ]
                        }},

    success: function(httpResponse) {
            console.log(httpResponse);
            },
        error: function(httpResponse) {
            console.error(httpResponse);
        }

    });




});
