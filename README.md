# Kubernetes Deployment

<!--toc:start-->

- [Kubernetes Deployment](#kubernetes-deployment)
  - [Secrets in Kubernetes](#secrets-in-kubernetes)
  - [Deploying to Google Cloud](#deploying-to-google-cloud)
  <!--toc:end-->

## Secrets in Kubernetes

To create secrets, run the following command:

```bash
kuebctl create secret generic <secret-name> --from-literal=<key>=<value>
kubectl creatre secret generic pgpassword --from-literal=POSTGRES_PASSWORD=supersecret
```

## Deploying to Google Cloud

Steps to deploy to the google cloud:
a) Create google cloud project `multi-k8s`
b) Enable the Kubernetes Engine API
d) Create a kubernetes cluster named `multi-k8s-cluster` with standard cluster mode
