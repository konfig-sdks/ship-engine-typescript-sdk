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
import { Dimensions } from '../models';
// @ts-ignore
import { ErrorResponseBody } from '../models';
// @ts-ignore
import { ListPackageTypesResponseBody } from '../models';
// @ts-ignore
import { PackageType } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * PackageTypesApi - axios parameter creator
 * @export
 */
export const PackageTypesApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Create a custom package type to better assist in getting accurate rate estimates
         * @summary Create Custom Package Type
         * @param {PackageType} packageType 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createCustomPackageType: async (packageType: PackageType, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'packageType' is not null or undefined
            assertParamExists('createCustomPackageType', 'packageType', packageType)
            const localVarPath = `/v1/packages`;
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
                requestBody: packageType,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/v1/packages',
                httpMethod: 'POST'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(packageType, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Delete a custom package using the ID
         * @summary Delete A Custom Package By ID
         * @param {string} packageId Package ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteCustomPackageById: async (packageId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'packageId' is not null or undefined
            assertParamExists('deleteCustomPackageById', 'packageId', packageId)
            const localVarPath = `/v1/packages/{package_id}`
                .replace(`{${"package_id"}}`, encodeURIComponent(String(packageId !== undefined ? packageId : `-package_id-`)));
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
                pathTemplate: '/v1/packages/{package_id}',
                httpMethod: 'DELETE'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Get Custom Package Type by ID
         * @summary Get Custom Package Type By ID
         * @param {string} packageId Package ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getById: async (packageId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'packageId' is not null or undefined
            assertParamExists('getById', 'packageId', packageId)
            const localVarPath = `/v1/packages/{package_id}`
                .replace(`{${"package_id"}}`, encodeURIComponent(String(packageId !== undefined ? packageId : `-package_id-`)));
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
                pathTemplate: '/v1/packages/{package_id}',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * List the custom package types associated with the account
         * @summary List Custom Package Types
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listCustomPackageTypes: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/v1/packages`;
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
                pathTemplate: '/v1/packages',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Update the custom package type object by ID
         * @summary Update Custom Package Type By ID
         * @param {string} packageId Package ID
         * @param {PackageType} packageType 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateCustomPackageTypeById: async (packageId: string, packageType: PackageType, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'packageId' is not null or undefined
            assertParamExists('updateCustomPackageTypeById', 'packageId', packageId)
            // verify required parameter 'packageType' is not null or undefined
            assertParamExists('updateCustomPackageTypeById', 'packageType', packageType)
            const localVarPath = `/v1/packages/{package_id}`
                .replace(`{${"package_id"}}`, encodeURIComponent(String(packageId !== undefined ? packageId : `-package_id-`)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication api_key required
            await setApiKeyToObject({ object: localVarHeaderParameter, key: "API-Key", keyParamName: "apiKey", configuration })

    
            localVarHeaderParameter['Content-Type'] = 'application/json';


            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                requestBody: packageType,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/v1/packages/{package_id}',
                httpMethod: 'PUT'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(packageType, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * PackageTypesApi - functional programming interface
 * @export
 */
export const PackageTypesApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = PackageTypesApiAxiosParamCreator(configuration)
    return {
        /**
         * Create a custom package type to better assist in getting accurate rate estimates
         * @summary Create Custom Package Type
         * @param {PackageTypesApiCreateCustomPackageTypeRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createCustomPackageType(requestParameters: PackageTypesApiCreateCustomPackageTypeRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PackageType>> {
            const packageType: PackageType = {
                description: requestParameters.description,
                package_id: requestParameters.package_id,
                package_code: requestParameters.package_code,
                name: requestParameters.name,
                dimensions: requestParameters.dimensions
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.createCustomPackageType(packageType, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Delete a custom package using the ID
         * @summary Delete A Custom Package By ID
         * @param {PackageTypesApiDeleteCustomPackageByIdRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteCustomPackageById(requestParameters: PackageTypesApiDeleteCustomPackageByIdRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteCustomPackageById(requestParameters.packageId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Get Custom Package Type by ID
         * @summary Get Custom Package Type By ID
         * @param {PackageTypesApiGetByIdRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getById(requestParameters: PackageTypesApiGetByIdRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PackageType>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getById(requestParameters.packageId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * List the custom package types associated with the account
         * @summary List Custom Package Types
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listCustomPackageTypes(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ListPackageTypesResponseBody>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listCustomPackageTypes(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Update the custom package type object by ID
         * @summary Update Custom Package Type By ID
         * @param {PackageTypesApiUpdateCustomPackageTypeByIdRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateCustomPackageTypeById(requestParameters: PackageTypesApiUpdateCustomPackageTypeByIdRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>> {
            const packageType: PackageType = {
                description: requestParameters.description,
                package_id: requestParameters.package_id,
                package_code: requestParameters.package_code,
                name: requestParameters.name,
                dimensions: requestParameters.dimensions
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateCustomPackageTypeById(requestParameters.packageId, packageType, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * PackageTypesApi - factory interface
 * @export
 */
export const PackageTypesApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = PackageTypesApiFp(configuration)
    return {
        /**
         * Create a custom package type to better assist in getting accurate rate estimates
         * @summary Create Custom Package Type
         * @param {PackageTypesApiCreateCustomPackageTypeRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createCustomPackageType(requestParameters: PackageTypesApiCreateCustomPackageTypeRequest, options?: AxiosRequestConfig): AxiosPromise<PackageType> {
            return localVarFp.createCustomPackageType(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Delete a custom package using the ID
         * @summary Delete A Custom Package By ID
         * @param {PackageTypesApiDeleteCustomPackageByIdRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteCustomPackageById(requestParameters: PackageTypesApiDeleteCustomPackageByIdRequest, options?: AxiosRequestConfig): AxiosPromise<string> {
            return localVarFp.deleteCustomPackageById(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Get Custom Package Type by ID
         * @summary Get Custom Package Type By ID
         * @param {PackageTypesApiGetByIdRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getById(requestParameters: PackageTypesApiGetByIdRequest, options?: AxiosRequestConfig): AxiosPromise<PackageType> {
            return localVarFp.getById(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * List the custom package types associated with the account
         * @summary List Custom Package Types
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listCustomPackageTypes(options?: AxiosRequestConfig): AxiosPromise<ListPackageTypesResponseBody> {
            return localVarFp.listCustomPackageTypes(options).then((request) => request(axios, basePath));
        },
        /**
         * Update the custom package type object by ID
         * @summary Update Custom Package Type By ID
         * @param {PackageTypesApiUpdateCustomPackageTypeByIdRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateCustomPackageTypeById(requestParameters: PackageTypesApiUpdateCustomPackageTypeByIdRequest, options?: AxiosRequestConfig): AxiosPromise<string> {
            return localVarFp.updateCustomPackageTypeById(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for createCustomPackageType operation in PackageTypesApi.
 * @export
 * @interface PackageTypesApiCreateCustomPackageTypeRequest
 */
export type PackageTypesApiCreateCustomPackageTypeRequest = {
    
} & PackageType

/**
 * Request parameters for deleteCustomPackageById operation in PackageTypesApi.
 * @export
 * @interface PackageTypesApiDeleteCustomPackageByIdRequest
 */
export type PackageTypesApiDeleteCustomPackageByIdRequest = {
    
    /**
    * Package ID
    * @type {string}
    * @memberof PackageTypesApiDeleteCustomPackageById
    */
    readonly packageId: string
    
}

/**
 * Request parameters for getById operation in PackageTypesApi.
 * @export
 * @interface PackageTypesApiGetByIdRequest
 */
export type PackageTypesApiGetByIdRequest = {
    
    /**
    * Package ID
    * @type {string}
    * @memberof PackageTypesApiGetById
    */
    readonly packageId: string
    
}

/**
 * Request parameters for updateCustomPackageTypeById operation in PackageTypesApi.
 * @export
 * @interface PackageTypesApiUpdateCustomPackageTypeByIdRequest
 */
export type PackageTypesApiUpdateCustomPackageTypeByIdRequest = {
    
    /**
    * Package ID
    * @type {string}
    * @memberof PackageTypesApiUpdateCustomPackageTypeById
    */
    readonly packageId: string
    
} & PackageType

/**
 * PackageTypesApiGenerated - object-oriented interface
 * @export
 * @class PackageTypesApiGenerated
 * @extends {BaseAPI}
 */
export class PackageTypesApiGenerated extends BaseAPI {
    /**
     * Create a custom package type to better assist in getting accurate rate estimates
     * @summary Create Custom Package Type
     * @param {PackageTypesApiCreateCustomPackageTypeRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PackageTypesApiGenerated
     */
    public createCustomPackageType(requestParameters: PackageTypesApiCreateCustomPackageTypeRequest, options?: AxiosRequestConfig) {
        return PackageTypesApiFp(this.configuration).createCustomPackageType(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Delete a custom package using the ID
     * @summary Delete A Custom Package By ID
     * @param {PackageTypesApiDeleteCustomPackageByIdRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PackageTypesApiGenerated
     */
    public deleteCustomPackageById(requestParameters: PackageTypesApiDeleteCustomPackageByIdRequest, options?: AxiosRequestConfig) {
        return PackageTypesApiFp(this.configuration).deleteCustomPackageById(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Get Custom Package Type by ID
     * @summary Get Custom Package Type By ID
     * @param {PackageTypesApiGetByIdRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PackageTypesApiGenerated
     */
    public getById(requestParameters: PackageTypesApiGetByIdRequest, options?: AxiosRequestConfig) {
        return PackageTypesApiFp(this.configuration).getById(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * List the custom package types associated with the account
     * @summary List Custom Package Types
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PackageTypesApiGenerated
     */
    public listCustomPackageTypes(options?: AxiosRequestConfig) {
        return PackageTypesApiFp(this.configuration).listCustomPackageTypes(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Update the custom package type object by ID
     * @summary Update Custom Package Type By ID
     * @param {PackageTypesApiUpdateCustomPackageTypeByIdRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PackageTypesApiGenerated
     */
    public updateCustomPackageTypeById(requestParameters: PackageTypesApiUpdateCustomPackageTypeByIdRequest, options?: AxiosRequestConfig) {
        return PackageTypesApiFp(this.configuration).updateCustomPackageTypeById(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}
