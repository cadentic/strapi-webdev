module.exports = ({ env }) => ({
    // ...
    upload: {
        config: {
            provider: 'cloudinary',
            providerOptions: {
                cloud_name: env('CLOUDINARY_NAME'),
                api_key: env('CLOUDINARY_KEY'),
                api_secret: env('CLOUDINARY_SECRET'),
            },
            actionOptions: {
                upload: {},
                uploadStream: {},
                delete: {},
            },
        },
    },
    // ...
});

module.exports = ({ env }) => ({
    // ...
    email: {
        config: {
            provider: 'amazon-ses',
            providerOptions: {
                key: env('AWS_SES_KEY'),
                secret: env('AWS_SES_SECRET'),
                amazon: 'https://email.us-east-1.amazonaws.com',
            },
            settings: {
                defaultFrom: 'myemail@protonmail.com',
                defaultReplyTo: 'myemail@protonmail.com',
            },
        },
    },
    // ...
});

module.exports = ({ env }) => ({
    // ...
    upload: {
        config: {
            provider: 'aws-s3',
            providerOptions: {
                accessKeyId: env('AWS_ACCESS_KEY_ID'),
                secretAccessKey: env('AWS_ACCESS_SECRET'),
                region: env('AWS_REGION'),
                params: {
                    Bucket: env('AWS_BUCKET'),
                },
            },
            actionOptions: {
                upload: {},
                uploadStream: {},
                delete: {},
            },
        },
    },
    // ...
});

module.exports = ({ env }) => ({
    //...
    'import-export-entries': {
        enabled: true,
    },
    //...
});

module.exports = {
    //
    graphql: {
        config: {
            endpoint: '/graphql',
            shadowCRUD: true,
            playgroundAlways: false,
            depthLimit: 7,
            amountLimit: 100,
            apolloServer: {
                tracing: false,
            },
        },
    },
};

