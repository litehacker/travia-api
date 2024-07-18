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

// Configuration for the API clients, now accepts an env object
function createApiConfiguration(
  env: Record<string, string | undefined>
): Configuration {
  if (!env.TRAVIA_BASE_URL) {
    throw new Error("TRAVIA_BASE_URL is required");
  }
  if (!env.TRAVIA_API_KEY) {
    throw new Error("TRAVIA_API_KEY is required");
  }
  if (!env.TRAVIA_TRAVEL_AGENT_ID) {
    throw new Error("TRAVIA_TRAVEL_AGENT_ID is required");
  }
  return new Configuration({
    basePath: env.TRAVIA_BASE_URL,
    apiKey: env.TRAVIA_API_KEY,
    travelAgentId: env.TRAVIA_TRAVEL_AGENT_ID as unknown as number,
  });
}

export class TraviaClient {
  private contentApi: GetPropertyContentApi;
  private searchApi: {
    accomodation: SearchAccommodationApi;
    carRental: SearchCarRentalApi;
  };
  private bookingApi: {
    makeBooking: MakeABookingApi;
    getBooking: GetABookingApi;
    updateBooking: UpdateABookingApi;
    cancelBooking: CancelABookingApi;
  };

  constructor(env: Record<string, string | undefined> = process.env) {
    const apiConfig = createApiConfiguration(env);
    this.contentApi = new GetPropertyContentApi(apiConfig);
    this.searchApi = {
      accomodation: new SearchAccommodationApi(apiConfig),
      carRental: new SearchCarRentalApi(apiConfig),
    };
    this.bookingApi = {
      makeBooking: new MakeABookingApi(apiConfig),
      getBooking: new GetABookingApi(apiConfig),
      updateBooking: new UpdateABookingApi(apiConfig),
      cancelBooking: new CancelABookingApi(apiConfig),
    };
  }

  public get content() {
    return this.contentApi;
  }

  public get search() {
    return this.searchApi;
  }

  public get booking() {
    return this.bookingApi;
  }
}
