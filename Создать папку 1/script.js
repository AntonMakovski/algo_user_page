const name = document.querySelector(".name");
const surname = document.querySelector(".surname");
const age = document.querySelector(".age");
const photo_div = document.querySelector(".photo");
const body = document.querySelector("body");


inner_name = String(prompt());
inner_surname = String(prompt());
inner_age = String(prompt());
photo_url = String(prompt());
s_text = String(prompt());

if(inner_name.length>0){
    name.style.color = "black";
    name.innerText = inner_name;
};

if(inner_surname.length>0 ){ 
    surname.style.color = "black";
    surname.innerText = inner_surname;
};

if(inner_age.length>0){
    age.style.color = "black";
    age.innerText = inner_age;
};

if(photo_url.length>0){
    const photo = document.createElement("img");
    photo.setAttribute("src",photo_url);
    photo_div.style.marginRight = "20px";
    photo_div.appendChild(photo);
};

if (s_text.length > 0){
    let s = document.createElement("a");
    s.setAttribute("href",s_text);
    s.textContent = "Сотсети";
    body.appendChild(s);
};
