import { ChangeDetectionStrategy, Component, Injector, OnInit } from '@angular/core'

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChildComponent implements OnInit {
  constructor(private injector: Injector) {}
  public ngOnInit(): void {
    console.log(this)
  }
}
