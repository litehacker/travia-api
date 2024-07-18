import type { Configuration } from "./configuration";
import type { AxiosPromise, AxiosInstance, RawAxiosRequestConfig } from "axios";
import type { RequestArgs } from "./base";
import { BaseAPI } from "./base";
import { BookingCartResponse, BookingResponse, BookingCancellationFeeResponse, PageBookingPageResponse, PagePropertyExtendedResponse, PropertyExtendedResponse, TravelAgentResponse, BookingRoomCreateRequest, BookingCreateRequest, BookingCartCreateRequest, BookingCartConfirmRequest, PropertyRatesRequest, PropertySearchFilterRequest, PropertySearchFiltersResponse, PropertyAvailableDatesResponse, PropertyRatesResponse, PropertySearchResponse, CarRentalSearchRequest, CarRentalSearchFiltersResponse, CarRentalSearchResponse, BookingRoomNameUpdateRequest, BookingUpdateRequest } from "./types";
export declare const CancelABookingApiAxiosParamCreator: (configuration?: Configuration) => {
    cancelTravelAgentBookingCartUsingPUT: (travelAgentId: number, id: number, fieldsToInclude?: string, options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
    cancelTravelAgentBookingUsingPUT: (travelAgentId: number, id: number, fieldsToInclude?: string, message?: string, options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
    deleteTravelAgentBookingRoomUsingDELETE: (travelAgentId: number, bookingId: number, id: number, fieldsToInclude?: string, options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
    getTravelAgentBookingCancellationFeeUsingGET: (travelAgentId: number, id: number, bookingRoomId?: number, fieldsToInclude?: string, options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
};
export declare const CancelABookingApiFp: (configuration?: Configuration) => {
    cancelTravelAgentBookingCartUsingPUT(travelAgentId: number, id: number, fieldsToInclude?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<BookingCartResponse>>;
    cancelTravelAgentBookingUsingPUT(travelAgentId: number, id: number, fieldsToInclude?: string, message?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<BookingResponse>>;
    deleteTravelAgentBookingRoomUsingDELETE(travelAgentId: number, bookingId: number, id: number, fieldsToInclude?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<BookingResponse>>;
    getTravelAgentBookingCancellationFeeUsingGET(travelAgentId: number, id: number, bookingRoomId?: number, fieldsToInclude?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<BookingCancellationFeeResponse>>;
};
export declare const CancelABookingApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    cancelTravelAgentBookingCartUsingPUT(travelAgentId: number, id: number, fieldsToInclude?: string, options?: any): AxiosPromise<BookingCartResponse>;
    cancelTravelAgentBookingUsingPUT(travelAgentId: number, id: number, fieldsToInclude?: string, message?: string, options?: any): AxiosPromise<BookingResponse>;
    deleteTravelAgentBookingRoomUsingDELETE(travelAgentId: number, bookingId: number, id: number, fieldsToInclude?: string, options?: any): AxiosPromise<BookingResponse>;
    getTravelAgentBookingCancellationFeeUsingGET(travelAgentId: number, id: number, bookingRoomId?: number, fieldsToInclude?: string, options?: any): AxiosPromise<BookingCancellationFeeResponse>;
};
export declare class CancelABookingApi extends BaseAPI {
    cancelTravelAgentBookingCartUsingPUT(id: number, fieldsToInclude?: string, options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<BookingCartResponse, any>>;
    cancelTravelAgentBookingUsingPUT(id: number, fieldsToInclude?: string, message?: string, options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<BookingResponse, any>>;
    deleteTravelAgentBookingRoomUsingDELETE(bookingId: number, id: number, fieldsToInclude?: string, options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<BookingResponse, any>>;
    getTravelAgentBookingCancellationFeeUsingGET(id: number, bookingRoomId?: number, fieldsToInclude?: string, options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<BookingCancellationFeeResponse, any>>;
}
export declare const GetABookingApiAxiosParamCreator: (configuration?: Configuration) => {
    getTravelAgentBookingCartUsingGET2: (travelAgentId?: number, fieldsToInclude?: string, options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
    getTravelAgentBookingCartUsingGET3: (id: number, fieldsToInclude?: string, options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
    getTravelAgentBookingUsingGET: (travelAgentId: number, id: number, fieldsToInclude?: string, options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
    getTravelAgentBookingsPageUsingGET: (keyword?: string, travelAgent?: string, property?: string, status?: string, start?: string, end?: string, allotmentId?: number, allotmentCampaignId?: number, bookingType?: string, subCooperationsBookings?: string, fieldsToInclude?: string, options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
};
export declare const GetABookingApiFp: (configuration?: Configuration) => {
    getTravelAgentBookingCartUsingGET2(travelAgentId?: number, fieldsToInclude?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<BookingCartResponse>>;
    getTravelAgentBookingCartUsingGET3(id: number, fieldsToInclude?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<BookingCartResponse>>;
    getTravelAgentBookingUsingGET(travelAgentId: number, id: number, fieldsToInclude?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<BookingResponse>>;
    getTravelAgentBookingsPageUsingGET(keyword?: string, travelAgent?: string, property?: string, status?: string, start?: string, end?: string, allotmentId?: number, allotmentCampaignId?: number, bookingType?: string, subCooperationsBookings?: string, fieldsToInclude?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PageBookingPageResponse>>;
};
export declare const GetABookingApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    getTravelAgentBookingCartUsingGET2(travelAgentId?: number, fieldsToInclude?: string, options?: any): AxiosPromise<BookingCartResponse>;
    getTravelAgentBookingCartUsingGET3(id: number, fieldsToInclude?: string, options?: any): AxiosPromise<BookingCartResponse>;
    getTravelAgentBookingUsingGET(travelAgentId: number, id: number, fieldsToInclude?: string, options?: any): AxiosPromise<BookingResponse>;
    getTravelAgentBookingsPageUsingGET(keyword?: string, travelAgent?: string, property?: string, status?: string, start?: string, end?: string, allotmentId?: number, allotmentCampaignId?: number, bookingType?: string, subCooperationsBookings?: string, fieldsToInclude?: string, options?: any): AxiosPromise<PageBookingPageResponse>;
};
export declare class GetABookingApi extends BaseAPI {
    getTravelAgentBookingCartUsingGET2(fieldsToInclude?: string, options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<BookingCartResponse, any>>;
    getTravelAgentBookingCartUsingGET3(id: number, fieldsToInclude?: string, options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<BookingCartResponse, any>>;
    getTravelAgentBookingUsingGET(travelAgentId: number, id: number, fieldsToInclude?: string, options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<BookingResponse, any>>;
    getTravelAgentBookingsPageUsingGET(keyword?: string, travelAgent?: string, property?: string, status?: string, start?: string, end?: string, allotmentId?: number, allotmentCampaignId?: number, bookingType?: string, subCooperationsBookings?: string, fieldsToInclude?: string, options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<PageBookingPageResponse, any>>;
}
export declare const GetPropertyContentApiAxiosParamCreator: (configuration?: Configuration) => {
    getPropertiesPageUsingGET: (travelAgentId?: number, page?: number, size?: number, fieldsToInclude?: string, options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
    getPropertyUsingGET: (travelAgentId: number, id: number, fieldsToInclude?: string, options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
};
export declare const GetPropertyContentApiFp: (configuration?: Configuration) => {
    getPropertiesPageUsingGET(travelAgentId?: number, page?: number, size?: number, fieldsToInclude?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PagePropertyExtendedResponse>>;
    getPropertyUsingGET(travelAgentId: number, id: number, fieldsToInclude?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PropertyExtendedResponse>>;
};
export declare const GetPropertyContentApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    getPropertiesPageUsingGET(travelAgentId?: number, page?: number, size?: number, fieldsToInclude?: string, options?: any): AxiosPromise<PagePropertyExtendedResponse>;
    getPropertyUsingGET(travelAgentId: number, id: number, fieldsToInclude?: string, options?: any): AxiosPromise<PropertyExtendedResponse>;
};
export declare class GetPropertyContentApi extends BaseAPI {
    getPropertiesPageUsingGET(page?: number, size?: number, fieldsToInclude?: string, options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<PagePropertyExtendedResponse, any>>;
    getPropertyUsingGET(id: number, fieldsToInclude?: string, options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<PropertyExtendedResponse, any>>;
}
export declare const GetTravelAgencyContentApiAxiosParamCreator: (configuration?: Configuration) => {
    getTravelAgentsUsingGET: (options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
};
export declare const GetTravelAgencyContentApiFp: (configuration?: Configuration) => {
    getTravelAgentsUsingGET(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<TravelAgentResponse>>>;
};
export declare const GetTravelAgencyContentApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    getTravelAgentsUsingGET(options?: any): AxiosPromise<Array<TravelAgentResponse>>;
};
export declare class GetTravelAgencyContentApi extends BaseAPI {
    getTravelAgentsUsingGET(options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<TravelAgentResponse[], any>>;
}
export declare const MakeABookingApiAxiosParamCreator: (configuration?: Configuration) => {
    addBookingRoomsToTravelAgentBookingUsingPOST: (travelAgentId: number, id: number, bookingRoomCreateRequest: BookingRoomCreateRequest, options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
    addBookingToTravelAgentBookingCartUsingPOST: (travelAgentId: number, bookingCreateRequest: BookingCreateRequest, createNewBookingCart?: boolean, options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
    addBookingsToTravelAgentBookingCartUsingPOST: (travelAgentId: number, bookingCartCreateRequest: BookingCartCreateRequest, options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
    confirmTravelAgentBookingCartUsingPOST: (travelAgentId: number, id: number, bookingCartConfirmRequest?: BookingCartConfirmRequest, options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
};
export declare const MakeABookingApiFp: (configuration?: Configuration) => {
    addBookingRoomsToTravelAgentBookingUsingPOST(travelAgentId: number, id: number, bookingRoomCreateRequest: BookingRoomCreateRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<BookingResponse>>;
    addBookingToTravelAgentBookingCartUsingPOST(travelAgentId: number, bookingCreateRequest: BookingCreateRequest, createNewBookingCart?: boolean, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<BookingCartResponse>>;
    addBookingsToTravelAgentBookingCartUsingPOST(travelAgentId: number, bookingCartCreateRequest: BookingCartCreateRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<BookingCartResponse>>;
    confirmTravelAgentBookingCartUsingPOST(travelAgentId: number, id: number, bookingCartConfirmRequest?: BookingCartConfirmRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<BookingCartResponse>>;
};
export declare const MakeABookingApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    addBookingRoomsToTravelAgentBookingUsingPOST(travelAgentId: number, id: number, bookingRoomCreateRequest: BookingRoomCreateRequest, options?: any): AxiosPromise<BookingResponse>;
    addBookingToTravelAgentBookingCartUsingPOST(travelAgentId: number, bookingCreateRequest: BookingCreateRequest, createNewBookingCart?: boolean, options?: any): AxiosPromise<BookingCartResponse>;
    addBookingsToTravelAgentBookingCartUsingPOST(travelAgentId: number, bookingCartCreateRequest: BookingCartCreateRequest, options?: any): AxiosPromise<BookingCartResponse>;
    confirmTravelAgentBookingCartUsingPOST(travelAgentId: number, id: number, bookingCartConfirmRequest?: BookingCartConfirmRequest, options?: any): AxiosPromise<BookingCartResponse>;
};
export declare class MakeABookingApi extends BaseAPI {
    addBookingRoomsToTravelAgentBookingUsingPOST(id: number, bookingRoomCreateRequest: BookingRoomCreateRequest, options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<BookingResponse, any>>;
    addBookingToTravelAgentBookingCartUsingPOST(bookingCreateRequest: BookingCreateRequest, createNewBookingCart?: boolean, options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<BookingCartResponse, any>>;
    addBookingsToTravelAgentBookingCartUsingPOST(bookingCartCreateRequest: BookingCartCreateRequest, options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<BookingCartResponse, any>>;
    confirmTravelAgentBookingCartUsingPOST(id: number, bookingCartConfirmRequest?: BookingCartConfirmRequest, options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<BookingCartResponse, any>>;
}
export declare const SearchAccommodationApiAxiosParamCreator: (configuration?: Configuration) => {
    getFiltersUsingGET: (travelAgentId?: number, options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
    retrievePropertyAvailableDatesUsingGET: (travelAgentId: number, propertyIds: string, start: string, end: string, options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
    searchPropertyRatesUsingPOST: (travelAgentId: number, request: PropertyRatesRequest, options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
    searchUsingPOST: (id: number, propertySearchFilterRequest: PropertySearchFilterRequest, options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
};
export declare const SearchAccommodationApiFp: (configuration?: Configuration) => {
    getFiltersUsingGET(travelAgentId?: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PropertySearchFiltersResponse>>;
    retrievePropertyAvailableDatesUsingGET(travelAgentId: number, propertyIds: string, start: string, end: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<PropertyAvailableDatesResponse>>>;
    searchPropertyRatesUsingPOST(travelAgentId: number, request: PropertyRatesRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PropertyRatesResponse>>;
    searchUsingPOST(id: number, propertySearchFilterRequest: PropertySearchFilterRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<PropertySearchResponse>>>;
};
export declare const SearchAccommodationApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    getFiltersUsingGET(travelAgentId?: number, options?: any): AxiosPromise<PropertySearchFiltersResponse>;
    retrievePropertyAvailableDatesUsingGET(travelAgentId: number, propertyIds: string, start: string, end: string, options?: any): AxiosPromise<Array<PropertyAvailableDatesResponse>>;
    searchPropertyRatesUsingPOST(travelAgentId: number, request: PropertyRatesRequest, options?: any): AxiosPromise<PropertyRatesResponse>;
    searchUsingPOST(id: number, propertySearchFilterRequest: PropertySearchFilterRequest, options?: any): AxiosPromise<Array<PropertySearchResponse>>;
};
export declare class SearchAccommodationApi extends BaseAPI {
    getFiltersUsingGET(travelAgentId?: number, options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<PropertySearchFiltersResponse, any>>;
    retrievePropertyAvailableDatesUsingGET(propertyIds: string, start: string, end: string, options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<PropertyAvailableDatesResponse[], any>>;
    searchPropertyRatesUsingPOST(request: PropertyRatesRequest, options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<PropertyRatesResponse, any>>;
    searchUsingPOST(propertySearchFilterRequest: PropertySearchFilterRequest, options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<PropertySearchResponse[], any>>;
}
export declare const SearchCarRentalApiAxiosParamCreator: (configuration?: Configuration) => {
    getFiltersUsingGET: (travelAgentId?: number, options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
    searchCarsUsingPOST: (travelAgentId: number, carRentalSearchRequest: CarRentalSearchRequest, options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
};
export declare const SearchCarRentalApiFp: (configuration?: Configuration) => {
    getFiltersUsingGET(travelAgentId?: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CarRentalSearchFiltersResponse>>;
    searchCarsUsingPOST(travelAgentId: number, carRentalSearchRequest: CarRentalSearchRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CarRentalSearchResponse>>;
};
export declare const SearchCarRentalApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    getFiltersUsingGET(travelAgentId?: number, options?: any): AxiosPromise<CarRentalSearchFiltersResponse>;
    searchCarsUsingPOST(travelAgentId: number, carRentalSearchRequest: CarRentalSearchRequest, options?: any): AxiosPromise<CarRentalSearchResponse>;
};
export declare class SearchCarRentalApi extends BaseAPI {
    getFiltersUsingGET(options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<CarRentalSearchFiltersResponse, any>>;
    searchCarsUsingPOST(carRentalSearchRequest: CarRentalSearchRequest, options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<CarRentalSearchResponse, any>>;
}
export declare const UpdateABookingApiAxiosParamCreator: (configuration?: Configuration) => {
    updateTravelAgentBookingNameListUsingPOST: (travelAgentId: number, id: number, bookingRoomNameUpdateRequests: Array<BookingRoomNameUpdateRequest>, options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
    updateTravelAgentBookingUsingPUT: (travelAgentId: number, id: number, bookingUpdateRequest: BookingUpdateRequest, options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
};
export declare const UpdateABookingApiFp: (configuration?: Configuration) => {
    updateTravelAgentBookingNameListUsingPOST(travelAgentId: number, id: number, bookingRoomNameUpdateRequests: Array<BookingRoomNameUpdateRequest>, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>>;
    updateTravelAgentBookingUsingPUT(travelAgentId: number, id: number, bookingUpdateRequest: BookingUpdateRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<BookingResponse>>;
};
export declare const UpdateABookingApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    updateTravelAgentBookingNameListUsingPOST(travelAgentId: number, id: number, bookingRoomNameUpdateRequests: Array<BookingRoomNameUpdateRequest>, options?: any): AxiosPromise<void>;
    updateTravelAgentBookingUsingPUT(travelAgentId: number, id: number, bookingUpdateRequest: BookingUpdateRequest, options?: any): AxiosPromise<BookingResponse>;
};
export declare class UpdateABookingApi extends BaseAPI {
    updateTravelAgentBookingNameListUsingPOST(id: number, bookingRoomNameUpdateRequests: Array<BookingRoomNameUpdateRequest>, options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<void, any>>;
    updateTravelAgentBookingUsingPUT(id: number, bookingUpdateRequest: BookingUpdateRequest, options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<BookingResponse, any>>;
}
