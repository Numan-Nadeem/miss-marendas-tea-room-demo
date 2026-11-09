#!/usr/bin/env python3
"""Deploy the static Next.js export in out/ to Vercel via the MCP server.
Modeled on ~/workspace/demos/deli-802/deploy.py. Uploads every file under
out/ (paths relative to out/), then creates a production deployment.
Writes deploy-result.json next to this script's base dir.
"""
import base64, hashlib, json, os, subprocess, sys

BASE = sys.argv[1]          # project dir (contains out/)
PROJ = sys.argv[2]          # vercel project name
OUT = os.path.join(BASE, "out")

def call(tool, args):
    p = subprocess.run(["/opt/hatch/bin/vercel", "call-tool", "--name", tool,
                        "--arguments-json", json.dumps(args)],
                       capture_output=True, text=True, timeout=300)
    out = p.stdout.strip()
    try:
        d = json.loads(out)
        txt = d["result"]["content"][0]["text"]
        return json.loads(txt)
    except Exception:
        print("RAW OUTPUT:", out[:2000], file=sys.stderr)
        print("STDERR:", p.stderr[:2000], file=sys.stderr)
        raise

files = []
for root, _dirs, names in os.walk(OUT):
    for n in names:
        full = os.path.join(root, n)
        rel = os.path.relpath(full, OUT)
        files.append((rel, full))
files.sort()
print(f"{len(files)} files to upload")

uploaded = []
for rel, full in files:
    data = open(full, "rb").read()
    sha = hashlib.sha1(data).hexdigest()
    b64 = base64.b64encode(data).decode()
    print(f"uploading {rel} ({len(data)} bytes)...", flush=True)
    res = call("upload_file", {"contentLength": len(data), "requestBody": b64, "xVercelDigest": sha})
    uploaded.append({"file": rel, "sha": sha, "size": len(data)})

print("creating deployment...", flush=True)
res = call("create_deployment", {
    "requestBody": {
        "name": PROJ,
        "project": PROJ,
        "target": "production",
        "files": uploaded,
    },
    "skipAutoDetectionConfirmation": "1",
})
print(json.dumps(res, indent=2)[:4000])
with open(os.path.join(BASE, "deploy-result.json"), "w") as f:
    json.dump(res, f, indent=2)
print("wrote deploy-result.json")
