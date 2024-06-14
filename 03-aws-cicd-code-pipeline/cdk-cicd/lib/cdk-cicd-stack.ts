import * as cdk from 'aws-cdk-lib';
import { CodePipeline, CodePipelineSource, ShellStep } from 'aws-cdk-lib/pipelines';
import { Construct } from 'constructs';

export class CdkCicdStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    new CodePipeline(this, 'CDKPipeline', {
      pipelineName: 'CDKPipeline',
      synth: new ShellStep('Synth', {
        input: CodePipelineSource.gitHub('Samuelcy/aws-typescript-practice', 'main'),
        commands: [
          'cd 03-aws-cicd-code-pipeline/cdk-cicd',
          'npm ci',
          'npx cdk synth'
        ],
        primaryOutputDirectory: 'cdk.out' 
      })
    });
  }
}
