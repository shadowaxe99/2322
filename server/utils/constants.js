```javascript
module.exports = {
    DB_CONNECTION: process.env.DB_CONNECTION,
    PORT: process.env.PORT || 5000,
    JWT_SECRET: process.env.JWT_SECRET,
    OAUTH_CLIENT_ID: process.env.OAUTH_CLIENT_ID,
    OAUTH_CLIENT_SECRET: process.env.OAUTH_CLIENT_SECRET,
    OAUTH_REDIRECT_URI: process.env.OAUTH_REDIRECT_URI,
    OAUTH_PROVIDER: process.env.OAUTH_PROVIDER,
    API_KEYS: {
        RCM_API_KEY: process.env.RCM_API_KEY,
        SOCIAL_MEDIA_API_KEY: process.env.SOCIAL_MEDIA_API_KEY,
        SEO_API_KEY: process.env.SEO_API_KEY,
        HEALTH_WELL_BEING_API_KEY: process.env.HEALTH_WELL_BEING_API_KEY
    }
};
```