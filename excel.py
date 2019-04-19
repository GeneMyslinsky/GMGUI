import xlwings as xw
import os
from pathlib import Path



def GFN():
    dir = os.getcwd()
    for file in Path(dir).glob('**/gmgui.xlsx'):
        return str(file).replace("/","\\")

vgfn = GFN()
print(GFN())
wb = xw.Book(GFN())