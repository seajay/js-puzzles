exports.handler = (event, context, callback) => {
    // TODO implement

var AWS = require("aws-sdk");
AWS.config.update({
  region: "eu-west-1",
  endpoint: "https://dynamodb.eu-west-1.amazonaws.com"
});
var dynamodb = new AWS.DynamoDB();
var docClient = new AWS.DynamoDB.DocumentClient();
var table = "javascriptProblems";
var result;
var params;

function clientCallback(err, data){
    if (err) {
        result = JSON.stringify(err, null, 2);
        console.error("Error:", result);
    } else {
        result = JSON.stringify(data, null, 2);
        console.log("Success:", result);
    }
}


switch (event.action){
    case "get":
        params = {
            "TableName": table,
            "Key": event.params
        };
        console.log("Getting item...");
        docClient.get(params, clientCallback);
        break;
    default:
        callback(null, {"result": "Unknown action"});
        return;
}


callback(null, result);

};