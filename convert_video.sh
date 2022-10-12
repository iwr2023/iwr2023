# H264
./ffmpeg -y -i ./assets/video/banner_source.mp4 -c:v libx264 -crf 23 -pix_fmt yuv420p -color_primaries 1 -color_trc 1 -colorspace 1 -movflags +faststart -an ./assets/video/banner_h264.mp4
# H265
./ffmpeg -y -i ./assets/video/banner_source.mp4 -c:v libx265 -crf 23 -tag:v hvc1 -pix_fmt yuv420p -color_primaries 1 -color_trc 1 -colorspace 1 -movflags +faststart -an ./assets/video/banner_h265.mp4
# VP9
./ffmpeg -y -i ./assets/video/banner_source.mp4 -c:v libvpx-vp9 -crf 30 -speed 3 -pix_fmt yuv420p -color_primaries 1 -color_trc 1 -colorspace 1 -movflags +faststart -an ./assets/video/banner_vp9.webm
# AV1
./ffmpeg -y -i ./assets/video/banner_source.mp4 -c:v libsvtav1 -crf 50 -b:v 0 -movflags faststart -an ./assets/video/banner_av1.mp4