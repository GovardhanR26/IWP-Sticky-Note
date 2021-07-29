var count = 6;

function addNewNote() {
  var newNote_title = document.createElement("p");
  newNote_title.className = "note_title";
  newNote_title.innerHTML = "Note " + count;
  var newNote_textarea = document.createElement("textarea");

  var newNote = document.createElement("div");

  if (count % 2 != 0) {
    newNote.className = "odd_note";
    newNote_textarea.className = "odd_textarea";
  } else {
    newNote.className = "even_note";
    newNote_textarea.className = "even_textarea";
  }

  newNote.appendChild(newNote_title);
  newNote.appendChild(newNote_textarea);
  document.body.appendChild(newNote);
  count++;
}
