# Kubernetes Node.js Hello World App

## Docker

To build the hello world container :
```
$ make build
```

To start the docker image in background, run :
```
$ make run
```

Test it, with :
```
$ make test
```

## Kubernetes

Go to the `kubernetes/` directory.

### 1. Start minikube
```
$ minikube start
$ minikube addons enable ingress
```

### 2. Create/Apply kube resources
```
$ kubectl apply -f deployment.yaml
$ kubectl apply -f service.yaml
$ kubectl apply -f config-map.yaml
$ kubectl apply -f ingress.yaml
```

### 3. Test it
```bash
$ kubectl port-forward service/service-helloworld-app 8000:8000
$ minikube service service-helloworld-app --url
$ echo "192.168.49.2 myapp.local" >> /etc/hosts
$ curl myapp.local
```

## Reference

- [nodejs-docker-webapp](https://nodejs.org/en/docs/guides/nodejs-docker-webapp/)