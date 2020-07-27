/********************* 
 * Spatialmemb2 Test *
 *********************/

// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([0, 0, 0]),
  units: 'height',
  waitBlanking: true
});

// store info about the experiment session:
let expName = 'spatialMemB2';  // from the Builder filename that created this script
let expInfo = {'participant': '', 'Block Type': '2', 'Condition': '2'};

// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(codeJSRoutineBegin());
flowScheduler.add(codeJSRoutineEachFrame());
flowScheduler.add(codeJSRoutineEnd());
flowScheduler.add(initCodeRoutineBegin());
flowScheduler.add(initCodeRoutineEachFrame());
flowScheduler.add(initCodeRoutineEnd());
flowScheduler.add(trialRoutineBegin());
flowScheduler.add(trialRoutineEachFrame());
flowScheduler.add(trialRoutineEnd());
const EncodingTrialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(EncodingTrialsLoopBegin, EncodingTrialsLoopScheduler);
flowScheduler.add(EncodingTrialsLoopScheduler);
flowScheduler.add(EncodingTrialsLoopEnd);
flowScheduler.add(initRecallPicsRoutineBegin());
flowScheduler.add(initRecallPicsRoutineEachFrame());
flowScheduler.add(initRecallPicsRoutineEnd());
const RetrievalTrialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(RetrievalTrialsLoopBegin, RetrievalTrialsLoopScheduler);
flowScheduler.add(RetrievalTrialsLoopScheduler);
flowScheduler.add(RetrievalTrialsLoopEnd);
flowScheduler.add(EndScreenRoutineBegin());
flowScheduler.add(EndScreenRoutineEachFrame());
flowScheduler.add(EndScreenRoutineEnd());
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  });


var frameDur;
function updateInfo() {
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2020.1.3';
  expInfo['OS'] = window.navigator.platform;

  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  
  return Scheduler.Event.NEXT;
}


