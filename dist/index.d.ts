import { CancelABookingApi, GetABookingApi, GetPropertyContentApi, MakeABookingApi, SearchAccommodationApi, SearchCarRentalApi, UpdateABookingApi } from "./traviaClient";
export declare class TraviaClient {
    private contentApi;
    private searchApi;
    private bookingApi;
    constructor(env?: Record<string, string | undefined>);
    get content(): GetPropertyContentApi;
    get search(): {
        accomodation: SearchAccommodationApi;
        carRental: SearchCarRentalApi;
    };
    get booking(): {
        makeBooking: MakeABookingApi;
        getBooking: GetABookingApi;
        updateBooking: UpdateABookingApi;
        cancelBooking: CancelABookingApi;
    };
}
