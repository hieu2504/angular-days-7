import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChange,
  SimpleChanges,
  ɵConsole,
} from '@angular/core';

@Component({
  selector: 'progress-bar',
  template: `
    <div
      class="progress-bar-container"
      [style.backgroundColor]="backgroundColor"
    >
      <div
        class="progress"
        [style]="{
          backgroundColor: progressColor,
          width: progress + '%'
        }"
      ></div>
    </div>
  `,
  styles: [
    `
      .progress-bar-container,
      .progress {
        height: 20px;
      }

      .progress-bar-container {
        width: 100%;
      }
    `,
  ],
})
export class ProgressBarComponent implements OnInit, OnChanges {
  @Input() set progress(val: number) {
    if (typeof val != 'number') {
      const progress = Number(val);
      if (Number.isNaN(progress)) {
        this._progress = 0;
      } else {
        this._progress = progress;
      }
    }
    this._progress = val;
    console.log(val);
  }
  private _progress = 50;
  get progress() {
    return this._progress;
  }
  @Input() backgroundColor = '#ccc';
  @Input() progressColor = 'tomato';

  constructor() {}

  // Chay sau khi gia tri duoc bind
  ngOnInit() {
    // console.log({
    //   progress: this.progress,
    //   backgroundColor: this.backgroundColor,
    //   progressColor: this.progressColor,
    // });
  }

  ngOnChanges(changes: SimpleChanges) {
    // console.log('changes', {
    //   progress: this.progress,
    //   backgroundColor: this.backgroundColor,
    //   progressColor: this.progressColor,
    // });
  }
}
