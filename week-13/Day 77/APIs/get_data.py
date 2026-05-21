## Example
import requests
get_requests = requests.get('http://127.0.0.1:8000/random')
print(get_requests.json())