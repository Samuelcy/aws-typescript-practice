# AWS CDK TypeScript Project

This project demonstrates how to create and manage a backend infrastructure using the AWS Cloud Development Kit (CDK) with TypeScript. It includes examples of creating and linking multiple stacks, deploying AWS Lambda functions, setting up an API Gateway, managing a DynamoDB database, securing APIs with AWS Cognito, and more.

## Features

### Project Setup and Deployment
- **CDK Project Initialization**: The project is initialized from scratch using AWS CDK.
- **Multiple Stacks and Resources**: Linking together multiple stacks and resources, including AWS Lambda, API Gateway, and DynamoDB.
- **Deployment Commands**: 
  - `cdk synth` - Synthesizes the CloudFormation template for the CDK application.
  - `npm run deploy` - Runs the deploy script.
  - `cdk deploy --all` - Deploys all stacks in the CDK application.

### AWS Lambda
- **Creation and Management**: Setup and manage AWS Lambda functions.
- **Building and Testing**: Techniques for building, testing, and debugging Lambda functions.
- **Data Handling**: Querying, marshalling, and validating data with DynamoDB.

### DynamoDB Integration
- **Setup with CDK**: How to set up DynamoDB tables using AWS CDK.
- **Data Operations**: Perform CRUD operations and test queries with DynamoDB and Lambda.

### API Gateway
- **API Management**: Create and manage RESTful APIs using AWS API Gateway linked with Lambda functions.

### Security with AWS Cognito
- **User Pools**: Create user pools with CDK to manage user authentication.
- **JWT Tokens**: Generate and use JWT tokens for securing APIs.
- **Identity Pools**: Set up identity pools for managing user identities and access control.

### Best Practices
- **Testing and Debugging**: Strategies for effectively testing and debugging your AWS resources.
- **Deployment Bundling**: Efficient bundling techniques for deploying Lambda functions and other resources.
