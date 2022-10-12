FROM jrottenberg/ffmpeg:4.1-alpine
WORKDIR /app
ENTRYPOINT [ "convert_video.sh" ]