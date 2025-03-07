import os
import json
import azure.functions as func
from azure.cosmos import CosmosClient, exceptions

# Retrieve the Cosmos DB connection string from application settings
COSMOS_DB_CONNECTION_STRING = os.getenv("COSMOS_DB_CONNECTION_STRING")
DATABASE_NAME = "cv-db"
CONTAINER_NAME = "visitors"

def main(req: func.HttpRequest) -> func.HttpResponse:
    try:
        client = CosmosClient.from_connection_string(COSMOS_DB_CONNECTION_STRING)
        database = client.get_database_client(DATABASE_NAME)
        container = database.get_container_client(CONTAINER_NAME)

        # Fetch the visitor count from Cosmos DB
        visitor_item = container.read_item(item="1", partition_key="1")
        visitor_count = visitor_item.get("count", 0)

        # Increment the count
        visitor_count += 1
        visitor_item["count"] = visitor_count

        # Update the visitor count in Cosmos DB
        container.replace_item(item="1", body=visitor_item)

        # Return the updated visitor count
        return func.HttpResponse(
            json.dumps({"visitor_count": visitor_count}),
            mimetype="application/json",
            status_code=200
        )

    except exceptions.CosmosHttpResponseError as e:
        return func.HttpResponse(f"Error accessing Cosmos DB: {str(e)}", status_code=500)
    except Exception as e:
        return func.HttpResponse(f"Unexpected error: {str(e)}", status_code=500)
