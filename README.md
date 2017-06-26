# crudex
Don't make an api for just a crud anymore.

## Status:
This is just an idea. There is no alpha version yet. The roadmap is the following:

- [x] Add a crud for each Type.
- [ ] Validate the input data with the Type.
- [ ] Create relations between types.
- [ ] Text search in type entities.
- [ ] Filter in query by params

While functions are added, I will keep updating this documentation.

## How does it works

Execute server.js, and start making api calls to `/endpoint` to add new resources to the crud. Each resource shall have a Type, like this:

```
{
 name: 'User',
 id: 'id',
 data: {
  id: {
   type: 'number',
   mandatory: true,
   generate: 'random'
  },
  name: {
   type: 'String',
   mandatory: false,
   generate: false
  }
 }
}
```

This type define how will be the resource. A post request to `/endpoint` with that object as a "type" parameter in request body will create an `/user` endpoint. This endpoint has a GET, POST, PUT and DELETE method. I mean, all the CRUD is already created for you. Yes, the following endpoints are now available:

```
[GET]    /user     -> User list
[GET]    /user/id  -> Get user by ID
[POST]   /user     -> Add new user
[PUT]    /user/id  -> Update user by ID (will keep existing properties)
[DELETE] /user/id  -> Delete user by ID
```
Not bad, right? 

### The idea: 
A crud creator and exposer to make fast APIs for every single application. 

### The way: 
1. A crud creator, accessible via internal functions. 
2. An api manager, with a total enpoint controll. 
3. An ACL system, who connects the API with the crud, and allow or not to operations.

### The dream:
Create all the backend with a simple panel, who can also monitorize it all, auto scale and is plugin friendly.

## Special Thanks

 - To the [Pillars](https://github.com/pillarsjs) team ([bifuer](https://github.com/bifuer) and [lilxelo](https://github.com/lilxelo)), who developed the [server side of Crudex](https://github.com/pillarsjs/pillars), and created in my mind the idea of on demand js generation.
 - To [Ulises Gascón](https://github.com/ulisesgascon) and all the [GoblinDB](https://github.com/GoblinDBRocks) contributors, who made the demo possible.
 - To [Josheriff](https://github.com/josheriff), who spammed me with "auto-generated backend" ideas all the time.
 - To my cat, Opie, for not killing me while talking him about all the doubts I had developing this.
