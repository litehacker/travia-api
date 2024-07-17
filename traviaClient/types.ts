/**
 * Model representing the details of a selected pricing category and its quantity.
 * @export
 * @interface ActivityPriceSearchCategoryRequest
 */
export interface ActivityPriceSearchCategoryRequest {
  /**
   * Unique identifier of the pricing category, e.g. Adult, Child.
   * @type {number}
   * @memberof ActivityPriceSearchCategoryRequest
   */
  categoryId?: number;
  /**
   * Quantity selected for this pricing category.
   * @type {number}
   * @memberof ActivityPriceSearchCategoryRequest
   */
  quantity?: number;
}
/**
 * Model representing the details of an extra selected for the booking.
 * @export
 * @interface ActivityPriceSearchExtraRequest
 */
export interface ActivityPriceSearchExtraRequest {
  /**
   * Identifier of the pricing category to which this extra is related if it is pricer per category.
   * @type {number}
   * @memberof ActivityPriceSearchExtraRequest
   */
  categoryId?: number;
  /**
   * Unique identifier of the selected extra.
   * @type {number}
   * @memberof ActivityPriceSearchExtraRequest
   */
  extraId?: number;
  /**
   * Quantity of this extra required.
   * @type {number}
   * @memberof ActivityPriceSearchExtraRequest
   */
  quantity?: number;
}
/**
 * Model representing the overall and individual prices for the selected categories.
 * @export
 * @interface BookingActivityCategoryPriceResponse
 */
export interface BookingActivityCategoryPriceResponse {
  /**
   * List of configurations for each selected category. It provides configurations for each category like adult, child, youth etc. The \'unitPrice\' and \'price\' fields in each category will only be populated if pricing is per category. Will not be empty; it will contain category configurations regardless of pricing type.
   * @type {Array<BookingActivityCategoryResponse>}
   * @memberof BookingActivityCategoryPriceResponse
   */
  categories?: Array<BookingActivityCategoryResponse>;
  /**
   * The total price for the selected categories.
   * @type {number}
   * @memberof BookingActivityCategoryPriceResponse
   */
  price?: number;
}
/**
 * Model representing the configurations and, when applicable, prices for a specific category.
 * @export
 * @interface BookingActivityCategoryResponse
 */
export interface BookingActivityCategoryResponse {
  /**
   * Identifier representing the price category.
   * @type {number}
   * @memberof BookingActivityCategoryResponse
   */
  categoryId?: number;
  /**
   * Specifies title of the price category.
   * @type {string}
   * @memberof BookingActivityCategoryResponse
   */
  name?: string;
  /**
   * The total price for all participants in this category, calculated as \'quantity\' * \'unitPrice\'. It will be populated only when pricing is per category. Can be null if pricing is per booking.
   * @type {number}
   * @memberof BookingActivityCategoryResponse
   */
  price?: number;
  /**
   * The number of participants of this category.
   * @type {number}
   * @memberof BookingActivityCategoryResponse
   */
  quantity?: number;
  /**
   * The price per participant in this category. It will be populated only when pricing is per category. Can be null if pricing is per booking.
   * @type {number}
   * @memberof BookingActivityCategoryResponse
   */
  unitPrice?: number;
}
/**
 * Model representing the details and, when applicable, prices for the drop-off service.
 * @export
 * @interface BookingActivityDropOffResponse
 */
export interface BookingActivityDropOffResponse {
  /**
   * List of configurations for each selected category related to the drop-off service. It provides configurations and, when applicable, prices for each category like adult, child, youth etc. Will not be empty; it will contain category configurations regardless of the \'includedInPrice\' value.
   * @type {Array<BookingActivityCategoryResponse>}
   * @memberof BookingActivityDropOffResponse
   */
  categories?: Array<BookingActivityCategoryResponse>;
  /**
   * Identifier representing the drop-off place.
   * @type {number}
   * @memberof BookingActivityDropOffResponse
   */
  dropOffPlaceId?: number;
  /**
   * Indicates whether the price of the drop-off service is included in the price of the booking. If true, \'price\' will be null.
   * @type {boolean}
   * @memberof BookingActivityDropOffResponse
   */
  includedInPrice?: boolean;
  /**
   * Title of the travel location
   * @type {string}
   * @memberof BookingActivityDropOffResponse
   */
  name?: string;
  /**
   * The total price for the drop-off service. It will be null if \'includedInPrice\' is true.
   * @type {number}
   * @memberof BookingActivityDropOffResponse
   */
  price?: number;
}
/**
 * Model representing the details and prices for the extras included in the activity.
 * @export
 * @interface BookingActivityExtraResponse
 */
export interface BookingActivityExtraResponse {
  /**
   * Identifier of the category the extra is associated with if it\'s priced per category
   * @type {number}
   * @memberof BookingActivityExtraResponse
   */
  categoryId?: number;
  /**
   * Identifier representing the extra.
   * @type {number}
   * @memberof BookingActivityExtraResponse
   */
  extraId?: number;
  /**
   * Indicates whether the price of the extra is included in the price of the booking. If true, \'price\' will be null.
   * @type {boolean}
   * @memberof BookingActivityExtraResponse
   */
  includedInPrice?: boolean;
  /**
   * Specifies title of the extra.
   * @type {string}
   * @memberof BookingActivityExtraResponse
   */
  name?: string;
  /**
   * The total price for this extra. It will be null if \'includedInPrice\' is true.
   * @type {number}
   * @memberof BookingActivityExtraResponse
   */
  price?: number;
  /**
   * Quantity of this extra included in the booking.
   * @type {number}
   * @memberof BookingActivityExtraResponse
   */
  quantity?: number;
  /**
   * Price per unit of this extra if it\'s priced per category.
   * @type {number}
   * @memberof BookingActivityExtraResponse
   */
  unitPrice?: number;
}
/**
 * Model representing the details and, when applicable, prices for the pick-up service.
 * @export
 * @interface BookingActivityPickUpResponse
 */
export interface BookingActivityPickUpResponse {
  /**
   * List of configurations for each selected category related to the pick-up service. It provides configurations and, when applicable, prices for each category like adult, child, youth etc. Will not be empty; it will contain category configurations regardless of the \'includedInPrice\' value.
   * @type {Array<BookingActivityCategoryResponse>}
   * @memberof BookingActivityPickUpResponse
   */
  categories?: Array<BookingActivityCategoryResponse>;
  /**
   * Indicates whether the price of the pick-up service is included in the price of the booking. If true, \'price\' will be null.
   * @type {boolean}
   * @memberof BookingActivityPickUpResponse
   */
  includedInPrice?: boolean;
  /**
   * Title of the travel location
   * @type {string}
   * @memberof BookingActivityPickUpResponse
   */
  name?: string;
  /**
   * Identifier representing the pick-up place.
   * @type {number}
   * @memberof BookingActivityPickUpResponse
   */
  pickUpPlaceId?: number;
  /**
   * The total price for the pick-up service. It will be null if \'includedInPrice\' is true.
   * @type {number}
   * @memberof BookingActivityPickUpResponse
   */
  price?: number;
}
/**
 * Model of BookingCancellationFeeResponse with description and examples for the attributes
 * @export
 * @interface BookingCancellationFeeResponse
 */
export interface BookingCancellationFeeResponse {
  /**
   * List of Cancellation Policy Lines for the Booking
   * @type {Array<BookingRoomCancellationPolicyLineResponse>}
   * @memberof BookingCancellationFeeResponse
   */
  bookingRoomCancellationPolicyLines?: Array<BookingRoomCancellationPolicyLineResponse>;
  /**
   *
   * @type {CancellationPolicyResponse}
   * @memberof BookingCancellationFeeResponse
   */
  cancellationPolicy?: CancellationPolicyResponse;
  /**
   *
   * @type {CurrencyResponse}
   * @memberof BookingCancellationFeeResponse
   */
  currency?: CurrencyResponse;
  /**
   *
   * @type {CurrencyResponse}
   * @memberof BookingCancellationFeeResponse
   */
  originalCurrency?: CurrencyResponse;
  /**
   * Total Cancellation Fee for the Booking in currency specified by the Travel Agent
   * @type {number}
   * @memberof BookingCancellationFeeResponse
   */
  totalCancellationFee?: number;
  /**
   * Total Cancellation Fee for the Booking in currency specified by the Property\'s Price Agreement
   * @type {number}
   * @memberof BookingCancellationFeeResponse
   */
  totalOriginalCancellationFee?: number;
}
/**
 * Model of BookingCarRentalExtrasResponse with description and examples for the attributes
 * @export
 * @interface BookingCarRentalExtrasResponse
 */
export interface BookingCarRentalExtrasResponse {
  /**
   * Extra code.
   * @type {string}
   * @memberof BookingCarRentalExtrasResponse
   */
  code?: string;
  /**
   * Extra description.
   * @type {string}
   * @memberof BookingCarRentalExtrasResponse
   */
  description?: string;
  /**
   * Extra name.
   * @type {string}
   * @memberof BookingCarRentalExtrasResponse
   */
  name?: string;
  /**
   * Price for extra item.
   * @type {number}
   * @memberof BookingCarRentalExtrasResponse
   */
  price?: number;
  /**
   * Extra item quantity.
   * @type {number}
   * @memberof BookingCarRentalExtrasResponse
   */
  quantity?: number;
}
/**
 * Model of BookingCartConfirmRequest with description and examples for the attributes
 * @export
 * @interface BookingCartConfirmRequest
 */
export interface BookingCartConfirmRequest {
  /**
   * List of field names to include in the response. Use dot notation for nested fields (\'bookings.field1\'). To include all fields from a nested object, specify the object name only (\'bookings\'). If not provided, all fields will be returned.
   * @type {Array<string>}
   * @memberof BookingCartConfirmRequest
   */
  fieldsToInclude?: Array<string>;
}
/**
 * Request object that contains a list of bookings to be created within a new booking cart. Each booking in the list is processed with the same validation and rules as a single booking creation process.
 * @export
 * @interface BookingCartCreateRequest
 */
export interface BookingCartCreateRequest {
  /**
   * A list of booking requests to be added to the booking cart.
   * @type {Array<BookingCreateRequest>}
   * @memberof BookingCartCreateRequest
   */
  bookings: Array<BookingCreateRequest>;
}
/**
 * Model of BookingCartResponse with description and examples for the attributes
 * @export
 * @interface BookingCartResponse
 */
export interface BookingCartResponse {
  /**
   * Status Code of the Booking Cart
   * @type {string}
   * @memberof BookingCartResponse
   */
  bookingCartStatusCode?: string;
  /**
   * Status Name of the Booking Cart
   * @type {string}
   * @memberof BookingCartResponse
   */
  bookingCartStatusName?: string;
  /**
   * Set of Bookings in the Booking Cart
   * @type {Array<BookingResponse>}
   * @memberof BookingCartResponse
   */
  bookings?: Array<BookingResponse>;
  /**
   * Boolean value that specifies if all of the Booking Rooms in all of the Bookings in this Booking Cart are synchronized successfully in the external system
   * @type {boolean}
   * @memberof BookingCartResponse
   */
  bookingsSynchronizationSuccess?: boolean;
  /**
   * Name of the Currency the Travel Agent is using
   * @type {string}
   * @memberof BookingCartResponse
   */
  currencyName?: string;
  /**
   * Symbol of the Currency the Travel Agent is using
   * @type {string}
   * @memberof BookingCartResponse
   */
  currencySymbol?: string;
  /**
   * Identifier of the Booking Cart
   * @type {number}
   * @memberof BookingCartResponse
   */
  id?: number;
  /**
   * Boolean value that specifies if the Booking Cart is created by an Allotment
   * @type {boolean}
   * @memberof BookingCartResponse
   */
  isFromAllotment?: boolean;
  /**
   * Date when the Booking Cart\'s Status was changed last time
   * @type {string}
   * @memberof BookingCartResponse
   */
  statusDate?: string;
  /**
   * Identifier of the Travel Agent this Booking Cart is assigned to
   * @type {number}
   * @memberof BookingCartResponse
   */
  travelAgentId?: number;
  /**
   * Name of the Travel Agent this Booking Cart is assigned to
   * @type {string}
   * @memberof BookingCartResponse
   */
  travelAgentName?: string;
}
/**
 * This model represents a set of answers for a given question
 * @export
 * @interface BookingCreateActivityAnswerRequest
 */
export interface BookingCreateActivityAnswerRequest {
  /**
   * List of answers for the question, supporting multiple answers if the question allows.
   * @type {Array<string>}
   * @memberof BookingCreateActivityAnswerRequest
   */
  answers?: Array<string>;
  /**
   * Unique identifier for the question.
   * @type {number}
   * @memberof BookingCreateActivityAnswerRequest
   */
  questionId?: number;
}
/**
 * This model represents a set of answers for a given question related to extra
 * @export
 * @interface BookingCreateActivityExtraAnswerRequest
 */
export interface BookingCreateActivityExtraAnswerRequest {
  /**
   * List of answers for the question, supporting multiple answers if the question allows.
   * @type {Array<string>}
   * @memberof BookingCreateActivityExtraAnswerRequest
   */
  answers?: Array<string>;
  /**
   * Identifier of the extra if the question is extra related.
   * @type {number}
   * @memberof BookingCreateActivityExtraAnswerRequest
   */
  extraId?: number;
  /**
   * Unique identifier for the question.
   * @type {number}
   * @memberof BookingCreateActivityExtraAnswerRequest
   */
  questionId?: number;
}
/**
 * Detailed information for each passenger required to complete an activity booking.
 * @export
 * @interface BookingCreateActivityPassengerRequest
 */
export interface BookingCreateActivityPassengerRequest {
  /**
   * Residential address of the customer
   * @type {string}
   * @memberof BookingCreateActivityPassengerRequest
   */
  address: string;
  /**
   * Identifier representing the price category.
   * @type {number}
   * @memberof BookingCreateActivityPassengerRequest
   */
  categoryId?: number;
  /**
   * City of the customer\'s residence
   * @type {string}
   * @memberof BookingCreateActivityPassengerRequest
   */
  city?: string;
  /**
   * ISO code of the customer\'s country
   * @type {string}
   * @memberof BookingCreateActivityPassengerRequest
   */
  country?: string;
  /**
   * Birth date of the customer in the format \'yyyy-MM-dd\'
   * @type {string}
   * @memberof BookingCreateActivityPassengerRequest
   */
  dateOfBirth?: string;
  /**
   * Email address of the customer
   * @type {string}
   * @memberof BookingCreateActivityPassengerRequest
   */
  email: string;
  /**
   * A list of answers for extra-specific questions related to this passenger. To connect an extra-specific answer to a specific passenger, add the answer to this field in this object
   * @type {Array<BookingCreateActivityExtraAnswerRequest>}
   * @memberof BookingCreateActivityPassengerRequest
   */
  extraAnswers?: Array<BookingCreateActivityExtraAnswerRequest>;
  /**
   * First name of the customer
   * @type {string}
   * @memberof BookingCreateActivityPassengerRequest
   */
  firstName: string;
  /**
   * Number of the flight
   * @type {string}
   * @memberof BookingCreateActivityPassengerRequest
   */
  flightNumber?: string;
  /**
   * Gender of the customer
   * @type {string}
   * @memberof BookingCreateActivityPassengerRequest
   */
  gender?: BookingCreateActivityPassengerRequestGenderEnum;
  /**
   * Last name of the customer
   * @type {string}
   * @memberof BookingCreateActivityPassengerRequest
   */
  lastName: string;
  /**
   * ISO code of the customer\'s nationality
   * @type {string}
   * @memberof BookingCreateActivityPassengerRequest
   */
  nationality?: string;
  /**
   * Name of the organization or company the customer is representing
   * @type {string}
   * @memberof BookingCreateActivityPassengerRequest
   */
  organization?: string;
  /**
   * A list of answers for passenger-specific questions.
   * @type {Array<BookingCreateActivityAnswerRequest>}
   * @memberof BookingCreateActivityPassengerRequest
   */
  passengerAnswers?: Array<BookingCreateActivityAnswerRequest>;
  /**
   * Expiry date of the customer\'s passport in the format \'yyyy-MM-dd\'
   * @type {string}
   * @memberof BookingCreateActivityPassengerRequest
   */
  passportExpiry?: string;
  /**
   * Passport ID of the customer, typically a combination of letters and numbers
   * @type {string}
   * @memberof BookingCreateActivityPassengerRequest
   */
  passportId?: string;
  /**
   * Personal identification number of the customer, unique to an individual
   * @type {string}
   * @memberof BookingCreateActivityPassengerRequest
   */
  personalIdNumber?: string;
  /**
   * Full phone number of the customer, including country code prefixed with \'+\'
   * @type {string}
   * @memberof BookingCreateActivityPassengerRequest
   */
  phoneNumber: string;
  /**
   * Postal code associated with the customer\'s address
   * @type {string}
   * @memberof BookingCreateActivityPassengerRequest
   */
  postCode?: string;
  /**
   * Title of the customer, reflecting social status or courtesy titles
   * @type {string}
   * @memberof BookingCreateActivityPassengerRequest
   */
  title?: BookingCreateActivityPassengerRequestTitleEnum;
}

export const BookingCreateActivityPassengerRequestGenderEnum = {
  Male: "MALE",
  Female: "FEMALE",
} as const;

export type BookingCreateActivityPassengerRequestGenderEnum =
  (typeof BookingCreateActivityPassengerRequestGenderEnum)[keyof typeof BookingCreateActivityPassengerRequestGenderEnum];
export const BookingCreateActivityPassengerRequestTitleEnum = {
  Mr: "MR",
  Mrs: "MRS",
  Miss: "MISS",
} as const;

export type BookingCreateActivityPassengerRequestTitleEnum =
  (typeof BookingCreateActivityPassengerRequestTitleEnum)[keyof typeof BookingCreateActivityPassengerRequestTitleEnum];

/**
 * Model representing the activity details needed for creating a booking
 * @export
 * @interface BookingCreateActivityRequest
 */
export interface BookingCreateActivityRequest {
  /**
   * Unique identifier of the activity.
   * @type {number}
   * @memberof BookingCreateActivityRequest
   */
  activityId: number;
  /**
   * A list of answers for booking-specific questions.
   * @type {Array<BookingCreateActivityAnswerRequest>}
   * @memberof BookingCreateActivityRequest
   */
  bookingAnswers?: Array<BookingCreateActivityAnswerRequest>;
  /**
   * List containing the details of categories selected with their quantities.
   * @type {Array<ActivityPriceSearchCategoryRequest>}
   * @memberof BookingCreateActivityRequest
   */
  categories: Array<ActivityPriceSearchCategoryRequest>;
  /**
   * Currency code to use for calculating prices.
   * @type {string}
   * @memberof BookingCreateActivityRequest
   */
  currency: string;
  /**
   * Date of the activity in \'yyyy-MM-dd\' format.
   * @type {string}
   * @memberof BookingCreateActivityRequest
   */
  date: string;
  /**
   * Identifier representing the drop-off place.
   * @type {number}
   * @memberof BookingCreateActivityRequest
   */
  dropOffPlaceId?: number;
  /**
   * A list of answers for extra-specific questions related to the entire booking, not specific to any passenger.
   * @type {Array<BookingCreateActivityExtraAnswerRequest>}
   * @memberof BookingCreateActivityRequest
   */
  extraAnswers?: Array<BookingCreateActivityExtraAnswerRequest>;
  /**
   * List containing the details of the selected extras.
   * @type {Array<ActivityPriceSearchExtraRequest>}
   * @memberof BookingCreateActivityRequest
   */
  extras?: Array<ActivityPriceSearchExtraRequest>;
  /**
   * A collection of passenger details required for booking the activity.
   * @type {Array<BookingCreateActivityPassengerRequest>}
   * @memberof BookingCreateActivityRequest
   */
  passengers?: Array<BookingCreateActivityPassengerRequest>;
  /**
   * Unique identifier of the pick-up place.
   * @type {number}
   * @memberof BookingCreateActivityRequest
   */
  pickUpPlaceId?: number;
  /**
   * Unique identifier of the rate selected to calculate prices.
   * @type {number}
   * @memberof BookingCreateActivityRequest
   */
  rateId: number;
  /**
   * Unique identifier of the selected start time for the activity.
   * @type {number}
   * @memberof BookingCreateActivityRequest
   */
  startTimeId: number;
  /**
   * Voucher number for the Activity
   * @type {string}
   * @memberof BookingCreateActivityRequest
   */
  voucherNumber?: string;
}
/**
 * Model of BookingCreateCarRentalExtrasRequest with description and examples for the attributes
 * @export
 * @interface BookingCreateCarRentalExtrasRequest
 */
