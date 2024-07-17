# travia-api

npm package for Travia.is booking system. Personally I had hard time reading and implementing all the api's that I would use in order to consume Travia's API, so I decided to generate the client, something that we got use with prisma. for example we can use it as `travia.booking.create(...)` and similar. Instead of creating endpoints that will make the request, it seems efficient to interact with Types and know what is redurned especially if we have an access to their open api swagger file with descriptions and requirements.

## Changes

In the npm package we did change api a bit by making the `travelAgentId` set in the environment variable as , so we don't pass always the same param if we develop for only one client. That's a major difference. So this simplicity brings the restriction.

## Setup

### .env

```env
  TRAVIA_BASE_URL=
  TRAVIA_API_KEY=
  TRAVIA_TRAVEL_AGENT_ID=
```

These you can obtain after your access is granted to their API.

### Initialization

Initialization of the provider class which we call `travia`:

```js
const apiConfig = new Configuration({
  basePath: process.env.TRAVIA_BASE_URL,
  apiKey: process.env.TRAVIA_API_KEY,
});
```

But you don't have to do it. Just start consuming as:

```js
const roomRatesResponse =
  await travia.search.accomodation.searchPropertyRatesUsingPOST(
    bookingRoomsPayload
  );
```

## Features

type safe, uses `axios`, has descriptions for the each method.

- booking api
- content api
- search api
