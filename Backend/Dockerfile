# Build Stage
FROM eclipse-temurin:17.0.5_8-jdk-ubi9-minimal AS build
WORKDIR /workspace/app

COPY mvnw .
COPY .mvn .mvn
COPY pom.xml .
COPY src src

RUN ./mvnw install -DskipTests

# Execution Stage
FROM eclipse-temurin:17.0.5_8-jre-ubi9-minimal

RUN mkdir monasCI
WORKDIR /monasCI

COPY --from=build /workspace/app/target/MonasCI-1.0.0.jar ./target/MonasCI-1.0.0.jar

EXPOSE 8080

ENTRYPOINT ["java", "-jar", "./target/MonasCI-1.0.0.jar"]