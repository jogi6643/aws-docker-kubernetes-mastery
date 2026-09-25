import json, re

with open('all_playlist_videos.json', 'r', encoding='utf-8') as f:
    all_videos = json.load(f)

with open('lectures_raw.json', 'r', encoding='utf-8') as f:
    raw_dict = {item['id']: item for item in json.load(f)}

print(f"Loaded {len(all_videos)} playlist videos and {len(raw_dict)} raw metadata records.")
