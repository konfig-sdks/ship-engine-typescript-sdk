/* tslint:disable */
/* eslint-disable */
/*
ShipEngine API

ShipEngine's easy-to-use REST API lets you manage all of your shipping needs without worrying about the complexities of different carrier APIs and protocols. We handle all the heavy lifting so you can focus on providing a first-class shipping experience for your customers at the best possible prices.

Each of ShipEngine's features can be used by itself or in conjunction with each other to build powerful shipping functionality into your application or service.

## Getting Started
If you're new to REST APIs then be sure to read our [introduction to REST](https://www.shipengine.com/docs/rest/) to understand the basics.  Learn how to [authenticate yourself to ShipEngine](https://www.shipengine.com/docs/auth/), and then use our [sandbox environment](https://www.shipengine.com/docs/sandbox/) to kick the tires and get familiar with our API. If you run into any problems, then be sure to check the [error handling guide](https://www.shipengine.com/docs/errors/) for tips.

Here are some step-by-step **tutorials** to get you started:

  - [Learn how to create your first shipping label](https://www.shipengine.com/docs/labels/create-a-label/)
  - [Calculate shipping costs and compare rates across carriers](https://www.shipengine.com/docs/rates/)
  - [Track packages on-demand or in real time](https://www.shipengine.com/docs/tracking/)
  - [Validate mailing addresses anywhere on Earth](https://www.shipengine.com/docs/addresses/validation/)


## Shipping Labels for Every Major Carrier
ShipEngine makes it easy to [create shipping labels for any carrier](https://www.shipengine.com/docs/labels/create-a-label/) and [download them](https://www.shipengine.com/docs/labels/downloading/) in a [variety of file formats](https://www.shipengine.com/docs/labels/formats/). You can even customize labels with your own [messages](https://www.shipengine.com/docs/labels/messages/) and [images](https://www.shipengine.com/docs/labels/branding/).


## Real-Time Package Tracking
With ShipEngine you can [get the current status of a package](https://www.shipengine.com/docs/tracking/) or [subscribe to real-time tracking updates](https://www.shipengine.com/docs/tracking/webhooks/) via webhooks. You can also create [custimized tracking pages](https://www.shipengine.com/docs/tracking/branded-tracking-page/) with your own branding so your customers will always know where their package is.


## Compare Shipping Costs Across Carriers
Make sure you ship as cost-effectively as possible by [comparing rates across carriers](https://www.shipengine.com/docs/rates/get-shipment-rates/) using the ShipEngine Rates API. Or if you don't know the full shipment details yet, then you can [get rate estimates](https://www.shipengine.com/docs/rates/estimate/) with limited address info.


## Worldwide Address Validation
ShipEngine supports [address validation](https://www.shipengine.com/docs/addresses/validation/) for virtually [every country on Earth](https://www.shipengine.com/docs/addresses/validation/countries/), including the United States, Canada, Great Britain, Australia, Germany, France, Norway, Spain, Sweden, Israel, Italy, and over 160 others.


The version of the OpenAPI document: 1.1.202403202303
Contact: sales@shipengine.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/

import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction, isBrowser } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { ContactDetails } from '../models';
// @ts-ignore
import { DeletePickupByIdResponseBody } from '../models';
// @ts-ignore
import { ErrorResponseBody } from '../models';
// @ts-ignore
import { GetPickupByIdResponseBody } from '../models';
// @ts-ignore
import { GetPickupsResponseBody } from '../models';
// @ts-ignore
import { PartialAddress } from '../models';
// @ts-ignore
import { Pickup } from '../models';
// @ts-ignore
import { PickupWindow } from '../models';
// @ts-ignore
import { PickupWindows } from '../models';
// @ts-ignore
import { SchedulePickupResponseBody } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * PackagePickupsApi - axios parameter creator
 * @export
 */
