import eel
import time
import sys
import tkinter as tk
from tkinter import filedialog

root = tk.Tk()
root.withdraw()

eel.init('PyGUI Project/GMGUI/web2')

myop = {
    'mode': "chrome-app",  # or "chrome-app",
    'host': 'localhost',
    'port': 8081,
    'chromeFlags': ["--window-size=860,600"]}


### EXAMPLE FOR USING A PY FUNC IN JS AND RETURNING TO JS ###
@eel.expose
def getTime():
    return time.strftime('%c')


###############################################################

### CLOSING THE APP ####################
@eel.expose
def tkfile():
    file_path = filedialog.askopenfilename()
    strvar = "LOADED: " + str(file_path)
    if len(file_path) == 0:
        eel.JSCX("bfile", "NO FILE SELECTED", "btn btn-warning fwide")
    else:
        eel.JSCX("bfile", strvar, "btn btn-success fwide")


@eel.expose
def closeapp():
    print("REQUESTED CLOSE FROM JS")
    sys.exit()


def returnjs(n):
    print("RETURNED:" + n)
    return n


@eel.expose
def jsprint(arg):
    JSreturn = str(arg)
    print("JS: " + str(arg))
    return JSreturn


##########################
### writing to table #####
def JS_ClearTable():
    eel.ClearTable()


def JS_NewRow(d1, d2, d3, jtype):
    eel.NewRow(d1, d2, d3, str(time.strftime('%H:%M:%S')), jtype)


@eel.expose
def JS_testlog():
    JS_NewRow("1", "Blue Label", "info", "info")
    JS_NewRow("2", "Yellow Label", "warning", "warning")
    JS_NewRow("3", "Red Label", "danger", "danger")
    JS_NewRow("4", "Green Label", "success", "success")


#### CALLBACK FUNCTION ##
#### IMPORTANT ##########
@eel.expose
def CALLBACK(htmlid):
    n = eel.FORWARD(htmlid)()
    print("CALLBACK:" + htmlid + " | " + n)


eel.start('main.html', options=myop, block=False)

print("STARTED CHROME")
while True:
    eel.sleep(1)