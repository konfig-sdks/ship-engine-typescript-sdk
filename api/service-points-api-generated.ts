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
import { ErrorResponseBody } from '../models';
// @ts-ignore
import { GetServicePointByIdResponseBody } from '../models';
// @ts-ignore
import { GetServicePointsRequest } from '../models';
// @ts-ignore
import { GetServicePointsRequestBodyAddress } from '../models';
// @ts-ignore
import { GetServicePointsRequestBodyProvidersInner } from '../models';
// @ts-ignore
import { ListServicePointsResponseBody } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * ServicePointsApi - axios parameter creator
 * @export
 */
export const ServicePointsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Returns a carrier service point by using the service_point_id
         * @summary Get Service Point By ID
         * @param {string} carrierCode Carrier code
         * @param {string} countryCode A two-letter [ISO 3166-1 country code](https://en.wikipedia.org/wiki/ISO_3166-1) 
         * @param {string} servicePointId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getById: async (carrierCode: string, countryCode: string, servicePointId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'carrierCode' is not null or undefined
            assertParamExists('getById', 'carrierCode', carrierCode)
            // verify required parameter 'countryCode' is not null or undefined
            assertParamExists('getById', 'countryCode', countryCode)
            // verify required parameter 'servicePointId' is not null or undefined
            assertParamExists('getById', 'servicePointId', servicePointId)
            const localVarPath = `/v1/service_points/{carrier_code}/{country_code}/{service_point_id}`
                .replace(`{${"carrier_code"}}`, encodeURIComponent(String(carrierCode !== undefined ? carrierCode : `-carrier_code-`)))
                .replace(`{${"country_code"}}`, encodeURIComponent(String(countryCode !== undefined ? countryCode : `-country_code-`)))
                .replace(`{${"service_point_id"}}`, encodeURIComponent(String(servicePointId !== undefined ? servicePointId : `-service_point_id-`)));
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
                pathTemplate: '/v1/service_points/{carrier_code}/{country_code}/{service_point_id}',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * List carrier service points by location
         * @summary List Service Points
         * @param {GetServicePointsRequest} getServicePointsRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getByLocation: async (getServicePointsRequest: GetServicePointsRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'getServicePointsRequest' is not null or undefined
            assertParamExists('getByLocation', 'getServicePointsRequest', getServicePointsRequest)
            const localVarPath = `/v1/service_points/list`;
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
                requestBody: getServicePointsRequest,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/v1/service_points/list',
                httpMethod: 'POST'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(getServicePointsRequest, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * ServicePointsApi - functional programming interface
 * @export
 */
export const ServicePointsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = ServicePointsApiAxiosParamCreator(configuration)
    return {
        /**
         * Returns a carrier service point by using the service_point_id
         * @summary Get Service Point By ID
         * @param {ServicePointsApiGetByIdRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getById(requestParameters: ServicePointsApiGetByIdRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetServicePointByIdResponseBody>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getById(requestParameters.carrierCode, requestParameters.countryCode, requestParameters.servicePointId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * List carrier service points by location
         * @summary List Service Points
         * @param {ServicePointsApiGetByLocationRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getByLocation(requestParameters: ServicePointsApiGetByLocationRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ListServicePointsResponseBody>> {
            const getServicePointsRequest: GetServicePointsRequest = requestParameters;
            const localVarAxiosArgs = await localVarAxiosParamCreator.getByLocation(getServicePointsRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * ServicePointsApi - factory interface
 * @export
 */
export const ServicePointsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = ServicePointsApiFp(configuration)
    return {
        /**
         * Returns a carrier service point by using the service_point_id
         * @summary Get Service Point By ID
         * @param {ServicePointsApiGetByIdRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getById(requestParameters: ServicePointsApiGetByIdRequest, options?: AxiosRequestConfig): AxiosPromise<GetServicePointByIdResponseBody> {
            return localVarFp.getById(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * List carrier service points by location
         * @summary List Service Points
         * @param {ServicePointsApiGetByLocationRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getByLocation(requestParameters: ServicePointsApiGetByLocationRequest, options?: AxiosRequestConfig): AxiosPromise<ListServicePointsResponseBody> {
            return localVarFp.getByLocation(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for getById operation in ServicePointsApi.
 * @export
 * @interface ServicePointsApiGetByIdRequest
 */
export type ServicePointsApiGetByIdRequest = {
    
    /**
    * Carrier code
    * @type {string}
    * @memberof ServicePointsApiGetById
    */
    readonly carrierCode: string
    
    /**
    * A two-letter [ISO 3166-1 country code](https://en.wikipedia.org/wiki/ISO_3166-1) 
    * @type {string}
    * @memberof ServicePointsApiGetById
    */
    readonly countryCode: string
    
    /**
    * 
    * @type {string}
    * @memberof ServicePointsApiGetById
    */
    readonly servicePointId: string
    
}

/**
 * Request parameters for getByLocation operation in ServicePointsApi.
 * @export
 * @interface ServicePointsApiGetByLocationRequest
 */
export type ServicePointsApiGetByLocationRequest = {
    
} & GetServicePointsRequest

/**
 * ServicePointsApiGenerated - object-oriented interface
 * @export
 * @class ServicePointsApiGenerated
 * @extends {BaseAPI}
 */
export class ServicePointsApiGenerated extends BaseAPI {
    /**
     * Returns a carrier service point by using the service_point_id
     * @summary Get Service Point By ID
     * @param {ServicePointsApiGetByIdRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ServicePointsApiGenerated
     */
    public getById(requestParameters: ServicePointsApiGetByIdRequest, options?: AxiosRequestConfig) {
        return ServicePointsApiFp(this.configuration).getById(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * List carrier service points by location
     * @summary List Service Points
     * @param {ServicePointsApiGetByLocationRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ServicePointsApiGenerated
     */
    public getByLocation(requestParameters: ServicePointsApiGetByLocationRequest, options?: AxiosRequestConfig) {
        return ServicePointsApiFp(this.configuration).getByLocation(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}