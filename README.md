# travia-api

npm package for Travia.is booking system. Personally I had hard time reading and implementing all the api's that I would use in order to consume Travia's API, so I decided to generate the client, something that we got use with prisma. for example we can use it as `travia.booking.create(...)` and similar. Instead of creating endpoints that will make the request, it seems efficient to interact with Types and know what is redurned especially if we have an access to their open api swagger file with descriptions and requirements.

## Changes

In the npm package we did change api a bit by making the `travelAgentId` set in the environment variable as , so we don't pass always the same param if we develop for only one client. That's a major difference. So this simplicity brings the restriction.

## Setup

### Initialization

Initialization of the provider class which we call `travia` but you can call whatever:

```js
const envVariables = {
  TRAVIA_BASE_URL: "PROVIDE_THE_URL",
  TRAVIA_API_KEY: "SOME_KEY_HERE",
  TRAVIA_TRAVEL_AGENT_ID: "123456789",
};

const travia = new TraviaClient(envVariables);
```

Just start consuming as:

```js
import { TraviaClient } from "travia-api";

const envVariables = {
  TRAVIA_BASE_URL: process.env.TRAVIA_BASE_URL,
  TRAVIA_API_KEY: process.env.TRAVIA_API_KEY,
  TRAVIA_TRAVEL_AGENT_ID: process.env.TRAVIA_TRAVEL_AGENT_ID,
};

const traviaClient = new TraviaClient(envVariables);
// Step 2: Use the API methods
// Example: Fetching property content
traviaClient.content
  .getPropertyUsingGET(123)
  .then((content) => {
    console.log("Property Content:", content);
  })
  .catch((error) => {
    console.error("Error fetching property content:", error);
  });
```

## Features

type safe, uses `axios`, has descriptions for the each method.

- booking api
- content api
- search api

## Consideration

Ensure that you set the client object only once when your server is started and consume it globally.
