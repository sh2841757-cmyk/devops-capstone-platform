# Architecture

## Project Overview

This project demonstrates a DevOps workflow for a Node.js application.

## Architecture Flow

Developer
   |
   v
GitHub Repository
   |
   v
GitHub Actions
   |
   v
Automated Tests
   |
   v
Docker Image
   |
   +------> Docker Compose
   |
   +------> Kubernetes
   |
   v
Node.js Application
   |
   v
Prometheus
   |
   v
Grafana

## Main Components

- GitHub: Source code management.
- GitHub Actions: CI/CD automation.
- Docker: Application containerization.
- Kubernetes: Container orchestration.
- Prometheus: Metrics collection.
- Grafana: Metrics visualization.
- Jenkins: Alternative CI pipeline.
- Ansible: Configuration automation.
- Terraform: Infrastructure as Code.

## Design Decisions

- The application is designed to be stateless.
- Automated tests run before Docker image build.
- Docker Compose provides a local demonstration environment.
- Kubernetes manifests demonstrate deployment concepts.
- Prometheus and Grafana provide monitoring.

## Limitations

This is a learning-focused capstone. Production deployment and execution of all automation tools must be verified separately.
