// browser loads html > browser loads javascript > open the dialog > user closes dialog > audio system loads > user clicks sound button
// find dialog and close button
const introDialog = document.getElementById("intro-dialog");
const introDialogClose = document.getElementById("intro-dialog-close");

// find test button
const testButton = document.getElementById("test-button");

// find key button
const key = document.getElementById("key-test");

// create synth
const synth = new Tone.PolySynth();

////// DIALOG //////
// open dialog
introDialog.showModal();

// add event listener to the dialog close button
introDialogClose.addEventListener("click", function closeIntroDialog() {
  introDialog.close();
});

introDialog.addEventListener("close", toneInit);

////// TONE //////
//audio setup
function toneInit() {
  // create synth
  synth.connect(Tone.Destination);
}

// add event listener to the button
key.addEventListener("mousedown", startNote);
key.addEventListener("mouseup", endNote);
key.addEventListener("mouseleave", endNote);

// function to play note
function startNote(e) {
  let keyPressed = e.target;
  let note = keyPressed.dataset.note;
  synth.triggerAttack(note);
}

function endNote(e) {
  let keyPressed = e.target;
  let note = keyPressed.dataset.note;
  synth.triggerRelease(note);
}
