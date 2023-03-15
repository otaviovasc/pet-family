// This file is auto-generated by ./bin/rails stimulus:manifest:update
// Run that command whenever you add a new controller or create them with
// ./bin/rails generate stimulus controllerName

import { application } from "./application"

import FilterPetsController from "./filter_pets_controller"
application.register("filter-pets", FilterPetsController)

import HelloController from "./hello_controller"
application.register("hello", HelloController)

import ListBreedsController from "./list_breeds_controller"
application.register("list-breeds", ListBreedsController)

import TomSelectController from "./tom_select_controller"
application.register("tom-select", TomSelectController)
