
// Use Parse.Cloud.define to define as many cloud functions as you want.
// For example:
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
        email: "you@parse.com",
        name: "Your Name"
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
