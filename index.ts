import {
  CancelABookingApi,
  Configuration,
  GetABookingApi,
  GetPropertyContentApi,
  MakeABookingApi,
  SearchAccommodationApi,
  SearchCarRentalApi,
  UpdateABookingApi,
} from "./traviaClient";

const requiredEnvVars = [
  "TRAVIA_BASE_URL",
  "TRAVIA_API_KEY",
  "TRAVIA_TRAVEL_AGENT_ID",
];

checkEnvVariables(requiredEnvVars);

// Configuration for the API clients
const apiConfig = new Configuration({
  basePath: process.env.TRAVIA_BASE_URL,
  apiKey: process.env.TRAVIA_API_KEY,
});

// Define interface for API clients
interface CustomNodeJsGlobal extends NodeJS.Global {
  content: GetPropertyContentApi;
  search: {
    accomodation: SearchAccommodationApi;
    carRental: SearchCarRentalApi;
  };
  booking: {
    makeBooking: MakeABookingApi;
    getBooking: GetABookingApi;
    updateBooking: UpdateABookingApi;
    cancelBooking: CancelABookingApi;
  };
}
// Extend NodeJS Global interface to include API clients
declare global {
  namespace NodeJS {
    interface Global {
      // Add other APIs as needed
    }
  }
}

declare const global: CustomNodeJsGlobal;
global.content = global.content || new GetPropertyContentApi(apiConfig);
global.search = global.search || {
  accomodation: new SearchAccommodationApi(apiConfig),
  carRental: new SearchCarRentalApi(apiConfig),
};
global.booking = global.booking || {
  makeBooking: new MakeABookingApi(apiConfig),
  getBooking: new GetABookingApi(apiConfig),
  updateBooking: new UpdateABookingApi(apiConfig),
  cancelBooking: new CancelABookingApi(apiConfig),
};
function checkEnvVariables(requiredVars: string[]): void {
  const missingVars = requiredVars.filter((varName) => !process.env[varName]);
  if (missingVars.length > 0) {
    throw new Error(
      `Missing required environment variables: ${missingVars.join(", ")}`
    );
  }
}
// Export the global provider object
export const travia: CustomNodeJsGlobal = global;