export interface BookingCreateCarRentalExtrasRequest {
  /**
   * Code of the extra item
   * @type {string}
   * @memberof BookingCreateCarRentalExtrasRequest
   */
  code?: string;
  /**
   * Quantity of the extra item to be added to the booking
   * @type {number}
   * @memberof BookingCreateCarRentalExtrasRequest
   */
  quantity?: number;
}
/**
 * ONLY FOR CAR RENTAL BOOKING! Model of BookingCreateCarRentalRequest with description and examples for the attributes
 * @export
 * @interface BookingCreateCarRentalRequest
 */
export interface BookingCreateCarRentalRequest {
  /**
   * Extras about the vehicle
   * @type {Array<BookingCreateCarRentalExtrasRequest>}
   * @memberof BookingCreateCarRentalRequest
   */
  extras?: Array<BookingCreateCarRentalExtrasRequest>;
}
/**
 * ONLY FOR CAR RENTAL AND ACTIVITY BOOKINGS! Encapsulates customer information required to create a booking. Each attribute is described with its expectations and formatting rules.For car rentals, the essential fields are \'firstName\', \'lastName\', \'dateOfBirth\', \'email\', \'phoneNumber\', and \'title\', which should be included in the \'customer\' section of the booking request. \'countryCode\' is also required and is located at the first level of the request. An optional field for a successful booking is \'flightNumber\'.
 * @export
 * @interface BookingCreateCustomerRequest
 */
export interface BookingCreateCustomerRequest {
  /**
   * Residential address of the customer
   * @type {string}
   * @memberof BookingCreateCustomerRequest
   */
  address: string;
  /**
   * City of the customer\'s residence
   * @type {string}
   * @memberof BookingCreateCustomerRequest
   */
  city?: string;
  /**
   * ISO code of the customer\'s country
   * @type {string}
   * @memberof BookingCreateCustomerRequest
   */
  country?: string;
  /**
   * Birth date of the customer in the format \'yyyy-MM-dd\'
   * @type {string}
   * @memberof BookingCreateCustomerRequest
   */
  dateOfBirth?: string;
  /**
   * Email address of the customer
   * @type {string}
   * @memberof BookingCreateCustomerRequest
   */
  email: string;
  /**
   * First name of the customer
   * @type {string}
   * @memberof BookingCreateCustomerRequest
   */
  firstName: string;
  /**
   * Number of the flight
   * @type {string}
   * @memberof BookingCreateCustomerRequest
   */
  flightNumber?: string;
  /**
   * Gender of the customer
   * @type {string}
   * @memberof BookingCreateCustomerRequest
   */
  gender?: BookingCreateCustomerRequestGenderEnum;
  /**
   * Last name of the customer
   * @type {string}
   * @memberof BookingCreateCustomerRequest
   */
  lastName: string;
  /**
   * ISO code of the customer\'s nationality
   * @type {string}
   * @memberof BookingCreateCustomerRequest
   */
  nationality?: string;
  /**
   * Name of the organization or company the customer is representing
   * @type {string}
   * @memberof BookingCreateCustomerRequest
   */
  organization?: string;
  /**
   * Expiry date of the customer\'s passport in the format \'yyyy-MM-dd\'
   * @type {string}
   * @memberof BookingCreateCustomerRequest
   */
  passportExpiry?: string;
  /**
   * Passport ID of the customer, typically a combination of letters and numbers
   * @type {string}
   * @memberof BookingCreateCustomerRequest
   */
  passportId?: string;
  /**
   * Personal identification number of the customer, unique to an individual
   * @type {string}
   * @memberof BookingCreateCustomerRequest
   */
  personalIdNumber?: string;
  /**
   * Full phone number of the customer, including country code prefixed with \'+\'
   * @type {string}
   * @memberof BookingCreateCustomerRequest
   */
  phoneNumber: string;
  /**
   * Postal code associated with the customer\'s address
   * @type {string}
   * @memberof BookingCreateCustomerRequest
   */
  postCode?: string;
  /**
   * Title of the customer, reflecting social status or courtesy titles
   * @type {string}
   * @memberof BookingCreateCustomerRequest
   */
  title?: BookingCreateCustomerRequestTitleEnum;
}

export const BookingCreateCustomerRequestGenderEnum = {
  Male: "MALE",
  Female: "FEMALE",
} as const;

export type BookingCreateCustomerRequestGenderEnum =
  (typeof BookingCreateCustomerRequestGenderEnum)[keyof typeof BookingCreateCustomerRequestGenderEnum];
export const BookingCreateCustomerRequestTitleEnum = {
  Mr: "MR",
  Mrs: "MRS",
  Miss: "MISS",
} as const;

export type BookingCreateCustomerRequestTitleEnum =
  (typeof BookingCreateCustomerRequestTitleEnum)[keyof typeof BookingCreateCustomerRequestTitleEnum];

/**
 * Model of BookingCreateRequest with description and examples for the attributes
 * @export
 * @interface BookingCreateRequest
 */
export interface BookingCreateRequest {
  /**
   *
   * @type {BookingCreateCarRentalRequest}
   * @memberof BookingCreateRequest
   */
  bookingCarRental?: BookingCreateCarRentalRequest;
  /**
   * Identifier of the booking cart
   * @type {number}
   * @memberof BookingCreateRequest
   */
  bookingCartId?: number;
  /**
   * ONLY FOR ACCOMMODATION BOOKING! Rooms to be booked
   * @type {Array<BookingCreateRoomRequest>}
   * @memberof BookingCreateRequest
   */
  bookingRooms?: Array<BookingCreateRoomRequest>;
  /**
   * Value that specifies booking type
   * @type {string}
   * @memberof BookingCreateRequest
   */
  bookingTypeCode?: string;
  /**
   * Boolean value to check if booking cart should be confirmed
   * @type {boolean}
   * @memberof BookingCreateRequest
   */
  confirm: boolean;
  /**
   * ISO code of the country where the visitors come from
   * @type {string}
   * @memberof BookingCreateRequest
   */
  countryCode?: string;
  /**
   *
   * @type {BookingCreateCustomerRequest}
   * @memberof BookingCreateRequest
   */
  customer?: BookingCreateCustomerRequest;
  /**
   * List of field names to include in the response. Use dot notation for nested fields (\'bookings.field1\'). To include all fields from a nested object, specify the object name only (\'bookings\'). If not provided, all fields will be returned.
   * @type {Array<string>}
   * @memberof BookingCreateRequest
   */
  fieldsToInclude?: Array<string>;
  /**
   * ONLY FOR ACCOMMODATION BOOKING! Boolean value to check if property is instant
   * @type {boolean}
   * @memberof BookingCreateRequest
   */
  instant?: boolean;
  /**
   * Name of the booking
   * @type {string}
   * @memberof BookingCreateRequest
   */
  name: string;
  /**
   * Notes for the booking
   * @type {string}
   * @memberof BookingCreateRequest
   */
  notes?: string;
  /**
   * ONLY FOR ACCOMMODATION BOOKING!  Identifier of the property which booking is made for
   * @type {number}
   * @memberof BookingCreateRequest
   */
  propertyId?: number;
  /**
   * A unique reference Id generated during the search prices request. This reference Id is essential and must be included to ensure consistent price calculations.
   * @type {string}
   * @memberof BookingCreateRequest
   */
  reference?: string;
}
/**
 * Model of BookingCreateRoomAddOnRequest with description and examples for the attributes
 * @export
 * @interface BookingCreateRoomAddOnRequest
 */
export interface BookingCreateRoomAddOnRequest {
  /**
   * Quantity of the room add-on to be added to the booking
   * @type {number}
   * @memberof BookingCreateRoomAddOnRequest
   */
  quantity?: number;
  /**
   * Identifier of the room add-on to be added to the booking
   * @type {number}
   * @memberof BookingCreateRoomAddOnRequest
   */
  roomAddOnId?: number;
}
/**
 * Model of BookingCreateRoomNameRequest with description and examples for the attributes
 * @export
 * @interface BookingCreateRoomNameRequest
 */
export interface BookingCreateRoomNameRequest {
  /**
   * Bedding options specified as a comma separated array, where 1 means single bed and 2 means double bed
   * @type {string}
   * @memberof BookingCreateRoomNameRequest
   */
  beddingOptions?: string;
  /**
   * First name and last name of the Room occupants, separated by comma \',\'
   * @type {string}
   * @memberof BookingCreateRoomNameRequest
   */
  names?: string;
  /**
   * This is how you want your room to be ordered, e.g. if you enter \'2\', this room will be second in the list of rooms for this booking and displayed as Room 2
   * @type {number}
   * @memberof BookingCreateRoomNameRequest
   */
  roomOrderNumber?: number;
}
/**
 * Model of BookingCreateRoomRequest with description and examples for the attributes
 * @export
 * @interface BookingCreateRoomRequest
 */
export interface BookingCreateRoomRequest {
  /**
   * Add ons for booking room
   * @type {Array<BookingCreateRoomAddOnRequest>}
   * @memberof BookingCreateRoomRequest
   */
  addBookingRoomAddOns?: Array<BookingCreateRoomAddOnRequest>;
  /**
   * Id of the Allotment Room mapping, if Allotment is used
   * @type {number}
   * @memberof BookingCreateRoomRequest
   */
  allotmentRoomId?: number;
  /**
   * Set of Booking Room Names
   * @type {Array<BookingCreateRoomNameRequest>}
   * @memberof BookingCreateRoomRequest
   */
  bookingRoomNames?: Array<BookingCreateRoomNameRequest>;
  /**
   * Boolean value that specifies if there is breakfast
   * @type {boolean}
   * @memberof BookingCreateRoomRequest
   */
  breakfast?: boolean;
  /**
   * End date for the Booking Room
   * @type {string}
   * @memberof BookingCreateRoomRequest
   */
  endDate?: string;
  /**
   * Name of the Booking Room
   * @type {string}
   * @memberof BookingCreateRoomRequest
   */
  name?: string;
  /**
   * Notes for the Booking Room
   * @type {string}
   * @memberof BookingCreateRoomRequest
   */
  notes?: string;
  /**
   * Number of pax (occupants) per Room
   * @type {number}
   * @memberof BookingCreateRoomRequest
   */
  pax?: number;
  /**
   * Total number of Booking Rooms for the Booking
   * @type {number}
   * @memberof BookingCreateRoomRequest
   */
  quantity?: number;
  /**
   * Id of the Room the Booking was made for
   * @type {number}
   * @memberof BookingCreateRoomRequest
   */
  roomId?: number;
  /**
   * Start date for the Booking Room
   * @type {string}
   * @memberof BookingCreateRoomRequest
   */
  startDate?: string;
  /**
   * Voucher number for the Booking Room
   * @type {string}
   * @memberof BookingCreateRoomRequest
   */
  voucherNumber?: string;
}
/**
 *
 * @export
 * @interface BookingCustomerDTO
 */
export interface BookingCustomerDTO {
  /**
   * Location info for customer
   * @type {string}
   * @memberof BookingCustomerDTO
   */
  address?: string;
  /**
   * Age of the customer
   * @type {number}
   * @memberof BookingCustomerDTO
   */
  age?: number;
  /**
   *
   * @type {Contact}
   * @memberof BookingCustomerDTO
   */
  contactInfo?: Contact;
  /**
   * First name of a customer
   * @type {string}
   * @memberof BookingCustomerDTO
   */
  firstName?: string;
  /**
   * Customer flight number for transportation bookings
   * @type {string}
   * @memberof BookingCustomerDTO
   */
  flightNumber?: string;
  /**
   * Id of a customer
   * @type {number}
   * @memberof BookingCustomerDTO
   */
  id?: number;
  /**
   * First name of a customer
   * @type {string}
   * @memberof BookingCustomerDTO
   */
  lastName?: string;
  /**
   * Id of title
   * @type {number}
   * @memberof BookingCustomerDTO
   */
  titleId?: number;
}
/**
 * Model of BookingPageResponse with description and examples for the attributes
 * @export
 * @interface BookingPageResponse
 */
export interface BookingPageResponse {
  /**
   * Identifier of the Allotment from which the booking was made.
   * @type {number}
   * @memberof BookingPageResponse
   */
  allotmentId?: number;
  /**
   * Booking cart identifier
   * @type {number}
   * @memberof BookingPageResponse
   */
  bookingCartId?: number;
  /**
   * Code of the booking\'s status
   * @type {string}
   * @memberof BookingPageResponse
   */
  bookingStatusCode?: string;
  /**
   * Boolean value for editable status of the booking
   * @type {boolean}
   * @memberof BookingPageResponse
   */
  bookingStatusEditable?: boolean;
  /**
   * Name of the booking\'s status
   * @type {string}
   * @memberof BookingPageResponse
   */
  bookingStatusName?: string;
  /**
   * Booking type name
   * @type {string}
   * @memberof BookingPageResponse
   */
  bookingTypeName?: string;
  /**
   * Name of the country where visitors come from
   * @type {string}
   * @memberof BookingPageResponse
   */
  countryName?: string;
  /**
   * Currency name of the property which booking was made for specified by the travel agent
   * @type {string}
   * @memberof BookingPageResponse
   */
  currencyName?: string;
  /**
   * Currency symbol of the property which booking was made for specified by the travel agent
   * @type {string}
   * @memberof BookingPageResponse
   */
  currencySymbol?: string;
  /**
   * Date when booking was created
   * @type {string}
   * @memberof BookingPageResponse
   */
  dateCreated?: string;
  /**
   * Date when booking was requested
   * @type {string}
   * @memberof BookingPageResponse
   */
  dateRequested?: string;
  /**
   * End date for the booking
   * @type {string}
   * @memberof BookingPageResponse
   */
  endDate?: string;
  /**
   * Identifier of booking
   * @type {number}
   * @memberof BookingPageResponse
   */
  id?: number;
  /**
   * Boolean value to check if the booking is instant
   * @type {boolean}
   * @memberof BookingPageResponse
   */
  instant?: boolean;
  /**
   * Name of the booking
   * @type {string}
   * @memberof BookingPageResponse
   */
  name?: string;
  /**
   * Notes about the booking
   * @type {string}
   * @memberof BookingPageResponse
   */
  notes?: string;
  /**
   * Currency name of the property which booking was made for specified by the price agreement
   * @type {string}
   * @memberof BookingPageResponse
   */
  originalCurrencyName?: string;
  /**
   * Currency symbol of the property which booking was made for specified by the price agreement
   * @type {string}
   * @memberof BookingPageResponse
   */
  originalCurrencySymbol?: string;
  /**
   * Id of the property which booking was made for
   * @type {number}
   * @memberof BookingPageResponse
   */
  propertyId?: number;
  /**
   * Name of the property which booking was made for
   * @type {string}
   * @memberof BookingPageResponse
   */
  propertyName?: string;
  /**
   * Start date for the booking
   * @type {string}
   * @memberof BookingPageResponse
   */
  startDate?: string;
  /**
   * Date when current booking status was set
   * @type {string}
   * @memberof BookingPageResponse
   */
  statusDate?: string;
  /**
   * Boolean value that specifies if all of the booking rooms in the booking are synchronized successfully in the external system
   * @type {boolean}
   * @memberof BookingPageResponse
   */
  synchronizationSuccess?: boolean;
  /**
   * Total price for the booking in currency specified in property price agreement
   * @type {number}
   * @memberof BookingPageResponse
   */
  totalOriginalPrice?: number;
  /**
   * Total number of occupants for the booking rooms
   * @type {number}
   * @memberof BookingPageResponse
   */
  totalPax?: number;
  /**
   * Total price for the booking in currency specified by travel agent
   * @type {number}
   * @memberof BookingPageResponse
   */
  totalPrice?: number;
  /**
   * Total number of rooms for the booking
   * @type {number}
   * @memberof BookingPageResponse
   */
  totalQuantity?: number;
  /**
   * Identifier of the TravelAgent who made the booking
   * @type {number}
   * @memberof BookingPageResponse
   */
  travelAgentId?: number;
  /**
   * Name of the TravelAgent who made the booking
   * @type {string}
   * @memberof BookingPageResponse
   */
  travelAgentName?: string;
}
/**
 * Model of BookingResponse with description and examples for the attributes
 * @export
 * @interface BookingResponse
 */
export interface BookingResponse {
  /**
   * Booking\'s Booking Cart id
   * @type {number}
   * @memberof BookingResponse
   */
  bookingCartId?: number;
  /**
   * List of Rooms for the Booking
   * @type {Array<BookingRoomResponse>}
   * @memberof BookingResponse
   */
  bookingRooms?: Array<BookingRoomResponse>;
  /**
   * Code of the Booking\'s Status
   * @type {string}
   * @memberof BookingResponse
   */
  bookingStatusCode?: string;
  /**
   * Boolean value that specifies if the Status of the Booking is editable
   * @type {boolean}
   * @memberof BookingResponse
   */
  bookingStatusEditable?: boolean;
  /**
   * Name of the Booking\'s Status
   * @type {string}
   * @memberof BookingResponse
   */
  bookingStatusName?: string;
  /**
   * Booking  type\'s code
   * @type {string}
   * @memberof BookingResponse
   */
  bookingTypeCode?: string;
  /**
   * Description of the Cancellation Policy for the Booking
   * @type {string}
   * @memberof BookingResponse
   */
  cancellationPolicyDescription?: string;
  /**
   * ISO code of the Country the visitors are coming from
   * @type {string}
   * @memberof BookingResponse
   */
  countryCode?: string;
  /**
   * Name of the Country the visitors are coming from
   * @type {string}
   * @memberof BookingResponse
   */
  countryName?: string;
  /**
   * Date when the Booking was created
   * @type {string}
   * @memberof BookingResponse
   */
  dateCreated?: string;
  /**
   * Date when the Booking was requested
   * @type {string}
   * @memberof BookingResponse
   */
  dateRequested?: string;
  /**
   * Drop off date time of the vehicle
   * @type {string}
   * @memberof BookingResponse
   */
  dropOffDateTime?: string;
  /**
   * End date for the Booking
   * @type {string}
   * @memberof BookingResponse
   */
  endDate?: string;
  /**
   * Identifier of the Booking in the external systems
   * @type {string}
   * @memberof BookingResponse
   */
  externalIdentifier?: string;
  /**
   * Booking id
   * @type {number}
   * @memberof BookingResponse
   */
  id?: number;
  /**
   * Boolean value that specifies if the Booking is instant
   * @type {boolean}
   * @memberof BookingResponse
   */
  instant?: boolean;
  /**
   * Specifies the maximum amount of instant Bookings at a given moment
   * @type {number}
   * @memberof BookingResponse
   */
  instantBookingsLimit?: number;
  /**
   * Boolean value that specifies if the Booking should be synchronized manually
   * @type {boolean}
   * @memberof BookingResponse
   */
  manualSynchronization?: boolean;
  /**
   * Synchronization message if the Booking should be synchronized manually
   * @type {string}
   * @memberof BookingResponse
   */
  manualSynchronizationMessage?: string;
  /**
   * Name of the Booking
   * @type {string}
   * @memberof BookingResponse
   */
  name?: string;
  /**
   * Notes about the Booking
   * @type {string}
   * @memberof BookingResponse
   */
  notes?: string;
  /**
   * Currency name of the Property the Booking was made for
   * @type {string}
   * @memberof BookingResponse
   */
  originalCurrencyName?: string;
  /**
   * Currency symbol of the Property the Booking was made for
   * @type {string}
   * @memberof BookingResponse
   */
  originalCurrencySymbol?: string;
  /**
   * Pick up date time of the vehicle
   * @type {string}
   * @memberof BookingResponse
   */
  pickUpDateTime?: string;
  /**
   * End of the Check In time
   * @type {string}
   * @memberof BookingResponse
   */
  propertyCheckInEndTime?: string;
  /**
   * Start of the check in time
   * @type {string}
   * @memberof BookingResponse
   */
  propertyCheckInStartTime?: string;
  /**
   * End of the check out time
   * @type {string}
   * @memberof BookingResponse
   */
  propertyCheckOutEndTime?: string;
  /**
   * Start of the check out time
   * @type {string}
   * @memberof BookingResponse
   */
  propertyCheckOutStartTime?: string;
  /**
   * Id of the Property which Booking was made for
   * @type {number}
   * @memberof BookingResponse
   */
  propertyId?: number;
  /**
   * Name of the Property the Booking was made for
   * @type {string}
   * @memberof BookingResponse
   */
  propertyName?: string;
  /**
   * Boolean value that specifies if the Property allows bookings to be made on the same day as Check In
   * @type {boolean}
   * @memberof BookingResponse
   */
  propertySameDayBooking?: boolean;
  /**
   * Boolean value that specifies if the property allows have self check in only
   * @type {boolean}
   * @memberof BookingResponse
   */
  propertySelfCheckInOnly?: boolean;
  /**
   * Boolean value that specifies if the property allows have self check in and regular check in
   * @type {boolean}
   * @memberof BookingResponse
   */
  propertySelfCheckInPossible?: boolean;
  /**
   * Rate reference of car rental booking
   * @type {string}
   * @memberof BookingResponse
   */
  rateReference?: string;
  /**
   * Start date for the Booking
   * @type {string}
   * @memberof BookingResponse
   */
  startDate?: string;
  /**
   * Date when the Booking\'s Status was set
   * @type {string}
   * @memberof BookingResponse
   */
  statusDate?: string;
  /**
   * Synchronization message from Booking Rooms
   * @type {string}
   * @memberof BookingResponse
   */
  synchronizationMessage?: string;
  /**
   * Boolean value that specifies if all of the Booking Rooms in the Booking are synchronized successfully in the external system
   * @type {boolean}
   * @memberof BookingResponse
   */
  synchronizationSuccess?: boolean;
  /**
   * Total price for the Booking in Currency specified in Property\'s Price Agreement
   * @type {number}
   * @memberof BookingResponse
   */
  totalOriginalPrice?: number;
  /**
   * Total number of occupants for the Booking Rooms
   * @type {number}
   * @memberof BookingResponse
   */
  totalPax?: number;
  /**
   * Total price for the Booking in the Currency specified by the Travel Agent
   * @type {number}
   * @memberof BookingResponse
   */
  totalPrice?: number;
  /**
   * Total number of Rooms for the Booking
   * @type {number}
   * @memberof BookingResponse
   */
  totalQuantity?: number;
  /**
   * Id of the Travel Agent who made the booking
   * @type {number}
   * @memberof BookingResponse
   */
  travelAgentId?: number;
  /**
   * Name of the Travel Agent who made the booking
   * @type {string}
   * @memberof BookingResponse
   */
  travelAgentName?: string;
  /**
   * Name of the vehicle
   * @type {string}
   * @memberof BookingResponse
   */
  vehicleName?: string;
  /**
   * Price of the vehicle
   * @type {number}
   * @memberof BookingResponse
   */
  vehiclePrice?: number;
  /**
   * Voucher number for the Booking
   * @type {string}
   * @memberof BookingResponse
   */
  voucherNumber?: string;
}
/**
 * Model of BookingRoomAddOnResponse with description and examples for the attributes
 * @export
 * @interface BookingRoomAddOnResponse
 */
