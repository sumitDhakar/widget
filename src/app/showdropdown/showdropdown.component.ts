import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-showdropdown',  
  standalone:true,
  imports:  [CommonModule],
  templateUrl: './showdropdown.component.html',
  styleUrls: ['./showdropdown.component.scss']
})
export class ShowdropdownComponent  implements OnInit {
  ngOnInit(): void {
  alert("component call")
  }
  @Input()  locations= ["Indore", "Dewas", "Ujjain", "Vidisha", "Bhopal"];
  @Input() departments = ["Java", "Php", "Python", "Mern"];
  @Input() teams = ["Php Developer", "Java Developer", "Mern Developer", "Flutter Developer"];
  @Input()  contracts = ["Contract1", "Contract2", "Contract3", "Contract4", "Contract5"];
  @Output() callmymethod = new EventEmitter<any>(undefined);

  selectedValues: string[] = ['', '', '', '']; // Initialize array to store selected values

  updateSelectedValue(index: number, event: any) {
    this.selectedValues[index] = event.target.value; // Update selected value in array
  }

  showdata() {
    console.log("Selected values:", this.selectedValues); // Log selected values
  }

}
