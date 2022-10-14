FROM jrottenberg/ffmpeg:5.1-alpine
WORKDIR /app
ENTRYPOINT [ "convert_video.sh" ]