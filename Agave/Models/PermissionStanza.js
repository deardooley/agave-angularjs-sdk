/**
 *AgavePlatformScienceAPILib
 *
 * This file was automatically generated by APIMATIC BETA v2.0 on 10/07/2015
 */

function PermissionStanza(){
        this.read  = false     
        this.write  = false     

}

//Make instanceof work

 



/**
 *Is the resource readable
 *
 * @return: bool
 */
PermissionStanza.prototype.getRead=function(){

        return this.read;
}
    
    

PermissionStanza.prototype.setRead=function(value){
        this.read = value;
}
     
 



/**
 *Is the resource writable
 *
 * @return: bool
 */
PermissionStanza.prototype.getWrite=function(){

        return this.write;
}
    
    

PermissionStanza.prototype.setWrite=function(value){
        this.write = value;
}
     





