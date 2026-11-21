import sys,glob,os
from PIL import Image
D="/tmp/claude-tool-results/5268cb48-6506-5a77-b089-a7457f1becd9/"
slug=sys.argv[1]; os.makedirs(f"{slug}/img",exist_ok=True)
for a in sys.argv[2:]:
    n,b=a.split("=");f=glob.glob(D+"mcp-Google_Drive-blob-*"+b+".*")[0]
    im=Image.open(f).convert("RGB");w,h=im.size
    if n=="icon": im.resize((256,256),Image.LANCZOS).save(f"{slug}/img/icon.png",optimize=True)
    else: im.resize((540,round(540*h/w)),Image.LANCZOS).save(f"{slug}/img/{n}.webp",quality=80)
