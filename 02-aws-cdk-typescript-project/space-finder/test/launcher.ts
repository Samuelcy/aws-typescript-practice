import { handler } from "../src/services/spaces/handler";

process.env.AWS_REGION = "us-west-1";
process.env.TABLE_NAME = "SpaceTable-06c1b170b487"

handler({
        httpMethod: 'PUT',
        queryStringParameters: {
            id: 'e0f8d09c-e1d2-4e2a-83fc-23597f68c9db'
        },
        body: JSON.stringify({
            location: 'Not updated'
        })
    } as any , {} as any).then(result =>{
        console.log(result)
    });