var codeJSClock;
var win;
var event;
var thisExp;
var shuffle;
var random;
var retTrials;
var decTrials;
var nextTrial;
var trialType;
var count;
var trialTypes;
var TestQuestion;
var methodAns;
var methodCheck;
var MouseResp;
var retrievalImage;
var response;
var decResponse;
var encodingType;
var retrievalOld;
var retrievalNew;
var samePics;
var diffPics;
var leftPos;
var midPos;
var rightPos;
var triplet1;
var triplet2;
var triplet3;
var retType;
var img1;
var img2;
var img3;
var retProb;
var Ans1;
var Ans2;
var Ans3;
var eTrials;
var list;
var initCodeClock;
var allPics;
var numItems;
var numEncoding;
var numRetrieval;
var encodingPics;
var newPics;
var trialClock;
var Instructions;
var start;
var first_viewClock;
var Triplet1;
var Triplet2;
var Triplet3;
var maskClock;
var Mask;
var second_viewClock;
var methodQTextClock;
var text_2;
var MethodCheckClock;
var text;
var sameText;
var diffText;
var leftCL;
var rightCL;
var MethodMouse;
var initRecallPicsClock;
var RetrievalImageClock;
var retIMG;
var Question1TextClock;
var text_3;
var old_new_qClock;
var question;
var oldans;
var newans;
var old_text;
var new_text;
var mouse_2;
var Q2TextClock;
var text_4;
var DecisionClock;
var decisionQ_2;
var first_left;
var second_middle;
var third_right;
var Ans_1;
var Ans_2;
var Ans_3;
var Order_Position_Response;
var EndScreenClock;
var end;
var globalClock;
var routineTimer;
function experimentInit() {
  // Initialize components for Routine "codeJS"
  codeJSClock = new util.Clock();
  win=psychoJS.window;
  event=psychoJS.eventManager;
  thisExp=psychoJS.experiment;
  
  shuffle = function (a) {
      return util.shuffle(a);
  }
  random = function (a) {
      return Math.random();
  }
  retTrials=0;
  decTrials=0;
  nextTrial=[];
  var TestQuestion;
  var MouseResp;
  trialType = [];
  var methodAns;
  var methodCheck;
  var response;
  var corrAns;
  var decResponse;
  var encodingType;
  var retSame;
  var retNew;
  count=0;
  trialTypes = [];
  TestQuestion = [];
  methodAns = [];
  methodCheck = 0;
  MouseResp = 0;
  retrievalImage = [];
  response = [];
  decResponse = [];
  encodingType = [];
  retrievalOld = [];
  retrievalNew = [];
  samePics = [];
  diffPics = [];
  leftPos = [];
  midPos = [];
  rightPos = [];
  triplet1 = [];
  triplet2 = [];
  triplet3= [];
  retType = [];
  img1 =[];
  img2 =[];
  img3 =[];
  retProb = Math.random();
  response = [];
  Ans1 = [];
  Ans2 = [];
  Ans3 = [];
  eTrials = 0;
  list = [];
  // Initialize components for Routine "initCode"
  initCodeClock = new util.Clock();
  allPics = ['OBJ_106','OBJ_107','OBJ_108','OBJ_109','OBJ_110','OBJ_111','OBJ_112','OBJ_113','OBJ_114','OBJ_115','OBJ_116','OBJ_117','OBJ_118','OBJ_119','OBJ_120','OBJ_121','OBJ_122','OBJ_123','OBJ_124','OBJ_125','OBJ_126','OBJ_127','OBJ_128','OBJ_129','OBJ_130','OBJ_131','OBJ_132','OBJ_133','OBJ_134','OBJ_135','OBJ_136','OBJ_137','OBJ_138','OBJ_139','OBJ_140','OBJ_141','OBJ_142','OBJ_143','OBJ_144','OBJ_145','OBJ_146','OBJ_147','OBJ_148','OBJ_149','OBJ_150','OBJ_151','OBJ_152','OBJ_153','OBJ_154','OBJ_155','OBJ_156','OBJ_157','OBJ_158','OBJ_159','OBJ_160','OBJ_161','OBJ_162','OBJ_163','OBJ_164','OBJ_165','OBJ_166','OBJ_167','OBJ_168','OBJ_169','OBJ_170','OBJ_171','OBJ_172','OBJ_173','OBJ_174','OBJ_175','OBJ_176','OBJ_177','OBJ_178','OBJ_179','OBJ_180','OBJ_181','OBJ_182','OBJ_183','OBJ_184','OBJ_185','OBJ_186','OBJ_187','OBJ_188','OBJ_189','OBJ_190','OBJ_191','OBJ_192','OBJ_193','OBJ_194','OBJ_195','OBJ_196','OBJ_197','OBJ_198','OBJ_199','OBJ_200','OBJ_201','OBJ_202','OBJ_203','OBJ_204','OBJ_205','OBJ_206','OBJ_207','OBJ_208','OBJ_209','OBJ_210'];
  trialTypes = ["LMR","LMR","LMR","LMR","LMR","LMR","LMR","LMR","RML","RML","RML","RML","RML","RML","RML","RML" ,"MLR","MLR","MRL","MRL","LRM","LRM", "RLM", "RLM","RLM"];
  
  shuffle(allPics);
  shuffle(trialTypes);
  
  numItems = 105;
  numEncoding = 25;
  numRetrieval = 60;
  
  const triplets = [];
  for (let i = 0; i< 75; i+=3) {
      triplets.push(allPics.slice(i,i+3));
      }
  encodingPics = triplets;
  newPics = allPics.slice(75, allPics.length-1);
  
  samePics = [];
  diffPics = [];
  
  // Initialize components for Routine "trial"
  trialClock = new util.Clock();
  Instructions = new visual.TextStim({
    win: psychoJS.window,
    name: 'Instructions',
    text: 'In this task you will review sets of objects in triplets. Your task is to pay attention to where and when these objects appear. Press the spacebar to begin',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  start = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "first_view"
  first_viewClock = new util.Clock();
  eTrials = 0;
  
  Triplet1 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'Triplet1', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : [0.3, 0.3],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -1.0 
  });
  Triplet2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'Triplet2', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : [0.3, 0.3],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -2.0 
  });
  Triplet3 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'Triplet3', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : [0.3, 0.3],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -3.0 
  });
  // Initialize components for Routine "mask"
  maskClock = new util.Clock();
  Mask = new visual.ImageStim({
    win : psychoJS.window,
    name : 'Mask', units : undefined, 
    image : 'images/Mask.png', mask : undefined,
    ori : 0, pos : [0, 0], size : [1.5, 0.5],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : 0.0 
  });
  // Initialize components for Routine "second_view"
  second_viewClock = new util.Clock();
  img1 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'img1', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : [0.3, 0.3],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -1.0 
  });
  img2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'img2', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : [0.3, 0.3],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -2.0 
  });
  img3 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'img3', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : [0.3, 0.3],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -3.0 
  });
  // Initialize components for Routine "methodQText"
  methodQTextClock = new util.Clock();
  text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_2',
    text: 'Was this set same or different as the previous set?',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  // Initialize components for Routine "MethodCheck"
  MethodCheckClock = new util.Clock();
  text = new visual.TextStim({
    win: psychoJS.window,
    name: 'text',
    text: 'Was this set same or different as the previous set?',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  sameText = new visual.TextStim({
    win: psychoJS.window,
    name: 'sameText',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.2), (- 0.3)], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -2.0 
  });
  
  diffText = new visual.TextStim({
    win: psychoJS.window,
    name: 'diffText',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0.2, (- 0.3)], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -3.0 
  });
  
  leftCL = new visual.Rect ({
    win: psychoJS.window, name: 'leftCL', 
    width: [(- 0.2), (- 0.2)][0], height: [(- 0.2), (- 0.2)][1],
    ori: 0, pos: [(- 0.2), (- 0.3)],
    lineWidth: 3, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color([0, 0, 0]),
    opacity: 0.5, depth: -4, interpolate: true,
  });
  
  rightCL = new visual.Rect ({
    win: psychoJS.window, name: 'rightCL', 
    width: [0.2, 0.2][0], height: [0.2, 0.2][1],
    ori: 0, pos: [0.2, (- 0.3)],
    lineWidth: 3, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color([0, 0, 0]),
    opacity: 0.5, depth: -5, interpolate: true,
  });
  
  MethodMouse = new core.Mouse({
    win: psychoJS.window,
  });
  MethodMouse.mouseClock = new util.Clock();
  // Initialize components for Routine "initRecallPics"
  initRecallPicsClock = new util.Clock();
  // Initialize components for Routine "RetrievalImage"
  RetrievalImageClock = new util.Clock();
  retIMG = new visual.ImageStim({
    win : psychoJS.window,
    name : 'retIMG', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : [0.3, 0.3],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -1.0 
  });
  // Initialize components for Routine "Question1Text"
  Question1TextClock = new util.Clock();
  text_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_3',
    text: 'Is this object old or new?',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  // Initialize components for Routine "old_new_q"
  old_new_qClock = new util.Clock();
  question = new visual.TextStim({
    win: psychoJS.window,
    name: 'question',
    text: 'Is this object old or new?',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  oldans = new visual.Rect ({
    win: psychoJS.window, name: 'oldans', 
    width: [0.2, 0.2][0], height: [0.2, 0.2][1],
    ori: 0, pos: [(- 0.2), (- 0.3)],
    lineWidth: 3, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 0.5, depth: -2, interpolate: true,
  });
  
  newans = new visual.Rect ({
    win: psychoJS.window, name: 'newans', 
    width: [0.2, 0.2][0], height: [0.2, 0.2][1],
    ori: 0, pos: [0.2, (- 0.3)],
    lineWidth: 3, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 0.5, depth: -3, interpolate: true,
  });
  
  old_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'old_text',
    text: 'Old',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.2), (- 0.3)], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -4.0 
  });
  
  new_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'new_text',
    text: 'New',
    font: 'Arial',
    units: undefined, 
    pos: [0.2, (- 0.3)], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -5.0 
  });
  
  mouse_2 = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_2.mouseClock = new util.Clock();
  // Initialize components for Routine "Q2Text"
  Q2TextClock = new util.Clock();
  text_4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_4',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  // Initialize components for Routine "Decision"
  DecisionClock = new util.Clock();
  decisionQ_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'decisionQ_2',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  first_left = new visual.Rect ({
    win: psychoJS.window, name: 'first_left', 
    width: [0.2, 0.2][0], height: [0.2, 0.2][1],
    ori: 0, pos: [(- 0.3), (- 0.3)],
    lineWidth: 3, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 0.5, depth: -2, interpolate: true,
  });
  
  second_middle = new visual.Rect ({
    win: psychoJS.window, name: 'second_middle', 
    width: [0.2, 0.2][0], height: [0.2, 0.2][1],
    ori: 0, pos: [0, (- 0.3)],
    lineWidth: 3, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 0.5, depth: -3, interpolate: true,
  });
  
  third_right = new visual.Rect ({
    win: psychoJS.window, name: 'third_right', 
    width: [0.2, 0.2][0], height: [0.2, 0.2][1],
    ori: 0, pos: [0.3, (- 0.3)],
    lineWidth: 3, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 0.5, depth: -4, interpolate: true,
  });
  
  Ans_1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Ans_1',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.3), (- 0.3)], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -5.0 
  });
  
  Ans_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Ans_2',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.3)], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -6.0 
  });
  
  Ans_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Ans_3',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0.3, (- 0.3)], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -7.0 
  });
  
  Order_Position_Response = new core.Mouse({
    win: psychoJS.window,
  });
  Order_Position_Response.mouseClock = new util.Clock();
  // Initialize components for Routine "EndScreen"
  EndScreenClock = new util.Clock();
  end = new visual.TextStim({
    win: psychoJS.window,
    name: 'end',
    text: 'Thank you for participating!',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var codeJSComponents;
function codeJSRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'codeJS'-------
    t = 0;
    codeJSClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    // keep track of which components have finished
    codeJSComponents = [];
    
    codeJSComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    
    return Scheduler.Event.NEXT;
  };
}


