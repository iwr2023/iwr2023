FROM jrottenberg/ffmpeg:8.1-alpine
WORKDIR /app
ENTRYPOINT [ "convert_video.sh" ]