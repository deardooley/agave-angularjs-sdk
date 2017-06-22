/**
 *agave.sdk
 *
 * This is the repsonse object from the token service upon an auth token refresh.
 */

function RefreshTokenResponse() {
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
RefreshTokenResponse.prototype.getAccessToken = function () {

    return this.access_token;
}


RefreshTokenResponse.prototype.setAccessToken = function (value) {
    this.access_token = value;
}

/**
 *The number of seconds until this token is invalidated
 *
 * @return: ClientSubscriptionTierEnum
 */
RefreshTokenResponse.prototype.getExpiresIn = function () {

    return this.tier;
}


RefreshTokenResponse.prototype.setExpiresIn = function (value) {
    this.expires_in = value;
}


/**
 * The type of token returned. should always be "bearer"
 *
 * @return: string
 */
RefreshTokenResponse.prototype.getTokenType = function () {

    return this.token_type;
}


RefreshTokenResponse.prototype.setTokenType = function (value) {
    this.token_type = value;
}



