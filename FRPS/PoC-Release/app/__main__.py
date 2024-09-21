import sys
import os

sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))

from app import create_app
import glob

HOST = os.getenv("FLASK_RUN_HOST")
if not HOST:
    HOST = "0.0.0.0"

PORT = os.getenv("FLASK_RUN_PORT")
if not PORT:
    PORT = "8080"

if not PORT.isalnum():
    print("FLASK_RUN_PORT must be a number !", file=sys.stderr)
    sys.exit(1)

PORT = int(PORT)

app = create_app()

print(dir(app))

watch_file = []
watch_file.extend(glob.glob("./app/**/*", recursive=True))

app.run(host=HOST, port=PORT, debug=True, extra_files=watch_file)