import glob

def read_files(directory):
    files = glob.glob(f"{directory}*.json")

    text = ""
    print(files)
    for file in files:
        with open(file, "r") as fh:
            text += fh.read()

    return text.replace('\n][', ',')

combined = "export const questions_list = " + read_files("../output/")
print(combined)
with open("../src/Questions.js", "w") as fh:
    fh.write(combined)
