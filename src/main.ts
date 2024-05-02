import { bootstrapApplication } from '@angular/platform-browser'

import { AppComponent } from './app/app.component'
import { buildAppConfig } from './app/app.config'
import { Config } from './app/interfaces/config.interface'
import { fetchConfig } from './app/utils/fetch-config'

// We can easily replace local configuration file path with path to API endpoint
fetchConfig<Config>('assets/config.json')
  .then((config) => bootstrapApplication(AppComponent, buildAppConfig(config)).catch((err) => console.error(err)))
  .catch((err) => console.error(err))