var continueRoutine;
function codeJSRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'codeJS'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = codeJSClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    codeJSComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function codeJSRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'codeJS'-------
    codeJSComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // the Routine "codeJS" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var initCodeComponents;
function initCodeRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'initCode'-------
    t = 0;
    initCodeClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    // keep track of which components have finished
    initCodeComponents = [];
    
    initCodeComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    
    return Scheduler.Event.NEXT;
  };
}


function initCodeRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'initCode'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = initCodeClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    initCodeComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function initCodeRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'initCode'-------
    initCodeComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // the Routine "initCode" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _start_allKeys;
var trialComponents;
function trialRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'trial'-------
    t = 0;
    trialClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    start.keys = undefined;
    start.rt = undefined;
    _start_allKeys = [];
    // keep track of which components have finished
    trialComponents = [];
    trialComponents.push(Instructions);
    trialComponents.push(start);
    
    trialComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    
    return Scheduler.Event.NEXT;
  };
}


function trialRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'trial'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = trialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Instructions* updates
    if (t >= 0.0 && Instructions.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Instructions.tStart = t;  // (not accounting for frame time here)
      Instructions.frameNStart = frameN;  // exact frame index
      
      Instructions.setAutoDraw(true);
    }

    
    // *start* updates
    if (t >= 0.0 && start.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      start.tStart = t;  // (not accounting for frame time here)
      start.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { start.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { start.start(); }); // start on screen flip
    }

    if (start.status === PsychoJS.Status.STARTED) {
      let theseKeys = start.getKeys({keyList: ['space'], waitRelease: false});
      _start_allKeys = _start_allKeys.concat(theseKeys);
      if (_start_allKeys.length > 0) {
        start.keys = _start_allKeys[_start_allKeys.length - 1].name;  // just the last key pressed
        start.rt = _start_allKeys[_start_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    trialComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trialRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'trial'-------
    trialComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // the Routine "trial" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var EncodingTrials;
var currentLoop;
function EncodingTrialsLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  EncodingTrials = new TrialHandler({
    psychoJS: psychoJS,
    nReps: numEncoding, method: TrialHandler.Method.RANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: undefined,
    seed: undefined, name: 'EncodingTrials'
  });
  psychoJS.experiment.addLoop(EncodingTrials); // add the loop to the experiment
  currentLoop = EncodingTrials;  // we're now the current loop

  // Schedule all the trials in the trialList:
  EncodingTrials.forEach(function() {
    const snapshot = EncodingTrials.getSnapshot();

    thisScheduler.add(importConditions(snapshot));
    thisScheduler.add(first_viewRoutineBegin(snapshot));
    thisScheduler.add(first_viewRoutineEachFrame(snapshot));
    thisScheduler.add(first_viewRoutineEnd(snapshot));
    thisScheduler.add(maskRoutineBegin(snapshot));
    thisScheduler.add(maskRoutineEachFrame(snapshot));
    thisScheduler.add(maskRoutineEnd(snapshot));
    thisScheduler.add(second_viewRoutineBegin(snapshot));
    thisScheduler.add(second_viewRoutineEachFrame(snapshot));
    thisScheduler.add(second_viewRoutineEnd(snapshot));
    thisScheduler.add(methodQTextRoutineBegin(snapshot));
    thisScheduler.add(methodQTextRoutineEachFrame(snapshot));
    thisScheduler.add(methodQTextRoutineEnd(snapshot));
    thisScheduler.add(MethodCheckRoutineBegin(snapshot));
    thisScheduler.add(MethodCheckRoutineEachFrame(snapshot));
    thisScheduler.add(MethodCheckRoutineEnd(snapshot));
    thisScheduler.add(endLoopIteration(thisScheduler, snapshot));
  });

  return Scheduler.Event.NEXT;
}


function EncodingTrialsLoopEnd() {
  psychoJS.experiment.removeLoop(EncodingTrials);

  return Scheduler.Event.NEXT;
}


var RetrievalTrials;
function RetrievalTrialsLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  RetrievalTrials = new TrialHandler({
    psychoJS: psychoJS,
    nReps: numRetrieval, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: undefined,
    seed: undefined, name: 'RetrievalTrials'
  });
  psychoJS.experiment.addLoop(RetrievalTrials); // add the loop to the experiment
  currentLoop = RetrievalTrials;  // we're now the current loop

  // Schedule all the trials in the trialList:
  RetrievalTrials.forEach(function() {
    const snapshot = RetrievalTrials.getSnapshot();

    thisScheduler.add(importConditions(snapshot));
    thisScheduler.add(RetrievalImageRoutineBegin(snapshot));
    thisScheduler.add(RetrievalImageRoutineEachFrame(snapshot));
    thisScheduler.add(RetrievalImageRoutineEnd(snapshot));
    thisScheduler.add(Question1TextRoutineBegin(snapshot));
    thisScheduler.add(Question1TextRoutineEachFrame(snapshot));
    thisScheduler.add(Question1TextRoutineEnd(snapshot));
    thisScheduler.add(old_new_qRoutineBegin(snapshot));
    thisScheduler.add(old_new_qRoutineEachFrame(snapshot));
    thisScheduler.add(old_new_qRoutineEnd(snapshot));
    const trialsLoopScheduler = new Scheduler(psychoJS);
    thisScheduler.add(trialsLoopBegin, trialsLoopScheduler);
    thisScheduler.add(trialsLoopScheduler);
    thisScheduler.add(trialsLoopEnd);
    thisScheduler.add(endLoopIteration(thisScheduler, snapshot));
  });

  return Scheduler.Event.NEXT;
}


var trials;
function trialsLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  trials = new TrialHandler({
    psychoJS: psychoJS,
    nReps: count, method: TrialHandler.Method.RANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: undefined,
    seed: undefined, name: 'trials'
  });
  psychoJS.experiment.addLoop(trials); // add the loop to the experiment
  currentLoop = trials;  // we're now the current loop

  // Schedule all the trials in the trialList:
  trials.forEach(function() {
    const snapshot = trials.getSnapshot();

    thisScheduler.add(importConditions(snapshot));
    thisScheduler.add(Q2TextRoutineBegin(snapshot));
    thisScheduler.add(Q2TextRoutineEachFrame(snapshot));
    thisScheduler.add(Q2TextRoutineEnd(snapshot));
    thisScheduler.add(DecisionRoutineBegin(snapshot));
    thisScheduler.add(DecisionRoutineEachFrame(snapshot));
    thisScheduler.add(DecisionRoutineEnd(snapshot));
    thisScheduler.add(endLoopIteration(thisScheduler, snapshot));
  });

  return Scheduler.Event.NEXT;
}


