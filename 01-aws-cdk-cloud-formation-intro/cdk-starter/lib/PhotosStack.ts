import * as cdk from 'aws-cdk-lib';
import { Bucket, CfnBucket } from 'aws-cdk-lib/aws-s3';
import { Construct } from 'constructs';

export class PhotosStack extends cdk.Stack {
    constructor(scope: Construct, id: string, props?: cdk.StackProps) {
        super(scope, id, props);

        const myBucket = new Bucket(this, 'PhotosStack2', {
            bucketName: 'photosbucket-123abc2'
        });

        (myBucket.node.defaultChild as CfnBucket).overrideLogicalId('PhotosStack2Test123')

        // Create a new resource and delete the old one
    }
}