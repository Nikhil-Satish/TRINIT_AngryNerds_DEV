import subprocess
import re
import sys
import json

def capture_command_output(command):
    result = subprocess.run(command, capture_output=True, text=True, shell=True)
    output = result.stdout.strip()
    return output

def trim_output(questions):
    new_questions = []
    for q in questions:
        tmp = q.strip("\n").strip(r"\\")
        new_questions.append(tmp)
    return new_questions

def get_question_option_answer_from_text(file_url):
    command = f"cat {file_url} | awk '/begin{{enumerate}}/,/Ans/'"
    text = capture_command_output(command).split("\\begin{enumerate}")[1:]
    return trim_output(text)

def convert_text_to_tags(question_paper):
    text = r"\\begin{center}\n\\includegraphics.*{(.*)}\n\\end{center}"
    result = r"<img src='images/\1' alt='question \1' class='question' />"

    for question_option_answer in question_paper:
        question_option_answer['question'] = re.sub(text, result, question_option_answer['question'])

        for i, option in enumerate(question_option_answer['options']):
            temp = re.sub(text, result, option)
            question_option_answer['options'][i] = f"<Latex>{{\"{temp}\"}}</Latex>"
    
def build_question_paper(file_url):
    question_paper = []
    text = get_question_option_answer_from_text(file_url)

    for qa in text:
        # print(qa)
        question_option_answer = { 
            "question": "",
            "options": [],
            "answer": qa.split("\n")[-1][5:].strip("(").strip(")")
        }
        for i, line in enumerate(re.split("\(\d\)\s", qa)):
            tmp = line.strip().strip("\n").rstrip(r"\\")
            tmp = tmp.replace(r"\end{enumerate}", "")

            if i == 0:
                tmp = tmp[tmp.index(r"\item"):].replace(r"\item ", "")
                tmp = re.sub("Ans.*", "", tmp)
                question_option_answer['question'] = tmp

            if 1 <= i <= 4:
                tmp = tmp.split("Ans")[0].strip("\n")
                tmp = tmp.split(r"\end{enumerate}")[0].strip("\n")

                # if not re.match("^\(\d\)", tmp):
                #     continue

                question_option_answer['options'].append(tmp)

        question_paper.append(question_option_answer)

    return question_paper

paper = build_question_paper(sys.argv[1])
convert_text_to_tags(paper)

json_paper = json.dumps(paper, indent=2)

with open(f"./output/{sys.argv[1].split('/')[-1][:-3]}json", 'w') as fh:
    fh.write(json_paper)
