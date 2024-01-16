# automated-example-app

This app is a personal e-commernce project in progress, but i thoght I would share the code and whatever other bits the other people might fins useful. 

At the moment majority of the time was spent to create a docker-compose file that would install Keycloak and Strapi in a fully automated way and provide simple users and permission mappings that would allow any developer to just pick up and run with it. 

Strapi is a headless CMS solution that has some simple collections with images for a UI to consume. This is so that if any changes need to be made to the layout, product collections etc no redeployment of the application would be needed. 

UI is written in Angular and uses PrimeNG for styling. It currently is only integrated with Keycloak for login and Strapi for the homepage layout. 

The services currently only have an example of how a Java app could be integrated with Keycloak for the authentication and authorisation for specific endpoints. The second service is a CRUD service for product management in e-commerce. 

In a longer run I'm looking at adding a discovery service for scalability and Redis for some of the Hibernate L2 caching purposes. 

Stay tuned ...
