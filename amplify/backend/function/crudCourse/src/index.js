/* Amplify Params - DO NOT EDIT
	ENV
	REGION
	STORAGE_COURSE_ARN
	STORAGE_COURSE_NAME
	STORAGE_COURSE_STREAMARN
	STORAGE_LECTURES_ARN
	STORAGE_LECTURES_NAME
	STORAGE_LECTURES_STREAMARN
	STORAGE_SECTION_ARN
	STORAGE_SECTION_NAME
	STORAGE_SECTION_STREAMARN
Amplify Params - DO NOT EDIT */

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import {
  DynamoDBDocumentClient,
  ScanCommand,
  PutCommand,
  GetCommand,
  DeleteCommand,
} from "@aws-sdk/lib-dynamodb";

const client = new DynamoDBClient({});
const dynamo = DynamoDBDocumentClient.from(client);

let course_table_name = process.env.STORAGE_COURSE_NAME;
let section_table_name = process.env.STORAGE_SECTION_NAME;
let lecture_table_name = process.env.STORAGE_LECTURES_NAME;

export const handler = async (event) => {
  // TODO implement
  const headers = {
    "Content-Type": "application/json",
  };
  let body = "Put items successful";
  let statusCode = 200;
  switch (event.routeKey) {
    case "PUT /course":
      var data = JSON.parse(event.body);
      var course_data = data.course;

      try {
        await dynamo.send(
          new PutCommand({
            TableName: course_table_name,
            Item: course_data,
          })
        );
        // console.log("Item entered successfully:", data);
      } catch (err) {
        statusCode = 400;
        console.log(err);
        body = err.message;
      }

      var content_course = data.content;
      var i, j;
      for (i = 0; i < content_course.length; i++) {
        try {
          await dynamo.send(
            new PutCommand({
              TableName: section_table_name,
              Item: {
                id: content_course[i].id,
                title: content_course[i].section,
                course_id: course_data.id,
              },
            })
          );
          // console.log("Item entered successfully:", data);
        } catch (err) {
          statusCode = 400;
          console.log(err);
          body = err.message;
        }
        // var count = 0
        for (j = 0; j < content_course[i].lectures.length; j++) {
          var lecture = content_course[i].lectures[j];
          lecture.cate_id = content_course[i].id;
          try {
            await dynamo.send(
              new PutCommand({
                TableName: lecture_table_name,
                Item: lecture,
              })
            );
            // console.log("Item entered successfully:", data);
          } catch (err) {
            statusCode = 400;
            console.log(err);
            body = err.message;
          }
        }
      }
      break;
    default:
      throw new Error(`Unsupported route: "${event.routeKey}"`);
  }

  const response = {
    statusCode,
    body,
    headers,
  };
  return response;
};
