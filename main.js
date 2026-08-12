// browser loads html > browser loads javascript > open the dialog > user closes dialog > audio system loads > user clicks sound button
// find dialog and close button
const introDialog = document.getElementById("intro-dialog");
const introDialogClose = document.getElementById("intro-dialog-close");

// find test button
const testButton = document.getElementById("test-button");

// create synth
const synth = new Tone.Synth().toDestination();

////// DIALOG //////
// open dialog
introDialog.showModal();

// add event listener to the dialog close button
introDialogClose.addEventListener("click", function closeIntroDialog() {
  introDialog.close();
});

// add event listener to the button
testButton.addEventListener("click", playNote);

// function to play note
function playNote() {
  // play a note
  synth.triggerAttackRelease("c4", "8n");
}
