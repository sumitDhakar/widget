import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
type InputValue = string | number | undefined;
type InputType = 'text' | 'number' | 'email';
@Component({
  selector: 'app-rohantest',
  standalone:true,
  imports:  [CommonModule],
  template: `<div class="container">
  <h2>Sign Up</h2>
  <form >
      <div class="input-group">
          <label for="username">Username</label>
          <input    (input)="onInput($event)"  type="text"   id="username" name="username" required>
      </div>
      <div class="input-group">
          <label for="email">Email</label>
          <input    (input)="onInput($event)"  type="email"   id="email" name="email" required>
      </div>
      <div class="input-group">
          <label for="password">Password</label>
          <input    (input)="onInput($event)"  type="password"   id="password" name="password" required>
      </div>
      <button type="submit" (click)="showOnConsole()" class="btn">Sign Up</button>
  </form>
</div>`,
  styles: [` body {
    font-family: Arial, sans-serif;
    background-color: #f4f4f4;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

.container {
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    padding: 40px;
    width: 300px;
}

.container h2 {
    margin-bottom: 20px;
    text-align: center;
}

.input-group {
    margin-bottom: 20px;
}

.input-group label {
    display: block;
    margin-bottom: 5px;
}

.input-group input {
    width: 100%;
    padding: 8px;
    border-radius: 4px;
    border: 1px solid #ccc;
}

.input-group input:focus {
    outline: none;
    border-color: #007bff;
}

.btn {
    background-color: #007bff;
    color: #fff;
    border: none;
    padding: 10px 20px;
    border-radius: 4px;
    cursor: pointer;
    width: 100%;
}

.btn:hover {
    background-color: #0056b3;
}`]
})
export class RohantestComponent {
  @Input() value: InputValue='enter';
  @Output() valueChange = new EventEmitter<InputValue>(undefined);

  onInput($event: Event) {
    const target = $event.target as HTMLInputElement;
    this.value = target.value;
    this.valueChange.emit(target.value);
    
  }
  
  showOnConsole(){
    console.log("functionWorks");
    
   }
}
