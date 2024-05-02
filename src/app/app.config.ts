import { provideHttpClient } from '@angular/common/http'
import { ApplicationConfig } from '@angular/core'
import { provideRouter } from '@angular/router'

import { routes } from './app.routes'
import { Config } from './interfaces/config.interface'
import { CONFIG } from './tokens/api-path.token'

export function buildAppConfig(config: Config): ApplicationConfig {
  return {
    providers: [
      provideRouter(routes),
      provideHttpClient(),
      {
        provide: CONFIG,
        useValue: config,
      },
    ],
  }
}
