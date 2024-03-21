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
import { ListTagsResponseBody } from '../models';
// @ts-ignore
import { Tag } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * TagsApi - axios parameter creator
 * @export
 */
export const TagsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Create a new Tag for customizing how you track your shipments
         * @summary Create a New Tag
         * @param {string} tagName 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tag: async (tagName: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'tagName' is not null or undefined
            assertParamExists('tag', 'tagName', tagName)
            const localVarPath = `/v1/tags/{tag_name}`
                .replace(`{${"tag_name"}}`, encodeURIComponent(String(tagName !== undefined ? tagName : `-tag_name-`)));
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

    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/v1/tags/{tag_name}',
                httpMethod: 'POST'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Delete a tag that is no longer needed
         * @summary Delete Tag
         * @param {string} tagName 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tag_1: async (tagName: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'tagName' is not null or undefined
            assertParamExists('tag_1', 'tagName', tagName)
            const localVarPath = `/v1/tags/{tag_name}`
                .replace(`{${"tag_name"}}`, encodeURIComponent(String(tagName !== undefined ? tagName : `-tag_name-`)));
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
                pathTemplate: '/v1/tags/{tag_name}',
                httpMethod: 'DELETE'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Change a tag name while still keeping the relevant shipments attached to it
         * @summary Update Tag Name
         * @param {string} tagName 
         * @param {string} newTagName 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tag_2: async (tagName: string, newTagName: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'tagName' is not null or undefined
            assertParamExists('tag_2', 'tagName', tagName)
            // verify required parameter 'newTagName' is not null or undefined
            assertParamExists('tag_2', 'newTagName', newTagName)
            const localVarPath = `/v1/tags/{tag_name}/{new_tag_name}`
                .replace(`{${"tag_name"}}`, encodeURIComponent(String(tagName !== undefined ? tagName : `-tag_name-`)))
                .replace(`{${"new_tag_name"}}`, encodeURIComponent(String(newTagName !== undefined ? newTagName : `-new_tag_name-`)));
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

    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/v1/tags/{tag_name}/{new_tag_name}',
                httpMethod: 'PUT'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Get a list of all tags associated with an account.
         * @summary Get Tags
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tags: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/v1/tags`;
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
                pathTemplate: '/v1/tags',
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
 * TagsApi - functional programming interface
 * @export
 */
export const TagsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = TagsApiAxiosParamCreator(configuration)
    return {
        /**
         * Create a new Tag for customizing how you track your shipments
         * @summary Create a New Tag
         * @param {TagsApiTagRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async tag(requestParameters: TagsApiTagRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Tag>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.tag(requestParameters.tagName, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Delete a tag that is no longer needed
         * @summary Delete Tag
         * @param {TagsApiTag0Request} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async tag_1(requestParameters: TagsApiTag0Request, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.tag_1(requestParameters.tagName, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Change a tag name while still keeping the relevant shipments attached to it
         * @summary Update Tag Name
         * @param {TagsApiTag1Request} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async tag_2(requestParameters: TagsApiTag1Request, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.tag_2(requestParameters.tagName, requestParameters.newTagName, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Get a list of all tags associated with an account.
         * @summary Get Tags
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async tags(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ListTagsResponseBody>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.tags(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * TagsApi - factory interface
 * @export
 */
export const TagsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = TagsApiFp(configuration)
    return {
        /**
         * Create a new Tag for customizing how you track your shipments
         * @summary Create a New Tag
         * @param {TagsApiTagRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tag(requestParameters: TagsApiTagRequest, options?: AxiosRequestConfig): AxiosPromise<Tag> {
            return localVarFp.tag(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Delete a tag that is no longer needed
         * @summary Delete Tag
         * @param {TagsApiTag0Request} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tag_1(requestParameters: TagsApiTag0Request, options?: AxiosRequestConfig): AxiosPromise<string> {
            return localVarFp.tag_1(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Change a tag name while still keeping the relevant shipments attached to it
         * @summary Update Tag Name
         * @param {TagsApiTag1Request} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tag_2(requestParameters: TagsApiTag1Request, options?: AxiosRequestConfig): AxiosPromise<string> {
            return localVarFp.tag_2(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Get a list of all tags associated with an account.
         * @summary Get Tags
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tags(options?: AxiosRequestConfig): AxiosPromise<ListTagsResponseBody> {
            return localVarFp.tags(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for tag operation in TagsApi.
 * @export
 * @interface TagsApiTagRequest
 */
export type TagsApiTagRequest = {
    
    /**
    * 
    * @type {string}
    * @memberof TagsApiTag
    */
    readonly tagName: string
    
}

/**
 * Request parameters for tag_1 operation in TagsApi.
 * @export
 * @interface TagsApiTag0Request
 */
export type TagsApiTag0Request = {
    
    /**
    * 
    * @type {string}
    * @memberof TagsApiTag0
    */
    readonly tagName: string
    
}

/**
 * Request parameters for tag_2 operation in TagsApi.
 * @export
 * @interface TagsApiTag1Request
 */
export type TagsApiTag1Request = {
    
    /**
    * 
    * @type {string}
    * @memberof TagsApiTag1
    */
    readonly tagName: string
    
    /**
    * 
    * @type {string}
    * @memberof TagsApiTag1
    */
    readonly newTagName: string
    
}

/**
 * TagsApiGenerated - object-oriented interface
 * @export
 * @class TagsApiGenerated
 * @extends {BaseAPI}
 */
export class TagsApiGenerated extends BaseAPI {
    /**
     * Create a new Tag for customizing how you track your shipments
     * @summary Create a New Tag
     * @param {TagsApiTagRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TagsApiGenerated
     */
    public tag(requestParameters: TagsApiTagRequest, options?: AxiosRequestConfig) {
        return TagsApiFp(this.configuration).tag(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Delete a tag that is no longer needed
     * @summary Delete Tag
     * @param {TagsApiTag0Request} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TagsApiGenerated
     */
    public tag_1(requestParameters: TagsApiTag0Request, options?: AxiosRequestConfig) {
        return TagsApiFp(this.configuration).tag_1(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Change a tag name while still keeping the relevant shipments attached to it
     * @summary Update Tag Name
     * @param {TagsApiTag1Request} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TagsApiGenerated
     */
    public tag_2(requestParameters: TagsApiTag1Request, options?: AxiosRequestConfig) {
        return TagsApiFp(this.configuration).tag_2(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Get a list of all tags associated with an account.
     * @summary Get Tags
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TagsApiGenerated
     */
    public tags(options?: AxiosRequestConfig) {
        return TagsApiFp(this.configuration).tags(options).then((request) => request(this.axios, this.basePath));
    }
}