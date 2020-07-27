#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
This experiment was created using PsychoPy3 Experiment Builder (v3.2.4),
    on April 10, 2020, at 14:42
If you publish work using this script the most relevant publication is:

    Peirce J, Gray JR, Simpson S, MacAskill M, Höchenberger R, Sogo H, Kastman E, Lindeløv JK. (2019) 
        PsychoPy2: Experiments in behavior made easy Behav Res 51: 195. 
        https://doi.org/10.3758/s13428-018-01193-y

"""

from __future__ import absolute_import, division

from psychopy import locale_setup
from psychopy import prefs
from psychopy import sound, gui, visual, core, data, event, logging, clock
from psychopy.constants import (NOT_STARTED, STARTED, PLAYING, PAUSED,
                                STOPPED, FINISHED, PRESSED, RELEASED, FOREVER)

import numpy as np  # whole numpy lib is available, prepend 'np.'
from numpy import (sin, cos, tan, log, log10, pi, average,
                   sqrt, std, deg2rad, rad2deg, linspace, asarray)
from numpy.random import random, randint, normal, shuffle
import os  # handy system and path functions
import sys  # to get file system encoding

from psychopy.hardware import keyboard

# Ensure that relative paths start from the same directory as this script
_thisDir = os.path.dirname(os.path.abspath(__file__))
os.chdir(_thisDir)

# Store info about the experiment session
psychopyVersion = '3.2.4'
expName = 'exp'  # from the Builder filename that created this script
expInfo = {'participant': '', 'Block Type': '2'}
dlg = gui.DlgFromDict(dictionary=expInfo, sortKeys=False, title=expName)
if dlg.OK == False:
    core.quit()  # user pressed cancel
expInfo['date'] = data.getDateStr()  # add a simple timestamp
expInfo['expName'] = expName
expInfo['psychopyVersion'] = psychopyVersion

# Data file name stem = absolute path + name; later add .psyexp, .csv, .log, etc
filename = _thisDir + os.sep + u'data/%s_%s_%s' % (expInfo['participant'], expName, expInfo['date'])

# An ExperimentHandler isn't essential but helps with data saving
thisExp = data.ExperimentHandler(name=expName, version='',
    extraInfo=expInfo, runtimeInfo=None,
    originPath='C:\\Users\\dougk\\Desktop\\SpatialMem11.12.19\\spatialMemB2.py',
    savePickle=True, saveWideText=True,
    dataFileName=filename)
# save a log file for detail verbose info
logFile = logging.LogFile(filename+'.log', level=logging.EXP)
logging.console.setLevel(logging.WARNING)  # this outputs to the screen, not a file

endExpNow = False  # flag for 'escape' or other condition => quit the exp
frameTolerance = 0.001  # how close to onset before 'same' frame

# Start Code - component code to be run before the window creation

# Setup the Window
win = visual.Window(
    size=[1280, 720], fullscr=True, screen=0, 
    winType='pyglet', allowGUI=False, allowStencil=False,
    monitor='testMonitor', color=[0,0,0], colorSpace='rgb',
    blendMode='avg', useFBO=True, 
    units='height')
# store frame rate of monitor if we can measure it
expInfo['frameRate'] = win.getActualFrameRate()
if expInfo['frameRate'] != None:
    frameDur = 1.0 / round(expInfo['frameRate'])
else:
    frameDur = 1.0 / 60.0  # could not measure, so guess

# create a default keyboard (e.g. to check for escape)
defaultKeyboard = keyboard.Keyboard()

# Initialize components for Routine "initCode"
initCodeClock = core.Clock()
import random, csv, os, codecs

path = 'C:/Users/dougk/Desktop/SpatialMem11.12.19'
os.chdir(path)
print("current working directory", os.getcwd())

#set random seed
random.seed()

#define rest of the variables
random.random()
rightPos = None
midPos = None
leftPos = None
firstPos = None
secondPos = None
thirdPos = None
TestQuestion = None
MouseResp = None
trialType = None
methodAns = None
nextTrial = None
methodCheck = None
retrievalImage = None
response = None
corrAns = None
decResponse = None
encodingType = None
retrievalOld = []
retrievalNew = []
numEncoding = None
numRetrieval = None 
numItems = None 

# Initialize components for Routine "trial"
trialClock = core.Clock()
Instructions = visual.TextStim(win=win, name='Instructions',
    text='In this task you will review sets of objects in triplets. Your task is to pay attention to where and when these objects appear. Press the spacebar to begin',
    font='Arial',
    pos=(0, 0), height=0.03, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);
start = keyboard.Keyboard()

# Initialize components for Routine "first_view"
first_viewClock = core.Clock()
eTrials = 0
Triplet1 = visual.ImageStim(
    win=win,
    name='Triplet1', 
    image='sin', mask=None,
    ori=0, pos=[0,0], size=(0.3, 0.3),
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=128, interpolate=True, depth=-1.0)
Triplet2 = visual.ImageStim(
    win=win,
    name='Triplet2', 
    image='sin', mask=None,
    ori=0, pos=[0,0], size=(0.3, 0.3),
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=128, interpolate=True, depth=-2.0)
Triplet3 = visual.ImageStim(
    win=win,
    name='Triplet3', 
    image='sin', mask=None,
    ori=0, pos=[0,0], size=(0.3, 0.3),
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=128, interpolate=True, depth=-3.0)

# Initialize components for Routine "mask"
maskClock = core.Clock()
Mask = visual.ImageStim(
    win=win,
    name='Mask', 
    image='images/Mask.png', mask=None,
    ori=0, pos=(0, 0), size=(1.5, 0.5),
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=128, interpolate=True, depth=0.0)

# Initialize components for Routine "second_view"
second_viewClock = core.Clock()
img1 = visual.ImageStim(
    win=win,
    name='img1', 
    image='sin', mask=None,
    ori=0, pos=[0,0], size=(0.3, 0.3),
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=128, interpolate=True, depth=-1.0)
img2 = visual.ImageStim(
    win=win,
    name='img2', 
    image='sin', mask=None,
    ori=0, pos=[0,0], size=(0.3, 0.3),
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=128, interpolate=True, depth=-2.0)
img3 = visual.ImageStim(
    win=win,
    name='img3', 
    image='sin', mask=None,
    ori=0, pos=[0,0], size=(0.3, 0.3),
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=128, interpolate=True, depth=-3.0)

# Initialize components for Routine "methodQText"
methodQTextClock = core.Clock()
text_2 = visual.TextStim(win=win, name='text_2',
    text='Was this set same or different as the previous set?',
    font='Arial',
    pos=(0, 0), height=0.03, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);

# Initialize components for Routine "MethodCheck"
MethodCheckClock = core.Clock()
text = visual.TextStim(win=win, name='text',
    text='Was this set same or different as the previous set?',
    font='Arial',
    pos=(0, 0), height=0.03, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-1.0);
sameText = visual.TextStim(win=win, name='sameText',
    text='default text',
    font='Arial',
    pos=(-0.2, -0.3), height=0.03, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-2.0);
diffText = visual.TextStim(win=win, name='diffText',
    text='default text',
    font='Arial',
    pos=(0.2, -0.3), height=0.03, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-3.0);
leftCL = visual.Rect(
    win=win, name='leftCL',
    width=(-0.2, -0.2)[0], height=(-0.2, -0.2)[1],
    ori=0, pos=(-.2, -.3),
    lineWidth=3, lineColor=[1,1,1], lineColorSpace='rgb',
    fillColor=[0,0,0], fillColorSpace='rgb',
    opacity=0.5, depth=-4.0, interpolate=True)
rightCL = visual.Rect(
    win=win, name='rightCL',
    width=(0.2, 0.2)[0], height=(0.2, 0.2)[1],
    ori=0, pos=(0.2, -0.3),
    lineWidth=3, lineColor=[1,1,1], lineColorSpace='rgb',
    fillColor=[0,0,0], fillColorSpace='rgb',
    opacity=0.5, depth=-5.0, interpolate=True)
mouse = event.Mouse(win=win)
x, y = [None, None]
mouse.mouseClock = core.Clock()

# Initialize components for Routine "initRecallPics"
initRecallPicsClock = core.Clock()

# Initialize components for Routine "RetrievalImage"
RetrievalImageClock = core.Clock()
retIMG = visual.ImageStim(
    win=win,
    name='retIMG', 
    image='sin', mask=None,
    ori=0, pos=(0, 0), size=(0.3, 0.3),
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=128, interpolate=True, depth=-1.0)

# Initialize components for Routine "Question1Text"
Question1TextClock = core.Clock()
text_3 = visual.TextStim(win=win, name='text_3',
    text='Is this object old or new?',
    font='Arial',
    pos=(0, 0), height=0.03, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);

# Initialize components for Routine "old_new_q"
old_new_qClock = core.Clock()
question = visual.TextStim(win=win, name='question',
    text='Is this object old or new?',
    font='Arial',
    pos=(0, 0), height=0.03, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-1.0);
oldans = visual.Rect(
    win=win, name='oldans',
    width=(0.2, 0.2)[0], height=(0.2, 0.2)[1],
    ori=0, pos=(-0.2, -0.3),
    lineWidth=3, lineColor=[1,1,1], lineColorSpace='rgb',
    fillColor=[1,1,1], fillColorSpace='rgb',
    opacity=0.5, depth=-2.0, interpolate=True)
newans = visual.Rect(
    win=win, name='newans',
    width=(0.2, 0.2)[0], height=(0.2, 0.2)[1],
    ori=0, pos=(0.2, -0.3),
    lineWidth=3, lineColor=[1,1,1], lineColorSpace='rgb',
    fillColor=[1,1,1], fillColorSpace='rgb',
    opacity=0.5, depth=-3.0, interpolate=True)
old_text = visual.TextStim(win=win, name='old_text',
    text='Old',
    font='Arial',
    pos=(-0.2, -0.3), height=0.03, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-4.0);
new_text = visual.TextStim(win=win, name='new_text',
    text='New',
    font='Arial',
    pos=(0.2, -0.3), height=0.03, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-5.0);
mouse_2 = event.Mouse(win=win)
x, y = [None, None]
mouse_2.mouseClock = core.Clock()

# Initialize components for Routine "Q2Text"
Q2TextClock = core.Clock()
text_4 = visual.TextStim(win=win, name='text_4',
    text='default text',
    font='Arial',
    pos=(0, 0), height=0.03, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-1.0);

# Initialize components for Routine "Decision"
DecisionClock = core.Clock()
decisionQ_2 = visual.TextStim(win=win, name='decisionQ_2',
    text='default text',
    font='Arial',
    pos=(0, 0), height=0.03, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-1.0);
first_left = visual.Rect(
    win=win, name='first_left',
    width=(0.2, 0.2)[0], height=(0.2, 0.2)[1],
    ori=0, pos=(-0.3, -0.3),
    lineWidth=3, lineColor=[1,1,1], lineColorSpace='rgb',
    fillColor=[1,1,1], fillColorSpace='rgb',
    opacity=0.5, depth=-2.0, interpolate=True)
second_middle = visual.Rect(
    win=win, name='second_middle',
    width=(0.2, 0.2)[0], height=(0.2, 0.2)[1],
    ori=0, pos=(0, -0.3),
    lineWidth=3, lineColor=[1,1,1], lineColorSpace='rgb',
    fillColor=[1,1,1], fillColorSpace='rgb',
    opacity=0.5, depth=-3.0, interpolate=True)
third_right = visual.Rect(
    win=win, name='third_right',
    width=(0.2, 0.2)[0], height=(0.2, 0.2)[1],
    ori=0, pos=(0.3, -0.3),
    lineWidth=3, lineColor=[1,1,1], lineColorSpace='rgb',
    fillColor=[1,1,1], fillColorSpace='rgb',
    opacity=0.5, depth=-4.0, interpolate=True)
Ans_1 = visual.TextStim(win=win, name='Ans_1',
    text='default text',
    font='Arial',
    pos=(-0.3, -0.3), height=0.03, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-5.0);
Ans_2 = visual.TextStim(win=win, name='Ans_2',
    text='default text',
    font='Arial',
    pos=(0, -0.3), height=0.03, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-6.0);
Ans_3 = visual.TextStim(win=win, name='Ans_3',
    text='default text',
    font='Arial',
    pos=(0.3, -0.3), height=0.03, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-7.0);
Order_Position_Response = event.Mouse(win=win)
x, y = [None, None]
Order_Position_Response.mouseClock = core.Clock()

# Initialize components for Routine "EndScreen"
EndScreenClock = core.Clock()
end = visual.TextStim(win=win, name='end',
    text='Thank you for participating!',
    font='Arial',
    pos=(0, 0), height=0.03, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);

# Create some handy timers
globalClock = core.Clock()  # to track the time since experiment started
routineTimer = core.CountdownTimer()  # to track time remaining of each (non-slip) routine 

# ------Prepare to start Routine "initCode"-------
# update component parameters for each repeat
import csv, os, codecs

# load in image list
with codecs.open('C:/Users/dougk/Desktop/SpatialMem11.12.19/trialsblock2.csv', 'r', encoding='utf-8-sig') as f:
  reader = csv.reader(f)
  allPics = list(reader)

random.shuffle(allPics)
print(allPics)

with codecs.open('C:/Users/dougk/Desktop/SpatialMem11.12.19/trialtypes.csv', 'r', encoding='utf-8-sig') as f:
  reader = csv.reader(f)
  trialTypes = list(reader)

# how many pics do we actually want?
numItems = 105
numEncoding = 25
numRetrieval = 60


# arrays of stim names
pics = []

# read images from sheet
for rowx in range(numItems):
    
    row = allPics[rowx]
    
    #print(row[0])
    # save each pic to pic array
    pics.append(row[0])

# randomize order of pics
random.shuffle(pics)

# arrays for final stimuli
trialPics = [] 

# create final stimuli list
for i in range(0, numItems, 3):
    
    # make triplet
    trialPics.append(pics[i:i+3]) 

# these triplets will be shown during encoding
encodingPics = trialPics[0:numEncoding]

# this will be the new triplets added at retrieval
newRetrievalPics = trialPics[numEncoding:numEncoding+numRetrieval]

newPics = []
for triplet in newRetrievalPics:
    for pic in triplet:
        newPics.append(pic)

#for randomizing trial orders

trialOrders = []
for rowx in range(numEncoding):

    row = trialTypes[rowx]
    trialOrders.append(row[0])
    random.shuffle(trialOrders)

samePics = []
diffPics = []

# keep track of which components have finished
initCodeComponents = []
for thisComponent in initCodeComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
initCodeClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1
continueRoutine = True

# -------Run Routine "initCode"-------
while continueRoutine:
    # get current time
    t = initCodeClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=initCodeClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in initCodeComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "initCode"-------
for thisComponent in initCodeComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# the Routine "initCode" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# ------Prepare to start Routine "trial"-------
# update component parameters for each repeat
start.keys = []
start.rt = []
# keep track of which components have finished
trialComponents = [Instructions, start]
for thisComponent in trialComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
trialClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1
continueRoutine = True

# -------Run Routine "trial"-------
while continueRoutine:
    # get current time
    t = trialClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=trialClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *Instructions* updates
    if Instructions.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        Instructions.frameNStart = frameN  # exact frame index
        Instructions.tStart = t  # local t and not account for scr refresh
        Instructions.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(Instructions, 'tStartRefresh')  # time at next scr refresh
        Instructions.setAutoDraw(True)
    
    # *start* updates
    waitOnFlip = False
    if start.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        start.frameNStart = frameN  # exact frame index
        start.tStart = t  # local t and not account for scr refresh
        start.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(start, 'tStartRefresh')  # time at next scr refresh
        start.status = STARTED
        # keyboard checking is just starting
    if start.status == STARTED and not waitOnFlip:
        theseKeys = start.getKeys(keyList=['space'], waitRelease=False)
        if len(theseKeys):
            theseKeys = theseKeys[0]  # at least one key was pressed
            
            # check for quit:
            if "escape" == theseKeys:
                endExpNow = True
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in trialComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "trial"-------
for thisComponent in trialComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('Instructions.started', Instructions.tStartRefresh)
thisExp.addData('Instructions.stopped', Instructions.tStopRefresh)
# the Routine "trial" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# set up handler to look after randomisation of conditions etc
EncodingTrials = data.TrialHandler(nReps=numEncoding, method='random', 
    extraInfo=expInfo, originPath=-1,
    trialList=[None],
    seed=None, name='EncodingTrials')
thisExp.addLoop(EncodingTrials)  # add the loop to the experiment
thisEncodingTrial = EncodingTrials.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisEncodingTrial.rgb)
if thisEncodingTrial != None:
    for paramName in thisEncodingTrial:
        exec('{} = thisEncodingTrial[paramName]'.format(paramName))

for thisEncodingTrial in EncodingTrials:
    currentLoop = EncodingTrials
    # abbreviate parameter names if possible (e.g. rgb = thisEncodingTrial.rgb)
    if thisEncodingTrial != None:
        for paramName in thisEncodingTrial:
            exec('{} = thisEncodingTrial[paramName]'.format(paramName))
    
    # ------Prepare to start Routine "first_view"-------
    routineTimer.add(5.500000)
    # update component parameters for each repeat
    import os
    #set images in triplets
    triplet1 = 'images/'+encodingPics[eTrials][0]+'.png'
    triplet2 = 'images/'+encodingPics[eTrials][1]+'.png'
    triplet3 = 'images/'+encodingPics[eTrials][2]+'.png'
    
    leftPos = -0.5, 0.0
    midPos = 0.0, 0.0
    rightPos = 0.5, 0.0
    
    trialType = trialOrders[eTrials]
    
    if trialType == 'LMR':
        firstPos = leftPos
        secondPos = midPos
        thirdPos = rightPos
    elif trialType == 'LRM':
        firstPos = leftPos
        secondPos = rightPos
        thirdPos = midPos
    elif trialType == 'MLR':
        firstPos = midPos
        secondPos = leftPos
        thirdPos = rightPos
    elif trialType == 'RML':
        firstPos = rightPos
        secondPos = midPos
        thirdPos = leftPos
    elif trialType == 'RLM':
        firstPos = rightPos
        secondPos = leftPos
        thirdPos = midPos
    elif trialType == 'MRL':
        firstPos = midPos
        secondPos = rightPos
        thirdPos = leftPos
    
    EncodingTrials.addData ("Trial_Order", trialType)
    Triplet1.setPos(firstPos)
    Triplet1.setImage(triplet1)
    Triplet2.setPos(secondPos)
    Triplet2.setImage(triplet2)
    Triplet3.setPos(thirdPos)
    Triplet3.setImage(triplet3)
    # keep track of which components have finished
    first_viewComponents = [Triplet1, Triplet2, Triplet3]
    for thisComponent in first_viewComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    first_viewClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    continueRoutine = True
    
    # -------Run Routine "first_view"-------
    while continueRoutine and routineTimer.getTime() > 0:
        # get current time
        t = first_viewClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=first_viewClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *Triplet1* updates
        if Triplet1.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            Triplet1.frameNStart = frameN  # exact frame index
            Triplet1.tStart = t  # local t and not account for scr refresh
            Triplet1.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(Triplet1, 'tStartRefresh')  # time at next scr refresh
            Triplet1.setAutoDraw(True)
        if Triplet1.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > Triplet1.tStartRefresh + 1.5-frameTolerance:
                # keep track of stop time/frame for later
                Triplet1.tStop = t  # not accounting for scr refresh
                Triplet1.frameNStop = frameN  # exact frame index
                win.timeOnFlip(Triplet1, 'tStopRefresh')  # time at next scr refresh
                Triplet1.setAutoDraw(False)
        
        # *Triplet2* updates
        if Triplet2.status == NOT_STARTED and tThisFlip >= 2-frameTolerance:
            # keep track of start time/frame for later
            Triplet2.frameNStart = frameN  # exact frame index
            Triplet2.tStart = t  # local t and not account for scr refresh
            Triplet2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(Triplet2, 'tStartRefresh')  # time at next scr refresh
            Triplet2.setAutoDraw(True)
        if Triplet2.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > Triplet2.tStartRefresh + 1.5-frameTolerance:
                # keep track of stop time/frame for later
                Triplet2.tStop = t  # not accounting for scr refresh
                Triplet2.frameNStop = frameN  # exact frame index
                win.timeOnFlip(Triplet2, 'tStopRefresh')  # time at next scr refresh
                Triplet2.setAutoDraw(False)
        
        # *Triplet3* updates
        if Triplet3.status == NOT_STARTED and tThisFlip >= 4-frameTolerance:
            # keep track of start time/frame for later
            Triplet3.frameNStart = frameN  # exact frame index
            Triplet3.tStart = t  # local t and not account for scr refresh
            Triplet3.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(Triplet3, 'tStartRefresh')  # time at next scr refresh
            Triplet3.setAutoDraw(True)
        if Triplet3.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > Triplet3.tStartRefresh + 1.5-frameTolerance:
                # keep track of stop time/frame for later
                Triplet3.tStop = t  # not accounting for scr refresh
                Triplet3.frameNStop = frameN  # exact frame index
                win.timeOnFlip(Triplet3, 'tStopRefresh')  # time at next scr refresh
                Triplet3.setAutoDraw(False)
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in first_viewComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "first_view"-------
    for thisComponent in first_viewComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    EncodingTrials.addData('Triplet1.started', Triplet1.tStartRefresh)
    EncodingTrials.addData('Triplet1.stopped', Triplet1.tStopRefresh)
    EncodingTrials.addData('Triplet2.started', Triplet2.tStartRefresh)
    EncodingTrials.addData('Triplet2.stopped', Triplet2.tStopRefresh)
    EncodingTrials.addData('Triplet3.started', Triplet3.tStartRefresh)
    EncodingTrials.addData('Triplet3.stopped', Triplet3.tStopRefresh)
    
    # ------Prepare to start Routine "mask"-------
    routineTimer.add(1.500000)
    # update component parameters for each repeat
    # keep track of which components have finished
    maskComponents = [Mask]
    for thisComponent in maskComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    maskClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    continueRoutine = True
    
    # -------Run Routine "mask"-------
    while continueRoutine and routineTimer.getTime() > 0:
        # get current time
        t = maskClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=maskClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *Mask* updates
        if Mask.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            Mask.frameNStart = frameN  # exact frame index
            Mask.tStart = t  # local t and not account for scr refresh
            Mask.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(Mask, 'tStartRefresh')  # time at next scr refresh
            Mask.setAutoDraw(True)
        if Mask.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > Mask.tStartRefresh + 1.5-frameTolerance:
                # keep track of stop time/frame for later
                Mask.tStop = t  # not accounting for scr refresh
                Mask.frameNStop = frameN  # exact frame index
                win.timeOnFlip(Mask, 'tStopRefresh')  # time at next scr refresh
                Mask.setAutoDraw(False)
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in maskComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "mask"-------
    for thisComponent in maskComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    EncodingTrials.addData('Mask.started', Mask.tStartRefresh)
    EncodingTrials.addData('Mask.stopped', Mask.tStopRefresh)
    
    # ------Prepare to start Routine "second_view"-------
    routineTimer.add(5.500000)
    # update component parameters for each repeat
    randPos = random.random()
    #same or different trials based on random number
    if randPos > 0.2:
        methodAns = ['leftCL'] #same
        samePics.append(encodingPics[eTrials][0])
        samePics.append(encodingPics[eTrials][1])
        samePics.append(encodingPics[eTrials][2])
        EncodingTrials.addData("encodingType","same")
    else:
        nextTrial = random.choice(trialTypes)
        while nextTrial == trialType:
            nextTrial = random.choice(trialTypes)
            end
        trialType = nextTrial
        methodAns = ['rightCL'] #different
        list = [0,1,2]
        random.shuffle(list)
        triplet1 = 'images/'+encodingPics[eTrials][list[0]]+'.png'
        triplet2 = 'images/'+encodingPics[eTrials][list[1]]+'.png'
        triplet3 = 'images/'+encodingPics[eTrials][list[2]]+'.png'
        EncodingTrials.addData("encodingType","diff")
    
    #have to re-state positions and trial types
    if trialType == 'LMR':
        firstPos = leftPos
        secondPos = midPos
        thirdPos = rightPos
    elif trialType == 'LRM':
        firstPos = leftPos
        secondPos = rightPos
        thirdPos = midPos
    elif trialType == 'MLR':
        firstPos = midPos
        secondPos = leftPos
        thirdPos = rightPos
    elif trialType == 'RML':
        firstPos = rightPos
        secondPos = midPos
        thirdPos = leftPos
    elif trialType == 'RLM':
        firstPos = rightPos
        secondPos = leftPos
        thirdPos = midPos
    elif trialType == 'MRL':
        firstPos = midPos
        secondPos = rightPos
        thirdPos = leftPos
    
    EncodingTrials.addData("triplet1", triplet1)
    EncodingTrials.addData("triplet2", triplet2)
    EncodingTrials.addData("triplet3", triplet3)
    img1.setPos(firstPos)
    img1.setImage(triplet1)
    img2.setPos(secondPos)
    img2.setImage(triplet2)
    img3.setPos(thirdPos)
    img3.setImage(triplet3)
    # keep track of which components have finished
    second_viewComponents = [img1, img2, img3]
    for thisComponent in second_viewComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    second_viewClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    continueRoutine = True
    
    # -------Run Routine "second_view"-------
    while continueRoutine and routineTimer.getTime() > 0:
        # get current time
        t = second_viewClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=second_viewClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *img1* updates
        if img1.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            img1.frameNStart = frameN  # exact frame index
            img1.tStart = t  # local t and not account for scr refresh
            img1.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(img1, 'tStartRefresh')  # time at next scr refresh
            img1.setAutoDraw(True)
        if img1.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > img1.tStartRefresh + 1.5-frameTolerance:
                # keep track of stop time/frame for later
                img1.tStop = t  # not accounting for scr refresh
                img1.frameNStop = frameN  # exact frame index
                win.timeOnFlip(img1, 'tStopRefresh')  # time at next scr refresh
                img1.setAutoDraw(False)
        
        # *img2* updates
        if img2.status == NOT_STARTED and tThisFlip >= 2-frameTolerance:
            # keep track of start time/frame for later
            img2.frameNStart = frameN  # exact frame index
            img2.tStart = t  # local t and not account for scr refresh
            img2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(img2, 'tStartRefresh')  # time at next scr refresh
            img2.setAutoDraw(True)
        if img2.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > img2.tStartRefresh + 1.5-frameTolerance:
                # keep track of stop time/frame for later
                img2.tStop = t  # not accounting for scr refresh
                img2.frameNStop = frameN  # exact frame index
                win.timeOnFlip(img2, 'tStopRefresh')  # time at next scr refresh
                img2.setAutoDraw(False)
        
        # *img3* updates
        if img3.status == NOT_STARTED and tThisFlip >= 4-frameTolerance:
            # keep track of start time/frame for later
            img3.frameNStart = frameN  # exact frame index
            img3.tStart = t  # local t and not account for scr refresh
            img3.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(img3, 'tStartRefresh')  # time at next scr refresh
            img3.setAutoDraw(True)
        if img3.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > img3.tStartRefresh + 1.5-frameTolerance:
                # keep track of stop time/frame for later
                img3.tStop = t  # not accounting for scr refresh
                img3.frameNStop = frameN  # exact frame index
                win.timeOnFlip(img3, 'tStopRefresh')  # time at next scr refresh
                img3.setAutoDraw(False)
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in second_viewComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "second_view"-------
    for thisComponent in second_viewComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    eTrials = eTrials + 1
    EncodingTrials.addData("encodingTrials", str(eTrials))
    print(eTrials)
    
    EncodingTrials.addData('img1.started', img1.tStartRefresh)
    EncodingTrials.addData('img1.stopped', img1.tStopRefresh)
    EncodingTrials.addData('img2.started', img2.tStartRefresh)
    EncodingTrials.addData('img2.stopped', img2.tStopRefresh)
    EncodingTrials.addData('img3.started', img3.tStartRefresh)
    EncodingTrials.addData('img3.stopped', img3.tStopRefresh)
    
    # ------Prepare to start Routine "methodQText"-------
    routineTimer.add(1.000000)
    # update component parameters for each repeat
    # keep track of which components have finished
    methodQTextComponents = [text_2]
    for thisComponent in methodQTextComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    methodQTextClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    continueRoutine = True
    
    # -------Run Routine "methodQText"-------
    while continueRoutine and routineTimer.getTime() > 0:
        # get current time
        t = methodQTextClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=methodQTextClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *text_2* updates
        if text_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_2.frameNStart = frameN  # exact frame index
            text_2.tStart = t  # local t and not account for scr refresh
            text_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_2, 'tStartRefresh')  # time at next scr refresh
            text_2.setAutoDraw(True)
        if text_2.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > text_2.tStartRefresh + 1-frameTolerance:
                # keep track of stop time/frame for later
                text_2.tStop = t  # not accounting for scr refresh
                text_2.frameNStop = frameN  # exact frame index
                win.timeOnFlip(text_2, 'tStopRefresh')  # time at next scr refresh
                text_2.setAutoDraw(False)
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in methodQTextComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "methodQText"-------
    for thisComponent in methodQTextComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    EncodingTrials.addData('text_2.started', text_2.tStartRefresh)
    EncodingTrials.addData('text_2.stopped', text_2.tStopRefresh)
    
    # ------Prepare to start Routine "MethodCheck"-------
    # update component parameters for each repeat
    sameText.setText('Same')
    diffText.setText('Different')
    # setup some python lists for storing info about the mouse
    mouse.x = []
    mouse.y = []
    mouse.leftButton = []
    mouse.midButton = []
    mouse.rightButton = []
    mouse.time = []
    mouse.clicked_name = []
    gotValidClick = False  # until a click is received
    # keep track of which components have finished
    MethodCheckComponents = [text, sameText, diffText, leftCL, rightCL, mouse]
    for thisComponent in MethodCheckComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    MethodCheckClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    continueRoutine = True
    
    # -------Run Routine "MethodCheck"-------
    while continueRoutine:
        # get current time
        t = MethodCheckClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=MethodCheckClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *text* updates
        if text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text.frameNStart = frameN  # exact frame index
            text.tStart = t  # local t and not account for scr refresh
            text.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text, 'tStartRefresh')  # time at next scr refresh
            text.setAutoDraw(True)
        
        # *sameText* updates
        if sameText.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            sameText.frameNStart = frameN  # exact frame index
            sameText.tStart = t  # local t and not account for scr refresh
            sameText.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(sameText, 'tStartRefresh')  # time at next scr refresh
            sameText.setAutoDraw(True)
        
        # *diffText* updates
        if diffText.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            diffText.frameNStart = frameN  # exact frame index
            diffText.tStart = t  # local t and not account for scr refresh
            diffText.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(diffText, 'tStartRefresh')  # time at next scr refresh
            diffText.setAutoDraw(True)
        
        # *leftCL* updates
        if leftCL.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            leftCL.frameNStart = frameN  # exact frame index
            leftCL.tStart = t  # local t and not account for scr refresh
            leftCL.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(leftCL, 'tStartRefresh')  # time at next scr refresh
            leftCL.setAutoDraw(True)
        
        # *rightCL* updates
        if rightCL.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            rightCL.frameNStart = frameN  # exact frame index
            rightCL.tStart = t  # local t and not account for scr refresh
            rightCL.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(rightCL, 'tStartRefresh')  # time at next scr refresh
            rightCL.setAutoDraw(True)
        # *mouse* updates
        if mouse.status == NOT_STARTED and t >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            mouse.frameNStart = frameN  # exact frame index
            mouse.tStart = t  # local t and not account for scr refresh
            mouse.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(mouse, 'tStartRefresh')  # time at next scr refresh
            mouse.status = STARTED
            mouse.mouseClock.reset()
            prevButtonState = mouse.getPressed()  # if button is down already this ISN'T a new click
        if mouse.status == STARTED:  # only update if started and not finished!
            buttons = mouse.getPressed()
            if buttons != prevButtonState:  # button state changed?
                prevButtonState = buttons
                if sum(buttons) > 0:  # state changed to a new click
                    # check if the mouse was inside our 'clickable' objects
                    gotValidClick = False
                    for obj in [rightCL,leftCL]:
                        if obj.contains(mouse):
                            gotValidClick = True
                            mouse.clicked_name.append(obj.name)
                    x, y = mouse.getPos()
                    mouse.x.append(x)
                    mouse.y.append(y)
                    buttons = mouse.getPressed()
                    mouse.leftButton.append(buttons[0])
                    mouse.midButton.append(buttons[1])
                    mouse.rightButton.append(buttons[2])
                    mouse.time.append(mouse.mouseClock.getTime())
                    # abort routine on response
                    continueRoutine = False
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in MethodCheckComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "MethodCheck"-------
    for thisComponent in MethodCheckComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    if mouse.clicked_name == methodAns:
        EncodingTrials.addData ("methodCheck", '1')
    else:
        EncodingTrials.addData ("methodCheck", '0')
    
    #store whether or not they answered correctly for the "same" or "different" trial type.
    EncodingTrials.addData('text.started', text.tStartRefresh)
    EncodingTrials.addData('text.stopped', text.tStopRefresh)
    EncodingTrials.addData('sameText.started', sameText.tStartRefresh)
    EncodingTrials.addData('sameText.stopped', sameText.tStopRefresh)
    EncodingTrials.addData('diffText.started', diffText.tStartRefresh)
    EncodingTrials.addData('diffText.stopped', diffText.tStopRefresh)
    EncodingTrials.addData('leftCL.started', leftCL.tStartRefresh)
    EncodingTrials.addData('leftCL.stopped', leftCL.tStopRefresh)
    EncodingTrials.addData('rightCL.started', rightCL.tStartRefresh)
    EncodingTrials.addData('rightCL.stopped', rightCL.tStopRefresh)
    # store data for EncodingTrials (TrialHandler)
    if len(mouse.x): EncodingTrials.addData('mouse.x', mouse.x[0])
    if len(mouse.y): EncodingTrials.addData('mouse.y', mouse.y[0])
    if len(mouse.leftButton): EncodingTrials.addData('mouse.leftButton', mouse.leftButton[0])
    if len(mouse.midButton): EncodingTrials.addData('mouse.midButton', mouse.midButton[0])
    if len(mouse.rightButton): EncodingTrials.addData('mouse.rightButton', mouse.rightButton[0])
    if len(mouse.time): EncodingTrials.addData('mouse.time', mouse.time[0])
    if len(mouse.clicked_name): EncodingTrials.addData('mouse.clicked_name', mouse.clicked_name[0])
    EncodingTrials.addData('mouse.started', mouse.tStart)
    EncodingTrials.addData('mouse.stopped', mouse.tStop)
    # the Routine "MethodCheck" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    thisExp.nextEntry()
    
# completed numEncoding repeats of 'EncodingTrials'


# ------Prepare to start Routine "initRecallPics"-------
# update component parameters for each repeat
retTrials = 0
retNew = 0
retSame = 0
random.shuffle(newPics)
random.shuffle(samePics)

#retrievalNew = list(range(len(newPics)))
#random.shuffle(retrievalSame)
#retrievalSame = [i for i in range(len(samePics))]

# keep track of which components have finished
initRecallPicsComponents = []
for thisComponent in initRecallPicsComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
initRecallPicsClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1
continueRoutine = True

# -------Run Routine "initRecallPics"-------
while continueRoutine:
    # get current time
    t = initRecallPicsClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=initRecallPicsClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in initRecallPicsComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "initRecallPics"-------
for thisComponent in initRecallPicsComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# the Routine "initRecallPics" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# set up handler to look after randomisation of conditions etc
RetrievalTrials = data.TrialHandler(nReps=numRetrieval, method='sequential', 
    extraInfo=expInfo, originPath=-1,
    trialList=[None],
    seed=None, name='RetrievalTrials')
thisExp.addLoop(RetrievalTrials)  # add the loop to the experiment
thisRetrievalTrial = RetrievalTrials.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisRetrievalTrial.rgb)
if thisRetrievalTrial != None:
    for paramName in thisRetrievalTrial:
        exec('{} = thisRetrievalTrial[paramName]'.format(paramName))

for thisRetrievalTrial in RetrievalTrials:
    currentLoop = RetrievalTrials
    # abbreviate parameter names if possible (e.g. rgb = thisRetrievalTrial.rgb)
    if thisRetrievalTrial != None:
        for paramName in thisRetrievalTrial:
            exec('{} = thisRetrievalTrial[paramName]'.format(paramName))
    
    # ------Prepare to start Routine "RetrievalImage"-------
    routineTimer.add(1.500000)
    # update component parameters for each repeat
    retrievalImage = None
    probability = random.random()
    print(samePics)
    print(newPics)
    
    if probability < 0.66:
        retType = "old"
        RetrievalTrials.addData("retType", "old")
        length = len(samePics)
        if(length == 0):
            sys.exit(1)
        retrievalImage = 'images/' + samePics[retSame] + '.png'
        retSame = retSame + 1
    else:
        retType = "new"
        RetrievalTrials.addData("retType", "new")
        length = len(newPics)
        if(length == 0):
            sys.exit(1)
        retrievalImage = 'images/' + newPics[retNew] + '.png'
        retNew = retNew + 1
    
    RetrievalTrials.addData("retIMG", retrievalImage)
    print(retrievalImage)
    print(retTrials)
    print(retNew)
    retIMG.setImage(retrievalImage)
    # keep track of which components have finished
    RetrievalImageComponents = [retIMG]
    for thisComponent in RetrievalImageComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    RetrievalImageClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    continueRoutine = True
    
    # -------Run Routine "RetrievalImage"-------
    while continueRoutine and routineTimer.getTime() > 0:
        # get current time
        t = RetrievalImageClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=RetrievalImageClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *retIMG* updates
        if retIMG.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
            # keep track of start time/frame for later
            retIMG.frameNStart = frameN  # exact frame index
            retIMG.tStart = t  # local t and not account for scr refresh
            retIMG.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(retIMG, 'tStartRefresh')  # time at next scr refresh
            retIMG.setAutoDraw(True)
        if retIMG.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > retIMG.tStartRefresh + 1.5-frameTolerance:
                # keep track of stop time/frame for later
                retIMG.tStop = t  # not accounting for scr refresh
                retIMG.frameNStop = frameN  # exact frame index
                win.timeOnFlip(retIMG, 'tStopRefresh')  # time at next scr refresh
                retIMG.setAutoDraw(False)
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in RetrievalImageComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "RetrievalImage"-------
    for thisComponent in RetrievalImageComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    RetrievalTrials.addData('retIMG.started', retIMG.tStartRefresh)
    RetrievalTrials.addData('retIMG.stopped', retIMG.tStopRefresh)
    
    # ------Prepare to start Routine "Question1Text"-------
    routineTimer.add(1.000000)
    # update component parameters for each repeat
    # keep track of which components have finished
    Question1TextComponents = [text_3]
    for thisComponent in Question1TextComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    Question1TextClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    continueRoutine = True
    
    # -------Run Routine "Question1Text"-------
    while continueRoutine and routineTimer.getTime() > 0:
        # get current time
        t = Question1TextClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=Question1TextClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *text_3* updates
        if text_3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_3.frameNStart = frameN  # exact frame index
            text_3.tStart = t  # local t and not account for scr refresh
            text_3.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_3, 'tStartRefresh')  # time at next scr refresh
            text_3.setAutoDraw(True)
        if text_3.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > text_3.tStartRefresh + 1-frameTolerance:
                # keep track of stop time/frame for later
                text_3.tStop = t  # not accounting for scr refresh
                text_3.frameNStop = frameN  # exact frame index
                win.timeOnFlip(text_3, 'tStopRefresh')  # time at next scr refresh
                text_3.setAutoDraw(False)
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in Question1TextComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "Question1Text"-------
    for thisComponent in Question1TextComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    RetrievalTrials.addData('text_3.started', text_3.tStartRefresh)
    RetrievalTrials.addData('text_3.stopped', text_3.tStopRefresh)
    
    # ------Prepare to start Routine "old_new_q"-------
    # update component parameters for each repeat
    # setup some python lists for storing info about the mouse_2
    mouse_2.x = []
    mouse_2.y = []
    mouse_2.leftButton = []
    mouse_2.midButton = []
    mouse_2.rightButton = []
    mouse_2.time = []
    mouse_2.clicked_name = []
    gotValidClick = False  # until a click is received
    # keep track of which components have finished
    old_new_qComponents = [question, oldans, newans, old_text, new_text, mouse_2]
    for thisComponent in old_new_qComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    old_new_qClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    continueRoutine = True
    
    # -------Run Routine "old_new_q"-------
    while continueRoutine:
        # get current time
        t = old_new_qClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=old_new_qClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *question* updates
        if question.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            question.frameNStart = frameN  # exact frame index
            question.tStart = t  # local t and not account for scr refresh
            question.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(question, 'tStartRefresh')  # time at next scr refresh
            question.setAutoDraw(True)
        
        # *oldans* updates
        if oldans.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            oldans.frameNStart = frameN  # exact frame index
            oldans.tStart = t  # local t and not account for scr refresh
            oldans.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(oldans, 'tStartRefresh')  # time at next scr refresh
            oldans.setAutoDraw(True)
        
        # *newans* updates
        if newans.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            newans.frameNStart = frameN  # exact frame index
            newans.tStart = t  # local t and not account for scr refresh
            newans.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(newans, 'tStartRefresh')  # time at next scr refresh
            newans.setAutoDraw(True)
        
        # *old_text* updates
        if old_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            old_text.frameNStart = frameN  # exact frame index
            old_text.tStart = t  # local t and not account for scr refresh
            old_text.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(old_text, 'tStartRefresh')  # time at next scr refresh
            old_text.setAutoDraw(True)
        
        # *new_text* updates
        if new_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            new_text.frameNStart = frameN  # exact frame index
            new_text.tStart = t  # local t and not account for scr refresh
            new_text.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(new_text, 'tStartRefresh')  # time at next scr refresh
            new_text.setAutoDraw(True)
        # *mouse_2* updates
        if mouse_2.status == NOT_STARTED and t >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            mouse_2.frameNStart = frameN  # exact frame index
            mouse_2.tStart = t  # local t and not account for scr refresh
            mouse_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(mouse_2, 'tStartRefresh')  # time at next scr refresh
            mouse_2.status = STARTED
            mouse_2.mouseClock.reset()
            prevButtonState = mouse_2.getPressed()  # if button is down already this ISN'T a new click
        if mouse_2.status == STARTED:  # only update if started and not finished!
            buttons = mouse_2.getPressed()
            if buttons != prevButtonState:  # button state changed?
                prevButtonState = buttons
                if sum(buttons) > 0:  # state changed to a new click
                    # check if the mouse was inside our 'clickable' objects
                    gotValidClick = False
                    for obj in [oldans, newans]:
                        if obj.contains(mouse_2):
                            gotValidClick = True
                            mouse_2.clicked_name.append(obj.name)
                    x, y = mouse_2.getPos()
                    mouse_2.x.append(x)
                    mouse_2.y.append(y)
                    buttons = mouse_2.getPressed()
                    mouse_2.leftButton.append(buttons[0])
                    mouse_2.midButton.append(buttons[1])
                    mouse_2.rightButton.append(buttons[2])
                    mouse_2.time.append(mouse_2.mouseClock.getTime())
                    if gotValidClick:  # abort routine on response
                        continueRoutine = False
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in old_new_qComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "old_new_q"-------
    for thisComponent in old_new_qComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    count = 2
    if(mouse_2.clicked_name[0] == 'oldans'):
      response = 'old'
      count = 1
    elif(mouse_2.clicked_name[0] == 'newans'):
      response = 'new'
      count = 0
    
    retTrials = retTrials + 1
    
    if retTrials == 60:
        RetrievalTrials.finished = 1
    
    if retType == 'old':
        if response == 'old':
            corrAns = 1
        else:
            corrAns = 0
    elif retType == 'new':
        if response == 'new':
            corrAns = 1
        else:
            corrAns = 0
    
    RetrievalTrials.addData("retrievalTrials", str(retTrials))
    RetrievalTrials.addData ("retrievalACC", corrAns)
    RetrievalTrials.addData('question.started', question.tStartRefresh)
    RetrievalTrials.addData('question.stopped', question.tStopRefresh)
    RetrievalTrials.addData('oldans.started', oldans.tStartRefresh)
    RetrievalTrials.addData('oldans.stopped', oldans.tStopRefresh)
    RetrievalTrials.addData('newans.started', newans.tStartRefresh)
    RetrievalTrials.addData('newans.stopped', newans.tStopRefresh)
    RetrievalTrials.addData('old_text.started', old_text.tStartRefresh)
    RetrievalTrials.addData('old_text.stopped', old_text.tStopRefresh)
    RetrievalTrials.addData('new_text.started', new_text.tStartRefresh)
    RetrievalTrials.addData('new_text.stopped', new_text.tStopRefresh)
    # store data for RetrievalTrials (TrialHandler)
    if len(mouse_2.x): RetrievalTrials.addData('mouse_2.x', mouse_2.x[0])
    if len(mouse_2.y): RetrievalTrials.addData('mouse_2.y', mouse_2.y[0])
    if len(mouse_2.leftButton): RetrievalTrials.addData('mouse_2.leftButton', mouse_2.leftButton[0])
    if len(mouse_2.midButton): RetrievalTrials.addData('mouse_2.midButton', mouse_2.midButton[0])
    if len(mouse_2.rightButton): RetrievalTrials.addData('mouse_2.rightButton', mouse_2.rightButton[0])
    if len(mouse_2.time): RetrievalTrials.addData('mouse_2.time', mouse_2.time[0])
    if len(mouse_2.clicked_name): RetrievalTrials.addData('mouse_2.clicked_name', mouse_2.clicked_name[0])
    RetrievalTrials.addData('mouse_2.started', mouse_2.tStart)
    RetrievalTrials.addData('mouse_2.stopped', mouse_2.tStop)
    # the Routine "old_new_q" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # set up handler to look after randomisation of conditions etc
    trials = data.TrialHandler(nReps=count, method='random', 
        extraInfo=expInfo, originPath=-1,
        trialList=[None],
        seed=None, name='trials')
    thisExp.addLoop(trials)  # add the loop to the experiment
    thisTrial = trials.trialList[0]  # so we can initialise stimuli with some values
    # abbreviate parameter names if possible (e.g. rgb = thisTrial.rgb)
    if thisTrial != None:
        for paramName in thisTrial:
            exec('{} = thisTrial[paramName]'.format(paramName))
    
    for thisTrial in trials:
        currentLoop = trials
        # abbreviate parameter names if possible (e.g. rgb = thisTrial.rgb)
        if thisTrial != None:
            for paramName in thisTrial:
                exec('{} = thisTrial[paramName]'.format(paramName))
        
        # ------Prepare to start Routine "Q2Text"-------
        routineTimer.add(1.000000)
        # update component parameters for each repeat
        TestQuestion = "When did you see this object?"
        text_4.setText(TestQuestion)
        # keep track of which components have finished
        Q2TextComponents = [text_4]
        for thisComponent in Q2TextComponents:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        Q2TextClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
        frameN = -1
        continueRoutine = True
        
        # -------Run Routine "Q2Text"-------
        while continueRoutine and routineTimer.getTime() > 0:
            # get current time
            t = Q2TextClock.getTime()
            tThisFlip = win.getFutureFlipTime(clock=Q2TextClock)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *text_4* updates
            if text_4.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                text_4.frameNStart = frameN  # exact frame index
                text_4.tStart = t  # local t and not account for scr refresh
                text_4.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(text_4, 'tStartRefresh')  # time at next scr refresh
                text_4.setAutoDraw(True)
            if text_4.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > text_4.tStartRefresh + 1.0-frameTolerance:
                    # keep track of stop time/frame for later
                    text_4.tStop = t  # not accounting for scr refresh
                    text_4.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(text_4, 'tStopRefresh')  # time at next scr refresh
                    text_4.setAutoDraw(False)
            
            # check for quit (typically the Esc key)
            if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                core.quit()
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in Q2TextComponents:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # -------Ending Routine "Q2Text"-------
        for thisComponent in Q2TextComponents:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        trials.addData('text_4.started', text_4.tStartRefresh)
        trials.addData('text_4.stopped', text_4.tStopRefresh)
        
        # ------Prepare to start Routine "Decision"-------
        # update component parameters for each repeat
        decTrials = 0
        
        #if expInfo['Condition'] == '1':
            #TestQuestion = "Where did you see this object?"
            #Ans1 = "Left"
            #Ans2 = "Middle"
            #Ans3 = "Right"
        #elif expInfo['Condition'] =='2':
            #TestQuestion = "When did you see this object?"
            
        Ans1 = "First"
        Ans2 = "Second"
        Ans3 = "Third"
        decisionQ_2.setText(TestQuestion)
        Ans_1.setText(Ans1)
        Ans_2.setText(Ans2)
        Ans_3.setText(Ans3)
        # setup some python lists for storing info about the Order_Position_Response
        Order_Position_Response.clicked_name = []
        gotValidClick = False  # until a click is received
        # keep track of which components have finished
        DecisionComponents = [decisionQ_2, first_left, second_middle, third_right, Ans_1, Ans_2, Ans_3, Order_Position_Response]
        for thisComponent in DecisionComponents:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        DecisionClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
        frameN = -1
        continueRoutine = True
        
        # -------Run Routine "Decision"-------
        while continueRoutine:
            # get current time
            t = DecisionClock.getTime()
            tThisFlip = win.getFutureFlipTime(clock=DecisionClock)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *decisionQ_2* updates
            if decisionQ_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                decisionQ_2.frameNStart = frameN  # exact frame index
                decisionQ_2.tStart = t  # local t and not account for scr refresh
                decisionQ_2.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(decisionQ_2, 'tStartRefresh')  # time at next scr refresh
                decisionQ_2.setAutoDraw(True)
            
            # *first_left* updates
            if first_left.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                first_left.frameNStart = frameN  # exact frame index
                first_left.tStart = t  # local t and not account for scr refresh
                first_left.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(first_left, 'tStartRefresh')  # time at next scr refresh
                first_left.setAutoDraw(True)
            
            # *second_middle* updates
            if second_middle.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                second_middle.frameNStart = frameN  # exact frame index
                second_middle.tStart = t  # local t and not account for scr refresh
                second_middle.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(second_middle, 'tStartRefresh')  # time at next scr refresh
                second_middle.setAutoDraw(True)
            
            # *third_right* updates
            if third_right.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                third_right.frameNStart = frameN  # exact frame index
                third_right.tStart = t  # local t and not account for scr refresh
                third_right.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(third_right, 'tStartRefresh')  # time at next scr refresh
                third_right.setAutoDraw(True)
            
            # *Ans_1* updates
            if Ans_1.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                Ans_1.frameNStart = frameN  # exact frame index
                Ans_1.tStart = t  # local t and not account for scr refresh
                Ans_1.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(Ans_1, 'tStartRefresh')  # time at next scr refresh
                Ans_1.setAutoDraw(True)
            
            # *Ans_2* updates
            if Ans_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                Ans_2.frameNStart = frameN  # exact frame index
                Ans_2.tStart = t  # local t and not account for scr refresh
                Ans_2.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(Ans_2, 'tStartRefresh')  # time at next scr refresh
                Ans_2.setAutoDraw(True)
            
            # *Ans_3* updates
            if Ans_3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                Ans_3.frameNStart = frameN  # exact frame index
                Ans_3.tStart = t  # local t and not account for scr refresh
                Ans_3.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(Ans_3, 'tStartRefresh')  # time at next scr refresh
                Ans_3.setAutoDraw(True)
            # *Order_Position_Response* updates
            if Order_Position_Response.status == NOT_STARTED and t >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                Order_Position_Response.frameNStart = frameN  # exact frame index
                Order_Position_Response.tStart = t  # local t and not account for scr refresh
                Order_Position_Response.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(Order_Position_Response, 'tStartRefresh')  # time at next scr refresh
                Order_Position_Response.status = STARTED
                Order_Position_Response.mouseClock.reset()
                prevButtonState = Order_Position_Response.getPressed()  # if button is down already this ISN'T a new click
            if Order_Position_Response.status == STARTED:  # only update if started and not finished!
                buttons = Order_Position_Response.getPressed()
                if buttons != prevButtonState:  # button state changed?
                    prevButtonState = buttons
                    if sum(buttons) > 0:  # state changed to a new click
                        # check if the mouse was inside our 'clickable' objects
                        gotValidClick = False
                        for obj in [first_left,second_middle,third_right]:
                            if obj.contains(Order_Position_Response):
                                gotValidClick = True
                                Order_Position_Response.clicked_name.append(obj.name)
                        if gotValidClick:  # abort routine on response
                            continueRoutine = False
            
            # check for quit (typically the Esc key)
            if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                core.quit()
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in DecisionComponents:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # -------Ending Routine "Decision"-------
        for thisComponent in DecisionComponents:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        decTrials = decTrials + 1
        
        
        trials.addData('decisionQ_2.started', decisionQ_2.tStartRefresh)
        trials.addData('decisionQ_2.stopped', decisionQ_2.tStopRefresh)
        trials.addData('first_left.started', first_left.tStartRefresh)
        trials.addData('first_left.stopped', first_left.tStopRefresh)
        trials.addData('second_middle.started', second_middle.tStartRefresh)
        trials.addData('second_middle.stopped', second_middle.tStopRefresh)
        trials.addData('third_right.started', third_right.tStartRefresh)
        trials.addData('third_right.stopped', third_right.tStopRefresh)
        trials.addData('Ans_1.started', Ans_1.tStartRefresh)
        trials.addData('Ans_1.stopped', Ans_1.tStopRefresh)
        trials.addData('Ans_2.started', Ans_2.tStartRefresh)
        trials.addData('Ans_2.stopped', Ans_2.tStopRefresh)
        trials.addData('Ans_3.started', Ans_3.tStartRefresh)
        trials.addData('Ans_3.stopped', Ans_3.tStopRefresh)
        # store data for trials (TrialHandler)
        x, y = Order_Position_Response.getPos()
        buttons = Order_Position_Response.getPressed()
        if sum(buttons):
            # check if the mouse was inside our 'clickable' objects
            gotValidClick = False
            for obj in [first_left,second_middle,third_right]:
                if obj.contains(Order_Position_Response):
                    gotValidClick = True
                    Order_Position_Response.clicked_name.append(obj.name)
        trials.addData('Order_Position_Response.x', x)
        trials.addData('Order_Position_Response.y', y)
        trials.addData('Order_Position_Response.leftButton', buttons[0])
        trials.addData('Order_Position_Response.midButton', buttons[1])
        trials.addData('Order_Position_Response.rightButton', buttons[2])
        if len(Order_Position_Response.clicked_name):
            trials.addData('Order_Position_Response.clicked_name', Order_Position_Response.clicked_name[0])
        trials.addData('Order_Position_Response.started', Order_Position_Response.tStart)
        trials.addData('Order_Position_Response.stopped', Order_Position_Response.tStop)
        # the Routine "Decision" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset()
        thisExp.nextEntry()
        
    # completed count repeats of 'trials'
    
    thisExp.nextEntry()
    
# completed numRetrieval repeats of 'RetrievalTrials'


# ------Prepare to start Routine "EndScreen"-------
routineTimer.add(5.000000)
# update component parameters for each repeat
# keep track of which components have finished
EndScreenComponents = [end]
for thisComponent in EndScreenComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
EndScreenClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1
continueRoutine = True

# -------Run Routine "EndScreen"-------
while continueRoutine and routineTimer.getTime() > 0:
    # get current time
    t = EndScreenClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=EndScreenClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *end* updates
    if end.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        end.frameNStart = frameN  # exact frame index
        end.tStart = t  # local t and not account for scr refresh
        end.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(end, 'tStartRefresh')  # time at next scr refresh
        end.setAutoDraw(True)
    if end.status == STARTED:
        # is it time to stop? (based on global clock, using actual start)
        if tThisFlipGlobal > end.tStartRefresh + 5-frameTolerance:
            # keep track of stop time/frame for later
            end.tStop = t  # not accounting for scr refresh
            end.frameNStop = frameN  # exact frame index
            win.timeOnFlip(end, 'tStopRefresh')  # time at next scr refresh
            end.setAutoDraw(False)
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in EndScreenComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "EndScreen"-------
for thisComponent in EndScreenComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('end.started', end.tStartRefresh)
thisExp.addData('end.stopped', end.tStopRefresh)

# Flip one final time so any remaining win.callOnFlip() 
# and win.timeOnFlip() tasks get executed before quitting
win.flip()

# these shouldn't be strictly necessary (should auto-save)
thisExp.saveAsWideText(filename+'.csv')
thisExp.saveAsPickle(filename)
logging.flush()
# make sure everything is closed down
thisExp.abort()  # or data files will save again on exit
win.close()
core.quit()
