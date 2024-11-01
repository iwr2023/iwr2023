FROM jrottenberg/ffmpeg:7.1-alpine
WORKDIR /app
ENTRYPOINT [ "convert_video.sh" ]