export interface BookingRoomAddOnResponse {
  /**
   * Code of the add-on category
   * @type {string}
   * @memberof BookingRoomAddOnResponse
   */
  addOnCategoryCode?: string;
  /**
   * Name of the add-on category
   * @type {string}
   * @memberof BookingRoomAddOnResponse
   */
  addOnCategoryName?: string;
  /**
   * Code of the add-on
   * @type {string}
   * @memberof BookingRoomAddOnResponse
   */
  addOnCode?: string;
  /**
   * Description of the add-on
   * @type {string}
   * @memberof BookingRoomAddOnResponse
   */
  addOnDescription?: string;
  /**
   * Name of the add-on
   * @type {string}
   * @memberof BookingRoomAddOnResponse
   */
  addOnName?: string;
  /**
   * Identifier of the booking room associated with the add-on
   * @type {number}
   * @memberof BookingRoomAddOnResponse
   */
  bookingRoomId?: number;
  /**
   * Currency code of the booking room add-on price
   * @type {string}
   * @memberof BookingRoomAddOnResponse
   */
  currencyCode?: string;
  /**
   * Currency symbol of the booking room add-on price
   * @type {string}
   * @memberof BookingRoomAddOnResponse
   */
  currencySymbol?: string;
  /**
   * Identifier of the booking room add-on
   * @type {number}
   * @memberof BookingRoomAddOnResponse
   */
  id?: number;
  /**
   * Maximum quantity of the booking room add-on
   * @type {number}
   * @memberof BookingRoomAddOnResponse
   */
  maxQuantity?: number;
  /**
   * Currency code of the original price
   * @type {string}
   * @memberof BookingRoomAddOnResponse
   */
  originalCurrencyCode?: string;
  /**
   * Currency symbol of the original price
   * @type {string}
   * @memberof BookingRoomAddOnResponse
   */
  originalCurrencySymbol?: string;
  /**
   * Original price of the booking room add-on
   * @type {number}
   * @memberof BookingRoomAddOnResponse
   */
  originalPrice?: number;
  /**
   * Price of the booking room add-on
   * @type {number}
   * @memberof BookingRoomAddOnResponse
   */
  price?: number;
  /**
   * Quantity of the booking room add-on
   * @type {number}
   * @memberof BookingRoomAddOnResponse
   */
  quantity?: number;
  /**
   * Identifier of the room associated with the add-on
   * @type {number}
   * @memberof BookingRoomAddOnResponse
   */
  roomId?: number;
}
/**
 * Model of BookingRoomCancellationPolicyLineResponse with description and examples for the attributes
 * @export
 * @interface BookingRoomCancellationPolicyLineResponse
 */
export interface BookingRoomCancellationPolicyLineResponse {
  /**
   *
   * @type {BookingRoomResponse}
   * @memberof BookingRoomCancellationPolicyLineResponse
   */
  bookingRoom?: BookingRoomResponse;
  /**
   * Fee for cancelling the Booking in currency specified by the Travel Agent
   * @type {number}
   * @memberof BookingRoomCancellationPolicyLineResponse
   */
  cancellationFee?: number;
  /**
   *
   * @type {CancellationPolicyLineResponse}
   * @memberof BookingRoomCancellationPolicyLineResponse
   */
  cancellationPolicyLine?: CancellationPolicyLineResponse;
  /**
   * Symbol of the currency specified by the Travel Agent
   * @type {string}
   * @memberof BookingRoomCancellationPolicyLineResponse
   */
  currencySymbol?: string;
  /**
   * Fee for cancelling the Booking in currency specified by the Property\'s Price Agreement
   * @type {number}
   * @memberof BookingRoomCancellationPolicyLineResponse
   */
  originalCancellationFee?: number;
  /**
   * Symbol of the currency specified by the Property\'s Price Agreement
   * @type {string}
   * @memberof BookingRoomCancellationPolicyLineResponse
   */
  originalCurrencySymbol?: string;
}
/**
 * Model of BookingRoomCreateRequest with description and examples for the attributes
 * @export
 * @interface BookingRoomCreateRequest
 */
export interface BookingRoomCreateRequest {
  /**
   * Rooms booked
   * @type {Array<BookingCreateRoomRequest>}
   * @memberof BookingRoomCreateRequest
   */
  bookingRooms?: Array<BookingCreateRoomRequest>;
  /**
   * List of field names to include in the response. Use dot notation for nested fields (\'bookingRooms.field1\'). To include all fields from a nested object, specify the object name only (\'bookingRooms\'). If not provided, all fields will be returned.
   * @type {Array<string>}
   * @memberof BookingRoomCreateRequest
   */
  fieldsToInclude?: Array<string>;
}
/**
 * Model of BookingRoomNameResponse with description and examples for the attributes
 * @export
 * @interface BookingRoomNameResponse
 */
export interface BookingRoomNameResponse {
  /**
   * Bedding options specified as a comma separated array, where 1 means single bed and 2 means double bed
   * @type {string}
   * @memberof BookingRoomNameResponse
   */
  beddingOptions?: string;
  /**
   * Id of the Booking Room the name/s is/are for
   * @type {number}
   * @memberof BookingRoomNameResponse
   */
  bookingRoomId?: number;
  /**
   * Booking Room Name identifier
   * @type {number}
   * @memberof BookingRoomNameResponse
   */
  id?: number;
  /**
   * First name and last name of the Room occupants, separated by comma \',\'
   * @type {string}
   * @memberof BookingRoomNameResponse
   */
  names?: string;
  /**
   * This is how you want your room to be ordered, e.g. if you enter \'2\', this room will be second in the list of rooms for this booking and displayed as Room 2
   * @type {number}
   * @memberof BookingRoomNameResponse
   */
  roomOrderNumber?: number;
}
/**
 * Model of BookingRoomNameUpdateRequest with description and examples for the attributes
 * @export
 * @interface BookingRoomNameUpdateRequest
 */
export interface BookingRoomNameUpdateRequest {
  /**
   * Bedding options specified as a comma separated array, where 1 means single bed and 2 means double bed
   * @type {string}
   * @memberof BookingRoomNameUpdateRequest
   */
  beddingOptions?: string;
  /**
   * Id of the Booking Room the name/s is/are for
   * @type {number}
   * @memberof BookingRoomNameUpdateRequest
   */
  bookingRoomId?: number;
  /**
   * First name and last name of the Room occupants, separated by comma \',\'
   * @type {string}
   * @memberof BookingRoomNameUpdateRequest
   */
  names?: string;
  /**
   * This is how you want your room to be ordered, e.g. if you enter \'2\', this room will be second in the list of rooms for this booking and displayed as Room 2
   * @type {number}
   * @memberof BookingRoomNameUpdateRequest
   */
  roomOrderNumber?: number;
}
/**
 * Model of BookingCreateRoomResponse with description and examples for the attributes
 * @export
 * @interface BookingRoomResponse
 */
export interface BookingRoomResponse {
  /**
   * Id of the Allotment Room mapping, if Allotment is used
   * @type {number}
   * @memberof BookingRoomResponse
   */
  allotmentRoomId?: number;
  /**
   * Available number of Rooms
   * @type {number}
   * @memberof BookingRoomResponse
   */
  availableQuantity?: number;
  /**
   * Set of Booking Room Add-ons
   * @type {Array<BookingRoomAddOnResponse>}
   * @memberof BookingRoomResponse
   */
  bookingRoomAddOns?: Array<BookingRoomAddOnResponse>;
  /**
   * Set of Booking Room Names
   * @type {Array<BookingRoomNameResponse>}
   * @memberof BookingRoomResponse
   */
  bookingRoomNames?: Array<BookingRoomNameResponse>;
  /**
   * Boolean value that specifies if there is breakfast
   * @type {boolean}
   * @memberof BookingRoomResponse
   */
  breakfast?: boolean;
  /**
   * Boolean value that specifies if the breakfast is available
   * @type {boolean}
   * @memberof BookingRoomResponse
   */
  breakfastAvailable?: boolean;
  /**
   * Boolean value that specifies if the breakfast is included
   * @type {boolean}
   * @memberof BookingRoomResponse
   */
  breakfastIncluded?: boolean;
  /**
   * Set of Cancellation Policy Lines for the Booking Room
   * @type {Array<CancellationPolicyLineResponse>}
   * @memberof BookingRoomResponse
   */
  cancellationPolicyLines?: Array<CancellationPolicyLineResponse>;
  /**
   * Code of the currency specified by travel agent
   * @type {string}
   * @memberof BookingRoomResponse
   */
  currencyCode?: string;
  /**
   * Name of the currency specified by travel agent
   * @type {string}
   * @memberof BookingRoomResponse
   */
  currencyName?: string;
  /**
   * Symbol of the currency specified by travel agent
   * @type {string}
   * @memberof BookingRoomResponse
   */
  currencySymbol?: string;
  /**
   * Discount value
   * @type {number}
   * @memberof BookingRoomResponse
   */
  discount?: number;
  /**
   * Discount description
   * @type {string}
   * @memberof BookingRoomResponse
   */
  discountDescription?: string;
  /**
   * End date for the Booking Room
   * @type {string}
   * @memberof BookingRoomResponse
   */
  endDate?: string;
  /**
   * Boolean value that specifies if the price for the Booking Room is from the external system instead of the price in the Price Agreement
   * @type {boolean}
   * @memberof BookingRoomResponse
   */
  externalPriceUsed?: boolean;
  /**
   * Price for the extra bed in currency specified by the Property\'s Price Agreement
   * @type {number}
   * @memberof BookingRoomResponse
   */
  extraBedOriginalPrice?: number;
  /**
   * Price for the extra bed in currency specified by the Travel Agent
   * @type {number}
   * @memberof BookingRoomResponse
   */
  extraBedPrice?: number;
  /**
   * Id of the Booking Room
   * @type {number}
   * @memberof BookingRoomResponse
   */
  id?: number;
  /**
   * Name of the Booking Room
   * @type {string}
   * @memberof BookingRoomResponse
   */
  name?: string;
  /**
   * Notes for the Booking Room
   * @type {string}
   * @memberof BookingRoomResponse
   */
  notes?: string;
  /**
   * Number of nights in the Booking
   * @type {number}
   * @memberof BookingRoomResponse
   */
  numberOfNights?: number;
  /**
   * Code of the Currency specified by the Property\'s Price Agreement
   * @type {string}
   * @memberof BookingRoomResponse
   */
  originalCurrencyCode?: string;
  /**
   * Name of the Currency specified by the Property\'s Price Agreement - <b>Original Currency</b>
   * @type {string}
   * @memberof BookingRoomResponse
   */
  originalCurrencyName?: string;
  /**
   * Symbol of the Currency specified by the Property\'s Price Agreement
   * @type {string}
   * @memberof BookingRoomResponse
   */
  originalCurrencySymbol?: string;
  /**
   * Total price for the room in currency specified in property\'s Price Agreement
   * @type {number}
   * @memberof BookingRoomResponse
   */
  originalPrice?: number;
  /**
   * Number of pax (occupants) per Room
   * @type {number}
   * @memberof BookingRoomResponse
   */
  pax?: number;
  /**
   * Total price for the room in currency specified by the Travel Agent
   * @type {number}
   * @memberof BookingRoomResponse
   */
  price?: number;
  /**
   * Address of the Property the Room is booked for
   * @type {string}
   * @memberof BookingRoomResponse
   */
  propertyAddress?: string;
  /**
   * City of the Property the Room is booked for
   * @type {string}
   * @memberof BookingRoomResponse
   */
  propertyCity?: string;
  /**
   * Id of the Property the Room is booked for
   * @type {number}
   * @memberof BookingRoomResponse
   */
  propertyId?: number;
  /**
   * Name of the Property the Room is booked for
   * @type {string}
   * @memberof BookingRoomResponse
   */
  propertyName?: string;
  /**
   * Total number of Booking Rooms for the Booking
   * @type {number}
   * @memberof BookingRoomResponse
   */
  quantity?: number;
  /**
   * Possible bedding options for the room specified as a a semi-colon separated array where each entry is a comma separated array, where 1 means single bed and 2 means double bed
   * @type {string}
   * @memberof BookingRoomResponse
   */
  roomBeddingOptionsString?: string;
  /**
   * Description for the breakfast
   * @type {string}
   * @memberof BookingRoomResponse
   */
  roomBreakfastDescription?: string;
  /**
   * Category code of the room
   * @type {string}
   * @memberof BookingRoomResponse
   */
  roomCategoryCode?: string;
  /**
   * Category name of the room
   * @type {string}
   * @memberof BookingRoomResponse
   */
  roomCategoryName?: string;
  /**
   * Boolean value for possibility of extra bed
   * @type {boolean}
   * @memberof BookingRoomResponse
   */
  roomExtraBed?: boolean;
  /**
   * Description for the extra bed
   * @type {string}
   * @memberof BookingRoomResponse
   */
  roomExtraBedDescription?: string;
  /**
   * Number of possible extra beds
   * @type {number}
   * @memberof BookingRoomResponse
   */
  roomExtraBedQuantity?: number;
  /**
   * Id of the Room the Booking was made for
   * @type {number}
   * @memberof BookingRoomResponse
   */
  roomId?: number;
  /**
   * Maximum number of occupants
   * @type {number}
   * @memberof BookingRoomResponse
   */
  roomMaxOccupancy?: number;
  /**
   * Minimum number of occupants
   * @type {number}
   * @memberof BookingRoomResponse
   */
  roomMinOccupancy?: number;
  /**
   * Name of the Room
   * @type {string}
   * @memberof BookingRoomResponse
   */
  roomName?: string;
  /**
   * Possible number of rooms to be booked
   * @type {number}
   * @memberof BookingRoomResponse
   */
  roomQuantity?: number;
  /**
   * Code for type of the room
   * @type {string}
   * @memberof BookingRoomResponse
   */
  roomTypeCode?: string;
  /**
   * Type of the room
   * @type {string}
   * @memberof BookingRoomResponse
   */
  roomTypeName?: string;
  /**
   * Start date for the Booking Room
   * @type {string}
   * @memberof BookingRoomResponse
   */
  startDate?: string;
  /**
   * Price for the breakfast in currency specified by the Travel Agent
   * @type {number}
   * @memberof BookingRoomResponse
   */
  totalBreakfastPrice?: number;
  /**
   * Price for the breakfast in currency specified by the Property\'s Price Agreement
   * @type {number}
   * @memberof BookingRoomResponse
   */
  totalOriginalBreakfastPrice?: number;
  /**
   * Total Price in currency specified by the Property\'s Price Agreement
   * @type {number}
   * @memberof BookingRoomResponse
   */
  totalOriginalPrice?: number;
  /**
   * Total Price in currency specified by the Travel Agent
   * @type {number}
   * @memberof BookingRoomResponse
   */
  totalPrice?: number;
  /**
   * Voucher number for the Booking Room
   * @type {string}
   * @memberof BookingRoomResponse
   */
  voucherNumber?: string;
}
/**
 * Model of BookingUpdateRequest with description and examples for the attributes
 * @export
 * @interface BookingUpdateRequest
 */
export interface BookingUpdateRequest {
  /**
   * List of Rooms for the Booking
   * @type {Array<BookingUpdateRoomRequest>}
   * @memberof BookingUpdateRequest
   */
  bookingRooms?: Array<BookingUpdateRoomRequest>;
  /**
   * ISO code of the Country the visitors are coming from; For updating the country, either this or countryId should be provided
   * @type {string}
   * @memberof BookingUpdateRequest
   */
  countryCode?: string;
  /**
   * List of field names to include in the response. Use dot notation for nested fields (\'bookingRooms.field1\'). To include all fields from a nested object, specify the object name only (\'bookingRooms\'). If not provided, all fields will be returned.
   * @type {Array<string>}
   * @memberof BookingUpdateRequest
   */
  fieldsToInclude?: Array<string>;
  /**
   * Name of the Booking
   * @type {string}
   * @memberof BookingUpdateRequest
   */
  name?: string;
  /**
   * Notes about the Booking
   * @type {string}
   * @memberof BookingUpdateRequest
   */
  notes?: string;
}
/**
 * Model of BookingUpdateRoomRequest with description and examples for the attributes
 * @export
 * @interface BookingUpdateRoomRequest
 */
export interface BookingUpdateRoomRequest {
  /**
   * Id of the Allotment Room mapping, if Allotment is used
   * @type {number}
   * @memberof BookingUpdateRoomRequest
   */
  allotmentRoomId?: number;
  /**
   * End date for the Booking Room
   * @type {string}
   * @memberof BookingUpdateRoomRequest
   */
  endDate?: string;
  /**
   * Id of the Booking Room
   * @type {number}
   * @memberof BookingUpdateRoomRequest
   */
  id?: number;
  /**
   * Name of the Booking Room
   * @type {string}
   * @memberof BookingUpdateRoomRequest
   */
  name?: string;
  /**
   * Notes for the Booking Room
   * @type {string}
   * @memberof BookingUpdateRoomRequest
   */
  notes?: string;
  /**
   * Number of pax (occupants) per Room
   * @type {number}
   * @memberof BookingUpdateRoomRequest
   */
  pax?: number;
  /**
   * Total number of Booking Rooms for the Booking
   * @type {number}
   * @memberof BookingUpdateRoomRequest
   */
  quantity?: number;
  /**
   * Start date for the Booking Room
   * @type {string}
   * @memberof BookingUpdateRoomRequest
   */
  startDate?: string;
  /**
   * Voucher number for the Booking Room
   * @type {string}
   * @memberof BookingUpdateRoomRequest
   */
  voucherNumber?: string;
}
/**
 * Model of CancellationPolicyLineResponse with description and examples for the attributes
 * @export
 * @interface CancellationPolicyLineResponse
 */
export interface CancellationPolicyLineResponse {
  /**
   * Interval for the Cancellation Policy Line
   * @type {string}
   * @memberof CancellationPolicyLineResponse
   */
  interval?: string;
  /**
   * Percentage to be deducted form the total amount
   * @type {number}
   * @memberof CancellationPolicyLineResponse
   */
  percentage?: number;
  /**
   * End period for the Cancellation Policy Line
   * @type {number}
   * @memberof CancellationPolicyLineResponse
   */
  toPeriod?: number;
}
/**
 * Model of CancellationPolicyResponse with description and examples for the attributes
 * @export
 * @interface CancellationPolicyResponse
 */
