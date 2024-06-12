import { handler } from "../src/services/spaces/handler";

process.env.AWS_REGION = "us-west-1";
process.env.TABLE_NAME = "SpaceTable-06c1b170b487"

handler({
    httpMethod: 'POST',
    body: JSON.stringify({
        location: 'Dublin'
    })
} as any,{} as any)