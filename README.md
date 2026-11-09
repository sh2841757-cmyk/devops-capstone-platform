# End-to-End DevOps Automation Platform

A learning-focused DevOps capstone demonstrating CI, containerization, deployment
automation, orchestration, and monitoring.

## Requirements
- Git
- Docker Engine and Docker Compose plugin
- Node.js 22+ and npm (for running tests outside Docker)
- Optional: Jenkins, kubectl + a local Kubernetes cluster, Ansible

## Quick start (local)
```bash
git clone https://github.com/sh2841757-cmyk/devops-capstone-platform
cd devops-capstone-platform
docker compose up --build -d
```

Open:
- App: http://localhost:3000
- Health: http://localhost:3000/health
- Metrics: http://localhost:3000/metrics
- Prometheus: http://localhost:9090
- Grafana: http://localhost:3001 (initial demo login: admin / change-this-password)

Change the Grafana password immediately, even for a local demo.

Stop:
```bash
docker compose down
```

## Run tests
```bash
cd app
npm install
npm test
```

## Kubernetes (optional)
Build the image in the same Docker environment used by your local cluster:
```bash
docker build -t devops-capstone-app:1.0.0 ./app
kubectl apply -f kubernetes/deployment.yaml
kubectl get pods,services
kubectl port-forward service/devops-capstone-service 8080:80
```
Then visit http://localhost:8080/health. For Minikube or Kind, follow that tool's
image-loading instructions if the cluster cannot see your local Docker image.

## Ansible (optional)
Install Ansible and the Docker collection:
```bash
ansible-galaxy collection install community.docker
ansible-playbook -i ansible/inventory.ini ansible/deploy.yml
```

## CI/CD
- GitHub Actions workflow: `.github/workflows/ci-cd.yml`
- Jenkins pipeline: `Jenkinsfile`

GitHub Actions tests pull requests and pushes to `main`, then builds a Docker image
for pushes to `main`. It does not publish the image or deploy to a cloud account.

## Suggested GitHub setup
1. Create a new **public** repository named `devops-capstone-platform`.
2. Upload all project files to the repository root.
3. Push the `main` branch.
4. Open the **Actions** tab and verify the workflow succeeds.
5. Run the project locally and capture genuine evidence.
6. Complete the report with your own test results and screenshots.

## Skillfyme submission
Use the submission instructions on the Skillfyme course page. Include the repository
URL and project report. Ask Skillfyme whether this project meets its current capstone
rubric and whether the issued certificate title explicitly contains “DevOps”.

## Important
This is a starter capstone, not a claim of completed deployment. You must run the
steps, fix environment-specific issues, add your own screenshots/results, and explain
the architecture in your own words. Do not upload secrets or private data.
