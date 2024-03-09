import glob

def read_files(directory):
    files = glob.glob(f"{directory}*.json")

    text = ""
    for file in files:
        with open(file, "r") as fh:
            text += fh.read()

    return text.replace('\n][', ',')

combined = read_files("../output/")
with open("../output/questions.json", "w") as fh:
    fh.write(combined)