export interface CancellationPolicyResponse {
  /**
   * Rules for the cancellation policy
   * @type {Array<CancellationPolicyRuleResponse>}
   * @memberof CancellationPolicyResponse
   */
  cancellationPolicyRules?: Array<CancellationPolicyRuleResponse>;
  /**
   * Description of the cancellation policy
   * @type {string}
   * @memberof CancellationPolicyResponse
   */
  description?: string;
  /**
   * Name of the cancellation policy
   * @type {string}
   * @memberof CancellationPolicyResponse
   */
  name?: string;
  /**
   * Identifier of the property this cancellation policy refers to
   * @type {number}
   * @memberof CancellationPolicyResponse
   */
  propertyId?: number;
  /**
   * Name of the property this cancellation policy refers to
   * @type {string}
   * @memberof CancellationPolicyResponse
   */
  propertyName?: string;
}
/**
 * Model of CancellationPolicyRuleResponse with description and examples for the attributes
 * @export
 * @interface CancellationPolicyRuleResponse
 */
export interface CancellationPolicyRuleResponse {
  /**
   * Cancellation policy lines for the rule
   * @type {Array<CancellationPolicyLineResponse>}
   * @memberof CancellationPolicyRuleResponse
   */
  cancellationPolicyLines?: Array<CancellationPolicyLineResponse>;
  /**
   * Start number of rooms range
   * @type {number}
   * @memberof CancellationPolicyRuleResponse
   */
  rangeRoomsFrom?: number;
  /**
   * Stop number of rooms range
   * @type {number}
   * @memberof CancellationPolicyRuleResponse
   */
  rangeRoomsTo?: number;
}
/**
 * Details about a branch where rental vehicles can be picked up or dropped off.
 * @export
 * @interface CarRentalBranchResponse
 */
export interface CarRentalBranchResponse {
  /**
   * The address of the branch.
   * @type {string}
   * @memberof CarRentalBranchResponse
   */
  address?: string;
  /**
   * The id of the branch where the vehicle is supposed to be picked up or dropped off.
   * @type {string}
   * @memberof CarRentalBranchResponse
   */
  id?: string;
  /**
   * The latitude of the branch location.
   * @type {number}
   * @memberof CarRentalBranchResponse
   */
  latitude?: number;
  /**
   * The longitude of the branch location.
   * @type {number}
   * @memberof CarRentalBranchResponse
   */
  longitude?: number;
  /**
   * Opening hours of the branch.
   * @type {string}
   * @memberof CarRentalBranchResponse
   */
  openHoursText?: string;
  /**
   * Opening hours of the branch on pick-up day.
   * @type {string}
   * @memberof CarRentalBranchResponse
   */
  pickUpDayOpenHours?: string;
  /**
   * Additional instructions for locating the branch.
   * @type {string}
   * @memberof CarRentalBranchResponse
   */
  specialInstructions?: string;
  /**
   *
   * @type {CarRentalSupplierResponse}
   * @memberof CarRentalBranchResponse
   */
  supplier?: CarRentalSupplierResponse;
}
/**
 *
 * @export
 * @interface CarRentalFilterResponse
 */
export interface CarRentalFilterResponse {
  /**
   * Code representing the filter type
   * @type {string}
   * @memberof CarRentalFilterResponse
   */
  code?: string;
  /**
   * Name of the filter
   * @type {string}
   * @memberof CarRentalFilterResponse
   */
  name?: string;
}
/**
 * Details about an image.
 * @export
 * @interface CarRentalImageResponse
 */
export interface CarRentalImageResponse {
  /**
   * Size of the image.
   * @type {string}
   * @memberof CarRentalImageResponse
   */
  size?: CarRentalImageResponseSizeEnum;
  /**
   * URL of the image.
   * @type {string}
   * @memberof CarRentalImageResponse
   */
  url?: string;
}

export const CarRentalImageResponseSizeEnum = {
  Small: "SMALL",
  Medium: "MEDIUM",
  Large: "LARGE",
  Xlarge: "XLARGE",
  Original: "ORIGINAL",
  Vector: "VECTOR",
} as const;

export type CarRentalImageResponseSizeEnum =
  (typeof CarRentalImageResponseSizeEnum)[keyof typeof CarRentalImageResponseSizeEnum];

/**
 * Provides detailed information about a specific coverage option available for a car rental package. This includes the coverage\'s unique code, name, whether it\'s included in the base price, and, if applicable, its additional cost and currency. Coverage options might include insurance like Collision Damage Waiver (CDW) and Theft Protection (TP), among others.
 * @export
 * @interface CarRentalPackageCoverageResponse
 */
export interface CarRentalPackageCoverageResponse {
  /**
   * The code for the coverage.
   * @type {number}
   * @memberof CarRentalPackageCoverageResponse
   */
  code?: number;
  /**
   * The currency of the price.
   * @type {string}
   * @memberof CarRentalPackageCoverageResponse
   */
  currency?: string;
  /**
   * Indicates if this coverage is included in the base price of the vehicle.
   * @type {boolean}
   * @memberof CarRentalPackageCoverageResponse
   */
  includedInVehiclePrice?: boolean;
  /**
   * The name of the coverage.
   * @type {string}
   * @memberof CarRentalPackageCoverageResponse
   */
  name?: string;
  /**
   * The price of the coverage option if it is not included in the vehicle price.
   * @type {number}
   * @memberof CarRentalPackageCoverageResponse
   */
  price?: number;
}
/**
 * Represents additional items or services that can be included in a car rental package for an extra fee. This model covers a range of extras such as child seats, GPS navigation systems, additional insurance, and more. Each extra is detailed with its code, name, description, price, currency, and the maximum quantity available for booking, providing customers with options to tailor their rental experience to their specific needs.
 * @export
 * @interface CarRentalPackageExtraResponse
 */
export interface CarRentalPackageExtraResponse {
  /**
   * The identifier for the extra.
   * @type {string}
   * @memberof CarRentalPackageExtraResponse
   */
  code?: string;
  /**
   * The currency of the price.
   * @type {string}
   * @memberof CarRentalPackageExtraResponse
   */
  currency?: string;
  /**
   * The description of the extra.
   * @type {string}
   * @memberof CarRentalPackageExtraResponse
   */
  description?: string;
  /**
   * The maximum available quantity of this extra.
   * @type {number}
   * @memberof CarRentalPackageExtraResponse
   */
  maxQuantity?: number;
  /**
   * The name of the extra.
   * @type {string}
   * @memberof CarRentalPackageExtraResponse
   */
  name?: string;
  /**
   * The price of the extra. This is the additional cost that will be added to the base price if the extra is chosen.
   * @type {number}
   * @memberof CarRentalPackageExtraResponse
   */
  price?: number;
}
/**
 * Provides information about items or services included as part of a car rental package at no additional cost. Inclusions typically cover various insurance protections such as collision damage waivers, theft protection, and third-party liability. This model details each inclusion with a specific code, name, and description, helping customers understand the protections and benefits included in their rental package.
 * @export
 * @interface CarRentalPackageInclusionResponse
 */
export interface CarRentalPackageInclusionResponse {
  /**
   * The code for the inclusion.
   * @type {string}
   * @memberof CarRentalPackageInclusionResponse
   */
  code?: string;
  /**
   * The description of the inclusion.
   * @type {string}
   * @memberof CarRentalPackageInclusionResponse
   */
  description?: string;
  /**
   * The name of the inclusion.
   * @type {string}
   * @memberof CarRentalPackageInclusionResponse
   */
  name?: string;
}
/**
 * Details about a rental package for a vehicle.
 * @export
 * @interface CarRentalPackageResponse
 */
export interface CarRentalPackageResponse {
  /**
   * List of available coverage options. These coverages can only be booked on site.
   * @type {Array<CarRentalPackageCoverageResponse>}
   * @memberof CarRentalPackageResponse
   */
  coverages?: Array<CarRentalPackageCoverageResponse>;
  /**
   * Currency of the price.
   * @type {string}
   * @memberof CarRentalPackageResponse
   */
  currency?: string;
  /**
   * Indicates whether this package is default.
   * @type {boolean}
   * @memberof CarRentalPackageResponse
   */
  defaultPackage?: boolean;
  /**
   * List of extra equipment or services that can be requested. This can include items like baby seats, navigation systems, ski boxes, etc. Usually, additional charges apply and each extra item may add to the total cost.
   * @type {Array<CarRentalPackageExtraResponse>}
   * @memberof CarRentalPackageResponse
   */
  extras?: Array<CarRentalPackageExtraResponse>;
  /**
   * List of inclusions, which are insurance coverages, services, equipment, etc., that are included in the vehicle price. Inclusions are predefined and cannot be excluded.
   * @type {Array<CarRentalPackageInclusionResponse>}
   * @memberof CarRentalPackageResponse
   */
  inclusions?: Array<CarRentalPackageInclusionResponse>;
  /**
   * The base price of the package. This price does not include any additional charges for extras.
   * @type {number}
   * @memberof CarRentalPackageResponse
   */
  price?: number;
  /**
   * Rate reference for this package.
   * @type {string}
   * @memberof CarRentalPackageResponse
   */
  rateReference?: string;
}
/**
 * Model representing the driver details for a car rental search request.
 * @export
 * @interface CarRentalSearchDriverRequest
 */
export interface CarRentalSearchDriverRequest {
  /**
   * Driver age
   * @type {number}
   * @memberof CarRentalSearchDriverRequest
   */
  age: number;
  /**
   * Country code of the driver residence country, ISO 3166-1 alpha-2 standard
   * @type {string}
   * @memberof CarRentalSearchDriverRequest
   */
  residenceCountryCode: string;
}
/**
 * Represents filter options available for searching car rentals. Includes categories, types, transmission types, fuel types, and passenger capacity groups.
 * @export
 * @interface CarRentalSearchFiltersResponse
 */
export interface CarRentalSearchFiltersResponse {
  /**
   * List of car categories available for filtering.
   * @type {Array<CarRentalFilterResponse>}
   * @memberof CarRentalSearchFiltersResponse
   */
  categories?: Array<CarRentalFilterResponse>;
  /**
   * List of fuel types available for filtering.
   * @type {Array<CarRentalFilterResponse>}
   * @memberof CarRentalSearchFiltersResponse
   */
  fuelTypes?: Array<CarRentalFilterResponse>;
  /**
   * List of passenger capacity groups available for filtering.
   * @type {Array<CarRentalFilterResponse>}
   * @memberof CarRentalSearchFiltersResponse
   */
  passengerCapacityGroups?: Array<CarRentalFilterResponse>;
  /**
   * List of transmission types available for filtering.
   * @type {Array<CarRentalFilterResponse>}
   * @memberof CarRentalSearchFiltersResponse
   */
  transmissionTypes?: Array<CarRentalFilterResponse>;
  /**
   * List of car types available for filtering.
   * @type {Array<CarRentalFilterResponse>}
   * @memberof CarRentalSearchFiltersResponse
   */
  types?: Array<CarRentalFilterResponse>;
}
/**
 * Request model for defining a specific point in a car rental search. This can be either the pick-up or drop-off point.
 * @export
 * @interface CarRentalSearchPointRequest
 */
export interface CarRentalSearchPointRequest {
  /**
   * Date and time for the pick-up or drop-off in the local time zone (branch time zone).
   * @type {string}
   * @memberof CarRentalSearchPointRequest
   */
  dateTime: string;
  /**
   *
   * @type {GeoRangeQueryDTO}
   * @memberof CarRentalSearchPointRequest
   */
  geoRange: GeoRangeQueryDTO;
}
/**
 * The request model for searching car rentals. It includes details about the pick-up and drop-off points, driver\'s information, and optional specifications like desired vehicle image sizes.
 * @export
 * @interface CarRentalSearchRequest
 */
export interface CarRentalSearchRequest {
  /**
   * Codes of the categories to filter the car search results.
   * @type {Array<string>}
   * @memberof CarRentalSearchRequest
   */
  categories?: Array<string>;
  /**
   *
   * @type {CarRentalSearchDriverRequest}
   * @memberof CarRentalSearchRequest
   */
  driver: CarRentalSearchDriverRequest;
  /**
   *
   * @type {CarRentalSearchPointRequest}
   * @memberof CarRentalSearchRequest
   */
  dropOff: CarRentalSearchPointRequest;
  /**
   * List of field names to include in the response. Use dot notation for nested fields (\'vehicles.field1\'). To include all fields from a nested object, specify the object name only (\'vehicles\'). If not provided, all fields will be returned.
   * @type {Array<string>}
   * @memberof CarRentalSearchRequest
   */
  fieldsToInclude?: Array<string>;
  /**
   * Codes of the fuel types to filter the car search results.
   * @type {Array<string>}
   * @memberof CarRentalSearchRequest
   */
  fuelTypes?: Array<string>;
  /**
   * Codes of the passenger capacity groups to filter the car search results.
   * @type {Array<string>}
   * @memberof CarRentalSearchRequest
   */
  passengerCapacityGroups?: Array<string>;
  /**
   *
   * @type {CarRentalSearchPointRequest}
   * @memberof CarRentalSearchRequest
   */
  pickUp: CarRentalSearchPointRequest;
  /**
   * Codes of the transmission types to filter the car search results.
   * @type {Array<string>}
   * @memberof CarRentalSearchRequest
   */
  transmissionTypes?: Array<string>;
  /**
   * Codes of the types to filter the car search results.
   * @type {Array<string>}
   * @memberof CarRentalSearchRequest
   */
  types?: Array<string>;
  /**
   * The desired sizes for the vehicle images. If not provided, MEDIUM will be used.
   * @type {Array<string>}
   * @memberof CarRentalSearchRequest
   */
  vehicleImageSizes?: Array<CarRentalSearchRequestVehicleImageSizesEnum>;
}

export const CarRentalSearchRequestVehicleImageSizesEnum = {
  Small: "SMALL",
  Medium: "MEDIUM",
  Large: "LARGE",
  Original: "ORIGINAL",
  Vector: "VECTOR",
} as const;

export type CarRentalSearchRequestVehicleImageSizesEnum =
  (typeof CarRentalSearchRequestVehicleImageSizesEnum)[keyof typeof CarRentalSearchRequestVehicleImageSizesEnum];

/**
 * Response model for the car rental search operation. It includes the list of available vehicles and the branches associated with these vehicles.
 * @export
 * @interface CarRentalSearchResponse
 */
export interface CarRentalSearchResponse {
  /**
   * List of branches where vehicles are available for pick-up and drop-off. The details of each branch can be looked up using the branch ids included in the \'vehicles\' list.
   * @type {Array<CarRentalBranchResponse>}
   * @memberof CarRentalSearchResponse
   */
  branches?: Array<CarRentalBranchResponse>;
  /**
   * List of available vehicles. Each vehicle includes its pick-up and drop-off branch ids, which can be used to look up the branch details in the \'branches\' list.
   * @type {Array<CarRentalVehicleRateResponse>}
   * @memberof CarRentalSearchResponse
   */
  vehicles?: Array<CarRentalVehicleRateResponse>;
}
/**
 * Details about the car rental supplier.
 * @export
 * @interface CarRentalSupplierResponse
 */
export interface CarRentalSupplierResponse {
  /**
   * List of images associated with the car rental supplier.
   * @type {Array<CarRentalImageResponse>}
   * @memberof CarRentalSupplierResponse
   */
  images?: Array<CarRentalImageResponse>;
  /**
   * The name of the car rental supplier
   * @type {string}
   * @memberof CarRentalSupplierResponse
   */
  name?: string;
}
/**
 * Details about the available rental vehicle along with the associated packages.
 * @export
 * @interface CarRentalVehicleRateResponse
 */
export interface CarRentalVehicleRateResponse {
  /**
   * The id of the branch where the vehicle is to be dropped off.
   * @type {string}
   * @memberof CarRentalVehicleRateResponse
   */
  dropOffBranchId?: string;
  /**
   * List of available packages for the vehicle. Each package includes details like rate reference, price, extras, etc. One of these packages can be chosen while booking.
   * @type {Array<CarRentalPackageResponse>}
   * @memberof CarRentalVehicleRateResponse
   */
  packages?: Array<CarRentalPackageResponse>;
  /**
   * The id of the branch where the vehicle is to be picked up.
   * @type {string}
   * @memberof CarRentalVehicleRateResponse
   */
  pickUpBranchId?: string;
  /**
   *
   * @type {CarRentalVehicleResponse}
   * @memberof CarRentalVehicleRateResponse
   */
  vehicle?: CarRentalVehicleResponse;
}
/**
 * Represents comprehensive details about a specific vehicle available for rental. This includes identification information, vehicle specifications like seating and luggage capacity, amenities such as GPS and air conditioning, as well as the vehicle\'s category, type, transmission, and fuel type. Additionally, a list of images provides visual references for the vehicle.
 * @export
 * @interface CarRentalVehicleResponse
 */
export interface CarRentalVehicleResponse {
  /**
   * This vehicle has air conditioning.
   * @type {boolean}
   * @memberof CarRentalVehicleResponse
   */
  airco?: boolean;
  /**
   * Number of big suitcases, which can fit into the vehicle.
   * @type {number}
   * @memberof CarRentalVehicleResponse
   */
  bigSuitcases?: number;
  /**
   * Built-in GPS is included in price.
   * @type {boolean}
   * @memberof CarRentalVehicleResponse
   */
  builtInGps?: boolean;
  /**
   * The category of the vehicle.
   * @type {string}
   * @memberof CarRentalVehicleResponse
   */
  category?: string;
  /**
   * Number of doors on the vehicle.
   * @type {string}
   * @memberof CarRentalVehicleResponse
   */
  doors?: string;
  /**
   * The type of fuel that the vehicle uses.
   * @type {string}
   * @memberof CarRentalVehicleResponse
   */
  fuel?: string;
  /**
   * The id of the vehicle.
   * @type {number}
   * @memberof CarRentalVehicleResponse
   */
  id?: number;
  /**
   * List of images for the vehicle.
   * @type {Array<CarRentalImageResponse>}
   * @memberof CarRentalVehicleResponse
   */
  images?: Array<CarRentalImageResponse>;
  /**
   * The name of the vehicle.
   * @type {string}
   * @memberof CarRentalVehicleResponse
   */
  name?: string;
  /**
   * Number of seats in the vehicle.
   * @type {string}
   * @memberof CarRentalVehicleResponse
   */
  seats?: string;
  /**
   * Number of small suitcases, which can fit into the vehicle.
   * @type {number}
   * @memberof CarRentalVehicleResponse
   */
  smallSuitcases?: number;
  /**
   * The type of transmission in the vehicle.
   * @type {string}
   * @memberof CarRentalVehicleResponse
   */
  transmission?: string;
  /**
   * The type of the vehicle.
   * @type {string}
   * @memberof CarRentalVehicleResponse
   */
  type?: string;
}
/**
 *
 * @export
 * @interface Contact
 */
export interface Contact {
  /**
   *
   * @type {string}
   * @memberof Contact
   */
  email?: string;
  /**
   *
   * @type {string}
   * @memberof Contact
   */
  fax?: string;
  /**
   *
   * @type {string}
   * @memberof Contact
   */
  mobile?: string;
  /**
   *
   * @type {string}
   * @memberof Contact
   */
  name?: string;
  /**
   *
   * @type {string}
   * @memberof Contact
   */
  phone?: string;
  /**
   *
   * @type {string}
   * @memberof Contact
   */
  website?: string;
}
/**
 * Model of ContactResponse with description and examples for the attributes
 * @export
 * @interface ContactResponse
 */
export interface ContactResponse {
  /**
   * Email
   * @type {string}
   * @memberof ContactResponse
   */
  email?: string;
  /**
   * Fax
   * @type {string}
   * @memberof ContactResponse
   */
  fax?: string;
  /**
   * Mobile phone
   * @type {string}
   * @memberof ContactResponse
   */
  mobile?: string;
  /**
   * Phone
   * @type {string}
   * @memberof ContactResponse
   */
  phone?: string;
  /**
   * Secondary email
   * @type {string}
   * @memberof ContactResponse
   */
  secondaryEmail?: string;
  /**
   * Url
   * @type {string}
   * @memberof ContactResponse
   */
  url?: string;
}
/**
 * Model of CurrencyResponse with description and examples for the attributes
 * @export
 * @interface CurrencyResponse
 */
export interface CurrencyResponse {
  /**
   * Code of the currency
   * @type {string}
   * @memberof CurrencyResponse
   */
  code?: string;
  /**
   * Name of the currency
   * @type {string}
   * @memberof CurrencyResponse
   */
  name?: string;
  /**
   * Symbol of the currency
   * @type {string}
   * @memberof CurrencyResponse
   */
  symbol?: string;
}
/**
 * Model of FileResponse with description and examples for the attributes
 * @export
 * @interface FileResponse
 */