function trialsLoopEnd() {
  psychoJS.experiment.removeLoop(trials);

  return Scheduler.Event.NEXT;
}


function RetrievalTrialsLoopEnd() {
  psychoJS.experiment.removeLoop(RetrievalTrials);

  return Scheduler.Event.NEXT;
}


var firstPos;
var secondPos;
var thirdPos;
var first_viewComponents;
function first_viewRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'first_view'-------
    t = 0;
    first_viewClock.reset(); // clock
    frameN = -1;
    routineTimer.add(5.500000);
    // update component parameters for each repeat
    trialType = trialTypes[eTrials];
    leftPos = [(- 0.5), 0.0];
    midPos = [0.0, 0.0];
    rightPos = [0.5, 0.0];
    
    if ((trialType === "LMR")) {
        firstPos = leftPos;
        secondPos = midPos;
        thirdPos = rightPos;
    } else if ((trialType === "LRM")) {
        firstPos = leftPos;
        secondPos = rightPos;
        thirdPos = midPos;
    } else if ((trialType === "MLR")) {
        firstPos = midPos;
        secondPos = leftPos;
        thirdPos = rightPos;
    } else if ((trialType === "RML")) {
        firstPos = rightPos;
        secondPos = midPos;
        thirdPos = leftPos;
    } else if ((trialType === "RLM")) {
         firstPos = rightPos;
         secondPos = leftPos;
         thirdPos = midPos;
    } else if ((trialType === "MRL")) {
         firstPos = midPos;
         secondPos = rightPos;
         thirdPos = leftPos;
    }
    triplet1 = (("images/" + encodingPics[eTrials][0]) + ".png");
    triplet2 = (("images/" + encodingPics[eTrials][1]) + ".png");
    triplet3 = (("images/" + encodingPics[eTrials][2]) + ".png");
    
    thisExp.addData("Trial_Order", trialType);
    thisExp.addData("triplet1", triplet1);
    thisExp.addData("triplet2", triplet2);
    thisExp.addData("triplet3", triplet3);
    
    Triplet1.setPos(firstPos);
    Triplet1.setImage(triplet1);
    Triplet2.setPos(secondPos);
    Triplet2.setImage(triplet2);
    Triplet3.setPos(thirdPos);
    Triplet3.setImage(triplet3);
    // keep track of which components have finished
    first_viewComponents = [];
    first_viewComponents.push(Triplet1);
    first_viewComponents.push(Triplet2);
    first_viewComponents.push(Triplet3);
    
    first_viewComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    
    return Scheduler.Event.NEXT;
  };
}


var frameRemains;
function first_viewRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'first_view'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = first_viewClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Triplet1* updates
    if (t >= 0.0 && Triplet1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Triplet1.tStart = t;  // (not accounting for frame time here)
      Triplet1.frameNStart = frameN;  // exact frame index
      
      Triplet1.setAutoDraw(true);
    }

    frameRemains = 0.0 + 1.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (Triplet1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Triplet1.setAutoDraw(false);
    }
    
    // *Triplet2* updates
    if (t >= 2 && Triplet2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Triplet2.tStart = t;  // (not accounting for frame time here)
      Triplet2.frameNStart = frameN;  // exact frame index
      
      Triplet2.setAutoDraw(true);
    }

    frameRemains = 2 + 1.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (Triplet2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Triplet2.setAutoDraw(false);
    }
    
    // *Triplet3* updates
    if (t >= 4 && Triplet3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Triplet3.tStart = t;  // (not accounting for frame time here)
      Triplet3.frameNStart = frameN;  // exact frame index
      
      Triplet3.setAutoDraw(true);
    }

    frameRemains = 4 + 1.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (Triplet3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Triplet3.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    first_viewComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function first_viewRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'first_view'-------
    first_viewComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    return Scheduler.Event.NEXT;
  };
}


var maskComponents;
function maskRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'mask'-------
    t = 0;
    maskClock.reset(); // clock
    frameN = -1;
    routineTimer.add(1.500000);
    // update component parameters for each repeat
    // keep track of which components have finished
    maskComponents = [];
    maskComponents.push(Mask);
    
    maskComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    
    return Scheduler.Event.NEXT;
  };
}


function maskRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'mask'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = maskClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Mask* updates
    if (t >= 0.0 && Mask.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Mask.tStart = t;  // (not accounting for frame time here)
      Mask.frameNStart = frameN;  // exact frame index
      
      Mask.setAutoDraw(true);
    }

    frameRemains = 0.0 + 1.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (Mask.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Mask.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    maskComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function maskRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'mask'-------
    maskComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    return Scheduler.Event.NEXT;
  };
}


var randPos;
var second_viewComponents;
function second_viewRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'second_view'-------
    t = 0;
    second_viewClock.reset(); // clock
    frameN = -1;
    routineTimer.add(5.500000);
    // update component parameters for each repeat
    randPos = Math.random();
    
    if ((randPos > 0.2)) {
        methodAns = ["leftCL"];
        samePics.push(encodingPics[eTrials][0]);
        samePics.push(encodingPics[eTrials][1]);
        samePics.push(encodingPics[eTrials][2]);
        thisExp.addData("encodingType", "same");
        nextTrial = [];
    } else {
        nextTrial = trialTypes[Math.floor(Math.random() * trialTypes.length)];
        while ((nextTrial === trialType)) {
            nextTrial = trialTypes[Math.floor(Math.random() * trialTypes.length)];
            end;
        }
        trialType = nextTrial;
        methodAns = ["rightCL"];
        triplet1 = (("images/" + encodingPics[eTrials][0]) + ".png");
        triplet2 = (("images/" + encodingPics[eTrials][1]) + ".png");
        triplet3 = (("images/" + encodingPics[eTrials][2]) + ".png");
        thisExp.addData("encodingType", "diff");
    }
    
    thisExp.addData("triplet1", triplet1);
    thisExp.addData("triplet2", triplet2);
    thisExp.addData("triplet3", triplet3);
    thisExp.addData("trialType",trialType);
    thisExp.addData("nextTrial", nextTrial);
    img1.setPos(firstPos);
    img1.setImage(triplet1);
    img2.setPos(secondPos);
    img2.setImage(triplet2);
    img3.setPos(thirdPos);
    img3.setImage(triplet3);
    // keep track of which components have finished
    second_viewComponents = [];
    second_viewComponents.push(img1);
    second_viewComponents.push(img2);
    second_viewComponents.push(img3);
    
    second_viewComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    
    return Scheduler.Event.NEXT;
  };
}


function second_viewRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'second_view'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = second_viewClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *img1* updates
    if (t >= 0.0 && img1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      img1.tStart = t;  // (not accounting for frame time here)
      img1.frameNStart = frameN;  // exact frame index
      
      img1.setAutoDraw(true);
    }

    frameRemains = 0.0 + 1.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (img1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      img1.setAutoDraw(false);
    }
    
    // *img2* updates
    if (t >= 2 && img2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      img2.tStart = t;  // (not accounting for frame time here)
      img2.frameNStart = frameN;  // exact frame index
      
      img2.setAutoDraw(true);
    }

    frameRemains = 2 + 1.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (img2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      img2.setAutoDraw(false);
    }
    
    // *img3* updates
    if (t >= 4 && img3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      img3.tStart = t;  // (not accounting for frame time here)
      img3.frameNStart = frameN;  // exact frame index
      
      img3.setAutoDraw(true);
    }

    frameRemains = 4 + 1.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (img3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      img3.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    second_viewComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function second_viewRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'second_view'-------
    second_viewComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    eTrials = (eTrials + 1);
    EncodingTrials.addData("encodingTrials", eTrials.toString());
    console.log(eTrials);
    
    return Scheduler.Event.NEXT;
  };
}


var methodQTextComponents;
function methodQTextRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'methodQText'-------
    t = 0;
    methodQTextClock.reset(); // clock
    frameN = -1;
    routineTimer.add(1.000000);
    // update component parameters for each repeat
    // keep track of which components have finished
    methodQTextComponents = [];
    methodQTextComponents.push(text_2);
    
    methodQTextComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    
    return Scheduler.Event.NEXT;
  };
}


function methodQTextRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'methodQText'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = methodQTextClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_2* updates
    if (t >= 0.0 && text_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_2.tStart = t;  // (not accounting for frame time here)
      text_2.frameNStart = frameN;  // exact frame index
      
      text_2.setAutoDraw(true);
    }

    frameRemains = 0.0 + 1 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_2.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    methodQTextComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function methodQTextRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'methodQText'-------
    methodQTextComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    return Scheduler.Event.NEXT;
  };
}


var gotValidClick;
var MethodCheckComponents;
function MethodCheckRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'MethodCheck'-------
    t = 0;
    MethodCheckClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    sameText.setText('Same');
    diffText.setText('Different');
    // setup some python lists for storing info about the MethodMouse
    // current position of the mouse:
    MethodMouse.x = [];
    MethodMouse.y = [];
    MethodMouse.leftButton = [];
    MethodMouse.midButton = [];
    MethodMouse.rightButton = [];
    MethodMouse.time = [];
    MethodMouse.clicked_name = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    MethodCheckComponents = [];
    MethodCheckComponents.push(text);
    MethodCheckComponents.push(sameText);
    MethodCheckComponents.push(diffText);
    MethodCheckComponents.push(leftCL);
    MethodCheckComponents.push(rightCL);
    MethodCheckComponents.push(MethodMouse);
    
    MethodCheckComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    
    return Scheduler.Event.NEXT;
  };
}


