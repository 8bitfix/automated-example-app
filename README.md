# Automated e-commerce platform development environment setup

This app is a personal e-commerce project in progress, but i thought I would share the code and whatever other bits that other people might find useful. 

At the moment majority of the time was spent on creating a docker-compose file that would install Keycloak and Strapi in a fully automated way and provide some simple users and permission mappings that would allow any developer to just pick up and run with it. 

Strapi is a headless CMS solution that has some simple collections with images for a UI to consume. This is so that no redeployment of the application would be needed if any changes are made to the layout, product collections etc. 

UI is written in Angular and uses PrimeNG for styling. It currently is only integrated with Keycloak for login and Strapi for the homepage layout. 

The services currently only have an example of how a Java app could be integrated with Keycloak for the authentication and authorisation for specific endpoints. The second service is a CRUD service for product management in e-commerce. 

In a longer run I'm looking at adding a discovery service for scalability and Redis for some of the Hibernate L2 caching purposes. There other plans for business logic as well as architecture. But maybe not all of them going to get done at once. 

Stay tuned ...
