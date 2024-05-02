import { CommonModule, DOCUMENT } from '@angular/common'
import { ChangeDetectionStrategy, Component, inject, Renderer2 } from '@angular/core'
import { toSignal } from '@angular/core/rxjs-interop'
import { RouterOutlet } from '@angular/router'

import { GorestTodoService } from './services/gorest-todo.service'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  private readonly gorestTodoService = inject(GorestTodoService)
  private readonly renderer = inject(Renderer2)
  private readonly document = inject(DOCUMENT)

  protected todo = toSignal(this.gorestTodoService.getSecondPendingTodo())

  constructor() {
    this.renderer.removeClass(this.document.body, 'loading')
  }
}
