# Angular14 & 15 Dual-Listbox 

The **cm-angular-dual-listbox** is an Angular 14 component that provides two lists controls side-by-side that allows items in one list to be selected and moved* to the other list via drag-and-drop and/or a button-based interface. 
The component supports multiple select options from the list, programatic setting of list sources, and layout with direction and button formatting.

<!-- A [working demo](http://czeckd.github.io/angular-dual-listbox/) shows the dual listbox in action.

\* Technically, the dual-list component does not move items from one array to another. Rather it makes a copy from the source array of the item and adds it to the destination array, or removes it from the destination array. Thus, the source array is a master list of all available item and the destintion array is a list of items that have been selected from the master list. Therefore, in order for an item to be in the destination array it must also exist in the source array. -->

![Dual ListBox](https://github.com/chandumaram/dual-listbox/blob/master/src/assets/dual-listbox.png)


## Table of Contents

 * [Version](#Version)
 * [Usage](#usage)
 * [Inputs](#inputs)
 * [Outputs](#outputs)
 * [Final Usage](#final-usage)


## Version

| Angular | angular-dual-listbox |
|---|---|
|`15`|`2.1.1`|
|`14`|`1.0.0`|


## Usege

### Installation
```
$ npm i cm-angular-dual-listbox 
```

### `app.module.ts`
```js
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CmAngularDualListboxModule } from 'cm-angular-dual-listbox';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CmAngularDualListboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

### `app.component.html`:
```html
  <dual-listbox [source]="source" [(destination)]="confirmed"></dual-listbox>
```

### `app.component.ts`:
```js
import { AngularDualListboxComponent } from 'cm-angular-dual-listbox';
export class AppComponent {

  employeeImage = "assets/employee.png";

  source: any[] = [
    {id:1, name:"one"},
    {id:2, name:"two"},
    {id:3, name:"three"},
    {id:4, name:"four"},
    {id:5, name:"five"},
    {id:6, name:"six"}
    ];

  confirmed: any[] = [];

      UserFormat = {
        add: 'Add Users',
        remove: 'Remove Users',
        all: 'Select All',
        none: 'De-select All',
        direction: AngularDualListboxComponent.LTR,
        draggable: true
    };

}
```

### Add Styles by

1. $ npm install bootstrap
2. add  @import "../node_modules/bootstrap/scss/bootstrap"; in your styles.scss file


## Inputs

| Name | Description
|---|---|
|`key`| The unique identifier field of each object in the `source` and `destination` arrays, default is ``_id``. (Note: with a source of an array of strings, each string is its own id.)
|`display`| The field of each object for displaying the object each the lists, default is ``_name``. Or, a function that returns a string that can be used for displaying an object. (Note: with a source of an array of strings, each string is its own display.)
|`height`| The height of the lists, default is ``100px``.
|`format`| A format object, default is ``{ add: 'Add', remove: 'Remove', all: 'All', none: 'None', direction: 'left-to-right', draggable: true }``
|`filter`| A boolean whether or not to display a filter for the lists, default is ``false``. 
|`sort`| A boolean whether or not to keep the lists sorted, default is ``false``.
|`compare`| A compare function to be used for sorting the lists. Note if sort is not set and compare is set, then sort will be set ``true``.
|`source`| The source array of objects or strings for the list. (This is the universal, master list of all possible objects.)
|`destination`| The destination array of objects or strings selected from the source. Note, the ``destination`` array can have prexisting elements.
|`disabled`| The dual-list is disabled, default is ``false``.


## Outputs

|Name | Description
|---|---|
|`destinationChange`| An event triggered when the destination array changes.

## Final Usage

```html
<dual-listbox [sort]="true" [source]="source" key="id" display="name"
[filter]="true" [(destination)]="confirmed" height="300px"
[format]="format" [disabled]="false"></dual-listbox>
```

<!-- See also the [basic-dual-list-demo](https://github.com/czeckd/basic-dual-listbox-demo) for a sample project using this module. Note that the default component uses Bootstrap 3 for styling and so the bootstrap.css would need to be included in the project for it to be styled correctly. That said, the styles can be overriden with your own style sheet or fully customized by extending the `DualListComponent` and providing a new template. For more details, see the section on **Extending** below. -->

## License
MIT

## Author
- Maram Chandrasekhar Reddy [@chandumaram](https://github.com/chandumaram)
