FROM jrottenberg/ffmpeg:9.1-alpine
WORKDIR /app
ENTRYPOINT [ "convert_video.sh" ]