FROM jrottenberg/ffmpeg:9.0-alpine
WORKDIR /app
ENTRYPOINT [ "convert_video.sh" ]