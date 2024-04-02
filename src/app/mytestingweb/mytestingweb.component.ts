import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
type InputValue = string | number | undefined;
type InputType = 'text' | 'number' | 'email';
@Component({
  selector: 'app-mytestingweb',
  standalone:true,
  imports:  [CommonModule],
  styles: [
    `
      .form-control {
        display: block;
        margin-bottom: 16px;

        label,
        input {
          display: block;
        }

        input {
          box-sizing: border-box;
          padding: 8px;
          width: 100%;
        }
      }
    `,
  ],
  template: `<p>mytestingweb works!</p>

  <div class="form-control">
    <label [for]="inputId" *ngIf="label">{{ label }}</label>
    <input
      (input)="onInput($event)"
      [type]="type"
      [value]="value"
      [id]="inputId"
    />
  </div>

`,

})
export class MytestingwebComponent {
  @Input() inputId = Math.random().toString(16);
  @Input() label = '';
  @Input() value: InputValue;
  @Input() type: InputType = 'text';
  @Output() valueChange = new EventEmitter<InputValue>(undefined);

  onInput($event: Event) {
    const target = $event.target as HTMLInputElement;
    this.value = target.value;
    this.valueChange.emit(target.value);
    
  }

}
