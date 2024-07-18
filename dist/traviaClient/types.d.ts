export interface ActivityPriceSearchCategoryRequest {
    categoryId?: number;
    quantity?: number;
}
export interface ActivityPriceSearchExtraRequest {
    categoryId?: number;
    extraId?: number;
    quantity?: number;
}
export interface BookingActivityCategoryPriceResponse {
    categories?: Array<BookingActivityCategoryResponse>;
    price?: number;
}
export interface BookingActivityCategoryResponse {
    categoryId?: number;
    name?: string;
    price?: number;
    quantity?: number;
    unitPrice?: number;
}
export interface BookingActivityDropOffResponse {
    categories?: Array<BookingActivityCategoryResponse>;
    dropOffPlaceId?: number;
    includedInPrice?: boolean;
    name?: string;
    price?: number;
}
export interface BookingActivityExtraResponse {
    categoryId?: number;
    extraId?: number;
    includedInPrice?: boolean;
    name?: string;
    price?: number;
    quantity?: number;
    unitPrice?: number;
}
export interface BookingActivityPickUpResponse {
    categories?: Array<BookingActivityCategoryResponse>;
    includedInPrice?: boolean;
    name?: string;
    pickUpPlaceId?: number;
    price?: number;
}
export interface BookingCancellationFeeResponse {
    bookingRoomCancellationPolicyLines?: Array<BookingRoomCancellationPolicyLineResponse>;
    cancellationPolicy?: CancellationPolicyResponse;
    currency?: CurrencyResponse;
    originalCurrency?: CurrencyResponse;
    totalCancellationFee?: number;
    totalOriginalCancellationFee?: number;
}
export interface BookingCarRentalExtrasResponse {
    code?: string;
    description?: string;
    name?: string;
    price?: number;
    quantity?: number;
}
export interface BookingCartConfirmRequest {
    fieldsToInclude?: Array<string>;
}
export interface BookingCartCreateRequest {
    bookings: Array<BookingCreateRequest>;
}
export interface BookingCartResponse {
    bookingCartStatusCode?: string;
    bookingCartStatusName?: string;
    bookings?: Array<BookingResponse>;
    bookingsSynchronizationSuccess?: boolean;
    currencyName?: string;
    currencySymbol?: string;
    id?: number;
    isFromAllotment?: boolean;
    statusDate?: string;
    travelAgentId?: number;
    travelAgentName?: string;
}
export interface BookingCreateActivityAnswerRequest {
    answers?: Array<string>;
    questionId?: number;
}
export interface BookingCreateActivityExtraAnswerRequest {
    answers?: Array<string>;
    extraId?: number;
    questionId?: number;
}
export interface BookingCreateActivityPassengerRequest {
    address: string;
    categoryId?: number;
    city?: string;
    country?: string;
    dateOfBirth?: string;
    email: string;
    extraAnswers?: Array<BookingCreateActivityExtraAnswerRequest>;
    firstName: string;
    flightNumber?: string;
    gender?: BookingCreateActivityPassengerRequestGenderEnum;
    lastName: string;
    nationality?: string;
    organization?: string;
    passengerAnswers?: Array<BookingCreateActivityAnswerRequest>;
    passportExpiry?: string;
    passportId?: string;
    personalIdNumber?: string;
    phoneNumber: string;
    postCode?: string;
    title?: BookingCreateActivityPassengerRequestTitleEnum;
}
export declare const BookingCreateActivityPassengerRequestGenderEnum: {
    readonly Male: "MALE";
    readonly Female: "FEMALE";
};
export type BookingCreateActivityPassengerRequestGenderEnum = (typeof BookingCreateActivityPassengerRequestGenderEnum)[keyof typeof BookingCreateActivityPassengerRequestGenderEnum];
export declare const BookingCreateActivityPassengerRequestTitleEnum: {
    readonly Mr: "MR";
    readonly Mrs: "MRS";
    readonly Miss: "MISS";
};
export type BookingCreateActivityPassengerRequestTitleEnum = (typeof BookingCreateActivityPassengerRequestTitleEnum)[keyof typeof BookingCreateActivityPassengerRequestTitleEnum];
export interface BookingCreateActivityRequest {
    activityId: number;
    bookingAnswers?: Array<BookingCreateActivityAnswerRequest>;
    categories: Array<ActivityPriceSearchCategoryRequest>;
    currency: string;
    date: string;
    dropOffPlaceId?: number;
    extraAnswers?: Array<BookingCreateActivityExtraAnswerRequest>;
    extras?: Array<ActivityPriceSearchExtraRequest>;
    passengers?: Array<BookingCreateActivityPassengerRequest>;
    pickUpPlaceId?: number;
    rateId: number;
    startTimeId: number;
    voucherNumber?: string;
}
export interface BookingCreateCarRentalExtrasRequest {
    code?: string;
    quantity?: number;
}
export interface BookingCreateCarRentalRequest {
    extras?: Array<BookingCreateCarRentalExtrasRequest>;
}
export interface BookingCreateCustomerRequest {
    address: string;
    city?: string;
    country?: string;
    dateOfBirth?: string;
    email: string;
    firstName: string;
    flightNumber?: string;
    gender?: BookingCreateCustomerRequestGenderEnum;
    lastName: string;
    nationality?: string;
    organization?: string;
    passportExpiry?: string;
    passportId?: string;
    personalIdNumber?: string;
    phoneNumber: string;
    postCode?: string;
    title?: BookingCreateCustomerRequestTitleEnum;
}
export declare const BookingCreateCustomerRequestGenderEnum: {
    readonly Male: "MALE";
    readonly Female: "FEMALE";
};
export type BookingCreateCustomerRequestGenderEnum = (typeof BookingCreateCustomerRequestGenderEnum)[keyof typeof BookingCreateCustomerRequestGenderEnum];
export declare const BookingCreateCustomerRequestTitleEnum: {
    readonly Mr: "MR";
    readonly Mrs: "MRS";
    readonly Miss: "MISS";
};
export type BookingCreateCustomerRequestTitleEnum = (typeof BookingCreateCustomerRequestTitleEnum)[keyof typeof BookingCreateCustomerRequestTitleEnum];
export interface BookingCreateRequest {
    bookingCarRental?: BookingCreateCarRentalRequest;
    bookingCartId?: number;
    bookingRooms?: Array<BookingCreateRoomRequest>;
    bookingTypeCode?: string;
    confirm: boolean;
    countryCode?: string;
    customer?: BookingCreateCustomerRequest;
    fieldsToInclude?: Array<string>;
    instant?: boolean;
    name: string;
    notes?: string;
    propertyId?: number;
    reference?: string;
}
export interface BookingCreateRoomAddOnRequest {
    quantity?: number;
    roomAddOnId?: number;
}
export interface BookingCreateRoomNameRequest {
    beddingOptions?: string;
    names?: string;
    roomOrderNumber?: number;
}
export interface BookingCreateRoomRequest {
    addBookingRoomAddOns?: Array<BookingCreateRoomAddOnRequest>;
    allotmentRoomId?: number;
    bookingRoomNames?: Array<BookingCreateRoomNameRequest>;
    breakfast?: boolean;
    endDate?: string;
    name?: string;
    notes?: string;
    pax?: number;
    quantity?: number;
    roomId?: number;
    startDate?: string;
    voucherNumber?: string;
}
export interface BookingCustomerDTO {
    address?: string;
    age?: number;
    contactInfo?: Contact;
    firstName?: string;
    flightNumber?: string;
    id?: number;
    lastName?: string;
    titleId?: number;
}
export interface BookingPageResponse {
    allotmentId?: number;
    bookingCartId?: number;
    bookingStatusCode?: string;
    bookingStatusEditable?: boolean;
    bookingStatusName?: string;
    bookingTypeName?: string;
    countryName?: string;
    currencyName?: string;
    currencySymbol?: string;
    dateCreated?: string;
    dateRequested?: string;
    endDate?: string;
    id?: number;
    instant?: boolean;
    name?: string;
    notes?: string;
    originalCurrencyName?: string;
    originalCurrencySymbol?: string;
    propertyId?: number;
    propertyName?: string;
    startDate?: string;
    statusDate?: string;
    synchronizationSuccess?: boolean;
    totalOriginalPrice?: number;
    totalPax?: number;
    totalPrice?: number;
    totalQuantity?: number;
    travelAgentId?: number;
    travelAgentName?: string;
}
export interface BookingResponse {
    bookingCartId?: number;
    bookingRooms?: Array<BookingRoomResponse>;
    bookingStatusCode?: string;
    bookingStatusEditable?: boolean;
    bookingStatusName?: string;
    bookingTypeCode?: string;
    cancellationPolicyDescription?: string;
    countryCode?: string;
    countryName?: string;
    dateCreated?: string;
    dateRequested?: string;
    dropOffDateTime?: string;
    endDate?: string;
    externalIdentifier?: string;
    id?: number;
    instant?: boolean;
    instantBookingsLimit?: number;
    manualSynchronization?: boolean;
    manualSynchronizationMessage?: string;
    name?: string;
    notes?: string;
    originalCurrencyName?: string;
    originalCurrencySymbol?: string;
    pickUpDateTime?: string;
    propertyCheckInEndTime?: string;
    propertyCheckInStartTime?: string;
    propertyCheckOutEndTime?: string;
    propertyCheckOutStartTime?: string;
    propertyId?: number;
    propertyName?: string;
    propertySameDayBooking?: boolean;
    propertySelfCheckInOnly?: boolean;
    propertySelfCheckInPossible?: boolean;
    rateReference?: string;
    startDate?: string;
    statusDate?: string;
    synchronizationMessage?: string;
    synchronizationSuccess?: boolean;
    totalOriginalPrice?: number;
    totalPax?: number;
    totalPrice?: number;
    totalQuantity?: number;
    travelAgentId?: number;
    travelAgentName?: string;
    vehicleName?: string;
    vehiclePrice?: number;
    voucherNumber?: string;
}
export interface BookingRoomAddOnResponse {
    addOnCategoryCode?: string;
    addOnCategoryName?: string;
    addOnCode?: string;
    addOnDescription?: string;
    addOnName?: string;
    bookingRoomId?: number;
    currencyCode?: string;
    currencySymbol?: string;
    id?: number;
    maxQuantity?: number;
    originalCurrencyCode?: string;
    originalCurrencySymbol?: string;
    originalPrice?: number;
    price?: number;
    quantity?: number;
    roomId?: number;
}
export interface BookingRoomCancellationPolicyLineResponse {
    bookingRoom?: BookingRoomResponse;
    cancellationFee?: number;
    cancellationPolicyLine?: CancellationPolicyLineResponse;
    currencySymbol?: string;
    originalCancellationFee?: number;
    originalCurrencySymbol?: string;
}
export interface BookingRoomCreateRequest {
    bookingRooms?: Array<BookingCreateRoomRequest>;
    fieldsToInclude?: Array<string>;
}
export interface BookingRoomNameResponse {
    beddingOptions?: string;
    bookingRoomId?: number;
    id?: number;
    names?: string;
    roomOrderNumber?: number;
}
export interface BookingRoomNameUpdateRequest {
    beddingOptions?: string;
    bookingRoomId?: number;
    names?: string;
    roomOrderNumber?: number;
}
export interface BookingRoomResponse {
    allotmentRoomId?: number;
    availableQuantity?: number;
    bookingRoomAddOns?: Array<BookingRoomAddOnResponse>;
    bookingRoomNames?: Array<BookingRoomNameResponse>;
    breakfast?: boolean;
    breakfastAvailable?: boolean;
    breakfastIncluded?: boolean;
    cancellationPolicyLines?: Array<CancellationPolicyLineResponse>;
    currencyCode?: string;
    currencyName?: string;
    currencySymbol?: string;
    discount?: number;
    discountDescription?: string;
    endDate?: string;
    externalPriceUsed?: boolean;
    extraBedOriginalPrice?: number;
    extraBedPrice?: number;
    id?: number;
    name?: string;
    notes?: string;
    numberOfNights?: number;
    originalCurrencyCode?: string;
    originalCurrencyName?: string;
    originalCurrencySymbol?: string;
    originalPrice?: number;
    pax?: number;
    price?: number;
    propertyAddress?: string;
    propertyCity?: string;
    propertyId?: number;
    propertyName?: string;
    quantity?: number;
    roomBeddingOptionsString?: string;
    roomBreakfastDescription?: string;
    roomCategoryCode?: string;
    roomCategoryName?: string;
    roomExtraBed?: boolean;
    roomExtraBedDescription?: string;
    roomExtraBedQuantity?: number;
    roomId?: number;
    roomMaxOccupancy?: number;
    roomMinOccupancy?: number;
    roomName?: string;
    roomQuantity?: number;
    roomTypeCode?: string;
    roomTypeName?: string;
    startDate?: string;
    totalBreakfastPrice?: number;
    totalOriginalBreakfastPrice?: number;
    totalOriginalPrice?: number;
    totalPrice?: number;
    voucherNumber?: string;
}
export interface BookingUpdateRequest {
    bookingRooms?: Array<BookingUpdateRoomRequest>;
    countryCode?: string;
    fieldsToInclude?: Array<string>;
    name?: string;
    notes?: string;
}
export interface BookingUpdateRoomRequest {
    allotmentRoomId?: number;
    endDate?: string;
    id?: number;
    name?: string;
    notes?: string;
    pax?: number;
    quantity?: number;
    startDate?: string;
    voucherNumber?: string;
}
export interface CancellationPolicyLineResponse {
    interval?: string;
    percentage?: number;
    toPeriod?: number;
}
export interface CancellationPolicyResponse {
    cancellationPolicyRules?: Array<CancellationPolicyRuleResponse>;
    description?: string;
    name?: string;
    propertyId?: number;
    propertyName?: string;
}
export interface CancellationPolicyRuleResponse {
    cancellationPolicyLines?: Array<CancellationPolicyLineResponse>;
    rangeRoomsFrom?: number;
    rangeRoomsTo?: number;
}
export interface CarRentalBranchResponse {
    address?: string;
    id?: string;
    latitude?: number;
    longitude?: number;
    openHoursText?: string;
    pickUpDayOpenHours?: string;
    specialInstructions?: string;
    supplier?: CarRentalSupplierResponse;
}
export interface CarRentalFilterResponse {
    code?: string;
    name?: string;
}
export interface CarRentalImageResponse {
    size?: CarRentalImageResponseSizeEnum;
    url?: string;
}
export declare const CarRentalImageResponseSizeEnum: {
    readonly Small: "SMALL";
    readonly Medium: "MEDIUM";
    readonly Large: "LARGE";
    readonly Xlarge: "XLARGE";
    readonly Original: "ORIGINAL";
    readonly Vector: "VECTOR";
};
export type CarRentalImageResponseSizeEnum = (typeof CarRentalImageResponseSizeEnum)[keyof typeof CarRentalImageResponseSizeEnum];
export interface CarRentalPackageCoverageResponse {
    code?: number;
    currency?: string;
    includedInVehiclePrice?: boolean;
    name?: string;
    price?: number;
}
export interface CarRentalPackageExtraResponse {
    code?: string;
    currency?: string;
    description?: string;
    maxQuantity?: number;
    name?: string;
    price?: number;
}
export interface CarRentalPackageInclusionResponse {
    code?: string;
    description?: string;
    name?: string;
}
export interface CarRentalPackageResponse {
    coverages?: Array<CarRentalPackageCoverageResponse>;
    currency?: string;
    defaultPackage?: boolean;
    extras?: Array<CarRentalPackageExtraResponse>;
    inclusions?: Array<CarRentalPackageInclusionResponse>;
    price?: number;
    rateReference?: string;
}
export interface CarRentalSearchDriverRequest {
    age: number;
    residenceCountryCode: string;
}
export interface CarRentalSearchFiltersResponse {
    categories?: Array<CarRentalFilterResponse>;
    fuelTypes?: Array<CarRentalFilterResponse>;
    passengerCapacityGroups?: Array<CarRentalFilterResponse>;
    transmissionTypes?: Array<CarRentalFilterResponse>;
    types?: Array<CarRentalFilterResponse>;
}
export interface CarRentalSearchPointRequest {
    dateTime: string;
    geoRange: GeoRangeQueryDTO;
}
export interface CarRentalSearchRequest {
    categories?: Array<string>;
    driver: CarRentalSearchDriverRequest;
    dropOff: CarRentalSearchPointRequest;
    fieldsToInclude?: Array<string>;
    fuelTypes?: Array<string>;
    passengerCapacityGroups?: Array<string>;
    pickUp: CarRentalSearchPointRequest;
    transmissionTypes?: Array<string>;
    types?: Array<string>;
    vehicleImageSizes?: Array<CarRentalSearchRequestVehicleImageSizesEnum>;
}
export declare const CarRentalSearchRequestVehicleImageSizesEnum: {
    readonly Small: "SMALL";
    readonly Medium: "MEDIUM";
    readonly Large: "LARGE";
    readonly Original: "ORIGINAL";
    readonly Vector: "VECTOR";
};
export type CarRentalSearchRequestVehicleImageSizesEnum = (typeof CarRentalSearchRequestVehicleImageSizesEnum)[keyof typeof CarRentalSearchRequestVehicleImageSizesEnum];
export interface CarRentalSearchResponse {
    branches?: Array<CarRentalBranchResponse>;
    vehicles?: Array<CarRentalVehicleRateResponse>;
}
export interface CarRentalSupplierResponse {
    images?: Array<CarRentalImageResponse>;
    name?: string;
}
export interface CarRentalVehicleRateResponse {
    dropOffBranchId?: string;
    packages?: Array<CarRentalPackageResponse>;
    pickUpBranchId?: string;
    vehicle?: CarRentalVehicleResponse;
}
export interface CarRentalVehicleResponse {
    airco?: boolean;
    bigSuitcases?: number;
    builtInGps?: boolean;
    category?: string;
    doors?: string;
    fuel?: string;
    id?: number;
    images?: Array<CarRentalImageResponse>;
    name?: string;
    seats?: string;
    smallSuitcases?: number;
    transmission?: string;
    type?: string;
}
export interface Contact {
    email?: string;
    fax?: string;
    mobile?: string;
    name?: string;
    phone?: string;
    website?: string;
}
export interface ContactResponse {
    email?: string;
    fax?: string;
    mobile?: string;
    phone?: string;
    secondaryEmail?: string;
    url?: string;
}
export interface CurrencyResponse {
    code?: string;
    name?: string;
    symbol?: string;
}
export interface FileResponse {
    alt?: string;
    filePath?: string;
    orderNumber?: number;
    thumbnailPath?: string;
}
export interface GeoPoint {
    lat?: number;
    lon?: number;
}
export interface GeoRangeQueryDTO {
    latitude: number;
    longitude: number;
    range: number;
}
export interface LocationResponse {
    address?: string;
    city?: string;
    country?: string;
    latitude?: number;
    longitude?: number;
    municipality?: string;
    postalCode?: string;
    region?: string;
    state?: string;
}
export interface PageBookingPageResponse {
    content?: Array<BookingPageResponse>;
    empty?: boolean;
    first?: boolean;
    last?: boolean;
    number?: number;
    numberOfElements?: number;
    pageable?: Pageable;
    size?: number;
    sort?: Sort;
    totalElements?: number;
    totalPages?: number;
}
export interface PagePropertyExtendedResponse {
    content?: Array<PropertyExtendedResponse>;
    empty?: boolean;
    first?: boolean;
    last?: boolean;
    number?: number;
    numberOfElements?: number;
    pageable?: Pageable;
    size?: number;
    sort?: Sort;
    totalElements?: number;
    totalPages?: number;
}
export interface Pageable {
    offset?: number;
    pageNumber?: number;
    pageSize?: number;
    paged?: boolean;
    sort?: Sort;
    unpaged?: boolean;
}
export interface ParameterWrapper {
    age?: number;
    numberOfPeople?: number;
}
export interface ProductCategoryResponse {
    addOns?: Array<RoomAddOnResponse>;
    addonNames?: Array<string>;
    code?: string;
    name?: string;
}
export interface PropertyAmenityResponse {
    code?: string;
    description?: string;
    name?: string;
    orderPriority?: string;
}
export interface PropertyAvailableDatesResponse {
    availableDates?: Array<Date>;
    id?: number;
    name?: string;
}
export interface PropertyExtendedResponse {
    additionalDescription?: string;
    bookAllotmentFirst?: boolean;
    checkInEndTime?: string;
    checkInStartTime?: string;
    checkOutEndTime?: string;
    contact?: ContactResponse;
    cooperationBookRegularFirst?: boolean;
    coverPhoto?: FileResponse;
    currencyCode?: string;
    description?: string;
    id?: number;
    images?: Array<FileResponse>;
    launched?: boolean;
    location?: LocationResponse;
    logo?: FileResponse;
    name?: string;
    propertyAmenities?: Array<PropertyAmenityResponse>;
    propertyAmenityCodes?: Array<string>;
    propertyAmenityNames?: Array<string>;
    propertyTypeCode?: string;
    propertyTypeName?: string;
    registryNumber?: string;
    rooms?: Array<RoomExtendedResponse>;
    sameDayBooking?: boolean;
    selfCheckInOnly?: boolean;
    selfCheckInPossible?: boolean;
}
export interface PropertyRatesBookingRoomAddOnRequest {
    quantity: number;
    roomAddOnId: number;
}
export interface PropertyRatesBookingRoomAddOnResponse {
    id?: number;
    maxQuantity?: number;
    name?: string;
    price?: number;
    quantity?: number;
    unitPrice?: number;
}
export interface PropertyRatesBookingRoomRequest {
    addBookingRoomAddOns?: Array<PropertyRatesBookingRoomAddOnRequest>;
    allotmentRoomId?: number;
    bookingRoomId?: number;
    endDate: string;
    pax: number;
    quantity: number;
    roomId: number;
    startDate: string;
}
export interface PropertyRatesBookingRoomResponse {
    addOns?: Array<PropertyRatesBookingRoomAddOnResponse>;
    allotmentRoomId?: number;
    availableQuantity: number;
    breakfastAvailable: boolean;
    breakfastIncluded?: boolean;
    breakfastPrice?: number;
    currencyCode: string;
    endDate: string;
    extraBedPrice?: number;
    maxOccupancy: number;
    maxOccupancyWithExtraBed: number;
    minOccupancy: number;
    numberOfExtraBeds: number;
    pax: number;
    price: number;
    quantity: number;
    roomId: number;
    startDate: string;
    totalPrice: number;
    totalPriceWithBreakfast: number;
}
export interface PropertyRatesRequest {
    bookingId?: number;
    bookingRooms: Array<PropertyRatesBookingRoomRequest>;
    propertyId: number;
}
export interface PropertyRatesResponse {
    bookingRooms: Array<PropertyRatesBookingRoomResponse>;
    propertyId: number;
    reference?: string;
}
export interface PropertySearchAllotmentExceptionDateResponse {
    allotmentRoomExceptionDates?: Array<PropertySearchAllotmentRoomExceptionDateResponse>;
    endDate?: string;
    id?: number;
    startDate?: string;
}
export interface PropertySearchAllotmentResponse {
    allotmentAutoReleaseDate?: string;
    allotmentAutoReleaseDays?: number;
    allotmentAutoReleaseTypeCode?: string;
    allotmentAutoReleaseTypeName?: string;
    allotmentCampaignId?: number;
    allotmentCampaignName?: string;
    allotmentCampaignTypePropertyCode?: string;
    allotmentCampaignTypeTravelAgentCode?: string;
    allotmentExceptionDates?: Array<PropertySearchAllotmentExceptionDateResponse>;
    allotmentGroupId?: number;
    allotmentGroupName?: string;
    allotmentRooms?: Array<PropertySearchAllotmentRoomResponse>;
    allotmentStatusCode?: string;
    allotmentStatusName?: string;
    autoRelease?: boolean;
    autoReleased?: string;
    cancellationPolicyId?: number;
    cancellationPolicyName?: string;
    endDate?: string;
    fill?: number;
    id?: number;
    issuedByEntity?: string;
    name?: string;
    priceAgreementId?: number;
    propertyAllotmentName?: string;
    propertyCheckInEndTime?: string;
    propertyId?: number;
    propertyName?: string;
    propertySameDayBooking?: boolean;
    releasePeriod?: number;
    releasePeriodInterval?: string;
    startDate?: string;
    stopOrder?: number;
    travelAgentId?: number;
    travelAgentName?: string;
}
export interface PropertySearchAllotmentRoomDailyAvailabilityResponse {
    availability?: number;
    date?: string;
}
export interface PropertySearchAllotmentRoomExceptionDateResponse {
    allotmentRoomCategoryName?: string;
    allotmentRoomId?: number;
    id?: number;
    quantityAvailable?: number;
}
export interface PropertySearchAllotmentRoomItemResponse {
    allotmentRoomId?: number;
    id?: number;
    roomId?: number;
    roomName?: string;
    roomTypeName?: string;
}
export interface PropertySearchAllotmentRoomPriceResponse {
    averageDailyPrice?: number;
    breakfastAvailable?: boolean;
    breakfastIncluded?: boolean;
    convertedCurrencyCode?: string;
    convertedCurrencySymbol?: string;
    discount?: number;
    discountDescription?: string;
    extraBedOriginalPrice?: number;
    extraBedPrice?: number;
    originalCurrencyCode?: string;
    originalCurrencySymbol?: string;
    priceAgreementId?: number;
    priceAgreementName?: string;
    roomId?: number;
    totalBreakfastPrice?: number;
    totalOriginalBreakfastPrice?: number;
    totalOriginalPrice?: number;
    totalPrice?: number;
    totalUnitOriginalPrice?: number;
    totalUnitPrice?: number;
}
export interface PropertySearchAllotmentRoomResponse {
    allotmentRoomItems?: Array<PropertySearchAllotmentRoomItemResponse>;
    autoReleased?: string;
    availableQuantity?: number;
    dailyAvailabilities?: Array<PropertySearchAllotmentRoomDailyAvailabilityResponse>;
    endDate?: string;
    id?: number;
    pax?: number;
    paxRequested?: number;
    quantity?: number;
    quantityRequested?: number;
    quantityUsed?: number;
    releaseDate?: string;
    releasePeriod?: number;
    releasePeriodInterval?: string;
    roomCategoryRequestedCode?: string;
    roomCategoryRequestedId?: number;
    roomCategoryRequestedName?: string;
    roomCategoryRequestedOrderPriority?: number;
    roomCategoryRequestedRoomTypes?: Array<string>;
    roomPrices?: Array<PropertySearchAllotmentRoomPriceResponse>;
    startDate?: string;
    synchronizedAs?: string;
}
export interface PropertySearchFilterRequest {
    checkAvailability?: boolean;
    distance?: number;
    end?: string;
    fieldsToInclude?: Array<string>;
    keyword?: string;
    latitude?: number;
    longitude?: number;
    maxConfigurationResults?: number;
    minPrices?: boolean;
    northEastLatitude?: number;
    northEastLongitude?: number;
    numberOfExtraBeds?: number;
    numberOfPeople?: number;
    numberOfRooms?: number;
    occupancyType?: PropertySearchFilterRequestOccupancyTypeEnum;
    page?: number;
    preferredConfiguration?: Array<RoomAllocationRequest>;
    propertiesWithPriceLimit?: number;
    propertyAmenityCodes?: Array<string>;
    propertyIds?: Array<number>;
    propertyType?: Array<string>;
    roomAmenityCodes?: Array<string>;
    roomCategoryCodes?: Array<string>;
    roomType?: Array<string>;
    showOnlyFitAllotments?: boolean;
    showPropertiesWithoutCooperation?: boolean;
    size?: number;
    southWestLatitude?: number;
    southWestLongitude?: number;
    start?: string;
    tourId?: number;
}
export declare const PropertySearchFilterRequestOccupancyTypeEnum: {
    readonly PerRoom: "PER_ROOM";
    readonly Total: "TOTAL";
};
export type PropertySearchFilterRequestOccupancyTypeEnum = (typeof PropertySearchFilterRequestOccupancyTypeEnum)[keyof typeof PropertySearchFilterRequestOccupancyTypeEnum];
export interface PropertySearchFiltersResponse {
    propertyAmenities?: Array<PropertyAmenityResponse>;
    propertyTypes?: Array<PropertyTypeResponse>;
    roomAmenities?: Array<RoomAmenityResponse>;
    roomTypes?: Array<RoomTypeResponse>;
}
export interface PropertySearchLocationResponse {
    address?: string;
    city?: string;
    country?: string;
    geoPoint?: GeoPoint;
    municipality?: string;
    postalCode?: string;
    region?: string;
    state?: string;
}
export interface PropertySearchResponse {
    activeCooperation?: boolean;
    additionalDescription?: string;
    allotments?: Array<PropertySearchAllotmentResponse>;
    availabilityChecked?: boolean;
    availableCapacity?: number;
    availableRooms?: number;
    bookAllotmentFirst?: boolean;
    checkInEndTime?: string;
    checkInStartTime?: string;
    checkOutEndTime?: string;
    contact?: ContactResponse;
    cooperationBookRegularFirst?: boolean;
    coverPhoto?: FileResponse;
    currencyCode?: string;
    description?: string;
    fullAvailability?: boolean;
    id?: number;
    images?: Array<FileResponse>;
    launched?: boolean;
    location?: PropertySearchLocationResponse;
    logo?: FileResponse;
    name?: string;
    pricesFrom?: number;
    pricesFromCurrencyCode?: string;
    pricesFromCurrencySymbol?: string;
    pricesLoaded?: boolean;
    propertyAmenities?: Array<PropertyAmenityResponse>;
    propertyAmenityCodes?: Array<string>;
    propertyAmenityNames?: Array<string>;
    propertyTypeCode?: string;
    propertyTypeName?: string;
    registryNumber?: string;
    roomConfigurations?: Array<RoomConfigurationDTO>;
    rooms?: Array<PropertySearchRoomResponse>;
    sameDayBooking?: boolean;
    selfCheckInOnly?: boolean;
    selfCheckInPossible?: boolean;
    totalCapacity?: number;
    totalRooms?: number;
    visibleForCooperation?: boolean;
}
export interface PropertySearchRoomAddOnResponse {
    addOnCategoryName?: string;
    addOnId?: number;
    bookingRoomId?: number;
    code?: string;
    currencyCode?: string;
    currencySymbol?: string;
    id?: number;
    maxQuantity?: number;
    name?: string;
    originalCurrencyCode?: string;
    originalCurrencySymbol?: string;
    originalPrice?: number;
    pax?: number;
    price?: number;
    quantity?: number;
    roomId?: number;
    unitOriginalPrice?: number;
    unitPrice?: number;
}
export interface PropertySearchRoomAmenityTypeResponse {
    code?: string;
    name?: string;
    roomAmenityNames?: Array<string>;
}
export interface PropertySearchRoomPriceResponse {
    breakfastAvailable?: boolean;
    breakfastIncluded?: boolean;
    extraBedPrice?: number;
    numberOfPeople?: number;
    price?: number;
    totalBreakfastPrice?: number;
}
export interface PropertySearchRoomResponse {
    additionalDescription?: string;
    allottedRoomQuantity?: number;
    availabilityChecked?: boolean;
    available?: boolean;
    availableQuantity?: number;
    averageDailyPrice?: number;
    beddingOptions?: string;
    breakfastAddOnDescription?: string;
    breakfastAvailable?: boolean;
    breakfastIncluded?: boolean;
    code?: string;
    currencyCode?: string;
    currencySymbol?: string;
    defaultBeddingOptions?: string;
    description?: string;
    discount?: number;
    discountDescription?: string;
    endDay?: number;
    endMonth?: number;
    externalPriceUsed?: boolean;
    extraBed?: boolean;
    extraBedAddOnDescription?: string;
    extraBedOriginalPrice?: number;
    extraBedPrice?: number;
    extraBedQuantity?: number;
    id?: number;
    images?: Array<FileResponse>;
    instantBookingQuantity?: number;
    maxOccupancy?: number;
    minOccupancy?: number;
    name?: string;
    numberOfNights?: number;
    originalCurrencyCode?: string;
    originalCurrencySymbol?: string;
    originalPrice?: number;
    price?: number;
    prices?: Array<PropertySearchRoomPriceResponse>;
    propertyId?: number;
    quantity?: number;
    regularRoomQuantity?: number;
    roomAddOnSearchList?: Array<PropertySearchRoomAddOnResponse>;
    roomAddonCategories?: Array<ProductCategoryResponse>;
    roomAmenities?: Array<RoomAmenityResponse>;
    roomAmenityCodes?: Array<string>;
    roomAmenityTypes?: Array<PropertySearchRoomAmenityTypeResponse>;
    roomCategoryCode?: string;
    roomCategoryName?: string;
    roomSize?: number;
    roomTypeCode?: string;
    roomTypeName?: string;
    startDay?: number;
    startMonth?: number;
    totalBreakfastPrice?: number;
    totalOriginalBreakfastPrice?: number;
    wholeYearAvailability?: boolean;
}
export interface PropertyTypeResponse {
    code?: string;
    name?: string;
}
export interface RoomAddOnResponse {
    id?: number;
    maxQuantity?: number;
    name?: string;
}
export interface RoomAllocationDTO {
    allotmentRoomId?: number;
    bookingRoomId?: number;
    breakfastAvailable: boolean;
    breakfastIncluded: boolean;
    breakfastPrice: number;
    childrenAges: Array<number>;
    childrenByAgeGroup?: Array<ParameterWrapper>;
    code?: string;
    extraBedPrice: number;
    extraBedQuantity: number;
    id: number;
    numberOfAdults: number;
    numberOfChildren: number;
    numberOfPeople: number;
    price: number;
    quantity?: number;
    roomId: number;
    roomPrice: number;
}
export interface RoomAllocationRequest {
    childrenAges?: Array<number>;
    includeBreakfast?: boolean;
    numberOfAdults?: number;
    numberOfChildren?: number;
    numberOfPeople?: number;
}
export interface RoomAmenityResponse {
    code?: string;
    description?: string;
    id?: number;
    name?: string;
    orderPriority?: number;
    roomAmenityTypeCode?: string;
    roomAmenityTypeName?: string;
}
export interface RoomAmenityTypeResponse {
    code?: string;
    name?: string;
    roomAmenityNames?: Array<string>;
}
export interface RoomConfigurationDTO {
    currencyCode: string;
    roomAllocations: Array<RoomAllocationDTO>;
    totalBreakfastPrice: number;
    totalExtraBedPrice: number;
    totalPrice: number;
    totalRoomPrice: number;
}
export interface RoomExtendedResponse {
    additionalDescription?: string;
    beddingOptions?: string;
    breakfastAddOnDescription?: string;
    code?: string;
    defaultBeddingOptions?: string;
    description?: string;
    endDay?: number;
    endMonth?: number;
    extraBed?: boolean;
    extraBedAddOnDescription?: string;
    extraBedQuantity?: number;
    id?: number;
    images?: Array<FileResponse>;
    instantBookingQuantity?: number;
    maxOccupancy?: number;
    minOccupancy?: number;
    name?: string;
    propertyId?: number;
    quantity?: number;
    roomAddonCategories?: Array<ProductCategoryResponse>;
    roomAmenities?: Array<RoomAmenityResponse>;
    roomAmenityCodes?: Array<string>;
    roomAmenityTypes?: Array<RoomAmenityTypeResponse>;
    roomCategoryCode?: string;
    roomCategoryName?: string;
    roomSize?: number;
    roomTypeCode?: string;
    roomTypeName?: string;
    startDay?: number;
    startMonth?: number;
    wholeYearAvailability?: boolean;
}
export interface RoomTypeResponse {
    code?: string;
    name?: string;
}
export interface Sort {
    empty?: boolean;
    sorted?: boolean;
    unsorted?: boolean;
}
export interface TravelAgentResponse {
    id?: number;
    name?: string;
}