export interface FileResponse {
  /**
   * Alternative text for the file
   * @type {string}
   * @memberof FileResponse
   */
  alt?: string;
  /**
   * Path of the location
   * @type {string}
   * @memberof FileResponse
   */
  filePath?: string;
  /**
   * Order number of the file
   * @type {number}
   * @memberof FileResponse
   */
  orderNumber?: number;
  /**
   * Path of the thumbnail location
   * @type {string}
   * @memberof FileResponse
   */
  thumbnailPath?: string;
}
/**
 *
 * @export
 * @interface GeoPoint
 */
export interface GeoPoint {
  /**
   *
   * @type {number}
   * @memberof GeoPoint
   */
  lat?: number;
  /**
   *
   * @type {number}
   * @memberof GeoPoint
   */
  lon?: number;
}
/**
 * Model for specifying a geographical range around a specific geographical point defined by longitude and latitude.
 * @export
 * @interface GeoRangeQueryDTO
 */
export interface GeoRangeQueryDTO {
  /**
   * Latitude value of pick-up or drop-off location
   * @type {number}
   * @memberof GeoRangeQueryDTO
   */
  latitude: number;
  /**
   * Longitude value of pick-up or drop-off location
   * @type {number}
   * @memberof GeoRangeQueryDTO
   */
  longitude: number;
  /**
   * Range in meters
   * @type {number}
   * @memberof GeoRangeQueryDTO
   */
  range: number;
}
/**
 * Model of LocationResponse with description and examples for the attributes
 * @export
 * @interface LocationResponse
 */
export interface LocationResponse {
  /**
   * Address of the location
   * @type {string}
   * @memberof LocationResponse
   */
  address?: string;
  /**
   * City
   * @type {string}
   * @memberof LocationResponse
   */
  city?: string;
  /**
   * Country
   * @type {string}
   * @memberof LocationResponse
   */
  country?: string;
  /**
   * location latitude coordinate
   * @type {number}
   * @memberof LocationResponse
   */
  latitude?: number;
  /**
   * location longitude coordinate
   * @type {number}
   * @memberof LocationResponse
   */
  longitude?: number;
  /**
   * Municipality
   * @type {string}
   * @memberof LocationResponse
   */
  municipality?: string;
  /**
   * Postal code of the location
   * @type {string}
   * @memberof LocationResponse
   */
  postalCode?: string;
  /**
   * Region
   * @type {string}
   * @memberof LocationResponse
   */
  region?: string;
  /**
   * State
   * @type {string}
   * @memberof LocationResponse
   */
  state?: string;
}
/**
 *
 * @export
 * @interface PageBookingPageResponse
 */
export interface PageBookingPageResponse {
  /**
   *
   * @type {Array<BookingPageResponse>}
   * @memberof PageBookingPageResponse
   */
  content?: Array<BookingPageResponse>;
  /**
   *
   * @type {boolean}
   * @memberof PageBookingPageResponse
   */
  empty?: boolean;
  /**
   *
   * @type {boolean}
   * @memberof PageBookingPageResponse
   */
  first?: boolean;
  /**
   *
   * @type {boolean}
   * @memberof PageBookingPageResponse
   */
  last?: boolean;
  /**
   *
   * @type {number}
   * @memberof PageBookingPageResponse
   */
  number?: number;
  /**
   *
   * @type {number}
   * @memberof PageBookingPageResponse
   */
  numberOfElements?: number;
  /**
   *
   * @type {Pageable}
   * @memberof PageBookingPageResponse
   */
  pageable?: Pageable;
  /**
   *
   * @type {number}
   * @memberof PageBookingPageResponse
   */
  size?: number;
  /**
   *
   * @type {Sort}
   * @memberof PageBookingPageResponse
   */
  sort?: Sort;
  /**
   *
   * @type {number}
   * @memberof PageBookingPageResponse
   */
  totalElements?: number;
  /**
   *
   * @type {number}
   * @memberof PageBookingPageResponse
   */
  totalPages?: number;
}
/**
 *
 * @export
 * @interface PagePropertyExtendedResponse
 */
export interface PagePropertyExtendedResponse {
  /**
   *
   * @type {Array<PropertyExtendedResponse>}
   * @memberof PagePropertyExtendedResponse
   */
  content?: Array<PropertyExtendedResponse>;
  /**
   *
   * @type {boolean}
   * @memberof PagePropertyExtendedResponse
   */
  empty?: boolean;
  /**
   *
   * @type {boolean}
   * @memberof PagePropertyExtendedResponse
   */
  first?: boolean;
  /**
   *
   * @type {boolean}
   * @memberof PagePropertyExtendedResponse
   */
  last?: boolean;
  /**
   *
   * @type {number}
   * @memberof PagePropertyExtendedResponse
   */
  number?: number;
  /**
   *
   * @type {number}
   * @memberof PagePropertyExtendedResponse
   */
  numberOfElements?: number;
  /**
   *
   * @type {Pageable}
   * @memberof PagePropertyExtendedResponse
   */
  pageable?: Pageable;
  /**
   *
   * @type {number}
   * @memberof PagePropertyExtendedResponse
   */
  size?: number;
  /**
   *
   * @type {Sort}
   * @memberof PagePropertyExtendedResponse
   */
  sort?: Sort;
  /**
   *
   * @type {number}
   * @memberof PagePropertyExtendedResponse
   */
  totalElements?: number;
  /**
   *
   * @type {number}
   * @memberof PagePropertyExtendedResponse
   */
  totalPages?: number;
}
/**
 *
 * @export
 * @interface Pageable
 */
export interface Pageable {
  /**
   *
   * @type {number}
   * @memberof Pageable
   */
  offset?: number;
  /**
   *
   * @type {number}
   * @memberof Pageable
   */
  pageNumber?: number;
  /**
   *
   * @type {number}
   * @memberof Pageable
   */
  pageSize?: number;
  /**
   *
   * @type {boolean}
   * @memberof Pageable
   */
  paged?: boolean;
  /**
   *
   * @type {Sort}
   * @memberof Pageable
   */
  sort?: Sort;
  /**
   *
   * @type {boolean}
   * @memberof Pageable
   */
  unpaged?: boolean;
}
/**
 *
 * @export
 * @interface ParameterWrapper
 */
export interface ParameterWrapper {
  /**
   *
   * @type {number}
   * @memberof ParameterWrapper
   */
  age?: number;
  /**
   *
   * @type {number}
   * @memberof ParameterWrapper
   */
  numberOfPeople?: number;
}
/**
 * Model of ProductCategoryResponse with description and examples for the attributes
 * @export
 * @interface ProductCategoryResponse
 */
export interface ProductCategoryResponse {
  /**
   * List of all room products of this category
   * @type {Array<RoomAddOnResponse>}
   * @memberof ProductCategoryResponse
   */
  addOns?: Array<RoomAddOnResponse>;
  /**
   * Names of all products that are from this category
   * @type {Array<string>}
   * @memberof ProductCategoryResponse
   */
  addonNames?: Array<string>;
  /**
   * Code of the product category
   * @type {string}
   * @memberof ProductCategoryResponse
   */
  code?: string;
  /**
   * Name of the product category
   * @type {string}
   * @memberof ProductCategoryResponse
   */
  name?: string;
}
/**
 * Model of PropertyAmenityResponse with description and examples for the attributes
 * @export
 * @interface PropertyAmenityResponse
 */
export interface PropertyAmenityResponse {
  /**
   * Code of the property amenity
   * @type {string}
   * @memberof PropertyAmenityResponse
   */
  code?: string;
  /**
   * Description of the property amenity
   * @type {string}
   * @memberof PropertyAmenityResponse
   */
  description?: string;
  /**
   * Name of the property amenity
   * @type {string}
   * @memberof PropertyAmenityResponse
   */
  name?: string;
  /**
   * Priority order for the property amenity
   * @type {string}
   * @memberof PropertyAmenityResponse
   */
  orderPriority?: string;
}
/**
 * Model of PropertyAvailableDatesResponse with description and examples for the attributes
 * @export
 * @interface PropertyAvailableDatesResponse
 */
export interface PropertyAvailableDatesResponse {
  /**
   * Collection of available dates
   * @type {Array<LocalDate>}
   * @memberof PropertyAvailableDatesResponse
   */
  availableDates?: Array<Date>;
  /**
   * Unique identifier for this property.
   * @type {number}
   * @memberof PropertyAvailableDatesResponse
   */
  id?: number;
  /**
   * Name of the property
   * @type {string}
   * @memberof PropertyAvailableDatesResponse
   */
  name?: string;
}
/**
 * Model of PropertyExtendedResponse with description and examples for the attributes
 * @export
 * @interface PropertyExtendedResponse
 */
export interface PropertyExtendedResponse {
  /**
   * Additional description of the property
   * @type {string}
   * @memberof PropertyExtendedResponse
   */
  additionalDescription?: string;
  /**
   * Determines the booking order for allotment and regular availability of the same room. When \'bookAllotmentFirst\' is set to true, all allotment room availabilities must be booked before any regular room availability can be booked. If set to false, there is no specified order, allowing both allotment and regular room availabilities to be booked in any sequence. For example, assume there are 5 total available rooms, with 3 being allotment availabilities and 2 regular availabilities. If \'bookAllotmentFirst\' is false, any of these 5 rooms can be booked in any order. If \'bookAllotmentFirst\' is true, then the 2 allotment rooms must be booked first, followed by the 3 regular rooms.
   * @type {boolean}
   * @memberof PropertyExtendedResponse
   */
  bookAllotmentFirst?: boolean;
  /**
   * End of the check in time
   * @type {string}
   * @memberof PropertyExtendedResponse
   */
  checkInEndTime?: string;
  /**
   * Start of the check in time
   * @type {string}
   * @memberof PropertyExtendedResponse
   */
  checkInStartTime?: string;
  /**
   * End of the check out time
   * @type {string}
   * @memberof PropertyExtendedResponse
   */
  checkOutEndTime?: string;
  /**
   *
   * @type {ContactResponse}
   * @memberof PropertyExtendedResponse
   */
  contact?: ContactResponse;
  /**
   * DEPRECATED, kept for legacy support. Use \'bookAllotmentFirst\' instead
   * @type {boolean}
   * @memberof PropertyExtendedResponse
   */
  cooperationBookRegularFirst?: boolean;
  /**
   *
   * @type {FileResponse}
   * @memberof PropertyExtendedResponse
   */
  coverPhoto?: FileResponse;
  /**
   * Code of the currency
   * @type {string}
   * @memberof PropertyExtendedResponse
   */
  currencyCode?: string;
  /**
   * Description of the property
   * @type {string}
   * @memberof PropertyExtendedResponse
   */
  description?: string;
  /**
   * Identifier of the property
   * @type {number}
   * @memberof PropertyExtendedResponse
   */
  id?: number;
  /**
   * All Featured thumbnail images of the property
   * @type {Array<FileResponse>}
   * @memberof PropertyExtendedResponse
   */
  images?: Array<FileResponse>;
  /**
   * Specifies if the property is launched
   * @type {boolean}
   * @memberof PropertyExtendedResponse
   */
  launched?: boolean;
  /**
   *
   * @type {LocationResponse}
   * @memberof PropertyExtendedResponse
   */
  location?: LocationResponse;
  /**
   *
   * @type {FileResponse}
   * @memberof PropertyExtendedResponse
   */
  logo?: FileResponse;
  /**
   * Name of the property
   * @type {string}
   * @memberof PropertyExtendedResponse
   */
  name?: string;
  /**
   * Set of property amenities
   * @type {Array<PropertyAmenityResponse>}
   * @memberof PropertyExtendedResponse
   */
  propertyAmenities?: Array<PropertyAmenityResponse>;
  /**
   * Set of property amenity codes
   * @type {Array<string>}
   * @memberof PropertyExtendedResponse
   */
  propertyAmenityCodes?: Array<string>;
  /**
   * Set of property amenity names
   * @type {Array<string>}
   * @memberof PropertyExtendedResponse
   */
  propertyAmenityNames?: Array<string>;
  /**
   * Code of the property type
   * @type {string}
   * @memberof PropertyExtendedResponse
   */
  propertyTypeCode?: string;
  /**
   * Name of the property type
   * @type {string}
   * @memberof PropertyExtendedResponse
   */
  propertyTypeName?: string;
  /**
   * Registry number of the property
   * @type {string}
   * @memberof PropertyExtendedResponse
   */
  registryNumber?: string;
  /**
   * Rooms of the property
   * @type {Array<RoomExtendedResponse>}
   * @memberof PropertyExtendedResponse
   */
  rooms?: Array<RoomExtendedResponse>;
  /**
   * Boolean value that specifies if the property allows booking to be made on the same day as check in
   * @type {boolean}
   * @memberof PropertyExtendedResponse
   */
  sameDayBooking?: boolean;
  /**
   * Boolean value that specifies if the property allows self check-in only
   * @type {boolean}
   * @memberof PropertyExtendedResponse
   */
  selfCheckInOnly?: boolean;
  /**
   * Boolean value that specifies if the property allows self check-in and regular check-in
   * @type {boolean}
   * @memberof PropertyExtendedResponse
   */
  selfCheckInPossible?: boolean;
}
/**
 * Model of PropertyRatesBookingRoomAddOnRequest with description and examples for the attributes
 * @export
 * @interface PropertyRatesBookingRoomAddOnRequest
 */
export interface PropertyRatesBookingRoomAddOnRequest {
  /**
   * Quantity for that addOn.
   * @type {number}
   * @memberof PropertyRatesBookingRoomAddOnRequest
   */
  quantity: number;
  /**
   * Unique identifier of the room addOn.
   * @type {number}
   * @memberof PropertyRatesBookingRoomAddOnRequest
   */
  roomAddOnId: number;
}
/**
 * Model of PropertyRatesBookingRoomAddOnResponse with description and examples for the attributes
 * @export
 * @interface PropertyRatesBookingRoomAddOnResponse
 */
export interface PropertyRatesBookingRoomAddOnResponse {
  /**
   * Identifier of the room addOn
   * @type {number}
   * @memberof PropertyRatesBookingRoomAddOnResponse
   */
  id?: number;
  /**
   * Max quantity for addOn that is set by property
   * @type {number}
   * @memberof PropertyRatesBookingRoomAddOnResponse
   */
  maxQuantity?: number;
  /**
   * Name of the AddOn
   * @type {string}
   * @memberof PropertyRatesBookingRoomAddOnResponse
   */
  name?: string;
  /**
   * Price for the add on
   * @type {number}
   * @memberof PropertyRatesBookingRoomAddOnResponse
   */
  price?: number;
  /**
   * Number of searched quantity
   * @type {number}
   * @memberof PropertyRatesBookingRoomAddOnResponse
   */
  quantity?: number;
  /**
   * Unit price of the addOn
   * @type {number}
   * @memberof PropertyRatesBookingRoomAddOnResponse
   */
  unitPrice?: number;
}
/**
 * Request model for booking room with details on occupants, dates, and quantity.
 * @export
 * @interface PropertyRatesBookingRoomRequest
 */
export interface PropertyRatesBookingRoomRequest {
  /**
   * List of addOns id and quantity for which prices will be calculated.
   * @type {Array<PropertyRatesBookingRoomAddOnRequest>}
   * @memberof PropertyRatesBookingRoomRequest
   */
  addBookingRoomAddOns?: Array<PropertyRatesBookingRoomAddOnRequest>;
  /**
   * Id of the Allotment Room, if Allotment is used
   * @type {number}
   * @memberof PropertyRatesBookingRoomRequest
   */
  allotmentRoomId?: number;
  /**
   * Identifier for booking room.
   * @type {number}
   * @memberof PropertyRatesBookingRoomRequest
   */
  bookingRoomId?: number;
  /**
   * End date for the Booking Room
   * @type {string}
   * @memberof PropertyRatesBookingRoomRequest
   */
  endDate: string;
  /**
   * Number of occupants per room for the booking room.
   * @type {number}
   * @memberof PropertyRatesBookingRoomRequest
   */
  pax: number;
  /**
   * Specifies how many rooms of identical specifications are being booked. For example, if a group wants to book 4 identical rooms (same room id, same occupancy per room, same dates, all with breakfast or all without breakfast), instead of creating 4 separate booking room objects, you can create one and set this quantity to 4. If any room has differing parameters (e.g., different number of occupants), it should be represented as a separate booking room with the appropriate quantity.
   * @type {number}
   * @memberof PropertyRatesBookingRoomRequest
   */
  quantity: number;
  /**
   * Identifier for the room to be booked.
   * @type {number}
   * @memberof PropertyRatesBookingRoomRequest
   */
  roomId: number;
  /**
   * Start date for the Booking Room
   * @type {string}
   * @memberof PropertyRatesBookingRoomRequest
   */
  startDate: string;
}
/**
 * Detailed response model describing a Booking room.
 * @export
 * @interface PropertyRatesBookingRoomResponse
 */
export interface PropertyRatesBookingRoomResponse {
  /**
   *
   * @type {Array<PropertyRatesBookingRoomAddOnResponse>}
   * @memberof PropertyRatesBookingRoomResponse
   */
  addOns?: Array<PropertyRatesBookingRoomAddOnResponse>;
  /**
   * Id of the Allotment Room, if Allotment is used
   * @type {number}
   * @memberof PropertyRatesBookingRoomResponse
   */
  allotmentRoomId?: number;
  /**
   * Quantity of the room which is available for booking
   * @type {number}
   * @memberof PropertyRatesBookingRoomResponse
   */
  availableQuantity: number;
  /**
   * Indicates if breakfast is available for this Booking Room.
   * @type {boolean}
   * @memberof PropertyRatesBookingRoomResponse
   */
  breakfastAvailable: boolean;
  /**
   * Indicates if the breakfast is already included in the \'price\'.
   * @type {boolean}
   * @memberof PropertyRatesBookingRoomResponse
   */
  breakfastIncluded?: boolean;
  /**
   * Additional cost for breakfast, applicable if not included in the \'price\' and if the user choose for breakfast.
   * @type {number}
   * @memberof PropertyRatesBookingRoomResponse
   */
  breakfastPrice?: number;
  /**
   * Currency code for all pricing details.
   * @type {string}
   * @memberof PropertyRatesBookingRoomResponse
   */
  currencyCode: string;
  /**
   * End date for the Booking Room
   * @type {string}
   * @memberof PropertyRatesBookingRoomResponse
   */
  endDate: string;
  /**
   * Cost associated with the extra beds required due to the number of occupants exceeding the room\'s maximum capacity.
   * @type {number}
   * @memberof PropertyRatesBookingRoomResponse
   */
  extraBedPrice?: number;
  /**
   * Base maximum occupancy of the room. This figure represents the maximum number of guests that can be accommodated without extra beds.
   * @type {number}
   * @memberof PropertyRatesBookingRoomResponse
   */
  maxOccupancy: number;
  /**
   * Total maximum occupancy of the room, which includes the base maximum occupancy plus any additional guests that can be accommodated with extra beds.
   * @type {number}
   * @memberof PropertyRatesBookingRoomResponse
   */
  maxOccupancyWithExtraBed: number;
  /**
   * Minimum occupancy of the room, indicating the fewest number of guests that can be accommodated.
   * @type {number}
   * @memberof PropertyRatesBookingRoomResponse
   */
  minOccupancy: number;
  /**
   * Number of additional beds provided for the occupants if the number of occupants exceeds the room\'s max occupancy.
   * @type {number}
   * @memberof PropertyRatesBookingRoomResponse
   */
  numberOfExtraBeds: number;
  /**
   * Number of pax (occupants) per Room
   * @type {number}
   * @memberof PropertyRatesBookingRoomResponse
   */
  pax: number;
  /**
   * Base price for the room.
   * @type {number}
   * @memberof PropertyRatesBookingRoomResponse
   */
  price: number;
  /**
   * Total number of rooms for this Booking Room
   * @type {number}
   * @memberof PropertyRatesBookingRoomResponse
   */
  quantity: number;
  /**
   * Unique identifier of the room.
   * @type {number}
   * @memberof PropertyRatesBookingRoomResponse
   */
  roomId: number;
  /**
   * Start date for the Booking Room
   * @type {string}
   * @memberof PropertyRatesBookingRoomResponse
   */
  startDate: string;
  /**
   * Total cost for accommodating the occupants, combining \'price\' and \'extraBedPrice\'. Does not include \'breakfastPrice\' because the user should choose for breakfast or not.
   * @type {number}
   * @memberof PropertyRatesBookingRoomResponse
   */
  totalPrice: number;
  /**
   * Total cost for accommodating the occupants, combining \'price\' and \'extraBedPrice\' and \'breakfastPrice\' if available.
   * @type {number}
   * @memberof PropertyRatesBookingRoomResponse
   */
  totalPriceWithBreakfast: number;
}
/**
 * Model of PropertyRatesRequest with description and examples for the attributes
 * @export
 * @interface PropertyRatesRequest
 */
