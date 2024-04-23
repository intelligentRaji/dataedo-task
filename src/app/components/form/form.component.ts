import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core'
import { NonNullableFormBuilder, ReactiveFormsModule } from '@angular/forms'

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormComponent implements OnInit {
  private readonly fb = inject(NonNullableFormBuilder)

  public form = this.fb.group({
    name: '',
    surname: '',
  })

  public ngOnInit(): void {
    this.form.controls.name.valueChanges.subscribe(console.log)
  }

  public action(): void {
    this.form.setValue({ name: 'asd', surname: 'qwe' })
  }
}
