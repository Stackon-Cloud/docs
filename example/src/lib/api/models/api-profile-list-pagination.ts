/* tslint:disable */
/* eslint-disable */
/**
 * users API
 * API for managing data in the users database
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * Pagination information
 * @export
 * @interface ApiProfileListPagination
 */
export interface ApiProfileListPagination {
    /**
     * Current page number (0-based)
     * @type {number}
     * @memberof ApiProfileListPagination
     */
    'pageNumber': number;
    /**
     * Number of items per page
     * @type {number}
     * @memberof ApiProfileListPagination
     */
    'pageSize': number;
    /**
     * Total number of elements across all pages
     * @type {number}
     * @memberof ApiProfileListPagination
     */
    'totalElements': number;
    /**
     * Total number of pages
     * @type {number}
     * @memberof ApiProfileListPagination
     */
    'totalPages': number;
    /**
     * Whether there is a next page
     * @type {boolean}
     * @memberof ApiProfileListPagination
     */
    'hasNext': boolean;
    /**
     * Whether there is a previous page
     * @type {boolean}
     * @memberof ApiProfileListPagination
     */
    'hasPrevious': boolean;
    /**
     * Sort criteria used in the query (e.g. [\'field1:asc\', \'field2:desc\'])
     * @type {Array<string>}
     * @memberof ApiProfileListPagination
     */
    'sort'?: Array<string>;
}