export interface PropertyRatesRequest {
  /**
   * Unique identifier of the booking.
   * @type {number}
   * @memberof PropertyRatesRequest
   */
  bookingId?: number;
  /**
   * List containing the details of chosen rooms for booking.
   * @type {Array<PropertyRatesBookingRoomRequest>}
   * @memberof PropertyRatesRequest
   */
  bookingRooms: Array<PropertyRatesBookingRoomRequest>;
  /**
   * Unique identifier of the property.
   * @type {number}
   * @memberof PropertyRatesRequest
   */
  propertyId: number;
}
/**
 * Model of PropertyRatesResponse with description and examples for the attributes
 * @export
 * @interface PropertyRatesResponse
 */
export interface PropertyRatesResponse {
  /**
   * List containing the details of chosen rooms for booking.
   * @type {Array<PropertyRatesBookingRoomResponse>}
   * @memberof PropertyRatesResponse
   */
  bookingRooms: Array<PropertyRatesBookingRoomResponse>;
  /**
   * Unique identifier of the property.
   * @type {number}
   * @memberof PropertyRatesResponse
   */
  propertyId: number;
  /**
   * A unique reference Id generated during the request. This reference Id is essential and must be included in the subsequent request for creating a booking to ensure consistent price calculations.
   * @type {string}
   * @memberof PropertyRatesResponse
   */
  reference?: string;
}
/**
 * Model of PropertySearchAllotmentExceptionDateResponse with description and examples for the attributes
 * @export
 * @interface PropertySearchAllotmentExceptionDateResponse
 */
export interface PropertySearchAllotmentExceptionDateResponse {
  /**
   * Available room quantity in an exception date
   * @type {Array<PropertySearchAllotmentRoomExceptionDateResponse>}
   * @memberof PropertySearchAllotmentExceptionDateResponse
   */
  allotmentRoomExceptionDates?: Array<PropertySearchAllotmentRoomExceptionDateResponse>;
  /**
   * End date of exception interval
   * @type {string}
   * @memberof PropertySearchAllotmentExceptionDateResponse
   */
  endDate?: string;
  /**
   * Identifier
   * @type {number}
   * @memberof PropertySearchAllotmentExceptionDateResponse
   */
  id?: number;
  /**
   * Start date of exception interval
   * @type {string}
   * @memberof PropertySearchAllotmentExceptionDateResponse
   */
  startDate?: string;
}
/**
 * Model of PropertySearchAllotmentResponse with description and examples for the attributes
 * @export
 * @interface PropertySearchAllotmentResponse
 */
export interface PropertySearchAllotmentResponse {
  /**
   * Date of the allotment auto-release in the format \'yyyy-MM-dd\'
   * @type {string}
   * @memberof PropertySearchAllotmentResponse
   */
  allotmentAutoReleaseDate?: string;
  /**
   * Number of days for allotment auto-release
   * @type {number}
   * @memberof PropertySearchAllotmentResponse
   */
  allotmentAutoReleaseDays?: number;
  /**
   * Allotment auto-release type code
   * @type {string}
   * @memberof PropertySearchAllotmentResponse
   */
  allotmentAutoReleaseTypeCode?: string;
  /**
   * Allotment auto-release type name
   * @type {string}
   * @memberof PropertySearchAllotmentResponse
   */
  allotmentAutoReleaseTypeName?: string;
  /**
   * Allotment campaign identifier
   * @type {number}
   * @memberof PropertySearchAllotmentResponse
   */
  allotmentCampaignId?: number;
  /**
   * Allotment campaign name
   * @type {string}
   * @memberof PropertySearchAllotmentResponse
   */
  allotmentCampaignName?: string;
  /**
   * Allotment campaign type property code
   * @type {string}
   * @memberof PropertySearchAllotmentResponse
   */
  allotmentCampaignTypePropertyCode?: string;
  /**
   * Allotment campaign type travel agent code
   * @type {string}
   * @memberof PropertySearchAllotmentResponse
   */
  allotmentCampaignTypeTravelAgentCode?: string;
  /**
   * List of exception dates
   * @type {Array<PropertySearchAllotmentExceptionDateResponse>}
   * @memberof PropertySearchAllotmentResponse
   */
  allotmentExceptionDates?: Array<PropertySearchAllotmentExceptionDateResponse>;
  /**
   * Allotment group identifier
   * @type {number}
   * @memberof PropertySearchAllotmentResponse
   */
  allotmentGroupId?: number;
  /**
   * Allotment group name
   * @type {string}
   * @memberof PropertySearchAllotmentResponse
   */
  allotmentGroupName?: string;
  /**
   * Set of allotment rooms
   * @type {Array<PropertySearchAllotmentRoomResponse>}
   * @memberof PropertySearchAllotmentResponse
   */
  allotmentRooms?: Array<PropertySearchAllotmentRoomResponse>;
  /**
   * Allotment status code
   * @type {string}
   * @memberof PropertySearchAllotmentResponse
   */
  allotmentStatusCode?: string;
  /**
   * Allotment status name
   * @type {string}
   * @memberof PropertySearchAllotmentResponse
   */
  allotmentStatusName?: string;
  /**
   * Boolean value that specifies if the allotment is auto-released
   * @type {boolean}
   * @memberof PropertySearchAllotmentResponse
   */
  autoRelease?: boolean;
  /**
   * Auto-release status of the allotment
   * @type {string}
   * @memberof PropertySearchAllotmentResponse
   */
  autoReleased?: string;
  /**
   * Cancellation policy identifier
   * @type {number}
   * @memberof PropertySearchAllotmentResponse
   */
  cancellationPolicyId?: number;
  /**
   * Cancellation policy name
   * @type {string}
   * @memberof PropertySearchAllotmentResponse
   */
  cancellationPolicyName?: string;
  /**
   * End date of the allotment in the format \'yyyy-MM-dd\'
   * @type {string}
   * @memberof PropertySearchAllotmentResponse
   */
  endDate?: string;
  /**
   * Fill percentage for the allotment
   * @type {number}
   * @memberof PropertySearchAllotmentResponse
   */
  fill?: number;
  /**
   * Unique identifier of the allotment
   * @type {number}
   * @memberof PropertySearchAllotmentResponse
   */
  id?: number;
  /**
   * Entity that issued the allotment
   * @type {string}
   * @memberof PropertySearchAllotmentResponse
   */
  issuedByEntity?: string;
  /**
   * Name of the allotment
   * @type {string}
   * @memberof PropertySearchAllotmentResponse
   */
  name?: string;
  /**
   * Price agreement identifier
   * @type {number}
   * @memberof PropertySearchAllotmentResponse
   */
  priceAgreementId?: number;
  /**
   * Name of the property allotment
   * @type {string}
   * @memberof PropertySearchAllotmentResponse
   */
  propertyAllotmentName?: string;
  /**
   * End of the check-in time
   * @type {string}
   * @memberof PropertySearchAllotmentResponse
   */
  propertyCheckInEndTime?: string;
  /**
   * Unique identifier of the property
   * @type {number}
   * @memberof PropertySearchAllotmentResponse
   */
  propertyId?: number;
  /**
   * Name of the property
   * @type {string}
   * @memberof PropertySearchAllotmentResponse
   */
  propertyName?: string;
  /**
   * Boolean value that specifies if the property allows booking to be made on the same day as check in
   * @type {boolean}
   * @memberof PropertySearchAllotmentResponse
   */
  propertySameDayBooking?: boolean;
  /**
   * Release period for the allotment
   * @type {number}
   * @memberof PropertySearchAllotmentResponse
   */
  releasePeriod?: number;
  /**
   * Release period interval
   * @type {string}
   * @memberof PropertySearchAllotmentResponse
   */
  releasePeriodInterval?: string;
  /**
   * Start date of the allotment in the format \'yyyy-MM-dd\'
   * @type {string}
   * @memberof PropertySearchAllotmentResponse
   */
  startDate?: string;
  /**
   * Stop order number for the allotment
   * @type {number}
   * @memberof PropertySearchAllotmentResponse
   */
  stopOrder?: number;
  /**
   * Unique identifier of the travel agent
   * @type {number}
   * @memberof PropertySearchAllotmentResponse
   */
  travelAgentId?: number;
  /**
   * Name of the travel agent
   * @type {string}
   * @memberof PropertySearchAllotmentResponse
   */
  travelAgentName?: string;
}
/**
 * Model of PropertySearchAllotmentRoomDailyAvailabilityResponse with description and examples for the attributes
 * @export
 * @interface PropertySearchAllotmentRoomDailyAvailabilityResponse
 */
export interface PropertySearchAllotmentRoomDailyAvailabilityResponse {
  /**
   * Number of rooms available for the given date
   * @type {number}
   * @memberof PropertySearchAllotmentRoomDailyAvailabilityResponse
   */
  availability?: number;
  /**
   * Date for which the availability is specified
   * @type {string}
   * @memberof PropertySearchAllotmentRoomDailyAvailabilityResponse
   */
  date?: string;
}
/**
 * Model of PropertySearchAllotmentRoomExceptionDateResponse with description and examples for the attributes
 * @export
 * @interface PropertySearchAllotmentRoomExceptionDateResponse
 */
export interface PropertySearchAllotmentRoomExceptionDateResponse {
  /**
   * Name of the requested category room
   * @type {string}
   * @memberof PropertySearchAllotmentRoomExceptionDateResponse
   */
  allotmentRoomCategoryName?: string;
  /**
   * Identifier of the room which the exception date includes
   * @type {number}
   * @memberof PropertySearchAllotmentRoomExceptionDateResponse
   */
  allotmentRoomId?: number;
  /**
   * Identifier
   * @type {number}
   * @memberof PropertySearchAllotmentRoomExceptionDateResponse
   */
  id?: number;
  /**
   * Available room quantity in the exception dates
   * @type {number}
   * @memberof PropertySearchAllotmentRoomExceptionDateResponse
   */
  quantityAvailable?: number;
}
/**
 * Model of PropertySearchAllotmentRoomItemResponse with description and examples for the attributes
 * @export
 * @interface PropertySearchAllotmentRoomItemResponse
 */
export interface PropertySearchAllotmentRoomItemResponse {
  /**
   * Identifier of the allotment room
   * @type {number}
   * @memberof PropertySearchAllotmentRoomItemResponse
   */
  allotmentRoomId?: number;
  /**
   * Identifier of the allotment room item
   * @type {number}
   * @memberof PropertySearchAllotmentRoomItemResponse
   */
  id?: number;
  /**
   * Identifier of the room
   * @type {number}
   * @memberof PropertySearchAllotmentRoomItemResponse
   */
  roomId?: number;
  /**
   * Name of the room
   * @type {string}
   * @memberof PropertySearchAllotmentRoomItemResponse
   */
  roomName?: string;
  /**
   * Type of the room
   * @type {string}
   * @memberof PropertySearchAllotmentRoomItemResponse
   */
  roomTypeName?: string;
}
/**
 * Model of PropertySearchAllotmentRoomPriceResponse with description and examples for the attributes
 * @export
 * @interface PropertySearchAllotmentRoomPriceResponse
 */
export interface PropertySearchAllotmentRoomPriceResponse {
  /**
   * Average daily price in the converted currency
   * @type {number}
   * @memberof PropertySearchAllotmentRoomPriceResponse
   */
  averageDailyPrice?: number;
  /**
   * Indicates if breakfast is available
   * @type {boolean}
   * @memberof PropertySearchAllotmentRoomPriceResponse
   */
  breakfastAvailable?: boolean;
  /**
   * Indicates if breakfast is included in the price
   * @type {boolean}
   * @memberof PropertySearchAllotmentRoomPriceResponse
   */
  breakfastIncluded?: boolean;
  /**
   * Code of the converted currency
   * @type {string}
   * @memberof PropertySearchAllotmentRoomPriceResponse
   */
  convertedCurrencyCode?: string;
  /**
   * Symbol of the converted currency
   * @type {string}
   * @memberof PropertySearchAllotmentRoomPriceResponse
   */
  convertedCurrencySymbol?: string;
  /**
   * Discount amount
   * @type {number}
   * @memberof PropertySearchAllotmentRoomPriceResponse
   */
  discount?: number;
  /**
   * Description of the discount
   * @type {string}
   * @memberof PropertySearchAllotmentRoomPriceResponse
   */
  discountDescription?: string;
  /**
   * Price for an extra bed in the original currency
   * @type {number}
   * @memberof PropertySearchAllotmentRoomPriceResponse
   */
  extraBedOriginalPrice?: number;
  /**
   * Price for an extra bed in the converted currency
   * @type {number}
   * @memberof PropertySearchAllotmentRoomPriceResponse
   */
  extraBedPrice?: number;
  /**
   * Code of the original currency
   * @type {string}
   * @memberof PropertySearchAllotmentRoomPriceResponse
   */
  originalCurrencyCode?: string;
  /**
   * Symbol of the original currency
   * @type {string}
   * @memberof PropertySearchAllotmentRoomPriceResponse
   */
  originalCurrencySymbol?: string;
  /**
   * Identifier of the price agreement
   * @type {number}
   * @memberof PropertySearchAllotmentRoomPriceResponse
   */
  priceAgreementId?: number;
  /**
   * Name of the price agreement
   * @type {string}
   * @memberof PropertySearchAllotmentRoomPriceResponse
   */
  priceAgreementName?: string;
  /**
   * Identifier of the room
   * @type {number}
   * @memberof PropertySearchAllotmentRoomPriceResponse
   */
  roomId?: number;
  /**
   * Total breakfast price in the converted currency
   * @type {number}
   * @memberof PropertySearchAllotmentRoomPriceResponse
   */
  totalBreakfastPrice?: number;
  /**
   * Total breakfast price in the original currency
   * @type {number}
   * @memberof PropertySearchAllotmentRoomPriceResponse
   */
  totalOriginalBreakfastPrice?: number;
  /**
   * Total price in the original currency
   * @type {number}
   * @memberof PropertySearchAllotmentRoomPriceResponse
   */
  totalOriginalPrice?: number;
  /**
   * Total price in the converted currency
   * @type {number}
   * @memberof PropertySearchAllotmentRoomPriceResponse
   */
  totalPrice?: number;
  /**
   * Total unit price in the original currency
   * @type {number}
   * @memberof PropertySearchAllotmentRoomPriceResponse
   */
  totalUnitOriginalPrice?: number;
  /**
   * Total unit price in the converted currency
   * @type {number}
   * @memberof PropertySearchAllotmentRoomPriceResponse
   */
  totalUnitPrice?: number;
}
/**
 * Model of PropertySearchAllotmentRoomResponse with description and examples for the attributes
 * @export
 * @interface PropertySearchAllotmentRoomResponse
 */
export interface PropertySearchAllotmentRoomResponse {
  /**
   * Set of allotment room items
   * @type {Array<PropertySearchAllotmentRoomItemResponse>}
   * @memberof PropertySearchAllotmentRoomResponse
   */
  allotmentRoomItems?: Array<PropertySearchAllotmentRoomItemResponse>;
  /**
   * Auto-release status of the allotment room
   * @type {string}
   * @memberof PropertySearchAllotmentRoomResponse
   */
  autoReleased?: string;
  /**
   * Available quantity of the allotment room
   * @type {number}
   * @memberof PropertySearchAllotmentRoomResponse
   */
  availableQuantity?: number;
  /**
   * List of daily availabilities for the allotment room
   * @type {Array<PropertySearchAllotmentRoomDailyAvailabilityResponse>}
   * @memberof PropertySearchAllotmentRoomResponse
   */
  dailyAvailabilities?: Array<PropertySearchAllotmentRoomDailyAvailabilityResponse>;
  /**
   * End date of the allotment room
   * @type {string}
   * @memberof PropertySearchAllotmentRoomResponse
   */
  endDate?: string;
  /**
   * Identifier of the allotment room
   * @type {number}
   * @memberof PropertySearchAllotmentRoomResponse
   */
  id?: number;
  /**
   * Number of people accommodated in the allotment room
   * @type {number}
   * @memberof PropertySearchAllotmentRoomResponse
   */
  pax?: number;
  /**
   * Number of people requested for the allotment room
   * @type {number}
   * @memberof PropertySearchAllotmentRoomResponse
   */
  paxRequested?: number;
  /**
   * Quantity of the allotment room
   * @type {number}
   * @memberof PropertySearchAllotmentRoomResponse
   */
  quantity?: number;
  /**
   * Quantity requested for the allotment room
   * @type {number}
   * @memberof PropertySearchAllotmentRoomResponse
   */
  quantityRequested?: number;
  /**
   * Quantity used of the allotment room
   * @type {number}
   * @memberof PropertySearchAllotmentRoomResponse
   */
  quantityUsed?: number;
  /**
   * Release date of the allotment room
   * @type {string}
   * @memberof PropertySearchAllotmentRoomResponse
   */
  releaseDate?: string;
  /**
   * Release period of the allotment room
   * @type {number}
   * @memberof PropertySearchAllotmentRoomResponse
   */
  releasePeriod?: number;
  /**
   * Interval of the release period
   * @type {string}
   * @memberof PropertySearchAllotmentRoomResponse
   */
  releasePeriodInterval?: string;
  /**
   * Code of the requested room category
   * @type {string}
   * @memberof PropertySearchAllotmentRoomResponse
   */
  roomCategoryRequestedCode?: string;
  /**
   * Identifier of the requested room category
   * @type {number}
   * @memberof PropertySearchAllotmentRoomResponse
   */
  roomCategoryRequestedId?: number;
  /**
   * Name of the requested room category
   * @type {string}
   * @memberof PropertySearchAllotmentRoomResponse
   */
  roomCategoryRequestedName?: string;
  /**
   * Order priority of the requested room category
   * @type {number}
   * @memberof PropertySearchAllotmentRoomResponse
   */
  roomCategoryRequestedOrderPriority?: number;
  /**
   * List of room types in the requested room category
   * @type {Array<string>}
   * @memberof PropertySearchAllotmentRoomResponse
   */
  roomCategoryRequestedRoomTypes?: Array<string>;
  /**
   * List of room prices
   * @type {Array<PropertySearchAllotmentRoomPriceResponse>}
   * @memberof PropertySearchAllotmentRoomResponse
   */
  roomPrices?: Array<PropertySearchAllotmentRoomPriceResponse>;
  /**
   * Start date of the allotment room
   * @type {string}
   * @memberof PropertySearchAllotmentRoomResponse
   */
  startDate?: string;
  /**
   * How should allotment room be synchronized
   * @type {string}
   * @memberof PropertySearchAllotmentRoomResponse
   */
  synchronizedAs?: string;
}
/**
 * Model of PropertySearchFilterRequest with description and examples for the attributes
 * @export
 * @interface PropertySearchFilterRequest
 */
