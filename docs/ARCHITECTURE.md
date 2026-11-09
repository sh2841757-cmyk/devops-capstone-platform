# Architecture

```text
Developer
   |
   v
GitHub repository
   |
   v
GitHub Actions / Jenkins
   |-- install dependencies
   |-- run automated tests
   |-- build Docker image
   v
Container image
   |--------------------|
   v                    v
Docker Compose       Kubernetes
   |
   +--> Node.js application (/health, /ready, /metrics)
              |
              v
         Prometheus
              |
              v
           Grafana
```

## Design decisions
- The sample service is stateless and exposes health/readiness endpoints.
- CI runs tests before building the container image.
- Docker Compose is the low-cost local demonstration environment.
- Kubernetes manifests demonstrate replicas, service discovery, probes, and resource limits.
- Prometheus scrapes application metrics; Grafana visualizes them.
- Jenkinsfile demonstrates an alternative CI pipeline.
- Ansible demonstrates repeatable local deployment.
