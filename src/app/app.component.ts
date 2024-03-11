import { Component, Injector, OnInit } from '@angular/core'
import { RouterOutlet } from '@angular/router'

import { ChildComponent } from './child/child.component'
import { SimpleService } from './servicies/simple.service'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ChildComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [SimpleService],
})
export class AppComponent implements OnInit {
  public title = 'angular-setup'

  constructor(private injector: Injector) {}

  public ngOnInit(): void {
    console.log(this)
  }
}
