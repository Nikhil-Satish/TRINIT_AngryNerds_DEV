import subprocess
import sys

def capture_command_output(command):
    result = subprocess.run(command, capture_output=True, text=True, shell=True)
    output = result.stdout.strip()
    return output

def trim_output(questions):
    new_questions = []
    for q in questions:
        idx = q.index("\item")
        tmp = q[idx+6:].strip("\\")
        new_questions.append(tmp)
    return new_questions

command = f"cat {sys.argv[1]} | awk \"/begin{{enumerate}}/,/end{{enumerate}}/\" | grep '\\item'"
questions = trim_output(capture_command_output(command).split("\n"))

for q in questions:
    print(q, "\n")
