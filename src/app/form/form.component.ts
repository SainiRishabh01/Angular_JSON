import { Component } from '@angular/core';
import { JsonForms } from '@jsonforms/angular';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    JsonForms // ✅ important!
  ],
  templateUrl: './form.component.html',
})
export class FormComponent {
  data = {};
  schema = {
    type: 'object',
    properties: {
      name: { type: 'string' }
    }
  };
  uischema = {
    type: 'Control',
    scope: '#/properties/name'
  };

  onChange(event: any) {
    console.log('Changed:', event);
  }
}
