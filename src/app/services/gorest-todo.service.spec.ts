import { TestBed } from '@angular/core/testing'

import { GorestTodoService } from './gorest-todo.service'

describe('GorestService', () => {
  let service: GorestTodoService

  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.inject(GorestTodoService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
})
