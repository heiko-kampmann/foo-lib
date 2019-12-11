# The Angular Library Series - Creating a Library with Angular CLI


https://medium.com/angular-in-depth/angular-workspace-no-application-for-you-4b451afcc2ba?

https://medium.com/angular-in-depth/creating-a-library-in-angular-6-87799552e7e5?


## leere app

`ng new foo --create-application=false`


## neue lib
`ng new foo-lib --create-application=false`


cd foo-lib
`ng generate library foo-lib --prefix=foo`

## test
`ng generate application foo-tester`



## foo-tester app

`import { FooLibComponent } from 'foo-lib';`

`ng-serve footer-tester`

nach änderungen in der foo-lib -> erst ein build:
 `ng build foo-lib `
oder
 `ng build foo-lib --watch`

dann ist Änderung in footer-tester sichtbar


weitere Kompontente in foo-lib:
 
`ng generate component foo2 --project=foo-lib`
`ng generate component foo3 --project=foo-lib`
`ng generate component foo4 --project=foo-lib`


## build + package 
https://medium.com/angular-in-depth/creating-a-library-in-angular-6-part-2-6e2bc1e14121?

## use in other app 

`npm install ../foo-lib/dist/foo-lib/foo-lib-0.0.1.tgz`



