import os
import subprocess
import sys

for dirname, _, filenames in os.walk('./zip'):
    if len(filenames) == 0:
        continue

    if filenames[0].split('.')[-1] == "tex":
        command = f"mv {dirname}/{filenames[0]} ./output/{sys.argv[1]}.tex"
        subprocess.run(command, capture_output=True, text=True, shell=True)

    if filenames[0].split('.')[-1] == "jpg":
        for file_ in filenames:
            file = file_.replace('(', '\(').replace(')', '\)')
            command = f"mv {dirname}/{file} ./src/images/"
            subprocess.run(command, capture_output=True, text=True, shell=True)