export interface PropertySearchFilterRequest {
  /**
   * Boolean value that specifies if availability of the properties will be checked. If not provided, default is true
   * @type {boolean}
   * @memberof PropertySearchFilterRequest
   */
  checkAvailability?: boolean;
  /**
   * distance
   * @type {number}
   * @memberof PropertySearchFilterRequest
   */
  distance?: number;
  /**
   * End date for the booked room
   * @type {string}
   * @memberof PropertySearchFilterRequest
   */
  end?: string;
  /**
   * List of field names to include in the response. Use dot notation for nested fields (\'rooms.field1\'). To include all fields from a nested object, specify the object name only (\'rooms\'). If not provided, all fields will be returned.
   * @type {Array<string>}
   * @memberof PropertySearchFilterRequest
   */
  fieldsToInclude?: Array<string>;
  /**
   * Keyword to filter property\'s name
   * @type {string}
   * @memberof PropertySearchFilterRequest
   */
  keyword?: string;
  /**
   * Latitude coordinate of the property
   * @type {number}
   * @memberof PropertySearchFilterRequest
   */
  latitude?: number;
  /**
   * Longitude coordinate of the property
   * @type {number}
   * @memberof PropertySearchFilterRequest
   */
  longitude?: number;
  /**
   * The maximum number of room configurations to be returned, sorted in ascending order by total price. This option should be considered only when the occupancyType is TOTAL. Default and max value is 10.
   * @type {number}
   * @memberof PropertySearchFilterRequest
   */
  maxConfigurationResults?: number;
  /**
   * Flag that specifies whether the minimum prices for the properties should be returned or not when a date range is not provided. When this flag is set to true, and either \'start\' or \'end\' date is not specified, the response will include the minimum price available for the rooms and the properties for a period of the next 365 days. By default, this flag is set to false, meaning prices will not be included if either \'start\' or \'end\' date is not specified.
   * @type {boolean}
   * @memberof PropertySearchFilterRequest
   */
  minPrices?: boolean;
  /**
   * northEastLatitude
   * @type {number}
   * @memberof PropertySearchFilterRequest
   */
  northEastLatitude?: number;
  /**
   * northEastLongitude
   * @type {number}
   * @memberof PropertySearchFilterRequest
   */
  northEastLongitude?: number;
  /**
   * Number of extra beds
   * @type {number}
   * @memberof PropertySearchFilterRequest
   */
  numberOfExtraBeds?: number;
  /**
   * Number of people
   * @type {number}
   * @memberof PropertySearchFilterRequest
   */
  numberOfPeople?: number;
  /**
   * Number of booked rooms. If not specified, default is 1
   * @type {number}
   * @memberof PropertySearchFilterRequest
   */
  numberOfRooms?: number;
  /**
   * Type of occupancy search mode: PER_ROOM or TOTAL. If not provided, default is PER_ROOMPER_ROOM: The search will be done for a specific number of people per room. TOTAL: The search will be done for the total number of people accommodated in the given number of rooms.
   * @type {string}
   * @memberof PropertySearchFilterRequest
   */
  occupancyType?: PropertySearchFilterRequestOccupancyTypeEnum;
  /**
   * Page number for pagination, where page = 0 represents the first \'size\' elements, page = 1 represents the second \'size\' elements, and so on. If omitted, the response will not be paginated. When paginated, the response header \'X-Total-Count\' will contain the total number of elements.
   * @type {number}
   * @memberof PropertySearchFilterRequest
   */
  page?: number;
  /**
   * List of preferred room allocations when occupancyType is TOTAL. Each object represents a room for the preferred configuration. If not specified or empty, all possible configurations will be returned.
   * @type {Array<RoomAllocationRequest>}
   * @memberof PropertySearchFilterRequest
   */
  preferredConfiguration?: Array<RoomAllocationRequest>;
  /**
   * The number of the properties for which price will be calculated, if is not set all properties will come with prices
   * @type {number}
   * @memberof PropertySearchFilterRequest
   */
  propertiesWithPriceLimit?: number;
  /**
   * List of property amenity codes to filter properties
   * @type {Array<string>}
   * @memberof PropertySearchFilterRequest
   */
  propertyAmenityCodes?: Array<string>;
  /**
   * List of property ids
   * @type {Array<number>}
   * @memberof PropertySearchFilterRequest
   */
  propertyIds?: Array<number>;
  /**
   * List of property type codes to filter properties
   * @type {Array<string>}
   * @memberof PropertySearchFilterRequest
   */
  propertyType?: Array<string>;
  /**
   * List of room amenity codes to filter properties
   * @type {Array<string>}
   * @memberof PropertySearchFilterRequest
   */
  roomAmenityCodes?: Array<string>;
  /**
   * List of room category codes to filter properties
   * @type {Array<string>}
   * @memberof PropertySearchFilterRequest
   */
  roomCategoryCodes?: Array<string>;
  /**
   * List of room type codes to filter properties
   * @type {Array<string>}
   * @memberof PropertySearchFilterRequest
   */
  roomType?: Array<string>;
  /**
   * Boolean value that specifies if only FIT allotments should be displayed. If not provided, default is false
   * @type {boolean}
   * @memberof PropertySearchFilterRequest
   */
  showOnlyFitAllotments?: boolean;
  /**
   * Boolean value that specifies if the properties without cooperation will be shown. If not provided default is false
   * @type {boolean}
   * @memberof PropertySearchFilterRequest
   */
  showPropertiesWithoutCooperation?: boolean;
  /**
   * Page size for pagination, indicating the number of properties per page. The response list will contain this specified number of properties. This parameter is used in conjunction with the \'page\' parameter.
   * @type {number}
   * @memberof PropertySearchFilterRequest
   */
  size?: number;
  /**
   * southWestLatitude
   * @type {number}
   * @memberof PropertySearchFilterRequest
   */
  southWestLatitude?: number;
  /**
   * southWestLongitude
   * @type {number}
   * @memberof PropertySearchFilterRequest
   */
  southWestLongitude?: number;
  /**
   * Start date for the booked room
   * @type {string}
   * @memberof PropertySearchFilterRequest
   */
  start?: string;
  /**
   * If provided, this identifier indicates that the search is tailored for tour accommodations associated with a specific tour.Including latitude and longitude for tour refines the search to properties located within this specific tour destination.
   * @type {number}
   * @memberof PropertySearchFilterRequest
   */
  tourId?: number;
}

export const PropertySearchFilterRequestOccupancyTypeEnum = {
  PerRoom: "PER_ROOM",
  Total: "TOTAL",
} as const;

export type PropertySearchFilterRequestOccupancyTypeEnum =
  (typeof PropertySearchFilterRequestOccupancyTypeEnum)[keyof typeof PropertySearchFilterRequestOccupancyTypeEnum];

/**
 * Model of PropertySearchFiltersResponse with description and examples for the attributes
 * @export
 * @interface PropertySearchFiltersResponse
 */
export interface PropertySearchFiltersResponse {
  /**
   * List of property amenities to filter properties
   * @type {Array<PropertyAmenityResponse>}
   * @memberof PropertySearchFiltersResponse
   */
  propertyAmenities?: Array<PropertyAmenityResponse>;
  /**
   * List of property types to filter properties
   * @type {Array<PropertyTypeResponse>}
   * @memberof PropertySearchFiltersResponse
   */
  propertyTypes?: Array<PropertyTypeResponse>;
  /**
   * List of room amenities to filter properties
   * @type {Array<RoomAmenityResponse>}
   * @memberof PropertySearchFiltersResponse
   */
  roomAmenities?: Array<RoomAmenityResponse>;
  /**
   * List of room types to filter properties
   * @type {Array<RoomTypeResponse>}
   * @memberof PropertySearchFiltersResponse
   */
  roomTypes?: Array<RoomTypeResponse>;
}
/**
 * Model of PropertySearchLocationResponse with description and examples for the attributes
 * @export
 * @interface PropertySearchLocationResponse
 */
export interface PropertySearchLocationResponse {
  /**
   * Address of the location
   * @type {string}
   * @memberof PropertySearchLocationResponse
   */
  address?: string;
  /**
   * City
   * @type {string}
   * @memberof PropertySearchLocationResponse
   */
  city?: string;
  /**
   * Country
   * @type {string}
   * @memberof PropertySearchLocationResponse
   */
  country?: string;
  /**
   *
   * @type {GeoPoint}
   * @memberof PropertySearchLocationResponse
   */
  geoPoint?: GeoPoint;
  /**
   * Municipality
   * @type {string}
   * @memberof PropertySearchLocationResponse
   */
  municipality?: string;
  /**
   * Postal code for the location
   * @type {string}
   * @memberof PropertySearchLocationResponse
   */
  postalCode?: string;
  /**
   * Region
   * @type {string}
   * @memberof PropertySearchLocationResponse
   */
  region?: string;
  /**
   * State
   * @type {string}
   * @memberof PropertySearchLocationResponse
   */
  state?: string;
}
/**
 * Model of PropertySearchResponse with description and examples for the attributes
 * @export
 * @interface PropertySearchResponse
 */
export interface PropertySearchResponse {
  /**
   * Boolean value that specifies if the property has active cooperation
   * @type {boolean}
   * @memberof PropertySearchResponse
   */
  activeCooperation?: boolean;
  /**
   * Additional description of the property
   * @type {string}
   * @memberof PropertySearchResponse
   */
  additionalDescription?: string;
  /**
   * Allotments of the property
   * @type {Array<PropertySearchAllotmentResponse>}
   * @memberof PropertySearchResponse
   */
  allotments?: Array<PropertySearchAllotmentResponse>;
  /**
   * Specifies if the availability is checked
   * @type {boolean}
   * @memberof PropertySearchResponse
   */
  availabilityChecked?: boolean;
  /**
   * Total number of available capacity
   * @type {number}
   * @memberof PropertySearchResponse
   */
  availableCapacity?: number;
  /**
   * Total number of available rooms
   * @type {number}
   * @memberof PropertySearchResponse
   */
  availableRooms?: number;
  /**
   * Determines the booking order for allotment and regular availability of the same room. When \'bookAllotmentFirst\' is set to true, all allotment room availabilities must be booked before any regular room availability can be booked. If set to false, there is no specified order, allowing both allotment and regular room availabilities to be booked in any sequence. For example, assume there are 5 total available rooms, with 3 being allotment availabilities and 2 regular availabilities. If \'bookAllotmentFirst\' is false, any of these 5 rooms can be booked in any order. If \'bookAllotmentFirst\' is true, then the 2 allotment rooms must be booked first, followed by the 3 regular rooms.
   * @type {boolean}
   * @memberof PropertySearchResponse
   */
  bookAllotmentFirst?: boolean;
  /**
   * End of the check in time
   * @type {string}
   * @memberof PropertySearchResponse
   */
  checkInEndTime?: string;
  /**
   * Start of the check in time
   * @type {string}
   * @memberof PropertySearchResponse
   */
  checkInStartTime?: string;
  /**
   * End of the check out time
   * @type {string}
   * @memberof PropertySearchResponse
   */
  checkOutEndTime?: string;
  /**
   *
   * @type {ContactResponse}
   * @memberof PropertySearchResponse
   */
  contact?: ContactResponse;
  /**
   * DEPRECATED, kept for legacy support. Use \'bookAllotmentFirst\' instead
   * @type {boolean}
   * @memberof PropertySearchResponse
   */
  cooperationBookRegularFirst?: boolean;
  /**
   *
   * @type {FileResponse}
   * @memberof PropertySearchResponse
   */
  coverPhoto?: FileResponse;
  /**
   * Code of the currency
   * @type {string}
   * @memberof PropertySearchResponse
   */
  currencyCode?: string;
  /**
   * Description of the property
   * @type {string}
   * @memberof PropertySearchResponse
   */
  description?: string;
  /**
   * Specified if the property is available for the full search criteria
   * @type {boolean}
   * @memberof PropertySearchResponse
   */
  fullAvailability?: boolean;
  /**
   * Identifier of the property
   * @type {number}
   * @memberof PropertySearchResponse
   */
  id?: number;
  /**
   * All Featured thumbnail images of the property
   * @type {Array<FileResponse>}
   * @memberof PropertySearchResponse
   */
  images?: Array<FileResponse>;
  /**
   * Specifies if the property is launched
   * @type {boolean}
   * @memberof PropertySearchResponse
   */
  launched?: boolean;
  /**
   *
   * @type {PropertySearchLocationResponse}
   * @memberof PropertySearchResponse
   */
  location?: PropertySearchLocationResponse;
  /**
   *
   * @type {FileResponse}
   * @memberof PropertySearchResponse
   */
  logo?: FileResponse;
  /**
   * Name of the property
   * @type {string}
   * @memberof PropertySearchResponse
   */
  name?: string;
  /**
   * Starting prices of the property for the search criteria
   * @type {number}
   * @memberof PropertySearchResponse
   */
  pricesFrom?: number;
  /**
   * Currency code for the \'prices from\'
   * @type {string}
   * @memberof PropertySearchResponse
   */
  pricesFromCurrencyCode?: string;
  /**
   * Currency symbol for the \'prices from\'
   * @type {string}
   * @memberof PropertySearchResponse
   */
  pricesFromCurrencySymbol?: string;
  /**
   * Boolean that specifies if the rooms come with price calculated or only availability
   * @type {boolean}
   * @memberof PropertySearchResponse
   */
  pricesLoaded?: boolean;
  /**
   * Set of property amenities
   * @type {Array<PropertyAmenityResponse>}
   * @memberof PropertySearchResponse
   */
  propertyAmenities?: Array<PropertyAmenityResponse>;
  /**
   * Set of property amenity codes
   * @type {Array<string>}
   * @memberof PropertySearchResponse
   */
  propertyAmenityCodes?: Array<string>;
  /**
   * Set of property amenity names
   * @type {Array<string>}
   * @memberof PropertySearchResponse
   */
  propertyAmenityNames?: Array<string>;
  /**
   * Code of the property type
   * @type {string}
   * @memberof PropertySearchResponse
   */
  propertyTypeCode?: string;
  /**
   * Name of the property type
   * @type {string}
   * @memberof PropertySearchResponse
   */
  propertyTypeName?: string;
  /**
   * Registry number of the property
   * @type {string}
   * @memberof PropertySearchResponse
   */
  registryNumber?: string;
  /**
   * List of available room configurations for the property
   * @type {Array<RoomConfigurationDTO>}
   * @memberof PropertySearchResponse
   */
  roomConfigurations?: Array<RoomConfigurationDTO>;
  /**
   * Rooms of the property
   * @type {Array<PropertySearchRoomResponse>}
   * @memberof PropertySearchResponse
   */
  rooms?: Array<PropertySearchRoomResponse>;
  /**
   * Boolean value that specifies if the property allows booking to be made on the same day as check in
   * @type {boolean}
   * @memberof PropertySearchResponse
   */
  sameDayBooking?: boolean;
  /**
   * Boolean value that specifies if the property allows self check-in only
   * @type {boolean}
   * @memberof PropertySearchResponse
   */
  selfCheckInOnly?: boolean;
  /**
   * Boolean value that specifies if the property allows self check-in and regular check-in
   * @type {boolean}
   * @memberof PropertySearchResponse
   */
  selfCheckInPossible?: boolean;
  /**
   * Total number of capacity
   * @type {number}
   * @memberof PropertySearchResponse
   */
  totalCapacity?: number;
  /**
   * Total number of rooms
   * @type {number}
   * @memberof PropertySearchResponse
   */
  totalRooms?: number;
  /**
   * Specifies if the property is visible for cooperation
   * @type {boolean}
   * @memberof PropertySearchResponse
   */
  visibleForCooperation?: boolean;
}
/**
 * Model of PropertySearchRoomAddOnResponse with description and examples for the attributes
 * @export
 * @interface PropertySearchRoomAddOnResponse
 */
export interface PropertySearchRoomAddOnResponse {
  /**
   * Add-on category name
   * @type {string}
   * @memberof PropertySearchRoomAddOnResponse
   */
  addOnCategoryName?: string;
  /**
   * Add-on identifier
   * @type {number}
   * @memberof PropertySearchRoomAddOnResponse
   */
  addOnId?: number;
  /**
   * Booking room identifier associated with the add-on
   * @type {number}
   * @memberof PropertySearchRoomAddOnResponse
   */
  bookingRoomId?: number;
  /**
   * Code of the room add-on
   * @type {string}
   * @memberof PropertySearchRoomAddOnResponse
   */
  code?: string;
  /**
   * Code of the currency specified by travel agent
   * @type {string}
   * @memberof PropertySearchRoomAddOnResponse
   */
  currencyCode?: string;
  /**
   * Symbol of the currency specified by travel agent
   * @type {string}
   * @memberof PropertySearchRoomAddOnResponse
   */
  currencySymbol?: string;
  /**
   * Unique identifier of the room add-on
   * @type {number}
   * @memberof PropertySearchRoomAddOnResponse
   */
  id?: number;
  /**
   * Maximum quantity allowed for the room add-on
   * @type {number}
   * @memberof PropertySearchRoomAddOnResponse
   */
  maxQuantity?: number;
  /**
   * Name of the room add-on
   * @type {string}
   * @memberof PropertySearchRoomAddOnResponse
   */
  name?: string;
  /**
   * Code of the currency specified in the price agreement
   * @type {string}
   * @memberof PropertySearchRoomAddOnResponse
   */
  originalCurrencyCode?: string;
  /**
   * Symbol of the currency specified in the price agreement
   * @type {string}
   * @memberof PropertySearchRoomAddOnResponse
   */
  originalCurrencySymbol?: string;
  /**
   * Original price for the add on specified in the price agreement
   * @type {number}
   * @memberof PropertySearchRoomAddOnResponse
   */
  originalPrice?: number;
  /**
   * Number of persons the add-on is for
   * @type {number}
   * @memberof PropertySearchRoomAddOnResponse
   */
  pax?: number;
  /**
   * Total price for the add-on
   * @type {number}
   * @memberof PropertySearchRoomAddOnResponse
   */
  price?: number;
  /**
   * Number of searched quantity
   * @type {number}
   * @memberof PropertySearchRoomAddOnResponse
   */
  quantity?: number;
  /**
   * Room identifier associated with the add-on
   * @type {number}
   * @memberof PropertySearchRoomAddOnResponse
   */
  roomId?: number;
  /**
   * Original unit price of the add-on in the price agreement
   * @type {number}
   * @memberof PropertySearchRoomAddOnResponse
   */
  unitOriginalPrice?: number;
  /**
   * Unit price of the add-on
   * @type {number}
   * @memberof PropertySearchRoomAddOnResponse
   */
  unitPrice?: number;
}
/**
 * Model of PropertySearchRoomAmenityTypeResponse with description and examples for the attributes
 * @export
 * @interface PropertySearchRoomAmenityTypeResponse
 */
export interface PropertySearchRoomAmenityTypeResponse {
  /**
   * Code of room amenity type
   * @type {string}
   * @memberof PropertySearchRoomAmenityTypeResponse
   */
  code?: string;
  /**
   * Name of room amenity type
   * @type {string}
   * @memberof PropertySearchRoomAmenityTypeResponse
   */
  name?: string;
  /**
   * List of amenity names available in the room
   * @type {Array<string>}
   * @memberof PropertySearchRoomAmenityTypeResponse
   */
  roomAmenityNames?: Array<string>;
}
/**
 * This model represents the response for room pricing in a property search. It includes detailed pricing information based on the number of people, breakfast availability, and additional options like extra beds.
 * @export
 * @interface PropertySearchRoomPriceResponse
 */
export interface PropertySearchRoomPriceResponse {
  /**
   * Indicates if breakfast is available for the guests accommodated in the room.
   * @type {boolean}
   * @memberof PropertySearchRoomPriceResponse
   */
  breakfastAvailable?: boolean;
  /**
   * Specifies if the cost of breakfast is included in the total price for the room.
   * @type {boolean}
   * @memberof PropertySearchRoomPriceResponse
   */
  breakfastIncluded?: boolean;
  /**
   * The price for extra bed(s) in the room. This field will have a value only when extra beds are used to accommodate the \'numberOfPeople\' guests.
   * @type {number}
   * @memberof PropertySearchRoomPriceResponse
   */
  extraBedPrice?: number;
  /**
   * The number of people accommodated in the room.
   * @type {number}
   * @memberof PropertySearchRoomPriceResponse
   */
  numberOfPeople?: number;
  /**
   * The total price for accommodating the \'numberOfPeople\' guests in the room.
   * @type {number}
   * @memberof PropertySearchRoomPriceResponse
   */
  price?: number;
  /**
   * The total cost for breakfast, applicable if breakfast is not included in the room price.
   * @type {number}
   * @memberof PropertySearchRoomPriceResponse
   */
  totalBreakfastPrice?: number;
}
/**
 * Model of PropertySearchRoomResponse with description and examples for the attributes
 * @export
 * @interface PropertySearchRoomResponse
 */
