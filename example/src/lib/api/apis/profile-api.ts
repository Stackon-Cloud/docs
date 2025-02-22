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


import type { Configuration } from '../configuration';
import type { AxiosPromise, AxiosInstance, RawAxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, type RequestArgs, BaseAPI, RequiredError, operationServerMap } from '../base';
// @ts-ignore
import type { ApiProfile } from '../models';
// @ts-ignore
import type { ApiProfileList } from '../models';
/**
 * ProfileApi - axios parameter creator
 * @export
 */
export const ProfileApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Creates a new record in the profile table
         * @summary Create a new profile record
         * @param {ApiProfile} apiProfile profile record to create
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createProfile: async (apiProfile: ApiProfile, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'apiProfile' is not null or undefined
            assertParamExists('createProfile', 'apiProfile', apiProfile)
            const localVarPath = `/project/04b7c85c-0d15-4673-b063-b18826611d57/database/b7ab4855-9bf2-496d-9fe0-186a12211c39/table/5dfa54f1-17d5-4de5-ac3d-721fe6ae76b1/data`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication ApiKeyAuth required
            await setApiKeyToObject(localVarHeaderParameter, "X-API-Key", configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(apiProfile, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Deletes a record from the profile table
         * @summary Delete a profile record
         * @param {string} id Primary key value of the record to delete
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteProfile: async (id: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('deleteProfile', 'id', id)
            const localVarPath = `/project/04b7c85c-0d15-4673-b063-b18826611d57/database/b7ab4855-9bf2-496d-9fe0-186a12211c39/table/5dfa54f1-17d5-4de5-ac3d-721fe6ae76b1/data/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication ApiKeyAuth required
            await setApiKeyToObject(localVarHeaderParameter, "X-API-Key", configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Retrieves a single record from the profile table by its ID
         * @summary Get a profile record by ID
         * @param {string} id Primary key value of the record to retrieve
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getProfileById: async (id: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getProfileById', 'id', id)
            const localVarPath = `/project/04b7c85c-0d15-4673-b063-b18826611d57/database/b7ab4855-9bf2-496d-9fe0-186a12211c39/table/5dfa54f1-17d5-4de5-ac3d-721fe6ae76b1/data/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication ApiKeyAuth required
            await setApiKeyToObject(localVarHeaderParameter, "X-API-Key", configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Retrieves a paginated list of records from the profile table
         * @summary List profile records
         * @param {number} [page] Zero-based page number
         * @param {number} [size] Page size (max 1000)
         * @param {string} [sort] Sort field and direction (e.g. field1:asc,field2:desc)
         * @param {string} [id] Filter by id
         * @param {string} [name] Filter by name
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listProfile: async (page?: number, size?: number, sort?: string, id?: string, name?: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/project/04b7c85c-0d15-4673-b063-b18826611d57/database/b7ab4855-9bf2-496d-9fe0-186a12211c39/table/5dfa54f1-17d5-4de5-ac3d-721fe6ae76b1/data`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication ApiKeyAuth required
            await setApiKeyToObject(localVarHeaderParameter, "X-API-Key", configuration)

            if (page !== undefined) {
                localVarQueryParameter['page'] = page;
            }

            if (size !== undefined) {
                localVarQueryParameter['size'] = size;
            }

            if (sort !== undefined) {
                localVarQueryParameter['sort'] = sort;
            }

            if (id !== undefined) {
                localVarQueryParameter['id'] = id;
            }

            if (name !== undefined) {
                localVarQueryParameter['name'] = name;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Updates an existing record in the profile table
         * @summary Update a profile record
         * @param {string} id Primary key value of the record to update
         * @param {ApiProfile} apiProfile Updated profile record
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateProfile: async (id: string, apiProfile: ApiProfile, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('updateProfile', 'id', id)
            // verify required parameter 'apiProfile' is not null or undefined
            assertParamExists('updateProfile', 'apiProfile', apiProfile)
            const localVarPath = `/project/04b7c85c-0d15-4673-b063-b18826611d57/database/b7ab4855-9bf2-496d-9fe0-186a12211c39/table/5dfa54f1-17d5-4de5-ac3d-721fe6ae76b1/data/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication ApiKeyAuth required
            await setApiKeyToObject(localVarHeaderParameter, "X-API-Key", configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(apiProfile, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * ProfileApi - functional programming interface
 * @export
 */
export const ProfileApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = ProfileApiAxiosParamCreator(configuration)
    return {
        /**
         * Creates a new record in the profile table
         * @summary Create a new profile record
         * @param {ApiProfile} apiProfile profile record to create
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createProfile(apiProfile: ApiProfile, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ApiProfile>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createProfile(apiProfile, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ProfileApi.createProfile']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Deletes a record from the profile table
         * @summary Delete a profile record
         * @param {string} id Primary key value of the record to delete
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteProfile(id: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteProfile(id, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ProfileApi.deleteProfile']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Retrieves a single record from the profile table by its ID
         * @summary Get a profile record by ID
         * @param {string} id Primary key value of the record to retrieve
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getProfileById(id: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ApiProfile>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getProfileById(id, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ProfileApi.getProfileById']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Retrieves a paginated list of records from the profile table
         * @summary List profile records
         * @param {number} [page] Zero-based page number
         * @param {number} [size] Page size (max 1000)
         * @param {string} [sort] Sort field and direction (e.g. field1:asc,field2:desc)
         * @param {string} [id] Filter by id
         * @param {string} [name] Filter by name
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listProfile(page?: number, size?: number, sort?: string, id?: string, name?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ApiProfileList>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listProfile(page, size, sort, id, name, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ProfileApi.listProfile']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Updates an existing record in the profile table
         * @summary Update a profile record
         * @param {string} id Primary key value of the record to update
         * @param {ApiProfile} apiProfile Updated profile record
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateProfile(id: string, apiProfile: ApiProfile, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ApiProfile>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateProfile(id, apiProfile, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ProfileApi.updateProfile']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * ProfileApi - factory interface
 * @export
 */
export const ProfileApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = ProfileApiFp(configuration)
    return {
        /**
         * Creates a new record in the profile table
         * @summary Create a new profile record
         * @param {ApiProfile} apiProfile profile record to create
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createProfile(apiProfile: ApiProfile, options?: RawAxiosRequestConfig): AxiosPromise<ApiProfile> {
            return localVarFp.createProfile(apiProfile, options).then((request) => request(axios, basePath));
        },
        /**
         * Deletes a record from the profile table
         * @summary Delete a profile record
         * @param {string} id Primary key value of the record to delete
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteProfile(id: string, options?: RawAxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.deleteProfile(id, options).then((request) => request(axios, basePath));
        },
        /**
         * Retrieves a single record from the profile table by its ID
         * @summary Get a profile record by ID
         * @param {string} id Primary key value of the record to retrieve
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getProfileById(id: string, options?: RawAxiosRequestConfig): AxiosPromise<ApiProfile> {
            return localVarFp.getProfileById(id, options).then((request) => request(axios, basePath));
        },
        /**
         * Retrieves a paginated list of records from the profile table
         * @summary List profile records
         * @param {number} [page] Zero-based page number
         * @param {number} [size] Page size (max 1000)
         * @param {string} [sort] Sort field and direction (e.g. field1:asc,field2:desc)
         * @param {string} [id] Filter by id
         * @param {string} [name] Filter by name
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listProfile(page?: number, size?: number, sort?: string, id?: string, name?: string, options?: RawAxiosRequestConfig): AxiosPromise<ApiProfileList> {
            return localVarFp.listProfile(page, size, sort, id, name, options).then((request) => request(axios, basePath));
        },
        /**
         * Updates an existing record in the profile table
         * @summary Update a profile record
         * @param {string} id Primary key value of the record to update
         * @param {ApiProfile} apiProfile Updated profile record
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateProfile(id: string, apiProfile: ApiProfile, options?: RawAxiosRequestConfig): AxiosPromise<ApiProfile> {
            return localVarFp.updateProfile(id, apiProfile, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * ProfileApi - interface
 * @export
 * @interface ProfileApi
 */
export interface ProfileApiInterface {
    /**
     * Creates a new record in the profile table
     * @summary Create a new profile record
     * @param {ApiProfile} apiProfile profile record to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProfileApiInterface
     */
    createProfile(apiProfile: ApiProfile, options?: RawAxiosRequestConfig): AxiosPromise<ApiProfile>;

    /**
     * Deletes a record from the profile table
     * @summary Delete a profile record
     * @param {string} id Primary key value of the record to delete
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProfileApiInterface
     */
    deleteProfile(id: string, options?: RawAxiosRequestConfig): AxiosPromise<void>;

    /**
     * Retrieves a single record from the profile table by its ID
     * @summary Get a profile record by ID
     * @param {string} id Primary key value of the record to retrieve
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProfileApiInterface
     */
    getProfileById(id: string, options?: RawAxiosRequestConfig): AxiosPromise<ApiProfile>;

    /**
     * Retrieves a paginated list of records from the profile table
     * @summary List profile records
     * @param {number} [page] Zero-based page number
     * @param {number} [size] Page size (max 1000)
     * @param {string} [sort] Sort field and direction (e.g. field1:asc,field2:desc)
     * @param {string} [id] Filter by id
     * @param {string} [name] Filter by name
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProfileApiInterface
     */
    listProfile(page?: number, size?: number, sort?: string, id?: string, name?: string, options?: RawAxiosRequestConfig): AxiosPromise<ApiProfileList>;

    /**
     * Updates an existing record in the profile table
     * @summary Update a profile record
     * @param {string} id Primary key value of the record to update
     * @param {ApiProfile} apiProfile Updated profile record
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProfileApiInterface
     */
    updateProfile(id: string, apiProfile: ApiProfile, options?: RawAxiosRequestConfig): AxiosPromise<ApiProfile>;

}

/**
 * ProfileApi - object-oriented interface
 * @export
 * @class ProfileApi
 * @extends {BaseAPI}
 */
export class ProfileApi extends BaseAPI implements ProfileApiInterface {
    /**
     * Creates a new record in the profile table
     * @summary Create a new profile record
     * @param {ApiProfile} apiProfile profile record to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProfileApi
     */
    public createProfile(apiProfile: ApiProfile, options?: RawAxiosRequestConfig) {
        return ProfileApiFp(this.configuration).createProfile(apiProfile, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Deletes a record from the profile table
     * @summary Delete a profile record
     * @param {string} id Primary key value of the record to delete
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProfileApi
     */
    public deleteProfile(id: string, options?: RawAxiosRequestConfig) {
        return ProfileApiFp(this.configuration).deleteProfile(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Retrieves a single record from the profile table by its ID
     * @summary Get a profile record by ID
     * @param {string} id Primary key value of the record to retrieve
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProfileApi
     */
    public getProfileById(id: string, options?: RawAxiosRequestConfig) {
        return ProfileApiFp(this.configuration).getProfileById(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Retrieves a paginated list of records from the profile table
     * @summary List profile records
     * @param {number} [page] Zero-based page number
     * @param {number} [size] Page size (max 1000)
     * @param {string} [sort] Sort field and direction (e.g. field1:asc,field2:desc)
     * @param {string} [id] Filter by id
     * @param {string} [name] Filter by name
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProfileApi
     */
    public listProfile(page?: number, size?: number, sort?: string, id?: string, name?: string, options?: RawAxiosRequestConfig) {
        return ProfileApiFp(this.configuration).listProfile(page, size, sort, id, name, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Updates an existing record in the profile table
     * @summary Update a profile record
     * @param {string} id Primary key value of the record to update
     * @param {ApiProfile} apiProfile Updated profile record
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProfileApi
     */
    public updateProfile(id: string, apiProfile: ApiProfile, options?: RawAxiosRequestConfig) {
        return ProfileApiFp(this.configuration).updateProfile(id, apiProfile, options).then((request) => request(this.axios, this.basePath));
    }
}

