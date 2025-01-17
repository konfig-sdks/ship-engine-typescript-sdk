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
import { CreateManifestRequestBody } from '../models';
// @ts-ignore
import { CreateManifestResponseBody } from '../models';
// @ts-ignore
import { ErrorResponseBody } from '../models';
// @ts-ignore
import { ListManifestsResponseBody } from '../models';
// @ts-ignore
import { Manifest } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * ManifestsApi - axios parameter creator
 * @export
 */
export const ManifestsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Get Manifest By Id
         * @summary Get Manifest By Id
         * @param {string} manifestId The Manifest Id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getById: async (manifestId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'manifestId' is not null or undefined
            assertParamExists('getById', 'manifestId', manifestId)
            const localVarPath = `/v1/manifests/{manifest_id}`
                .replace(`{${"manifest_id"}}`, encodeURIComponent(String(manifestId !== undefined ? manifestId : `-manifest_id-`)));
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
                pathTemplate: '/v1/manifests/{manifest_id}',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Get Manifest Request By Id
         * @summary Get Manifest Request By Id
         * @param {string} manifestRequestId The Manifest Request Id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getRequestById: async (manifestRequestId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'manifestRequestId' is not null or undefined
            assertParamExists('getRequestById', 'manifestRequestId', manifestRequestId)
            const localVarPath = `/v1/manifests/requests/{manifest_request_id}`
                .replace(`{${"manifest_request_id"}}`, encodeURIComponent(String(manifestRequestId !== undefined ? manifestRequestId : `-manifest_request_id-`)));
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
                pathTemplate: '/v1/manifests/requests/{manifest_request_id}',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Each ShipEngine manifest is created for a specific warehouse, so you\'ll need to provide the warehouse_id rather than the ship_from address. You can create a warehouse for each location that you want to create manifests for. 
         * @summary Create Manifest
         * @param {CreateManifestRequestBody} createManifestRequestBody 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        manifest: async (createManifestRequestBody: CreateManifestRequestBody, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'createManifestRequestBody' is not null or undefined
            assertParamExists('manifest', 'createManifestRequestBody', createManifestRequestBody)
            const localVarPath = `/v1/manifests`;
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
                requestBody: createManifestRequestBody,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/v1/manifests',
                httpMethod: 'POST'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(createManifestRequestBody, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Similar to querying shipments, we allow you to query manifests since there will likely be a large number over a long period of time.
         * @summary List Manifests
         * @param {string} [warehouseId] Warehouse ID
         * @param {string} [shipDateStart] ship date start range
         * @param {string} [shipDateEnd] ship date end range
         * @param {string} [createdAtStart] Used to create a filter for when a resource was created (ex. A shipment that was created after a certain time)
         * @param {string} [createdAtEnd] Used to create a filter for when a resource was created, (ex. A shipment that was created before a certain time)
         * @param {string} [carrierId] Carrier ID
         * @param {number} [page] Return a specific page of results. Defaults to the first page. If set to a number that\&#39;s greater than the number of pages of results, an empty page is returned. 
         * @param {number} [pageSize] The number of results to return per response.
         * @param {Array<string>} [labelIds] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        manifests: async (warehouseId?: string, shipDateStart?: string, shipDateEnd?: string, createdAtStart?: string, createdAtEnd?: string, carrierId?: string, page?: number, pageSize?: number, labelIds?: Array<string>, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/v1/manifests`;
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
            if (warehouseId !== undefined) {
                localVarQueryParameter['warehouse_id'] = warehouseId;
            }

            if (shipDateStart !== undefined) {
                localVarQueryParameter['ship_date_start'] = (shipDateStart as any instanceof Date) ?
                    (shipDateStart as any).toISOString() :
                    shipDateStart;
            }

            if (shipDateEnd !== undefined) {
                localVarQueryParameter['ship_date_end'] = (shipDateEnd as any instanceof Date) ?
                    (shipDateEnd as any).toISOString() :
                    shipDateEnd;
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

            if (carrierId !== undefined) {
                localVarQueryParameter['carrier_id'] = carrierId;
            }

            if (page !== undefined) {
                localVarQueryParameter['page'] = page;
            }

            if (pageSize !== undefined) {
                localVarQueryParameter['page_size'] = pageSize;
            }

            if (labelIds) {
                localVarQueryParameter['label_ids'] = labelIds;
            }


    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/v1/manifests',
                httpMethod: 'GET'
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
 * ManifestsApi - functional programming interface
 * @export
 */
export const ManifestsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = ManifestsApiAxiosParamCreator(configuration)
    return {
        /**
         * Get Manifest By Id
         * @summary Get Manifest By Id
         * @param {ManifestsApiGetByIdRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getById(requestParameters: ManifestsApiGetByIdRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Manifest>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getById(requestParameters.manifestId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Get Manifest Request By Id
         * @summary Get Manifest Request By Id
         * @param {ManifestsApiGetRequestByIdRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getRequestById(requestParameters: ManifestsApiGetRequestByIdRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CreateManifestResponseBody>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getRequestById(requestParameters.manifestRequestId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Each ShipEngine manifest is created for a specific warehouse, so you\'ll need to provide the warehouse_id rather than the ship_from address. You can create a warehouse for each location that you want to create manifests for. 
         * @summary Create Manifest
         * @param {ManifestsApiManifestRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async manifest(requestParameters: ManifestsApiManifestRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CreateManifestResponseBody>> {
            const createManifestRequestBody: CreateManifestRequestBody = requestParameters;
            const localVarAxiosArgs = await localVarAxiosParamCreator.manifest(createManifestRequestBody, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Similar to querying shipments, we allow you to query manifests since there will likely be a large number over a long period of time.
         * @summary List Manifests
         * @param {ManifestsApiManifestsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async manifests(requestParameters: ManifestsApiManifestsRequest = {}, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ListManifestsResponseBody>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.manifests(requestParameters.warehouseId, requestParameters.shipDateStart, requestParameters.shipDateEnd, requestParameters.createdAtStart, requestParameters.createdAtEnd, requestParameters.carrierId, requestParameters.page, requestParameters.pageSize, requestParameters.labelIds, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * ManifestsApi - factory interface
 * @export
 */
export const ManifestsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = ManifestsApiFp(configuration)
    return {
        /**
         * Get Manifest By Id
         * @summary Get Manifest By Id
         * @param {ManifestsApiGetByIdRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getById(requestParameters: ManifestsApiGetByIdRequest, options?: AxiosRequestConfig): AxiosPromise<Manifest> {
            return localVarFp.getById(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Get Manifest Request By Id
         * @summary Get Manifest Request By Id
         * @param {ManifestsApiGetRequestByIdRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getRequestById(requestParameters: ManifestsApiGetRequestByIdRequest, options?: AxiosRequestConfig): AxiosPromise<CreateManifestResponseBody> {
            return localVarFp.getRequestById(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Each ShipEngine manifest is created for a specific warehouse, so you\'ll need to provide the warehouse_id rather than the ship_from address. You can create a warehouse for each location that you want to create manifests for. 
         * @summary Create Manifest
         * @param {ManifestsApiManifestRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        manifest(requestParameters: ManifestsApiManifestRequest, options?: AxiosRequestConfig): AxiosPromise<CreateManifestResponseBody> {
            return localVarFp.manifest(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Similar to querying shipments, we allow you to query manifests since there will likely be a large number over a long period of time.
         * @summary List Manifests
         * @param {ManifestsApiManifestsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        manifests(requestParameters: ManifestsApiManifestsRequest = {}, options?: AxiosRequestConfig): AxiosPromise<ListManifestsResponseBody> {
            return localVarFp.manifests(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for getById operation in ManifestsApi.
 * @export
 * @interface ManifestsApiGetByIdRequest
 */
export type ManifestsApiGetByIdRequest = {
    
    /**
    * The Manifest Id
    * @type {string}
    * @memberof ManifestsApiGetById
    */
    readonly manifestId: string
    
}

/**
 * Request parameters for getRequestById operation in ManifestsApi.
 * @export
 * @interface ManifestsApiGetRequestByIdRequest
 */
export type ManifestsApiGetRequestByIdRequest = {
    
    /**
    * The Manifest Request Id
    * @type {string}
    * @memberof ManifestsApiGetRequestById
    */
    readonly manifestRequestId: string
    
}

/**
 * Request parameters for manifest operation in ManifestsApi.
 * @export
 * @interface ManifestsApiManifestRequest
 */
export type ManifestsApiManifestRequest = {
    
} & CreateManifestRequestBody

/**
 * Request parameters for manifests operation in ManifestsApi.
 * @export
 * @interface ManifestsApiManifestsRequest
 */
export type ManifestsApiManifestsRequest = {
    
    /**
    * Warehouse ID
    * @type {string}
    * @memberof ManifestsApiManifests
    */
    readonly warehouseId?: string
    
    /**
    * ship date start range
    * @type {string}
    * @memberof ManifestsApiManifests
    */
    readonly shipDateStart?: string
    
    /**
    * ship date end range
    * @type {string}
    * @memberof ManifestsApiManifests
    */
    readonly shipDateEnd?: string
    
    /**
    * Used to create a filter for when a resource was created (ex. A shipment that was created after a certain time)
    * @type {string}
    * @memberof ManifestsApiManifests
    */
    readonly createdAtStart?: string
    
    /**
    * Used to create a filter for when a resource was created, (ex. A shipment that was created before a certain time)
    * @type {string}
    * @memberof ManifestsApiManifests
    */
    readonly createdAtEnd?: string
    
    /**
    * Carrier ID
    * @type {string}
    * @memberof ManifestsApiManifests
    */
    readonly carrierId?: string
    
    /**
    * Return a specific page of results. Defaults to the first page. If set to a number that\'s greater than the number of pages of results, an empty page is returned. 
    * @type {number}
    * @memberof ManifestsApiManifests
    */
    readonly page?: number
    
    /**
    * The number of results to return per response.
    * @type {number}
    * @memberof ManifestsApiManifests
    */
    readonly pageSize?: number
    
    /**
    * 
    * @type {Array<string>}
    * @memberof ManifestsApiManifests
    */
    readonly labelIds?: Array<string>
    
}

/**
 * ManifestsApiGenerated - object-oriented interface
 * @export
 * @class ManifestsApiGenerated
 * @extends {BaseAPI}
 */
export class ManifestsApiGenerated extends BaseAPI {
    /**
     * Get Manifest By Id
     * @summary Get Manifest By Id
     * @param {ManifestsApiGetByIdRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ManifestsApiGenerated
     */
    public getById(requestParameters: ManifestsApiGetByIdRequest, options?: AxiosRequestConfig) {
        return ManifestsApiFp(this.configuration).getById(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Get Manifest Request By Id
     * @summary Get Manifest Request By Id
     * @param {ManifestsApiGetRequestByIdRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ManifestsApiGenerated
     */
    public getRequestById(requestParameters: ManifestsApiGetRequestByIdRequest, options?: AxiosRequestConfig) {
        return ManifestsApiFp(this.configuration).getRequestById(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Each ShipEngine manifest is created for a specific warehouse, so you\'ll need to provide the warehouse_id rather than the ship_from address. You can create a warehouse for each location that you want to create manifests for. 
     * @summary Create Manifest
     * @param {ManifestsApiManifestRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ManifestsApiGenerated
     */
    public manifest(requestParameters: ManifestsApiManifestRequest, options?: AxiosRequestConfig) {
        return ManifestsApiFp(this.configuration).manifest(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Similar to querying shipments, we allow you to query manifests since there will likely be a large number over a long period of time.
     * @summary List Manifests
     * @param {ManifestsApiManifestsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ManifestsApiGenerated
     */
    public manifests(requestParameters: ManifestsApiManifestsRequest = {}, options?: AxiosRequestConfig) {
        return ManifestsApiFp(this.configuration).manifests(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}
