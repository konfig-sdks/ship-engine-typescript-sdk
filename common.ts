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

import { Configuration } from "./configuration";
import { RequiredError, RequestArgs } from "./base";
import axios, { AxiosError, AxiosInstance, AxiosResponse } from 'axios';
import { requestAfterHook } from "./requestAfterHook";
import { requestBeforeUrlHook } from "./requestBeforeUrlHook";
import { readableStreamToString, ShipEngineError, parseIfJson } from "./error";

/**
 *
 * @export
 */
export const DUMMY_BASE_URL = 'https://example.com'

/**
 *
 * @throws {RequiredError}
 * @export
 */
export const assertParamExists = function (functionName: string, paramName: string, paramValue: unknown) {
    if (paramValue === null || paramValue === undefined) {
        throw new RequiredError(paramName, `Required parameter ${paramName} was null or undefined when calling ${functionName}.`);
    }
}

/**
 *
 * @export
 */
export const setApiKeyToObject = async function ({
  object,
  key,
  type,
  keyParamName,
  configuration,
  prefix
}: {
  object: any
  key?: string
  type?: "Cookie"
  keyParamName: string
  configuration?: Configuration
  prefix?: string
}) {
  key = key ? key : keyParamName
  let apiKey: string | null | undefined = null
  if (configuration && configuration.apiKey) {
    if (typeof configuration.apiKey === 'function')
      apiKey = await configuration.apiKey(keyParamName)
    else if (typeof configuration.apiKey === 'string')
      apiKey = configuration.apiKey
    else if (typeof configuration.apiKey === 'object') {
      if (keyParamName in configuration.apiKey)
        apiKey = configuration.apiKey[keyParamName]
    } else
      throw Error(
        `Unexpected type ${typeof configuration.apiKey} for Configuration.apiKey`
      )
  }
  if (!apiKey) return
  object[key] = prefix !== undefined ? `${prefix}${apiKey}` : apiKey
  if (type === "Cookie")
    object[key] = `${keyParamName}=${object[key]}`
}

/**
 *
 * @export
 */
export const setBasicAuthToObject = function (object: any, configuration?: Configuration) {
    if (configuration && (configuration.username || configuration.password)) {
        object["auth"] = { username: configuration.username, password: configuration.password };
    }
}

/**
 *
 * @export
 */
export const setBearerAuthToObject = async function (object: any, configuration?: Configuration) {
    if (configuration && configuration.accessToken) {
        const accessToken = typeof configuration.accessToken === 'function'
            ? await configuration.accessToken()
            : await configuration.accessToken;
        object["Authorization"] = "Bearer " + accessToken;
    }
}

function setFlattenedQueryParams(urlSearchParams: URLSearchParams, parameter: any, key: string = ""): void {
    if (typeof parameter === "object") {
        if (Array.isArray(parameter)) {
            (parameter as any[]).forEach(item => setFlattenedQueryParams(urlSearchParams, item, key));
        }
        else {
            Object.keys(parameter).forEach(currentKey =>
                setFlattenedQueryParams(urlSearchParams, parameter[currentKey], `${key}${key !== '' ? '.' : ''}${currentKey}`)
            );
        }
    }
    else {
        if (urlSearchParams.has(key)) {
            urlSearchParams.append(key, parameter);
        }
        else {
            urlSearchParams.set(key, parameter);
        }
    }
}

/**
 *
 * @export
 */
export const setSearchParams = function (url: URL, ...objects: any[]) {
    const searchParams = new URLSearchParams(url.search);
    setFlattenedQueryParams(searchParams, objects);
    url.search = searchParams.toString();
}

/**
 *
 * @export
 */
export const serializeDataIfNeeded = function (value: any, requestOptions: any, configuration?: Configuration) {
    const nonString = typeof value !== 'string';
    const needsSerialization = nonString && configuration && configuration.isJsonMime
        ? configuration.isJsonMime(requestOptions.headers['Content-Type'])
        : nonString;
    return needsSerialization
        ? JSON.stringify(value !== undefined ? value : {})
        : (value || "");
}

/**
 *
 * @export
 */
export const toPathString = function (url: URL) {
    return removeTrailingSlash(url.pathname) + url.search + url.hash
}

/**
 * remove trailing slash from string
 */
export const removeTrailingSlash = function (url: string) {
    return url.replace(/\/$/, "");
}

/**
 * Wrap an axios request in a try/catch block to catch network errors and parse the response body
 */
async function wrapAxiosRequest<R>(makeRequest: () => Promise<R>): Promise<R> {
    try {
        return await makeRequest();
    } catch (e) {
        if (e instanceof AxiosError && e.isAxiosError) {
            try {
                const responseBody =
                    e.response?.data instanceof ReadableStream
                    ? await readableStreamToString(e.response.data)
                    : e.response?.data
                throw new ShipEngineError(e, parseIfJson(responseBody))
            } catch (innerError) {
                if (innerError instanceof ReferenceError) {
                    // Got: "ReferenceError: ReadableStream is not defined"
                    // This means we are in a Node environment so just throw the original error
                    throw new ShipEngineError(e, e.response?.data)
                }
                if (innerError instanceof ShipEngineError) {
                    // Got "ShipEngineError" from the above try block
                    throw innerError;
                }
                // Something unexpected happened: propagate the error
                throw e
            }
        }
        throw e
    }
}

/**
 *
 * @export
 */
export const createRequestFunction = function (axiosArgs: RequestArgs, globalAxios: AxiosInstance, BASE_PATH: string, configuration?: Configuration) {
    return async <T = unknown, R = AxiosResponse<T>>(axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
        requestBeforeUrlHook({axiosArgs, basePath, configuration})
        const url = (configuration?.basePath || basePath) + axiosArgs.url
        await requestAfterHook({axiosArgs, basePath, url, configuration})
        return wrapAxiosRequest(async () => await axios.request<T, R>({ ...axiosArgs.options, url }));
    };
}

export function isBrowser() {
    return typeof window !== "undefined"
}
