
### build your docker image

 docker build . -t moviedomfo/catu


### Next, run the image

docker run -p 49160:8080 -d moviedomfo/catu


# Get container ID
$ docker ps

# Print app output
$ docker logs <container id>

# Example
Running on http://localhost:8080