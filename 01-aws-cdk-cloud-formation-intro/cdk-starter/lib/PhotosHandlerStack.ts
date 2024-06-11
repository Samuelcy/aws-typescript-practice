import * as cdk from 'aws-cdk-lib';
import { Fn } from 'aws-cdk-lib';
import { Bucket, CfnBucket } from 'aws-cdk-lib/aws-s3';
import { Construct } from 'constructs';
import { Code, Function as LambdaFunction, Runtime } from 'aws-cdk-lib/aws-lambda';

interface PhotosHandlerStackProps extends cdk.StackProps {
    targetBucketArn: string
}

export class PhotosHandlerStack extends cdk.Stack {

    constructor(scope: Construct, id: string, props: PhotosHandlerStackProps) {
        super(scope, id, props);

       

        new LambdaFunction(this, 'PhotosHandler', {
            runtime: Runtime.NODEJS_16_X,
            handler: 'index.hanlder',
            code: Code.fromInline(`
                exports.hanlder=async (event) => {
                    console.log("hello!: " + process.env.TARGET_BUCKET)
                };
            `),
            environment: {
                TARGET_BUCKET: props?.targetBucketArn,
            },
        });

    }
}
