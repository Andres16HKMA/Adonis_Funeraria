/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return { hello: 'world' }
})

Route.post("/departaments","DepartmentsController.store");
Route.get("/departaments","DepartmentsController.index");
Route.get("/departaments/:id","DepartmentsController.show");
Route.put("/departaments/:id","DepartmentsController.update");
Route.delete("/cities/:id","CitiesController.delete");
Route.post("/cities","CitiesController.store");
Route.get("/cities","CitiesController.index");
Route.get("/cities/:id","CitiesController.show");
Route.put("/cities/:id","CitiesController.update");
Route.delete("/cities/:id","CitiesController.delete");
Route.post("/sites","SitesController.store");
Route.get("/sites","SitesController.index");
Route.get("/sites/:id","SitesController.show");
Route.put("/sites/:id","SitesController.update");
Route.delete("/sites/:id","SitesController.delete");
