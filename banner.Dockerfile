FROM jrottenberg/ffmpeg:6.0-alpine
WORKDIR /app
ENTRYPOINT [ "convert_video.sh" ]