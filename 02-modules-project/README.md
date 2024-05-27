# NgModules

[Official doc link](https://angular.dev/guide/ngmodules#more-on-ngmodules)

## Structure of `@NgModule`

```
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,  HeaderComponent, UserComponent, TasksComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
```

- **Metadata field**: Details
  - **declarations**: Includes the root application component.
  - **imports**: Imports BrowserModule to enable browser-specific services (such as DOM rendering, sanitization).
  - **providers**: The service providers.
  - **bootstrap**: The root component that Angular creates and inserts into the index.html host web page.

### `declarations` & `bootstrap`

In the declarations we specify the non standalone components. <br>

After adding AppComponent in the declarations attribute of the NgModule, the following have to be removed in the AppComponent:

```
@Component({
  selector: 'app-root',
  // standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  // imports: [HeaderComponent, UserComponent, TasksComponent],
})
```

Also, in the main.ts we now have to bootstrap a module and not a standalone component:

```
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
```

### `imports`

In the imports attribute, we specify the standalone components required by the main component, but also, BrowserModule to enable the rendering of the components.
