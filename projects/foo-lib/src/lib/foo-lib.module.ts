import { NgModule } from '@angular/core';
import { FooLibComponent } from './foo-lib.component';
import { Foo2Component } from './foo2/foo2.component';
import { Foo3Component } from './foo3/foo3.component';
import { Foo4Component } from './foo4/foo4.component';



@NgModule({
  declarations: [
      FooLibComponent, 
      Foo2Component, 
      Foo3Component, 
      Foo4Component
    ],
  imports: [
  ],
  exports: [
      FooLibComponent,
      Foo2Component, 
      Foo3Component, 
      Foo4Component
    ]
})
export class FooLibModule { }
