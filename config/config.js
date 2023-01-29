
// Config time
const expiration = 3600; // Seconds

// Config GCP account
// Here you are an example
const serviceAccount = 'xxxxxxxxxx@[project-id].iam.gserviceaccount.com';

// Private key stored in json file when you created the service account key
// Here you are an example
const privateKey = '-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANAoIBAQCtn76NDND93igD\n6hHbSb4WSpHJt5x9++R/q6It+fe+PaV3u0QCDZuveLESh6QXT9fx8PTvH7sRPN61Nl3pAUma1tpGJJahWk7VwqRCajX6AW6x+D4bCu3LDWz6sUT0g\n6cQPSbxkoKgMuxZ8vklXYc4g4GpA0JiCQwsdcMv5KEatZ74OmzQWlQM8m9RvyvPMHr8C7oRt4Iv0dmJf7PG5E64wxH0fh5hqBrRHQKgUjadsF\nbY+O/J0pGit9zbYrYlP6F8JLX3ng7X0ASh2leZSDGqBArIrD3kfox/XujGlv6f8U\nSU3au2c0XWzj87Gr26AqfMvDdIZhm5RGe9YmvTDD/6mhsQ0+jtjUcxPcMj5OZJ6YBKx8g/3azE7OMlmO\nRhKnj7L6XtHPgJG3VdyIbYDBW4AEg05CfRn7So+p9F/kpulGByYUDYNkNWYHkoxd\nHeTEaNkyVXriqf4CNK86gsyDoGAi0ds8HF6lCsjMgQKBgQDk+twsTIc4coFIg9Kg\nZ7AMjV30+VMdZfbggzo6rJnmL5ZK8yACGwiR9587IMyZyq5sGUwd9zMKhIuLO6yS\nNfAIL26YxP0fTTz24kCBNsOfdMzewKBgQDCHKo7CyCoNVtAXSDcJvvtsLnAY1ZZxdij\nCdu3RgZkX4Y50VndM8qrpk7vxhjkP8ugKcYAy2KGw9smdBl1Y4XRSCB0fPBcSV8B\nxw1u2z548w7VYEs1by8klcSegMEBipGRjSnG9ZFB2ImVX5b0qfE047JIiLu2YvwQ\nsuHq0sY43QKBgGcOYLmvV8yX/IfejJWVFS\nXxkTEZ9TC8LL7eTJHfD+qQI61XM80Fad4AJPFr+7KRFGRkCmvvGmijJx76Ia4WSz\nDeoSwesrXZw0nVodgc5bqzEZ3bcCvxK80JwH2zjDFn4KeIdoGA9VohCxAoGBAJ5C\nMKgi0mVR2ywGwZu8TPnldAxe8TAQFigXCYPLG7sKBq1s+g9XAo4f8Yubvv+Y47OZ\nW02ahKHLXQlk7ry+f4O5gnx2wKD9UPBqEZGoPq7tu9JLyAWwuIbjdIKmBrXy++YGhqjPX3uip4hAoGBAJ3j7stNiVfm2xEO1MVU\n/BrsViyv7c3bBfSW9i/SjwbZzMQG8MPh1/c6bkZfXbpctjDSj5IQDSmonCk+eqBH\nVphI1aScszr1fIoPJSeejqliqZmI0gx\nx85vmDiOr3H8qodRMFMFiuGA\n-----END PRIVATE KEY-----\n';

// Scopes of GCP allowed to this token separated by one space between each scope
const scopes = 'https://www.googleapis.com/auth/cloud-platform https://www.googleapis.com/auth/cloud-platform.read-only https://www.googleapis.com/auth/devstorage.full_control https://www.googleapis.com/auth/devstorage.read_only https://www.googleapis.com/auth/devstorage.read_write';

// Exports
module.exports = { 
    expiration,
    serviceAccount,
    scopes,
    privateKey
}
