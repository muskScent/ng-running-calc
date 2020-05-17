import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NumberValidator } from '../shared/constants/number-validator';

@Component({
  selector: 'app-running-calculator',
  templateUrl: './running-calculator.component.html',
  styleUrls: ['./running-calculator.component.css']
})
export class RunningCalculatorComponent implements OnInit {
  speedForm: FormGroup;
  speed: number = null;

  constructor() { }

  ngOnInit(): void {
    this.speedForm = this.createSpeedForm();
    this.speedForm.setValidators
  }

  createSpeedForm(): FormGroup {
    return new FormGroup({
      distance: new FormControl(null, [Validators.required, NumberValidator.number]),
      hours: new FormControl(null, [NumberValidator.number]),
      minutes: new FormControl(null, [NumberValidator.number]),
      seconds: new FormControl(null, [NumberValidator.number])
    })
  }

  calculateSpeed(): void {
    const hours = this.speedForm.get('hours').value;
    const minutes = this.speedForm.get('minutes').value;
    const seconds = this.speedForm.get('seconds').value
    this.speed = this.speedForm.get('distance').value / this.getTimeInHours(hours, minutes, seconds);
  }

  getTimeInHours(hours: number, minutes: number, seconds: number): number {
    return (+(hours) + +(minutes) / 60 + +(seconds)/ 3600);    
  }

  validInput(): boolean {
    if (this.speedForm.get('distance').valid &&
        (this.speedForm.get('hours').valid ||
        this.speedForm.get('minutes').valid ||
        this.speedForm.get('seconds').valid)) {
          return true;
    } else {
      return false;
    }
  }

  debugForm(): void {
    console.log(this.speedForm);
  }

}