export const PackagePickupsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Get Pickup By ID
         * @summary Get Pickup By ID
         * @param {string} pickupId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getById: async (pickupId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'pickupId' is not null or undefined
            assertParamExists('getById', 'pickupId', pickupId)
            const localVarPath = `/v1/pickups/{pickup_id}`
                .replace(`{${"pickup_id"}}`, encodeURIComponent(String(pickupId !== undefined ? pickupId : `-pickup_id-`)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication api_key required
            await setApiKeyToObject({ object: localVarHeaderParameter, key: "API-Key", keyParamName: "apiKey", configuration })

    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/v1/pickups/{pickup_id}',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * List all pickups that have been scheduled for this carrier
         * @summary List Scheduled Pickups
         * @param {string} [carrierId] Carrier ID
         * @param {string} [warehouseId] Warehouse ID
         * @param {string} [createdAtStart] Only return scheduled pickups that were created on or after a specific date/time
         * @param {string} [createdAtEnd] Only return scheduled pickups that were created on or before a specific date/time
         * @param {number} [page] Return a specific page of results. Defaults to the first page. If set to a number that\&#39;s greater than the number of pages of results, an empty page is returned. 
         * @param {number} [pageSize] The number of results to return per response.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listScheduledPickups: async (carrierId?: string, warehouseId?: string, createdAtStart?: string, createdAtEnd?: string, page?: number, pageSize?: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/v1/pickups`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication api_key required
            await setApiKeyToObject({ object: localVarHeaderParameter, key: "API-Key", keyParamName: "apiKey", configuration })
            if (carrierId !== undefined) {
                localVarQueryParameter['carrier_id'] = carrierId;
            }

            if (warehouseId !== undefined) {
                localVarQueryParameter['warehouse_id'] = warehouseId;
            }

            if (createdAtStart !== undefined) {
                localVarQueryParameter['created_at_start'] = (createdAtStart as any instanceof Date) ?
                    (createdAtStart as any).toISOString() :
                    createdAtStart;
            }

            if (createdAtEnd !== undefined) {
                localVarQueryParameter['created_at_end'] = (createdAtEnd as any instanceof Date) ?
                    (createdAtEnd as any).toISOString() :
                    createdAtEnd;
            }

            if (page !== undefined) {
                localVarQueryParameter['page'] = page;
            }

            if (pageSize !== undefined) {
                localVarQueryParameter['page_size'] = pageSize;
            }


    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/v1/pickups',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Schedule a package pickup with a carrier
         * @summary Schedule a Pickup
         * @param {Pickup} pickup 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        pickup: async (pickup: Pickup, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'pickup' is not null or undefined
            assertParamExists('pickup', 'pickup', pickup)
            const localVarPath = `/v1/pickups`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication api_key required
            await setApiKeyToObject({ object: localVarHeaderParameter, key: "API-Key", keyParamName: "apiKey", configuration })

    
            localVarHeaderParameter['Content-Type'] = 'application/json';


            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                requestBody: pickup,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/v1/pickups',
                httpMethod: 'POST'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(pickup, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Delete a previously-scheduled pickup by ID
         * @summary Delete a Scheduled Pickup
         * @param {string} pickupId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        removeScheduledPickup: async (pickupId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'pickupId' is not null or undefined
            assertParamExists('removeScheduledPickup', 'pickupId', pickupId)
            const localVarPath = `/v1/pickups/{pickup_id}`
                .replace(`{${"pickup_id"}}`, encodeURIComponent(String(pickupId !== undefined ? pickupId : `-pickup_id-`)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication api_key required
            await setApiKeyToObject({ object: localVarHeaderParameter, key: "API-Key", keyParamName: "apiKey", configuration })

    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/v1/pickups/{pickup_id}',
                httpMethod: 'DELETE'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * PackagePickupsApi - functional programming interface
 * @export
 */
export const PackagePickupsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = PackagePickupsApiAxiosParamCreator(configuration)
    return {
        /**
         * Get Pickup By ID
         * @summary Get Pickup By ID
         * @param {PackagePickupsApiGetByIdRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getById(requestParameters: PackagePickupsApiGetByIdRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetPickupByIdResponseBody>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getById(requestParameters.pickupId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * List all pickups that have been scheduled for this carrier
         * @summary List Scheduled Pickups
         * @param {PackagePickupsApiListScheduledPickupsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listScheduledPickups(requestParameters: PackagePickupsApiListScheduledPickupsRequest = {}, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetPickupsResponseBody>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listScheduledPickups(requestParameters.carrierId, requestParameters.warehouseId, requestParameters.createdAtStart, requestParameters.createdAtEnd, requestParameters.page, requestParameters.pageSize, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Schedule a package pickup with a carrier
         * @summary Schedule a Pickup
         * @param {PackagePickupsApiPickupRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async pickup(requestParameters: PackagePickupsApiPickupRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SchedulePickupResponseBody>> {
            const pickup: Pickup = {
                pickup_id: requestParameters.pickup_id,
                label_ids: requestParameters.label_ids,
                created_at: requestParameters.created_at,
                cancelled_at: requestParameters.cancelled_at,
                carrier_id: requestParameters.carrier_id,
                confirmation_number: requestParameters.confirmation_number,
                warehouse_id: requestParameters.warehouse_id,
                pickup_address: requestParameters.pickup_address,
                contact_details: requestParameters.contact_details,
                pickup_notes: requestParameters.pickup_notes,
                pickup_window: requestParameters.pickup_window,
                pickup_windows: requestParameters.pickup_windows
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.pickup(pickup, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Delete a previously-scheduled pickup by ID
         * @summary Delete a Scheduled Pickup
         * @param {PackagePickupsApiRemoveScheduledPickupRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async removeScheduledPickup(requestParameters: PackagePickupsApiRemoveScheduledPickupRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<DeletePickupByIdResponseBody>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.removeScheduledPickup(requestParameters.pickupId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * PackagePickupsApi - factory interface
 * @export
 */
export const PackagePickupsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = PackagePickupsApiFp(configuration)
    return {
        /**
         * Get Pickup By ID
         * @summary Get Pickup By ID
         * @param {PackagePickupsApiGetByIdRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getById(requestParameters: PackagePickupsApiGetByIdRequest, options?: AxiosRequestConfig): AxiosPromise<GetPickupByIdResponseBody> {
            return localVarFp.getById(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * List all pickups that have been scheduled for this carrier
         * @summary List Scheduled Pickups
         * @param {PackagePickupsApiListScheduledPickupsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listScheduledPickups(requestParameters: PackagePickupsApiListScheduledPickupsRequest = {}, options?: AxiosRequestConfig): AxiosPromise<GetPickupsResponseBody> {
            return localVarFp.listScheduledPickups(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Schedule a package pickup with a carrier
         * @summary Schedule a Pickup
         * @param {PackagePickupsApiPickupRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        pickup(requestParameters: PackagePickupsApiPickupRequest, options?: AxiosRequestConfig): AxiosPromise<SchedulePickupResponseBody> {
            return localVarFp.pickup(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Delete a previously-scheduled pickup by ID
         * @summary Delete a Scheduled Pickup
         * @param {PackagePickupsApiRemoveScheduledPickupRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        removeScheduledPickup(requestParameters: PackagePickupsApiRemoveScheduledPickupRequest, options?: AxiosRequestConfig): AxiosPromise<DeletePickupByIdResponseBody> {
            return localVarFp.removeScheduledPickup(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for getById operation in PackagePickupsApi.
 * @export
 * @interface PackagePickupsApiGetByIdRequest
 */
export type PackagePickupsApiGetByIdRequest = {
    
    /**
    * 
    * @type {string}
    * @memberof PackagePickupsApiGetById
    */
    readonly pickupId: string
    
}

/**
 * Request parameters for listScheduledPickups operation in PackagePickupsApi.
 * @export
 * @interface PackagePickupsApiListScheduledPickupsRequest
 */
export type PackagePickupsApiListScheduledPickupsRequest = {
    
    /**
    * Carrier ID
    * @type {string}
    * @memberof PackagePickupsApiListScheduledPickups
    */
    readonly carrierId?: string
    
    /**
    * Warehouse ID
    * @type {string}
    * @memberof PackagePickupsApiListScheduledPickups
    */
    readonly warehouseId?: string
    
    /**
    * Only return scheduled pickups that were created on or after a specific date/time
    * @type {string}
    * @memberof PackagePickupsApiListScheduledPickups
    */
    readonly createdAtStart?: string
    
    /**
    * Only return scheduled pickups that were created on or before a specific date/time
    * @type {string}
    * @memberof PackagePickupsApiListScheduledPickups
    */
    readonly createdAtEnd?: string
    
    /**
    * Return a specific page of results. Defaults to the first page. If set to a number that\'s greater than the number of pages of results, an empty page is returned. 
    * @type {number}
    * @memberof PackagePickupsApiListScheduledPickups
    */
    readonly page?: number
    
    /**
    * The number of results to return per response.
    * @type {number}
    * @memberof PackagePickupsApiListScheduledPickups
    */
    readonly pageSize?: number
    
}

/**
 * Request parameters for pickup operation in PackagePickupsApi.
 * @export
 * @interface PackagePickupsApiPickupRequest
 */
export type PackagePickupsApiPickupRequest = {
    
} & Pickup

/**
 * Request parameters for removeScheduledPickup operation in PackagePickupsApi.
 * @export
 * @interface PackagePickupsApiRemoveScheduledPickupRequest
 */
export type PackagePickupsApiRemoveScheduledPickupRequest = {
    
    /**
    * 
    * @type {string}
    * @memberof PackagePickupsApiRemoveScheduledPickup
    */
    readonly pickupId: string
    
}

/**
 * PackagePickupsApiGenerated - object-oriented interface
 * @export
 * @class PackagePickupsApiGenerated
 * @extends {BaseAPI}
 */
export class PackagePickupsApiGenerated extends BaseAPI {
    /**
     * Get Pickup By ID
     * @summary Get Pickup By ID
     * @param {PackagePickupsApiGetByIdRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PackagePickupsApiGenerated
     */
    public getById(requestParameters: PackagePickupsApiGetByIdRequest, options?: AxiosRequestConfig) {
        return PackagePickupsApiFp(this.configuration).getById(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * List all pickups that have been scheduled for this carrier
     * @summary List Scheduled Pickups
     * @param {PackagePickupsApiListScheduledPickupsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PackagePickupsApiGenerated
     */
    public listScheduledPickups(requestParameters: PackagePickupsApiListScheduledPickupsRequest = {}, options?: AxiosRequestConfig) {
        return PackagePickupsApiFp(this.configuration).listScheduledPickups(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Schedule a package pickup with a carrier
     * @summary Schedule a Pickup
     * @param {PackagePickupsApiPickupRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PackagePickupsApiGenerated
     */
    public pickup(requestParameters: PackagePickupsApiPickupRequest, options?: AxiosRequestConfig) {
        return PackagePickupsApiFp(this.configuration).pickup(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Delete a previously-scheduled pickup by ID
     * @summary Delete a Scheduled Pickup
     * @param {PackagePickupsApiRemoveScheduledPickupRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PackagePickupsApiGenerated
     */
    public removeScheduledPickup(requestParameters: PackagePickupsApiRemoveScheduledPickupRequest, options?: AxiosRequestConfig) {
        return PackagePickupsApiFp(this.configuration).removeScheduledPickup(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}