export interface PropertySearchRoomResponse {
  /**
   * Additional description of the room
   * @type {string}
   * @memberof PropertySearchRoomResponse
   */
  additionalDescription?: string;
  /**
   * Number of allotment rooms
   * @type {number}
   * @memberof PropertySearchRoomResponse
   */
  allottedRoomQuantity?: number;
  /**
   * Boolean value which specifies if the availability of the room was checked
   * @type {boolean}
   * @memberof PropertySearchRoomResponse
   */
  availabilityChecked?: boolean;
  /**
   * Boolean value which specifies if the room is available
   * @type {boolean}
   * @memberof PropertySearchRoomResponse
   */
  available?: boolean;
  /**
   * Number of available quantity of the room
   * @type {number}
   * @memberof PropertySearchRoomResponse
   */
  availableQuantity?: number;
  /**
   * Average daily price for the room
   * @type {number}
   * @memberof PropertySearchRoomResponse
   */
  averageDailyPrice?: number;
  /**
   * Possible bedding options for the room specified as a a semi-colon separated array where each entry is a comma separated array, where 1 means single bed and 2 means double bed
   * @type {string}
   * @memberof PropertySearchRoomResponse
   */
  beddingOptions?: string;
  /**
   * Description for the breakfast
   * @type {string}
   * @memberof PropertySearchRoomResponse
   */
  breakfastAddOnDescription?: string;
  /**
   * Boolean value that specifies if the breakfast is available
   * @type {boolean}
   * @memberof PropertySearchRoomResponse
   */
  breakfastAvailable?: boolean;
  /**
   * Boolean value that specifies if the breakfast is included in the price
   * @type {boolean}
   * @memberof PropertySearchRoomResponse
   */
  breakfastIncluded?: boolean;
  /**
   * Code of the room
   * @type {string}
   * @memberof PropertySearchRoomResponse
   */
  code?: string;
  /**
   * Code of the currency specified by travel agent
   * @type {string}
   * @memberof PropertySearchRoomResponse
   */
  currencyCode?: string;
  /**
   * Symbol of the currency specified by travel agent
   * @type {string}
   * @memberof PropertySearchRoomResponse
   */
  currencySymbol?: string;
  /**
   * Default bedding options for the room specified as a comma separated array, where 1 means single and 2 means double bed
   * @type {string}
   * @memberof PropertySearchRoomResponse
   */
  defaultBeddingOptions?: string;
  /**
   * Description of the room
   * @type {string}
   * @memberof PropertySearchRoomResponse
   */
  description?: string;
  /**
   * Discount for the room specified in the price agreement
   * @type {number}
   * @memberof PropertySearchRoomResponse
   */
  discount?: number;
  /**
   * Discount description for the room specified in the price agreement
   * @type {string}
   * @memberof PropertySearchRoomResponse
   */
  discountDescription?: string;
  /**
   * End day for of the month for the room availability
   * @type {number}
   * @memberof PropertySearchRoomResponse
   */
  endDay?: number;
  /**
   * End month for the room availability
   * @type {number}
   * @memberof PropertySearchRoomResponse
   */
  endMonth?: number;
  /**
   * Boolean value that specifies if the external price is being used
   * @type {boolean}
   * @memberof PropertySearchRoomResponse
   */
  externalPriceUsed?: boolean;
  /**
   * Boolean value to check possibility for extra bed in the room
   * @type {boolean}
   * @memberof PropertySearchRoomResponse
   */
  extraBed?: boolean;
  /**
   * Description for the extra bed
   * @type {string}
   * @memberof PropertySearchRoomResponse
   */
  extraBedAddOnDescription?: string;
  /**
   * Price for the extra bed in currency specified in the price agreement
   * @type {number}
   * @memberof PropertySearchRoomResponse
   */
  extraBedOriginalPrice?: number;
  /**
   * Price for the extra bed in currency specified by travel agent
   * @type {number}
   * @memberof PropertySearchRoomResponse
   */
  extraBedPrice?: number;
  /**
   * Number of extra beds available
   * @type {number}
   * @memberof PropertySearchRoomResponse
   */
  extraBedQuantity?: number;
  /**
   * Identifier of the room
   * @type {number}
   * @memberof PropertySearchRoomResponse
   */
  id?: number;
  /**
   * List of thumbnail images of the room
   * @type {Array<FileResponse>}
   * @memberof PropertySearchRoomResponse
   */
  images?: Array<FileResponse>;
  /**
   * Number of instant bookings
   * @type {number}
   * @memberof PropertySearchRoomResponse
   */
  instantBookingQuantity?: number;
  /**
   * Maximum number of occupants
   * @type {number}
   * @memberof PropertySearchRoomResponse
   */
  maxOccupancy?: number;
  /**
   * Minimum number of occupants
   * @type {number}
   * @memberof PropertySearchRoomResponse
   */
  minOccupancy?: number;
  /**
   * Name of the room
   * @type {string}
   * @memberof PropertySearchRoomResponse
   */
  name?: string;
  /**
   * Number of nights in the booking
   * @type {number}
   * @memberof PropertySearchRoomResponse
   */
  numberOfNights?: number;
  /**
   * Code of the currency specified in the price agreement
   * @type {string}
   * @memberof PropertySearchRoomResponse
   */
  originalCurrencyCode?: string;
  /**
   * Symbol of the currency specified in the price agreement
   * @type {string}
   * @memberof PropertySearchRoomResponse
   */
  originalCurrencySymbol?: string;
  /**
   * Original price for the room specified in the price agreement
   * @type {number}
   * @memberof PropertySearchRoomResponse
   */
  originalPrice?: number;
  /**
   * Price for the room
   * @type {number}
   * @memberof PropertySearchRoomResponse
   */
  price?: number;
  /**
   * Only applicable when \'occupancyType\' in the request is \'TOTAL\'. This field lists all possible prices for the room, with each entry corresponding to a different guest count. The prices can vary due to a ladder structure in the price agreement. For example, if the search request specifies \'numberOfRooms\' as 2 and \'numberOfPeople\' as 5, the \'prices\' will include distinct entries for accommodating 1, 2, 3, and 4 guests in a room. These configurations represent different occupancy scenarios such as 1+4, 2+3, 3+2, and 4+1 guests, respectively.
   * @type {Array<PropertySearchRoomPriceResponse>}
   * @memberof PropertySearchRoomResponse
   */
  prices?: Array<PropertySearchRoomPriceResponse>;
  /**
   * Identifier of the property
   * @type {number}
   * @memberof PropertySearchRoomResponse
   */
  propertyId?: number;
  /**
   * Number of inventory quantity
   * @type {number}
   * @memberof PropertySearchRoomResponse
   */
  quantity?: number;
  /**
   * Number of regular rooms
   * @type {number}
   * @memberof PropertySearchRoomResponse
   */
  regularRoomQuantity?: number;
  /**
   * List of room addons
   * @type {Array<PropertySearchRoomAddOnResponse>}
   * @memberof PropertySearchRoomResponse
   */
  roomAddOnSearchList?: Array<PropertySearchRoomAddOnResponse>;
  /**
   * List of room addon categories
   * @type {Array<ProductCategoryResponse>}
   * @memberof PropertySearchRoomResponse
   */
  roomAddonCategories?: Array<ProductCategoryResponse>;
  /**
   * Set of available room amenities
   * @type {Array<RoomAmenityResponse>}
   * @memberof PropertySearchRoomResponse
   */
  roomAmenities?: Array<RoomAmenityResponse>;
  /**
   * Set of amenity codes available in the room
   * @type {Array<string>}
   * @memberof PropertySearchRoomResponse
   */
  roomAmenityCodes?: Array<string>;
  /**
   * List of room amenity types
   * @type {Array<PropertySearchRoomAmenityTypeResponse>}
   * @memberof PropertySearchRoomResponse
   */
  roomAmenityTypes?: Array<PropertySearchRoomAmenityTypeResponse>;
  /**
   * Code of the room category
   * @type {string}
   * @memberof PropertySearchRoomResponse
   */
  roomCategoryCode?: string;
  /**
   * Name of the room category
   * @type {string}
   * @memberof PropertySearchRoomResponse
   */
  roomCategoryName?: string;
  /**
   * Size of the room in square metres
   * @type {number}
   * @memberof PropertySearchRoomResponse
   */
  roomSize?: number;
  /**
   * Code of the room type
   * @type {string}
   * @memberof PropertySearchRoomResponse
   */
  roomTypeCode?: string;
  /**
   * Name of the room type
   * @type {string}
   * @memberof PropertySearchRoomResponse
   */
  roomTypeName?: string;
  /**
   * Start day of the month for the room availability
   * @type {number}
   * @memberof PropertySearchRoomResponse
   */
  startDay?: number;
  /**
   * Start month for the room availability
   * @type {number}
   * @memberof PropertySearchRoomResponse
   */
  startMonth?: number;
  /**
   * Total price for the breakfast in currency specified by travel agent
   * @type {number}
   * @memberof PropertySearchRoomResponse
   */
  totalBreakfastPrice?: number;
  /**
   * Total price for the breakfast in currency specified in price agreement
   * @type {number}
   * @memberof PropertySearchRoomResponse
   */
  totalOriginalBreakfastPrice?: number;
  /**
   * Boolean value to check if the room is available whole year
   * @type {boolean}
   * @memberof PropertySearchRoomResponse
   */
  wholeYearAvailability?: boolean;
}
/**
 * Model of PropertyTypeResponse with description and examples for the attributes
 * @export
 * @interface PropertyTypeResponse
 */
export interface PropertyTypeResponse {
  /**
   * Code of the property type
   * @type {string}
   * @memberof PropertyTypeResponse
   */
  code?: string;
  /**
   * Name of the property type
   * @type {string}
   * @memberof PropertyTypeResponse
   */
  name?: string;
}
/**
 * Model of RoomAddOnResponse with description and examples for the attributes
 * @export
 * @interface RoomAddOnResponse
 */
export interface RoomAddOnResponse {
  /**
   * Identifier of the addOn
   * @type {number}
   * @memberof RoomAddOnResponse
   */
  id?: number;
  /**
   * Maximum quantity of the addOn available
   * @type {number}
   * @memberof RoomAddOnResponse
   */
  maxQuantity?: number;
  /**
   * Name of the AddOn
   * @type {string}
   * @memberof RoomAddOnResponse
   */
  name?: string;
}
/**
 *
 * @export
 * @interface RoomAllocationDTO
 */
export interface RoomAllocationDTO {
  /**
   * Allotment room ID
   * @type {number}
   * @memberof RoomAllocationDTO
   */
  allotmentRoomId?: number;
  /**
   * Booking room ID
   * @type {number}
   * @memberof RoomAllocationDTO
   */
  bookingRoomId?: number;
  /**
   * Boolean value that specifies if the breakfast is available
   * @type {boolean}
   * @memberof RoomAllocationDTO
   */
  breakfastAvailable: boolean;
  /**
   * Boolean value that specifies if the breakfast is included in the price
   * @type {boolean}
   * @memberof RoomAllocationDTO
   */
  breakfastIncluded: boolean;
  /**
   * Price for the breakfast
   * @type {number}
   * @memberof RoomAllocationDTO
   */
  breakfastPrice: number;
  /**
   * Ages for the Children in the room
   * @type {Array<number>}
   * @memberof RoomAllocationDTO
   */
  childrenAges: Array<number>;
  /**
   * Parameters by age group
   * @type {Array<ParameterWrapper>}
   * @memberof RoomAllocationDTO
   */
  childrenByAgeGroup?: Array<ParameterWrapper>;
  /**
   *  Identifier used for addons
   * @type {string}
   * @memberof RoomAllocationDTO
   */
  code?: string;
  /**
   * Price for the extra bed
   * @type {number}
   * @memberof RoomAllocationDTO
   */
  extraBedPrice: number;
  /**
   * Quantity of extra beds in the room
   * @type {number}
   * @memberof RoomAllocationDTO
   */
  extraBedQuantity: number;
  /**
   * ID of the Room Allocation entity model
   * @type {number}
   * @memberof RoomAllocationDTO
   */
  id: number;
  /**
   * Number of Adults in the room
   * @type {number}
   * @memberof RoomAllocationDTO
   */
  numberOfAdults: number;
  /**
   * Number of Children in the room
   * @type {number}
   * @memberof RoomAllocationDTO
   */
  numberOfChildren: number;
  /**
   * Number of people in the room
   * @type {number}
   * @memberof RoomAllocationDTO
   */
  numberOfPeople: number;
  /**
   * Total price for the room allocation, including room and extra bed price
   * @type {number}
   * @memberof RoomAllocationDTO
   */
  price: number;
  /**
   * quantity with this RoomAllocation
   * @type {number}
   * @memberof RoomAllocationDTO
   */
  quantity?: number;
  /**
   * Room ID
   * @type {number}
   * @memberof RoomAllocationDTO
   */
  roomId: number;
  /**
   * Price for the room only, excluding extra bed price
   * @type {number}
   * @memberof RoomAllocationDTO
   */
  roomPrice: number;
}
/**
 * Model of RoomAllocationRequest with description and examples for the attributes
 * @export
 * @interface RoomAllocationRequest
 */
export interface RoomAllocationRequest {
  /**
   *
   * @type {Array<number>}
   * @memberof RoomAllocationRequest
   */
  childrenAges?: Array<number>;
  /**
   * Boolean value if breakfast would be included in the price calculations.
   * @type {boolean}
   * @memberof RoomAllocationRequest
   */
  includeBreakfast?: boolean;
  /**
   * Number of adults in a room
   * @type {number}
   * @memberof RoomAllocationRequest
   */
  numberOfAdults?: number;
  /**
   * Number of children in a room
   * @type {number}
   * @memberof RoomAllocationRequest
   */
  numberOfChildren?: number;
  /**
   * Number of people in a room
   * @type {number}
   * @memberof RoomAllocationRequest
   */
  numberOfPeople?: number;
}
/**
 * Model of RoomAmenityResponse with description and examples for the attributes
 * @export
 * @interface RoomAmenityResponse
 */
export interface RoomAmenityResponse {
  /**
   * Code of the room amenity
   * @type {string}
   * @memberof RoomAmenityResponse
   */
  code?: string;
  /**
   * Description of the room amenity
   * @type {string}
   * @memberof RoomAmenityResponse
   */
  description?: string;
  /**
   * Identifier of the room amenity
   * @type {number}
   * @memberof RoomAmenityResponse
   */
  id?: number;
  /**
   * Name of the room amenity
   * @type {string}
   * @memberof RoomAmenityResponse
   */
  name?: string;
  /**
   * Priority order for the room amenity
   * @type {number}
   * @memberof RoomAmenityResponse
   */
  orderPriority?: number;
  /**
   * Code of the room amenity type
   * @type {string}
   * @memberof RoomAmenityResponse
   */
  roomAmenityTypeCode?: string;
  /**
   * Name of the room amenity type
   * @type {string}
   * @memberof RoomAmenityResponse
   */
  roomAmenityTypeName?: string;
}
/**
 * Model of RoomAmenityTypeResponse with description and examples for the attributes
 * @export
 * @interface RoomAmenityTypeResponse
 */
export interface RoomAmenityTypeResponse {
  /**
   * Code of room amenity type
   * @type {string}
   * @memberof RoomAmenityTypeResponse
   */
  code?: string;
  /**
   * Name of room amenity type
   * @type {string}
   * @memberof RoomAmenityTypeResponse
   */
  name?: string;
  /**
   * List of amenity names available in the room
   * @type {Array<string>}
   * @memberof RoomAmenityTypeResponse
   */
  roomAmenityNames?: Array<string>;
}
/**
 * Model of RoomConfigurationDTO with description and examples for the attributes
 * @export
 * @interface RoomConfigurationDTO
 */
export interface RoomConfigurationDTO {
  /**
   * Currency code for all the prices in the configuration
   * @type {string}
   * @memberof RoomConfigurationDTO
   */
  currencyCode: string;
  /**
   * List of room allocations with details such as roomId, adults and prices
   * @type {Array<RoomAllocationDTO>}
   * @memberof RoomConfigurationDTO
   */
  roomAllocations: Array<RoomAllocationDTO>;
  /**
   * Total breakfast price for all room allocations in the configuration
   * @type {number}
   * @memberof RoomConfigurationDTO
   */
  totalBreakfastPrice: number;
  /**
   * Total extra bed price for all room allocations in the configuration
   * @type {number}
   * @memberof RoomConfigurationDTO
   */
  totalExtraBedPrice: number;
  /**
   * Total price of all room allocations in the configuration, including room and extra bed prices
   * @type {number}
   * @memberof RoomConfigurationDTO
   */
  totalPrice: number;
  /**
   * Total room price for all room allocations in the configuration, excluding extra bed prices
   * @type {number}
   * @memberof RoomConfigurationDTO
   */
  totalRoomPrice: number;
}
/**
 * Model of PropertyExtendedResponse with description and examples for the attributes
 * @export
 * @interface RoomExtendedResponse
 */
export interface RoomExtendedResponse {
  /**
   * Additional description of the room
   * @type {string}
   * @memberof RoomExtendedResponse
   */
  additionalDescription?: string;
  /**
   * Possible bedding options for the room specified as a a semi-colon separated array where each entry is a comma separated array, where 1 means single bed and 2 means double bed
   * @type {string}
   * @memberof RoomExtendedResponse
   */
  beddingOptions?: string;
  /**
   * Description for the breakfast
   * @type {string}
   * @memberof RoomExtendedResponse
   */
  breakfastAddOnDescription?: string;
  /**
   * Code of the room
   * @type {string}
   * @memberof RoomExtendedResponse
   */
  code?: string;
  /**
   * Default bedding options for the room specified as a comma separated array, where 1 means single and 2 means double bed
   * @type {string}
   * @memberof RoomExtendedResponse
   */
  defaultBeddingOptions?: string;
  /**
   * Description of the room
   * @type {string}
   * @memberof RoomExtendedResponse
   */
  description?: string;
  /**
   * End day for of the month for the room availability
   * @type {number}
   * @memberof RoomExtendedResponse
   */
  endDay?: number;
  /**
   * End month for the room availability
   * @type {number}
   * @memberof RoomExtendedResponse
   */
  endMonth?: number;
  /**
   * Boolean value to check possibility for extra bed in the room
   * @type {boolean}
   * @memberof RoomExtendedResponse
   */
  extraBed?: boolean;
  /**
   * Description for the extra bed
   * @type {string}
   * @memberof RoomExtendedResponse
   */
  extraBedAddOnDescription?: string;
  /**
   * Number of extra beds available
   * @type {number}
   * @memberof RoomExtendedResponse
   */
  extraBedQuantity?: number;
  /**
   * Identifier of the room
   * @type {number}
   * @memberof RoomExtendedResponse
   */
  id?: number;
  /**
   * List of thumbnail images of the room
   * @type {Array<FileResponse>}
   * @memberof RoomExtendedResponse
   */
  images?: Array<FileResponse>;
  /**
   * Number of instant bookings
   * @type {number}
   * @memberof RoomExtendedResponse
   */
  instantBookingQuantity?: number;
  /**
   * Maximum number of occupants
   * @type {number}
   * @memberof RoomExtendedResponse
   */
  maxOccupancy?: number;
  /**
   * Minimum number of occupants
   * @type {number}
   * @memberof RoomExtendedResponse
   */
  minOccupancy?: number;
  /**
   * Name of the room
   * @type {string}
   * @memberof RoomExtendedResponse
   */
  name?: string;
  /**
   * Identifier of the property
   * @type {number}
   * @memberof RoomExtendedResponse
   */
  propertyId?: number;
  /**
   * Number of inventory quantity
   * @type {number}
   * @memberof RoomExtendedResponse
   */
  quantity?: number;
  /**
   * List of room addon categories
   * @type {Array<ProductCategoryResponse>}
   * @memberof RoomExtendedResponse
   */
  roomAddonCategories?: Array<ProductCategoryResponse>;
  /**
   * Set of available room amenities
   * @type {Array<RoomAmenityResponse>}
   * @memberof RoomExtendedResponse
   */
  roomAmenities?: Array<RoomAmenityResponse>;
  /**
   * Set of amenity codes available in the room
   * @type {Array<string>}
   * @memberof RoomExtendedResponse
   */
  roomAmenityCodes?: Array<string>;
  /**
   * List of room amenity types
   * @type {Array<RoomAmenityTypeResponse>}
   * @memberof RoomExtendedResponse
   */
  roomAmenityTypes?: Array<RoomAmenityTypeResponse>;
  /**
   * Code of the room category
   * @type {string}
   * @memberof RoomExtendedResponse
   */
  roomCategoryCode?: string;
  /**
   * Name of the room category
   * @type {string}
   * @memberof RoomExtendedResponse
   */
  roomCategoryName?: string;
  /**
   * Size of the room in square metres
   * @type {number}
   * @memberof RoomExtendedResponse
   */
  roomSize?: number;
  /**
   * Code of the room type
   * @type {string}
   * @memberof RoomExtendedResponse
   */
  roomTypeCode?: string;
  /**
   * Name of the room type
   * @type {string}
   * @memberof RoomExtendedResponse
   */
  roomTypeName?: string;
  /**
   * Start day of the month for the room availability
   * @type {number}
   * @memberof RoomExtendedResponse
   */
  startDay?: number;
  /**
   * Start month for the room availability
   * @type {number}
   * @memberof RoomExtendedResponse
   */
  startMonth?: number;
  /**
   * Boolean value to check if the room is available whole year
   * @type {boolean}
   * @memberof RoomExtendedResponse
   */
  wholeYearAvailability?: boolean;
}
/**
 * Model of RoomTypeResponse with description and examples for the attributes
 * @export
 * @interface RoomTypeResponse
 */
export interface RoomTypeResponse {
  /**
   * Code of the room type
   * @type {string}
   * @memberof RoomTypeResponse
   */
  code?: string;
  /**
   * Name of the room type
   * @type {string}
   * @memberof RoomTypeResponse
   */
  name?: string;
}
/**
 *
 * @export
 * @interface Sort
 */
export interface Sort {
  /**
   *
   * @type {boolean}
   * @memberof Sort
   */
  empty?: boolean;
  /**
   *
   * @type {boolean}
   * @memberof Sort
   */
  sorted?: boolean;
  /**
   *
   * @type {boolean}
   * @memberof Sort
   */
  unsorted?: boolean;
}
/**
 * Model of TravelAgentResponse with description and examples for the attributes
 * @export
 * @interface TravelAgentResponse
 */
export interface TravelAgentResponse {
  /**
   * Id of the Travel Agency
   * @type {number}
   * @memberof TravelAgentResponse
   */
  id?: number;
  /**
   * Name of the Travel Agency
   * @type {string}
   * @memberof TravelAgentResponse
   */
  name?: string;
}
