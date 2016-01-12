import 'reflect-metadata'

import {Component} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser'

console.log('Files have started being compiled and infinite loop has begun');

var TodoCmpTest = 
  Component({
		selector: 'todo-cmp'
  })
	.View({
		template: `<h1>TodoCmpTest</h1>`
	})
  .Class({
		constructor: function(){
			console.log('hello');
		}
	});


var AppComponent = 
  Component({
    selector: 'app',
  })
	.View({
    template: `
			<div>
				<h1> Hello World </h1>
				<todo-cmp></todo-cmp>
			</div>
		`,
    directives: [TodoCmpTest]
    // directives: []
	})
  .Class({
    constructor: function () {}
  });  

bootstrap(AppComponent);
