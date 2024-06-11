import { APIGatewayProxyEvent, APIGatewayProxyResult, Context } from "aws-lambda"
import { v4 } from 'uuid'

// exports.main = async function (event, context) {
//     return {
//         statusCode: 200,
//         body: JSON.stringify(`Hello! Reading from ${process.env.TABLE_NAME}`)
//     }
// }

async function handler(event: APIGatewayProxyEvent, context: Context) {
    const response: APIGatewayProxyResult = {
        statusCode: 200,
        body: JSON.stringify('Hello from Lambda!, the UUID is' + v4())
    }
    console.log(event);

    return response;

}

export { handler }