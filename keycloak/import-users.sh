#!/bin/bash

KEYCLOAK_URL="http://keycloak:8080"
REALM_NAME="curio"

USER_TEMPLATE="{
    \"username\": \"#user_name_token#\",
    \"enabled\": true,
    \"email\": \"#user_name_token#@example.com\",
    \"firstName\": \"#user_name_token#\",
    \"lastName\": \"#user_name_token#\",
    \"credentials\": [
      {
        \"type\": \"password\",
        \"value\": \"password\",
        \"temporary\": false
      }
    ]
  }"

USER_ROLE_TABLE="
    vladas1 role1 role2
    vladas2 role3 role2
"

# Get access token
ACCESS_TOKEN=$(curl -s -X POST \
    "${KEYCLOAK_URL}/realms/master/protocol/openid-connect/token" \
    -H "Content-Type: application/x-www-form-urlencoded" \
    -d "client_id=admin-cli" \
    -d "username=admin" \
    -d "password=admin" \
    -d "grant_type=password" | jq -r .access_token)

while read -r line; do
  # Split the line into an array
  read -ra values <<< "$line"

  # Extract user name
  USER_NAME="${values[0]}"

  # Create the user JSON
  USER_JSON="${USER_TEMPLATE//#user_name_token#/$USER_NAME}"

  echo -e "user json\n"$USER_JSON

  # Create the user
  USER_RESPONSE=$(curl -i -s -X POST \
    "${KEYCLOAK_URL}/admin/realms/${REALM_NAME}/users" \
    -H "Content-Type: application/json" \
    -H "Authorization: Bearer ${ACCESS_TOKEN}" \
    -d "$USER_JSON")

  echo -e "user response\n"$USER_RESPONSE

  USER_ID=$(curl -s -X GET \
    "${KEYCLOAK_URL}/admin/realms/${REALM_NAME}/users?username=${USER_NAME}" \
    -H "Content-Type: application/json" \
    -H "Authorization: Bearer ${ACCESS_TOKEN}" | jq -r '.[0].id')

  echo -e "user id\n"$USER_ID

  # Extract roles from the array starting from index 1
  ROLES_ARRAY=("${values[@]:1}")

  echo -e "roles array\n"$ROLES_ARRAY

  for ROLE in "${ROLES_ARRAY[@]}"; do
    # Create the role
    ROLE_RESPONSE=$(curl -i -s -X POST \
      "${KEYCLOAK_URL}/admin/realms/${REALM_NAME}/roles" \
      -H "Content-Type: application/json" \
      -H "Authorization: Bearer ${ACCESS_TOKEN}" \
      -d "{\"name\": \"$ROLE\"}")

    echo -e "role add response\n"$ROLE_RESPONSE

    ROLE_ID=$(curl -s -X GET \
    "${KEYCLOAK_URL}/admin/realms/${REALM_NAME}/roles?search=${ROLE}" \
    -H "Content-Type: application/json" \
    -H "Authorization: Bearer ${ACCESS_TOKEN}" | jq -r '.[0].id')

    echo -e "role id is "$ROLE_ID

    # assign roles
    RESPONSE=$(curl -s -X POST \
      "${KEYCLOAK_URL}/admin/realms/${REALM_NAME}/users/${USER_ID}/role-mappings/realm" \
      -H "Content-Type: application/json" \
      -H "Authorization: Bearer ${ACCESS_TOKEN}" \
      -d "[{\"name\": \"$ROLE\", \"id\":\"$ROLE_ID\"}]")

    echo -e $RESPONSE
  done
done <<< "$USER_ROLE_TABLE"