# Test Formatter for JEE

This application takes in a zip file (which is obtained from the pdf using a website) containing the LaTeX of the paper as well as images in it. We will explain why we have chosen this format, as well as why we cannot do with uploading a PDF directly.

## PDF to LaTeX

The first part of the problem statement requires us to extract the text out of the PDF of the question paper. Now, many of the questions, especially those in mathematics, have complex equations which cannot be captured easily in a direct PDF to text conversion. Therefore, we decided that instead of converting to text, we will convert the PDF to LaTeX.

Now, for converting to LaTeX there are various free online websites and APIs available, but mostly all of them have a very low accuracy of conversion. The format is messed up, and it is nearly impossible to do any further text processing it.
