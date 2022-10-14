FROM jrottenberg/ffmpeg:4.4-alpine
WORKDIR /app
ENTRYPOINT [ "convert_video.sh" ]