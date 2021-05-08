# Tonys Shared Library

Common services, utilites, and components for Tony's booking app

## Publishing the library

#### 1. Update package version in **projects/shared/package.json**
```json
{
  "name": "@tonys/shared",
  "version": "1.0.0",
}
```
#### 2. Update public api in **projects/shared/src/public-api.ts**
```js
export * from './lib/http-adapter.service';
export * from './lib/shared.module';
```

#### 3. In **/dist/shared** start local server
```bash
$ verdaccio
``` 
#### 4. Publish package to local npm registry
```bash
$ npm run sharedbuild
```
#### 5. Within consuming project
```
$ npm i @tonys/shared --registry http://localhost:4873/
```
#### 6. Within consuming project **app.modue.ts**
```js
import { TonysSharedModule } from '@tonys/shared';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    TonysSharedModule.forRoot(),
  ],
})
export class AppModule {}
```
