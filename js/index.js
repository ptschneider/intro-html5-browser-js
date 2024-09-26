function ready(fn) {
  if (document.readyState !== 'loading') {
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

ready(function(){
  const new_p = document.createElement('p');
  new_p.innerText = `This tag and text was added via script.`;

  // dynamically obtain a handle to the named static element
  // and append the new element you just created via Javascript
  document.getElementById("body_main").appendChild(new_p);
});
