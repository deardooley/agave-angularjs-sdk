/**
 *agave.sdk
 *
 * This is the response object from the token service upon an authentication success.
 */

function AuthTokenResponse() {
    this.refresh_token = undefined
    this.access_token = undefined
    this.expires_in = 0
    this.token_type = undefined
}

//Make instanceof work


/**
 *The refreshed access token
 *
 * @return: string
 */
AuthTokenResponse.prototype.getAccessToken = function () {

    return this.access_token;
}


AuthTokenResponse.prototype.setAccessToken = function (value) {
    this.access_token = value;
}

/**
 *The refreshed access token
 *
 * @return: string
 */
AuthTokenResponse.prototype.getRefreshToken = function () {

    return this.refresh_token;
}


AuthTokenResponse.prototype.setRefreshToken = function (value) {
    this.refresh_token = value;
}

/**
 *The number of seconds until this token is invalidated
 *
 * @return: ClientSubscriptionTierEnum
 */
AuthTokenResponse.prototype.getExpiresIn = function () {

    return this.tier;
}


AuthTokenResponse.prototype.setExpiresIn = function (value) {
    this.expires_in = value;
}


/**
 * The type of token returned. should always be "bearer"
 *
 * @return: string
 */
AuthTokenResponse.prototype.getTokenType = function () {

    return this.token_type;
}


AuthTokenResponse.prototype.setTokenType = function (value) {
    this.token_type = value;
}