var prevButtonState;
function MethodCheckRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'MethodCheck'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = MethodCheckClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text* updates
    if (t >= 0.0 && text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text.tStart = t;  // (not accounting for frame time here)
      text.frameNStart = frameN;  // exact frame index
      
      text.setAutoDraw(true);
    }

    
    // *sameText* updates
    if (t >= 0.0 && sameText.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sameText.tStart = t;  // (not accounting for frame time here)
      sameText.frameNStart = frameN;  // exact frame index
      
      sameText.setAutoDraw(true);
    }

    
    // *diffText* updates
    if (t >= 0.0 && diffText.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      diffText.tStart = t;  // (not accounting for frame time here)
      diffText.frameNStart = frameN;  // exact frame index
      
      diffText.setAutoDraw(true);
    }

    
    // *leftCL* updates
    if (t >= 0.0 && leftCL.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      leftCL.tStart = t;  // (not accounting for frame time here)
      leftCL.frameNStart = frameN;  // exact frame index
      
      leftCL.setAutoDraw(true);
    }

    
    // *rightCL* updates
    if (t >= 0.0 && rightCL.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      rightCL.tStart = t;  // (not accounting for frame time here)
      rightCL.frameNStart = frameN;  // exact frame index
      
      rightCL.setAutoDraw(true);
    }

    // *MethodMouse* updates
    if (t >= 0.0 && MethodMouse.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      MethodMouse.tStart = t;  // (not accounting for frame time here)
      MethodMouse.frameNStart = frameN;  // exact frame index
      
      MethodMouse.status = PsychoJS.Status.STARTED;
      MethodMouse.mouseClock.reset();
      prevButtonState = MethodMouse.getPressed();  // if button is down already this ISN'T a new click
      }
    if (MethodMouse.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      let buttons = MethodMouse.getPressed();
      if (!buttons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = buttons;
        if (buttons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          const xys = MethodMouse.getPos();
          MethodMouse.x.push(xys[0]);
          MethodMouse.y.push(xys[1]);
          MethodMouse.leftButton.push(buttons[0]);
          MethodMouse.midButton.push(buttons[1]);
          MethodMouse.rightButton.push(buttons[2]);
          MethodMouse.time.push(MethodMouse.mouseClock.getTime());
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [rightCL,leftCL]) {
            if (obj.contains(MethodMouse)) {
              gotValidClick = true;
              MethodMouse.clicked_name.push(obj.name)
            }
          }
          // abort routine on response
          continueRoutine = false;
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    MethodCheckComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function MethodCheckRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'MethodCheck'-------
    MethodCheckComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    if ((MethodMouse.clicked_name[0] == methodAns)) {
        thisExp.addData("methodCheck", "1");
    } else {
        thisExp.addData("methodCheck", "0");
    }
    thisExp.addData("Method_Clicked", MethodMouse.clicked_name);
    
    // store data for thisExp (ExperimentHandler)
    if (MethodMouse.x) {  psychoJS.experiment.addData('MethodMouse.x', MethodMouse.x[0])};
    if (MethodMouse.y) {  psychoJS.experiment.addData('MethodMouse.y', MethodMouse.y[0])};
    if (MethodMouse.leftButton) {  psychoJS.experiment.addData('MethodMouse.leftButton', MethodMouse.leftButton[0])};
    if (MethodMouse.midButton) {  psychoJS.experiment.addData('MethodMouse.midButton', MethodMouse.midButton[0])};
    if (MethodMouse.rightButton) {  psychoJS.experiment.addData('MethodMouse.rightButton', MethodMouse.rightButton[0])};
    if (MethodMouse.time) {  psychoJS.experiment.addData('MethodMouse.time', MethodMouse.time[0])};
    if (MethodMouse.clicked_name) {  psychoJS.experiment.addData('MethodMouse.clicked_name', MethodMouse.clicked_name[0])};
    
    // the Routine "MethodCheck" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var retSame;
var retNew;
var retrievalSame;
var initRecallPicsComponents;
function initRecallPicsRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'initRecallPics'-------
    t = 0;
    initRecallPicsClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    retTrials = 0;
    retProb = Math.random();
    retSame = 0;
    retNew = 0;
    
    shuffle(newPics);
    shuffle(samePics);
    
    retrievalNew = [];
    retrievalSame = [];
    
    retrievalNew.push(newPics);
    retrievalSame.push(samePics);
    // keep track of which components have finished
    initRecallPicsComponents = [];
    
    initRecallPicsComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    
    return Scheduler.Event.NEXT;
  };
}


function initRecallPicsRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'initRecallPics'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = initRecallPicsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    initRecallPicsComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function initRecallPicsRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'initRecallPics'-------
    initRecallPicsComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // the Routine "initRecallPics" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var RetrievalImageComponents;
function RetrievalImageRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'RetrievalImage'-------
    t = 0;
    RetrievalImageClock.reset(); // clock
    frameN = -1;
    routineTimer.add(1.500000);
    // update component parameters for each repeat
    retProb = Math.random();
    
    
    if (retProb< 0.66) {
        retType = "old";
        thisExp.addData("retType", "old");
        retrievalImage = (("images/" + samePics[retSame]) + ".png");
        retSame = (retSame + 1);
        } else {
        retType = "new";
        thisExp.addData("retType", "new");
        retrievalImage = (("images/" + newPics[retNew]) + ".png");
        retNew = (retNew + 1);
    }
    thisExp.addData("retIMG", retrievalImage);
    thisExp.addData("Retrieval Type", retType);
    
    retIMG.setImage(retrievalImage);
    // keep track of which components have finished
    RetrievalImageComponents = [];
    RetrievalImageComponents.push(retIMG);
    
    RetrievalImageComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    
    return Scheduler.Event.NEXT;
  };
}


function RetrievalImageRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'RetrievalImage'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = RetrievalImageClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *retIMG* updates
    if (t >= 0 && retIMG.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      retIMG.tStart = t;  // (not accounting for frame time here)
      retIMG.frameNStart = frameN;  // exact frame index
      
      retIMG.setAutoDraw(true);
    }

    frameRemains = 0 + 1.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (retIMG.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      retIMG.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    RetrievalImageComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function RetrievalImageRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'RetrievalImage'-------
    RetrievalImageComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    return Scheduler.Event.NEXT;
  };
}


var Question1TextComponents;
function Question1TextRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'Question1Text'-------
    t = 0;
    Question1TextClock.reset(); // clock
    frameN = -1;
    routineTimer.add(1.000000);
    // update component parameters for each repeat
    // keep track of which components have finished
    Question1TextComponents = [];
    Question1TextComponents.push(text_3);
    
    Question1TextComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    
    return Scheduler.Event.NEXT;
  };
}


function Question1TextRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'Question1Text'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = Question1TextClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_3* updates
    if (t >= 0.0 && text_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_3.tStart = t;  // (not accounting for frame time here)
      text_3.frameNStart = frameN;  // exact frame index
      
      text_3.setAutoDraw(true);
    }

    frameRemains = 0.0 + 1 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_3.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    Question1TextComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Question1TextRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'Question1Text'-------
    Question1TextComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    return Scheduler.Event.NEXT;
  };
}


