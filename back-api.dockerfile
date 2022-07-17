FROM openjdk:8-alpine
add back-api/target/*.jar app.jar
ENTRYPOINT ["java","-jar","app.jar"]
