#!/bin/bash

KEYCLOAK_URL="http://keycloak:8080"
REALM_NAME="curio"  # Replace with your realm name
CLIENT_ID="curio-demo-backend"  # Replace with your client ID
CLIENT_SECRET="vladas-new-secret"  # Replace with your new client secret

# Get access token for the master realm admin user
MASTER_ACCESS_TOKEN=$(curl -s -X POST \
    "${KEYCLOAK_URL}/realms/master/protocol/openid-connect/token" \
    -H "Content-Type: application/x-www-form-urlencoded" \
    -d "client_id=admin-cli" \
    -d "username=admin" \
    -d "password=admin" \
    -d "grant_type=password" | jq -r .access_token)

# Get the client ID for the specified client in the target realm
CLIENT_ID_TARGET_REALM=$(curl -s -X GET \
    "${KEYCLOAK_URL}/admin/realms/${REALM_NAME}/clients?clientId=${CLIENT_ID}" \
    -H "Content-Type: application/json" \
    -H "Authorization: Bearer ${MASTER_ACCESS_TOKEN}" | jq -r '.[0].id')

# Get the client representation
CLIENT_REPRESENTATION=$(curl -s -X GET \
    "${KEYCLOAK_URL}/admin/realms/${REALM_NAME}/clients/${CLIENT_ID_TARGET_REALM}" \
    -H "Content-Type: application/json" \
    -H "Authorization: Bearer ${MASTER_ACCESS_TOKEN}")

# Update the client secret in the client representation
UPDATED_CLIENT_REPRESENTATION=$(echo "${CLIENT_REPRESENTATION}" | jq --arg newSecret "${CLIENT_SECRET}" '.secret = $newSecret')

# Update the client with the new client representation
RESPONSE=$(curl -s -X PUT \
    "${KEYCLOAK_URL}/admin/realms/${REALM_NAME}/clients/${CLIENT_ID_TARGET_REALM}" \
    -H "Content-Type: application/json" \
    -H "Authorization: Bearer ${MASTER_ACCESS_TOKEN}" \
    -d "${UPDATED_CLIENT_REPRESENTATION}")

# Print the response
echo "Client secret set for client ${CLIENT_ID} in realm ${REALM_NAME}."