var old_new_qComponents;
function old_new_qRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'old_new_q'-------
    t = 0;
    old_new_qClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    if (expInfo['Condition'] === '1') {
        TestQuestion = "Where did you see this object?";
        } else {
        TestQuestion = "When did you see this object?";
        }
    // setup some python lists for storing info about the mouse_2
    // current position of the mouse:
    mouse_2.x = [];
    mouse_2.y = [];
    mouse_2.leftButton = [];
    mouse_2.midButton = [];
    mouse_2.rightButton = [];
    mouse_2.time = [];
    mouse_2.clicked_name = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    old_new_qComponents = [];
    old_new_qComponents.push(question);
    old_new_qComponents.push(oldans);
    old_new_qComponents.push(newans);
    old_new_qComponents.push(old_text);
    old_new_qComponents.push(new_text);
    old_new_qComponents.push(mouse_2);
    
    old_new_qComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    
    return Scheduler.Event.NEXT;
  };
}


function old_new_qRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'old_new_q'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = old_new_qClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *question* updates
    if (t >= 0.0 && question.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      question.tStart = t;  // (not accounting for frame time here)
      question.frameNStart = frameN;  // exact frame index
      
      question.setAutoDraw(true);
    }

    
    // *oldans* updates
    if (t >= 0.0 && oldans.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      oldans.tStart = t;  // (not accounting for frame time here)
      oldans.frameNStart = frameN;  // exact frame index
      
      oldans.setAutoDraw(true);
    }

    
    // *newans* updates
    if (t >= 0.0 && newans.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      newans.tStart = t;  // (not accounting for frame time here)
      newans.frameNStart = frameN;  // exact frame index
      
      newans.setAutoDraw(true);
    }

    
    // *old_text* updates
    if (t >= 0.0 && old_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      old_text.tStart = t;  // (not accounting for frame time here)
      old_text.frameNStart = frameN;  // exact frame index
      
      old_text.setAutoDraw(true);
    }

    
    // *new_text* updates
    if (t >= 0.0 && new_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      new_text.tStart = t;  // (not accounting for frame time here)
      new_text.frameNStart = frameN;  // exact frame index
      
      new_text.setAutoDraw(true);
    }

    // *mouse_2* updates
    if (t >= 0.0 && mouse_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_2.tStart = t;  // (not accounting for frame time here)
      mouse_2.frameNStart = frameN;  // exact frame index
      
      mouse_2.status = PsychoJS.Status.STARTED;
      mouse_2.mouseClock.reset();
      prevButtonState = mouse_2.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse_2.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      let buttons = mouse_2.getPressed();
      if (!buttons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = buttons;
        if (buttons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          const xys = mouse_2.getPos();
          mouse_2.x.push(xys[0]);
          mouse_2.y.push(xys[1]);
          mouse_2.leftButton.push(buttons[0]);
          mouse_2.midButton.push(buttons[1]);
          mouse_2.rightButton.push(buttons[2]);
          mouse_2.time.push(mouse_2.mouseClock.getTime());
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [oldans, newans]) {
            if (obj.contains(mouse_2)) {
              gotValidClick = true;
              mouse_2.clicked_name.push(obj.name)
            }
          }
          if (gotValidClick === true) { // abort routine on response
            continueRoutine = false;
          }
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    old_new_qComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


var corrAns;
function old_new_qRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'old_new_q'-------
    old_new_qComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    count = 1;
    
    if (mouse_2.clicked_name[0] == 'oldans') {
        response = 'old';
        count = 1;
        } else {
        response = 'new';
        count = 0;
        }
    
    if (retType === 'old') {
        if (response === 'old')
        corrAns = 1;
        else corrAns = 0;
        }
    
    if (retType === 'new') {
        if (response === 'new')
        corrAns = 1;
        else corrAns = 0;
        }
    
    retTrials = retTrials + 1
    thisExp.addData("Retrieval ACC", corrAns);
    thisExp.addData("Retrieval Ans", response);
    thisExp.addData("Ret Trials", retTrials);
    
    // store data for thisExp (ExperimentHandler)
    if (mouse_2.x) {  psychoJS.experiment.addData('mouse_2.x', mouse_2.x[0])};
    if (mouse_2.y) {  psychoJS.experiment.addData('mouse_2.y', mouse_2.y[0])};
    if (mouse_2.leftButton) {  psychoJS.experiment.addData('mouse_2.leftButton', mouse_2.leftButton[0])};
    if (mouse_2.midButton) {  psychoJS.experiment.addData('mouse_2.midButton', mouse_2.midButton[0])};
    if (mouse_2.rightButton) {  psychoJS.experiment.addData('mouse_2.rightButton', mouse_2.rightButton[0])};
    if (mouse_2.time) {  psychoJS.experiment.addData('mouse_2.time', mouse_2.time[0])};
    if (mouse_2.clicked_name) {  psychoJS.experiment.addData('mouse_2.clicked_name', mouse_2.clicked_name[0])};
    
    // the Routine "old_new_q" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var Q2TextComponents;
function Q2TextRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'Q2Text'-------
    t = 0;
    Q2TextClock.reset(); // clock
    frameN = -1;
    routineTimer.add(1.000000);
    // update component parameters for each repeat
    count = 1;
    
    if (mouse_2.clicked_name[0] == 'oldans') {
        response = 'old';
        count = 1;
        } else {
        response = 'new';
        count = 0;
        }
    
    if (retType === 'old') {
        if (response === 'old')
        corrAns = 1;
        else corrAns = 0;
        }
    
    if (retType === 'new') {
        if (response === 'new')
        corrAns = 1;
        else corrAns = 0;
        }
    
    retTrials = retTrials + 1
    thisExp.addData("Correct Ans", corrAns)
    
    text_4.setText(TestQuestion);
    // keep track of which components have finished
    Q2TextComponents = [];
    Q2TextComponents.push(text_4);
    
    Q2TextComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    
    return Scheduler.Event.NEXT;
  };
}


function Q2TextRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'Q2Text'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = Q2TextClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_4* updates
    if (t >= 0.0 && text_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_4.tStart = t;  // (not accounting for frame time here)
      text_4.frameNStart = frameN;  // exact frame index
      
      text_4.setAutoDraw(true);
    }

    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_4.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_4.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    Q2TextComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Q2TextRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'Q2Text'-------
    Q2TextComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    return Scheduler.Event.NEXT;
  };
}


