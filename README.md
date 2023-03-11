<img src="https://github.com/jhonnygo/gcp-get-oauth2-token/blob/main/img/header.jpg?raw=true" alt="Header Logo" width="100%" />

# Quick reference
* **Maintained by**: Jhoncy Tech - JhonnyGO

# Features

This library based on NODE allows you to obtain your oauth2 token using your service account and private key of your service account json file.

<br>
What do you need for to get your token:
<br><br>

### Requirements
* node installed
* curl installed
* GCP - Service Account
* GCP - Service Account private key in your json file
* GCP - Scopes of your Service Account
<br><br>

# How to install this librarie?.

## Use this command to install the librarie.
<pre>
$ sudo curl -s https://raw.githubusercontent.com/jhonnygo/gcp-get-oauth2-token/main/install.sh | bash
</pre>

# How to uninstall this librarie?.

## Use this command to uninstall the librarie.
<pre>
$ sudo curl -s https://raw.githubusercontent.com/jhonnygo/gcp-get-oauth2-token/main/uninstall.sh | bash
</pre>

# After installation.

## Once you have installed the library, you need the following data:

<br>

1. You need a service account with this format:

    <pre>
    // Config GCP account
    // Here you are an example

    const serviceAccount = 'xxxxxxxxxx@[project-id].iam.gserviceaccount.com';
    </pre>

2. You need a private key with this format:

    <pre>
    // Private key stored in json file when you created the service account key
    // Here you are an example

    const privateKey = '-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANAoIBAQCtn76NDND93igD\n6hHbSb4WSpHJt5x9++R/q6It+fe+PaV3u0QCDZuveLESh6QXT9fx8PTvH7sRPN61Nl3pAUma1tpGJJahWk7VwqRCajX6AW6x+D4bCu3LDWz6sUT0g\n6cQPSbxkoKgMuxZ8vklXYc4g4GpA0JiCQwsdcMv5KEatZ74OmzQWlQM8m9RvyvPMHr8C7oRt4Iv0dmJf7PG5E64wxH0fh5hqBrRHQKgUjadsF\nbY+O/J0pGit9zbYrYlP6F8JLX3ng7X0ASh2leZSDGqBArIrD3kfox/XujGlv6f8U\nSU3au2c0XWzj87Gr26AqfMvDdIZhm5RGe9YmvTDD/6mhsQ0+jtjUcxPcMj5OZJ6YBKx8g/3azE7OMlmO\nRhKnj7L6XtHPgJG3VdyIbYDBW4AEg05CfRn7So+p9F/kpulGByYUDYNkNWYHkoxd\nHeTEaNkyVXriqf4CNK86gsyDoGAi0ds8HF6lCsjMgQKBgQDk+twsTIc4coFIg9Kg\nZ7AMjV30+VMdZfbggzo6rJnmL5ZK8yACGwiR9587IMyZyq5sGUwd9zMKhIuLO6yS\nNfAIL26YxP0fTTz24kCBNsOfdMzewKBgQDCHKo7CyCoNVtAXSDcJvvtsLnAY1ZZxdij\nCdu3RgZkX4Y50VndM8qrpk7vxhjkP8ugKcYAy2KGw9smdBl1Y4XRSCB0fPBcSV8B\nxw1u2z548w7VYEs1by8klcSegMEBipGRjSnG9ZFB2ImVX5b0qfE047JIiLu2YvwQ\nsuHq0sY43QKBgGcOYLmvV8yX/IfejJWVFS\nXxkTEZ9TC8LL7eTJHfD+qQI61XM80Fad4AJPFr+7KRFGRkCmvvGmijJx76Ia4WSz\nDeoSwesrXZw0nVodgc5bqzEZ3bcCvxK80JwH2zjDFn4KeIdoGA9VohCxAoGBAJ5C\nMKgi0mVR2ywGwZu8TPnldAxe8TAQFigXCYPLG7sKBq1s+g9XAo4f8Yubvv+Y47OZ\nW02ahKHLXQlk7ry+f4O5gnx2wKD9UPBqEZGoPq7tu9JLyAWwuIbjdIKmBrXy++YGhqjPX3uip4hAoGBAJ3j7stNiVfm2xEO1MVU\n/BrsViyv7c3bBfSW9i/SjwbZzMQG8MPh1/c6bkZfXbpctjDSj5IQDSmonCk+eqBH\nVphI1aScszr1fIoPJSeejqliqZmI0gx\nx85vmDiOr3H8qodRMFMFiuGA\n-----END PRIVATE KEY-----\n';
    </pre>

3. You will need the permissions or scopes you want to give to your token separated by spaces, here you are an example.

    <pre>
    // Scopes of GCP allowed to this token separated by one space between each scope
    const scopes = 'https://www.googleapis.com/auth/cloud-platform https://www.googleapis.com/auth/cloud-platform.read-only https://www.googleapis.com/auth/devstorage.full_control https://www.googleapis.com/auth/devstorage.read_only https://www.googleapis.com/auth/devstorage.read_write';
    </pre>

---


## Finnaly


Modify all data in the file **/usr/local/scripts/gcp-get-oauth2-token/config/config.js**

---

<br>

### Use this command to get your token.
<pre>
$ gcp-get-oauth2-token
</pre>

<br>

## EXAMPLES'S PAGE
Go to page of request examples in the follow link: **[REQUEST EXAMPLES](https://github.com/jhonnygo/gcp-get-oauth2-token/wiki#examples)**

<br>

## That's all !!!

<br>

## Contacts
    - Mail: support@jhoncytech.com
    - Web: https://jhoncytech.com
    ---
    - Mail: support@jhonnygo.com
    - Web: https://jhonnygo.com


<img src="https://github.com/jhonnygo/gcp-get-oauth2-token/blob/main/img/happy-coding.jpg?raw=true" alt="Header Logo" />
