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
import type * as buffer from "buffer"

import { DisplayScheme } from './display-scheme';
import { LabelFormat } from './label-format';
import { LabelLayout } from './label-layout';

/**
 * The information used to process the batch
 * @export
 * @interface CreateAndProcessBatchRequestBodyProcessLabels
 */
export interface CreateAndProcessBatchRequestBodyProcessLabels {
    /**
     * When \'true\', the batch will be enqueued for processing
     * @type {boolean}
     * @memberof CreateAndProcessBatchRequestBodyProcessLabels
     */
    'create_batch_and_process_labels'?: boolean;
    /**
     * An [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) string that represents a date and time. 
     * @type {string}
     * @memberof CreateAndProcessBatchRequestBodyProcessLabels
     */
    'ship_date'?: string;
    /**
     * The available layouts (sizes) in which shipping labels can be downloaded.  The label format determines which sizes are supported.  `4x6` is supported for all label formats, whereas `letter` (8.5\" x 11\") is only supported for `pdf` format. 
     * @type {LabelLayout}
     * @memberof CreateAndProcessBatchRequestBodyProcessLabels
     */
    'label_layout'?: LabelLayout;
    /**
     * The possible file formats in which shipping labels can be downloaded.  We recommend `pdf` format because it is supported by all carriers, whereas some carriers do not support the `png` or `zpl` formats.  |Label Format  | Supported Carriers |--------------|----------------------------------- |`pdf`         | All carriers |`png`         | `fedex` <br> `stamps_com` <br> `ups` <br> `usps` |`zpl`         | `access_worldwide` <br> `apc` <br> `asendia` <br> `dhl_global_mail` <br> `dhl_express` <br> `dhl_express_australia` <br> `dhl_express_canada` <br> `dhl_express_worldwide` <br> `dhl_express_uk` <br> `dpd` <br> `endicia` <br> `fedex` <br> `fedex_uk` <br> `firstmile` <br> `imex` <br> `newgistics` <br> `ontrac` <br> `rr_donnelley` <br> `stamps_com` <br> `ups` <br> `usps` 
     * @type {LabelFormat}
     * @memberof CreateAndProcessBatchRequestBodyProcessLabels
     */
    'label_format'?: LabelFormat;
    /**
     * The display format that the label should be shown in.
     * @type {DisplayScheme}
     * @memberof CreateAndProcessBatchRequestBodyProcessLabels
     */
    'display_scheme'?: DisplayScheme;
}

