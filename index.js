const express = require('express');
const app = express();
const PORT = 3000;

app.set('view engine', 'pug');
app.set('views', './views');

const workingHoursMiddleware = (req, res, next) => {
    const currentDate = new Date();
    const currentDay = currentDate.getDay();
    const currentHour = currentDate.getHours();
  
    if (currentDay >= 1 && currentDay <= 5 && currentHour >= 9 && currentHour < 17) {
      next();
    } else {
      res.send('The web application is only available during working hours (Monday to Friday, from 9 to 17).');
    }
  };
  
  app.use(workingHoursMiddleware);

app.get("/",function(request, response){
  response.end('Welcome to the web application!')
});

app.get("/home",function(request, response){
  response.end('Welcome to our home page')
});

app.get("/services",function(request, response){
    response.end('Our services')
  });

  app.get("/contact",function(request, response){
    response.end('Contact us')
  });

  app.get('/views', function(req, res){
    res.render('views_contact')
  })

  app.get("/home_views", function(req, res){
  res.render("views_home")
  });

  app.get("/service_views", function(req, res){
  res.render("views_services")
  });

  app.get("/contact_views", function(req, res){
    res.render("views_contact")
    })
  



app.listen(PORT, function(){
  console.log(`server is running on ${PORT}`)
});

