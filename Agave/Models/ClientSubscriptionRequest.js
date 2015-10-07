/**
 *AgavePlatformScienceAPILib
 *
 * This file was automatically generated by APIMATIC BETA v2.0 on 10/07/2015
 */

function ClientSubscriptionRequest(){
        this.apiName = undefined     
        this.apiProvider = undefined     
        this.apiVersion = undefined     
        this.tier = undefined     

}

//Make instanceof work

 



/**
 *The name of the API.
 *
 * @return: string
 */
ClientSubscriptionRequest.prototype.getApiName=function(){

        return this.apiName;
}
    
    

ClientSubscriptionRequest.prototype.setApiName=function(value){
        this.apiName = value;
}
     
 



/**
 *The user who registered the API.
 *
 * @return: string
 */
ClientSubscriptionRequest.prototype.getApiProvider=function(){

        return this.apiProvider;
}
    
    

ClientSubscriptionRequest.prototype.setApiProvider=function(value){
        this.apiProvider = value;
}
     
 



/**
 *The current major version of the API. This is appended to the api_context to create the base API url.
 *
 * @return: string
 */
ClientSubscriptionRequest.prototype.getApiVersion=function(){

        return this.apiVersion;
}
    
    

ClientSubscriptionRequest.prototype.setApiVersion=function(value){
        this.apiVersion = value;
}
     
 



/**
 *The access tier for this client.
 *
 * @return: ClientSubscriptionTierEnum
 */
ClientSubscriptionRequest.prototype.getTier=function(){

        return this.tier;
}
    
    

ClientSubscriptionRequest.prototype.setTier=function(value){
        this.tier = value;
}
     





