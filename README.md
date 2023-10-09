# Project 1: Shared shopping list

The application has been deployed to Render at: [shopping-list-project.onrender.com](shopping-list-project.onrender.com)



## 

## 

### 



The name of the application

A brief description of the application

Guidelines for running the application locally (you can assume that participants have docker-compose).






Inside services, there are 2 different implementations of services. 
Application has been first locally developed with arrays instead of database, this has been left there as legacy code or for test running an app, without containers. 
For running arrayServices it is necessary to switch from dbListSvc/dbItemSvc to arrayListSvc/arratItemService inside listService.js and itemService.js. After that app can be run with  deno run --allow-net --allow-read --allow-env app.js .
