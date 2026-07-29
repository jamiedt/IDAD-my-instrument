// find testt button
const testButton = document.getElementById("test-button");

// create synth
const synth = new Tone.Synth().toDestination();

// add event listener to the button
testButton.addEventListener("click", playNote);

// function to play note
function playNote() {
  // play a note
  synth.triggerAttackRelease("c4", "8n");
}
