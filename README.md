# Test Formatter for JEE

## Video Link
[Click here](https://drive.google.com/file/d/1guGRe-9-HXKDCrGpuvjxPeia6ak_4X5r/view?usp=drive_link)

## Introduction

This application takes in a zip file (which is obtained from the pdf using a website) containing the LaTeX of the paper as well as images in it. We will explain why we have chosen this format, as well as why we cannot do with uploading a PDF directly.

## PDF to LaTeX

The first part of the problem statement requires us to extract the text out of the PDF of the question paper. Now, many of the questions, especially those in mathematics, have complex equations which cannot be captured easily in a direct PDF to text conversion. Therefore, we decided that instead of converting to text, we will convert the PDF to LaTeX.

Now, for converting to LaTeX there are various free online websites and APIs available, but mostly all of them have a very low accuracy of conversion. The format is messed up, and it is nearly impossible to do any further text processing with it.

We found one of the only good options at MathPix, but unfortunately their API is behind a paywall. So the first step of converting the pdf to latex could not be automated.

## The Frontend

The frontend of the app was developed using ReactJS. Once the zip file is uploaded, the backend outputs a Question.js file which contains an array of questions (and in this case, along with the answers to evaluate). React-Latex has been used to render the latex content onto the display. The user can navigate back and forward and his answers will be recorded on clicking 'Save and Next'. There is a timer that auto-submits once the duration expires. Upon submission, the user will be redirected to the Analysis page where they can find their score and basic analytics. 

MathPix returns the output in a zip file containing the latex as well as the images extracted from the pdf, so our entry point is this zip. From there, we have automated the entire further process.

## LaTeX to JSON

The next part is converting the Latex to a format that can be used by the frontend. We chose JSON for this purpose. We extract the necessary information out of the latex file and store it in the following format:

```
[
  {
    "question": "XYZ",
    "options": ["A", "B", "C", "D"],
    "answer": "1"
  }
]
```
for every question. We then do some further processing to combine the json obtained for each question paper into one single quiz. This file is then read by the frontend while displaying the questions.

## Automation
This whole process of conversion from zip to json is automated by [automate](backend/automate). This file is itself called in the file uploading step in [index.js](NodeBackend/index.js). In this way, all the user needs to do is to upload the zip of the latex and the images, and they get a mock quiz based on it.
