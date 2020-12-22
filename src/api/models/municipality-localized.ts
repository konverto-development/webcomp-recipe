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
 * @interface MunicipalityLocalized
 */
export interface MunicipalityLocalized {
    /**
     * 
     * @type {string}
     * @memberof MunicipalityLocalized
     */
    plz?: any;
    /**
     * 
     * @type {string}
     * @memberof MunicipalityLocalized
     */
    regionId?: any;
    /**
     * 
     * @type {string}
     * @memberof MunicipalityLocalized
     */
    tourismvereinId?: any;
    /**
     * 
     * @type {string}
     * @memberof MunicipalityLocalized
     */
    siagId?: any;
    /**
     * 
     * @type {Array&lt;GpsPolygon&gt;}
     * @memberof MunicipalityLocalized
     */
    gpsPolygon?: any;
    /**
     * 
     * @type {Array&lt;WebcamLocalized&gt;}
     * @memberof MunicipalityLocalized
     */
    webcam?: any;
    /**
     * 
     * @type {boolean}
     * @memberof MunicipalityLocalized
     */
    visibleInSearch?: any;
    /**
     * 
     * @type {number}
     * @memberof MunicipalityLocalized
     */
    inhabitants?: any;
    /**
     * 
     * @type {string}
     * @memberof MunicipalityLocalized
     */
    istatNumber?: any;
    /**
     * 
     * @type {string}
     * @memberof MunicipalityLocalized
     */
    id?: any;
    /**
     * 
     * @type {boolean}
     * @memberof MunicipalityLocalized
     */
    active?: any;
    /**
     * 
     * @type {string}
     * @memberof MunicipalityLocalized
     */
    customId?: any;
    /**
     * 
     * @type {string}
     * @memberof MunicipalityLocalized
     */
    shortname?: any;
    /**
     * 
     * @type {string}
     * @memberof MunicipalityLocalized
     */
    gpstype?: any;
    /**
     * 
     * @type {number}
     * @memberof MunicipalityLocalized
     */
    latitude?: any;
    /**
     * 
     * @type {number}
     * @memberof MunicipalityLocalized
     */
    longitude?: any;
    /**
     * 
     * @type {number}
     * @memberof MunicipalityLocalized
     */
    altitude?: any;
    /**
     * 
     * @type {string}
     * @memberof MunicipalityLocalized
     */
    altitudeUnitofMeasure?: any;
    /**
     * 
     * @type {Detail}
     * @memberof MunicipalityLocalized
     */
    detail?: any;
    /**
     * 
     * @type {ContactInfos}
     * @memberof MunicipalityLocalized
     */
    contactInfos?: any;
    /**
     * 
     * @type {Array&lt;ImageGalleryLocalized&gt;}
     * @memberof MunicipalityLocalized
     */
    imageGallery?: any;
    /**
     * 
     * @type {Array&lt;string&gt;}
     * @memberof MunicipalityLocalized
     */
    smgTags?: any;
    /**
     * 
     * @type {boolean}
     * @memberof MunicipalityLocalized
     */
    smgActive?: any;
}