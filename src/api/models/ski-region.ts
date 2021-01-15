/* tslint:disable */
/* eslint-disable */
/**
 * Open Data Hub Api Tourism
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: V1
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/**
 * 
 * @export
 * @interface SkiRegion
 */
export interface SkiRegion {
    /**
     * 
     * @type {Array&lt;GpsPolygon&gt;}
     * @memberof SkiRegion
     */
    gpsPolygon?: any;
    /**
     * 
     * @type {Array&lt;Webcam&gt;}
     * @memberof SkiRegion
     */
    webcam?: any;
    /**
     * 
     * @type {Array&lt;RelatedContent&gt;}
     * @memberof SkiRegion
     */
    relatedContent?: any;
    /**
     * 
     * @type {LicenseInfo}
     * @memberof SkiRegion
     */
    licenseInfo?: any;
    /**
     * 
     * @type {string}
     * @memberof SkiRegion
     */
    id?: any;
    /**
     * 
     * @type {boolean}
     * @memberof SkiRegion
     */
    active?: any;
    /**
     * 
     * @type {string}
     * @memberof SkiRegion
     */
    customId?: any;
    /**
     * 
     * @type {string}
     * @memberof SkiRegion
     */
    shortname?: any;
    /**
     * 
     * @type {string}
     * @memberof SkiRegion
     */
    gpstype?: any;
    /**
     * 
     * @type {number}
     * @memberof SkiRegion
     */
    latitude?: any;
    /**
     * 
     * @type {number}
     * @memberof SkiRegion
     */
    longitude?: any;
    /**
     * 
     * @type {number}
     * @memberof SkiRegion
     */
    altitude?: any;
    /**
     * 
     * @type {string}
     * @memberof SkiRegion
     */
    altitudeUnitofMeasure?: any;
    /**
     * 
     * @type {{ [key, string]: Detail;}}
     * @memberof SkiRegion
     */
    detail?: any;
    /**
     * 
     * @type {{ [key, string]: ContactInfos;}}
     * @memberof SkiRegion
     */
    contactInfos?: any;
    /**
     * 
     * @type {Array&lt;ImageGallery&gt;}
     * @memberof SkiRegion
     */
    imageGallery?: any;
    /**
     * 
     * @type {Array&lt;string&gt;}
     * @memberof SkiRegion
     */
    smgTags?: any;
    /**
     * 
     * @type {boolean}
     * @memberof SkiRegion
     */
    smgActive?: any;
    /**
     * 
     * @type {Array&lt;string&gt;}
     * @memberof SkiRegion
     */
    hasLanguage?: any;
    /**
     * 
     * @type {Date}
     * @memberof SkiRegion
     */
    lastChange?: any;
}
