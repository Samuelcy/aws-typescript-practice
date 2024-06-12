import { handler } from "../src/services/spaces/handler";

process.env.AWS_REGION = "us-west-1";
process.env.TABLE_NAME = "SpaceTable-06c1b170b487"

handler({
    httpMethod: 'PUT',
    queryStringParameters: {
        id: '4957fca7-69b2-4ca3-9d01-70427d08fc6f'
    },
    body: JSON.stringify({
        location: 'Dublin updated'
    })
} as any, {} as any)