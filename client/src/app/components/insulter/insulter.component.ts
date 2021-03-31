import { Component, OnInit } from '@angular/core';
import {shakespeareInsultsData} from '../../../content/sharespeareInsultsData';
import {sonOfInsultsData} from '../../../content/sonOfInsultsData';
import {goInsultsData} from '../../../content/goInsultsData';
import {hundredRandomInsults} from '../../../content/100.bard.insults';

@Component({
  selector: 'insulter',
  templateUrl: './insulter.component.html',
  styleUrls: ['./insulter.component.sass']
})
export class InsulterComponent implements OnInit {

  public currentGoInsult: string = "preset";
  public currentSonOfInsult: string = "preset";
  public currentShakespeareInsult: string = "preset";
  public randomInsult: string = "preset";

  constructor() { }

  ngOnInit() {
    this.getNewInsults();
  }

  public getNewInsults(): void {
    this.currentGoInsult = this.makeGoInsult();
    this.currentShakespeareInsult = this.makeShakespeareInsult();
    this.currentSonOfInsult = this.makeSonOfInsult();
    this.randomInsult = this.getRandomInsult();
  }

  private getRandomInsult(): string {
    const index: number = this.randomIntFromInterval(0, hundredRandomInsults.length - 1);

    return hundredRandomInsults[index];
  }

  private makeGoInsult(): string {
    let intOne: number = this.randomIntFromInterval(0, goInsultsData.col1.length - 1);
    let intTwo: number = this.randomIntFromInterval(0, goInsultsData.col2.length - 1);
    let wordOne: string = goInsultsData.col1[intOne];
    let wordTwo: string = goInsultsData.col2[intTwo];

    return "Go " + wordOne + " " + wordTwo + "!";
  }

  private makeSonOfInsult(): string {
    let intOne: number = this.randomIntFromInterval(0, sonOfInsultsData.col1.length - 1);
    let intTwo: number = this.randomIntFromInterval(0, sonOfInsultsData.col2.length - 1);
    let wordOne: string = sonOfInsultsData.col1[intOne];
    let wordTwo: string = sonOfInsultsData.col2[intTwo];

    return "You son of a/an " + wordOne + " " + wordTwo + "!";
  }

  private makeShakespeareInsult(): string {
    let intOne: number = this.randomIntFromInterval(0, shakespeareInsultsData.col1.length - 1);
    let intTwo: number = this.randomIntFromInterval(0, shakespeareInsultsData.col2.length - 1);
    let intThree: number = this.randomIntFromInterval(0, shakespeareInsultsData.col3.length - 1);
    let wordOne: string = shakespeareInsultsData.col1[intOne];
    let wordTwo: string = shakespeareInsultsData.col2[intTwo];
    let wordThree: string = shakespeareInsultsData.col3[intThree];

    return "You " + wordOne + ", " + wordTwo + " " + wordThree + "!";
  }

  private randomIntFromInterval(min, max): number { 
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
}
