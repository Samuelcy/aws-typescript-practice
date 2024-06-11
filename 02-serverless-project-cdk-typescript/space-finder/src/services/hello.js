exports.main = async function(event, context) {
    return {
        statusCode: 200,
        body: JSON.stringify(`Hello! Reading from ${process.env.TABLE_NAME}`)
    }
}