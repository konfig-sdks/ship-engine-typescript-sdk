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
import { AddressValidationResult } from '../models';
// @ts-ignore
import { ErrorResponseBody } from '../models';
// @ts-ignore
import { ParseAddressRequestBody } from '../models';
// @ts-ignore
import { ParseAddressResponseBody } from '../models';
// @ts-ignore
import { PartialAddress } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * AddressesApi - axios parameter creator
 * @export
 */
export const AddressesApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * The address-recognition API makes it easy for you to extract address data from unstructured text, including the recipient name, line 1, line 2, city, postal code, and more.  Data often enters your system as unstructured text (for example: emails, SMS messages, support tickets, or other documents). ShipEngine\'s address-recognition API helps you extract meaningful, structured data from this unstructured text. The parsed address data is returned in the same structure that\'s used for other ShipEngine APIs, such as address validation, rate quotes, and shipping labels.  > **Note:** Address recognition is currently supported for the United States, Canada, Australia, New Zealand, the United Kingdom, and Ireland. 
         * @summary Parse an address
         * @param {ParseAddressRequestBody} parseAddressRequestBody The only required field is &#x60;text&#x60;, which is the text to be parsed. You can optionally also provide an &#x60;address&#x60; containing already-known values. For example, you may already know the recipient\&#39;s name, city, and country, and only want to parse the street address into separate lines. 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        address: async (parseAddressRequestBody: ParseAddressRequestBody, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'parseAddressRequestBody' is not null or undefined
            assertParamExists('address', 'parseAddressRequestBody', parseAddressRequestBody)
            const localVarPath = `/v1/addresses/recognize`;
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
                requestBody: parseAddressRequestBody,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/v1/addresses/recognize',
                httpMethod: 'PUT'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(parseAddressRequestBody, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Address validation ensures accurate addresses and can lead to reduced shipping costs by preventing address correction surcharges. ShipEngine cross references multiple databases to validate addresses and identify potential deliverability issues. 
         * @summary Validate An Address
         * @param {Array<PartialAddress>} partialAddress 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        address_1: async (partialAddress: Array<PartialAddress>, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'partialAddress' is not null or undefined
            assertParamExists('address_1', 'partialAddress', partialAddress)
            const localVarPath = `/v1/addresses/validate`;
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
                requestBody: partialAddress,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/v1/addresses/validate',
                httpMethod: 'POST'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(partialAddress, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * AddressesApi - functional programming interface
 * @export
 */
export const AddressesApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = AddressesApiAxiosParamCreator(configuration)
    return {
        /**
         * The address-recognition API makes it easy for you to extract address data from unstructured text, including the recipient name, line 1, line 2, city, postal code, and more.  Data often enters your system as unstructured text (for example: emails, SMS messages, support tickets, or other documents). ShipEngine\'s address-recognition API helps you extract meaningful, structured data from this unstructured text. The parsed address data is returned in the same structure that\'s used for other ShipEngine APIs, such as address validation, rate quotes, and shipping labels.  > **Note:** Address recognition is currently supported for the United States, Canada, Australia, New Zealand, the United Kingdom, and Ireland. 
         * @summary Parse an address
         * @param {AddressesApiAddressRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async address(requestParameters: AddressesApiAddressRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ParseAddressResponseBody>> {
            const parseAddressRequestBody: ParseAddressRequestBody = {
                text: requestParameters.text,
                address: requestParameters.address
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.address(parseAddressRequestBody, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Address validation ensures accurate addresses and can lead to reduced shipping costs by preventing address correction surcharges. ShipEngine cross references multiple databases to validate addresses and identify potential deliverability issues. 
         * @summary Validate An Address
         * @param {AddressesApiAddress0Request} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async address_1(requestParameters: AddressesApiAddress0Request, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<AddressValidationResult>>> {
            const partialAddress: Array<PartialAddress> = requestParameters;
            const localVarAxiosArgs = await localVarAxiosParamCreator.address_1(partialAddress, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * AddressesApi - factory interface
 * @export
 */
export const AddressesApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = AddressesApiFp(configuration)
    return {
        /**
         * The address-recognition API makes it easy for you to extract address data from unstructured text, including the recipient name, line 1, line 2, city, postal code, and more.  Data often enters your system as unstructured text (for example: emails, SMS messages, support tickets, or other documents). ShipEngine\'s address-recognition API helps you extract meaningful, structured data from this unstructured text. The parsed address data is returned in the same structure that\'s used for other ShipEngine APIs, such as address validation, rate quotes, and shipping labels.  > **Note:** Address recognition is currently supported for the United States, Canada, Australia, New Zealand, the United Kingdom, and Ireland. 
         * @summary Parse an address
         * @param {AddressesApiAddressRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        address(requestParameters: AddressesApiAddressRequest, options?: AxiosRequestConfig): AxiosPromise<ParseAddressResponseBody> {
            return localVarFp.address(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Address validation ensures accurate addresses and can lead to reduced shipping costs by preventing address correction surcharges. ShipEngine cross references multiple databases to validate addresses and identify potential deliverability issues. 
         * @summary Validate An Address
         * @param {AddressesApiAddress0Request} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        address_1(requestParameters: AddressesApiAddress0Request, options?: AxiosRequestConfig): AxiosPromise<Array<AddressValidationResult>> {
            return localVarFp.address_1(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for address operation in AddressesApi.
 * @export
 * @interface AddressesApiAddressRequest
 */
export type AddressesApiAddressRequest = {
    
} & ParseAddressRequestBody

/**
 * Request parameters for address_1 operation in AddressesApi.
 * @export
 * @interface AddressesApiAddress0Request
 */
export type AddressesApiAddress0Request = Array<PartialAddress>

/**
 * AddressesApiGenerated - object-oriented interface
 * @export
 * @class AddressesApiGenerated
 * @extends {BaseAPI}
 */
export class AddressesApiGenerated extends BaseAPI {
    /**
     * The address-recognition API makes it easy for you to extract address data from unstructured text, including the recipient name, line 1, line 2, city, postal code, and more.  Data often enters your system as unstructured text (for example: emails, SMS messages, support tickets, or other documents). ShipEngine\'s address-recognition API helps you extract meaningful, structured data from this unstructured text. The parsed address data is returned in the same structure that\'s used for other ShipEngine APIs, such as address validation, rate quotes, and shipping labels.  > **Note:** Address recognition is currently supported for the United States, Canada, Australia, New Zealand, the United Kingdom, and Ireland. 
     * @summary Parse an address
     * @param {AddressesApiAddressRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AddressesApiGenerated
     */
    public address(requestParameters: AddressesApiAddressRequest, options?: AxiosRequestConfig) {
        return AddressesApiFp(this.configuration).address(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Address validation ensures accurate addresses and can lead to reduced shipping costs by preventing address correction surcharges. ShipEngine cross references multiple databases to validate addresses and identify potential deliverability issues. 
     * @summary Validate An Address
     * @param {AddressesApiAddress0Request} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AddressesApiGenerated
     */
    public address_1(requestParameters: AddressesApiAddress0Request, options?: AxiosRequestConfig) {
        return AddressesApiFp(this.configuration).address_1(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}
