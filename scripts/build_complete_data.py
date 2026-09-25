import json

with open('all_playlist_videos.json') as f:
    videos = json.load(f)

with open('lectures_raw.json') as f:
    raw_list = json.load(f)
    raw_map = {x['id']: x for x in raw_list}

print(f"Total videos: {len(videos)}")