var DecisionComponents;
function DecisionRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'Decision'-------
    t = 0;
    DecisionClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    decTrials = 0;
    
    if (expInfo['Condition'] === '1') {
        Ans1 = "Left";
        Ans2 = "Middle";
        Ans3 = "Right";
        } else {
        Ans1 = "First";
        Ans2 = "Second";
        Ans3 = "Third";
        }
    decisionQ_2.setText(TestQuestion);
    Ans_1.setText(Ans1);
    Ans_2.setText(Ans2);
    Ans_3.setText(Ans3);
    // setup some python lists for storing info about the Order_Position_Response
    Order_Position_Response.clicked_name = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    DecisionComponents = [];
    DecisionComponents.push(decisionQ_2);
    DecisionComponents.push(first_left);
    DecisionComponents.push(second_middle);
    DecisionComponents.push(third_right);
    DecisionComponents.push(Ans_1);
    DecisionComponents.push(Ans_2);
    DecisionComponents.push(Ans_3);
    DecisionComponents.push(Order_Position_Response);
    
    DecisionComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    
    return Scheduler.Event.NEXT;
  };
}


function DecisionRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'Decision'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = DecisionClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *decisionQ_2* updates
    if (t >= 0.0 && decisionQ_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      decisionQ_2.tStart = t;  // (not accounting for frame time here)
      decisionQ_2.frameNStart = frameN;  // exact frame index
      
      decisionQ_2.setAutoDraw(true);
    }

    
    // *first_left* updates
    if (t >= 0.0 && first_left.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      first_left.tStart = t;  // (not accounting for frame time here)
      first_left.frameNStart = frameN;  // exact frame index
      
      first_left.setAutoDraw(true);
    }

    
    // *second_middle* updates
    if (t >= 0.0 && second_middle.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      second_middle.tStart = t;  // (not accounting for frame time here)
      second_middle.frameNStart = frameN;  // exact frame index
      
      second_middle.setAutoDraw(true);
    }

    
    // *third_right* updates
    if (t >= 0.0 && third_right.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      third_right.tStart = t;  // (not accounting for frame time here)
      third_right.frameNStart = frameN;  // exact frame index
      
      third_right.setAutoDraw(true);
    }

    
    // *Ans_1* updates
    if (t >= 0.0 && Ans_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Ans_1.tStart = t;  // (not accounting for frame time here)
      Ans_1.frameNStart = frameN;  // exact frame index
      
      Ans_1.setAutoDraw(true);
    }

    
    // *Ans_2* updates
    if (t >= 0.0 && Ans_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Ans_2.tStart = t;  // (not accounting for frame time here)
      Ans_2.frameNStart = frameN;  // exact frame index
      
      Ans_2.setAutoDraw(true);
    }

    
    // *Ans_3* updates
    if (t >= 0.0 && Ans_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Ans_3.tStart = t;  // (not accounting for frame time here)
      Ans_3.frameNStart = frameN;  // exact frame index
      
      Ans_3.setAutoDraw(true);
    }

    // *Order_Position_Response* updates
    if (t >= 0.0 && Order_Position_Response.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Order_Position_Response.tStart = t;  // (not accounting for frame time here)
      Order_Position_Response.frameNStart = frameN;  // exact frame index
      
      Order_Position_Response.status = PsychoJS.Status.STARTED;
      Order_Position_Response.mouseClock.reset();
      prevButtonState = Order_Position_Response.getPressed();  // if button is down already this ISN'T a new click
      }
    if (Order_Position_Response.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      let buttons = Order_Position_Response.getPressed();
      if (!buttons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = buttons;
        if (buttons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [first_left,second_middle,third_right]) {
            if (obj.contains(Order_Position_Response)) {
              gotValidClick = true;
              Order_Position_Response.clicked_name.push(obj.name)
            }
          }
          if (gotValidClick === true) { // abort routine on response
            continueRoutine = false;
          }
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    DecisionComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function DecisionRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'Decision'-------
    DecisionComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    decTrials = (decTrials + 1);
    
    // store data for thisExp (ExperimentHandler)
    const xys = Order_Position_Response.getPos();
    const buttons = Order_Position_Response.getPressed();
    psychoJS.experiment.addData('Order_Position_Response.x', xys[0]);
    psychoJS.experiment.addData('Order_Position_Response.y', xys[1]);
    psychoJS.experiment.addData('Order_Position_Response.leftButton', buttons[0]);
    psychoJS.experiment.addData('Order_Position_Response.midButton', buttons[1]);
    psychoJS.experiment.addData('Order_Position_Response.rightButton', buttons[2]);
    if (Order_Position_Response.clicked_name.length > 0) {
      psychoJS.experiment.addData('Order_Position_Response.clicked_name', Order_Position_Response.clicked_name[0]);}
    // the Routine "Decision" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var EndScreenComponents;
function EndScreenRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'EndScreen'-------
    t = 0;
    EndScreenClock.reset(); // clock
    frameN = -1;
    routineTimer.add(5.000000);
    // update component parameters for each repeat
    // keep track of which components have finished
    EndScreenComponents = [];
    EndScreenComponents.push(end);
    
    EndScreenComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    
    return Scheduler.Event.NEXT;
  };
}


function EndScreenRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'EndScreen'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = EndScreenClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *end* updates
    if (t >= 0.0 && end.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      end.tStart = t;  // (not accounting for frame time here)
      end.frameNStart = frameN;  // exact frame index
      
      end.setAutoDraw(true);
    }

    frameRemains = 0.0 + 5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (end.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      end.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    EndScreenComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function EndScreenRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'EndScreen'-------
    EndScreenComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    return Scheduler.Event.NEXT;
  };
}


function endLoopIteration(thisScheduler, loop) {
  // ------Prepare for next entry------
  return function () {
    if (typeof loop !== 'undefined') {
      // ------Check if user ended loop early------
      if (loop.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(loop);
        }
      thisScheduler.stop();
      } else {
        const thisTrial = loop.getCurrentTrial();
        if (typeof thisTrial === 'undefined' || !('isTrials' in thisTrial) || thisTrial.isTrials) {
          psychoJS.experiment.nextEntry(loop);
        }
      }
    return Scheduler.Event.NEXT;
    }
  };
}


function importConditions(trials) {
  return function () {
    psychoJS.importAttributes(trials.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
