# Mushroom App - Automation

In this tutorial we will put all the components we built for our Mushroom App together. We will then apply Continuous Integration and Continuous Deployment (CI/CD) methods to test, execute, monitor, deploy, and scale these components. All of these steps will be automated based on workflow using GitHub Actions. Here are the components we have built for our Mushroom App:

* Data Collector: Scraps image from the internet and stores them into a `raw` folder.
* Data Processor: Checks images for duplicates, validate image formats, converts images to TF Records
* Model Training: Submits training jobs to Vertex AI to train models
* Model Deploy: Updates trained models signature with preprocessing logic added to it. Upload model to Vertex AI Model Registry and Deploy model to Model Endpoints.
* API Service: FastAPI service to expose APIs to the frontend.
* Frontend:  React Frontend for the mushroom app.
<img src="images/ml-pipeline.png"  width="400">

## Prerequisites
* Have Docker installed
* Cloned this repository to your local machine with a terminal up and running
* Check that your Docker is running with the following command

`docker run hello-world`

### Install Docker 
Install `Docker Desktop`

#### Ensure Docker Memory
- To make sure we can run multiple container go to Docker>Preferences>Resources and in "Memory" make sure you have selected > 4GB

### Install VSCode  
Follow the [instructions](https://code.visualstudio.com/download) for your operating system.  
If you already have a preferred text editor, skip this step.  

## Setup Environments
In this tutorial we will setup a container to manage:
- Building docker images.
- Uploading Docker images ot GCR.
- Running ML jobs using Vertex AI pipelines.
- Deploying app containers to Kubernetes clusters

### Clone the github repository
- Clone repo from [here](https://github.com/dlops-io/mushroom-app-v4)

### API's to enable in GCP for Project
Search for each of these in the GCP search bar and click enable to enable these API's
* Vertex AI API
* Compute Engine API
* Service Usage API
* Cloud Resource Manager API
* Google Container Registry API
* Kubernetes Engine API

## Continuous Integration and Continuous Deployment (CI/CD) 

Continuous Integration and Continuous Delivery/Continuous Deployment (CI/CD) is a set of principles and practices in software development and operations aimed at frequently delivering code changes reliably and efficiently.

**Continuous Integration (CI):** Practice of regularly integrating code changes from multiple developers into a shared repository. The main goal is to detect integration issues early by automatically testing and building the code whenever a change is made. CI ensures that the codebase is always in a functional state.

**Continuous Delivery (CD):** This is an extension of CI, focusing on automating the delivery of applications to various environments, like staging or testing, in a way that they can be released to production at any time. The emphasis is on ensuring that the software can be deployed to a production environment and is ready for release but does not necessarily release it to the end users automatically.

**Continuous Deployment (CD):** This takes the automation a step further by automatically deploying code changes to production after they pass all the automated tests in the deployment pipeline. This approach allows for a rapid release cycle and is commonly used in scenarios where rapid deployment and iteration are essential.
