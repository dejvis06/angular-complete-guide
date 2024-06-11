# Angular Homes App (Angular Official Tutorials)

- Install Angular if you don't have it installed

  `npm install -g @angular/cli`

- Clone this branch to your local machine

  `git clone -b homes-app-start git@github.com:angular/codelabs.git homes-app`

- Once the code has been downloaded

  `cd homes-app`

- Install the depencies

  `npm install`

- Run the application

  `ng serve`

- Http
  - `npm install -g json-server`
  - `json-server --watch db.json`

## Http

### Setting up

```
export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
  ]
};
```

### Injecting

`base-resource.service`, an abstract class, for common attributes or methods among other resource services.

### Configuration

Implementations:

- default impl is XMLHttpRequest
- withFetch (disadvantage -> doesnt upload progress events)

### Making Requests

#### Get

```

<!-- Sending Request -->
getAllHousingLcoations(): Observable<HousingLocation[]> {
  return this.http.get<HousingLocation[]>(this.getResourcePath());
}


<!-- Getting value -->
constructor() {
    this.housingService
      .getAllHousingLcoations()
      .subscribe((housingLocationList: HousingLocation[]) => {
        this.housingLocationList = housingLocationList;
        this.filteredHousingLocationList = housingLocationList;
     });
}
```
